# Little CAD

A small, local CAD workbench for simple printable parts. Add solids, draw and extrude 2D profiles, stack pieces, subtract holes, import STL or STEP, and export the finished model.

## Open the app

On your Mac, double-click **Start.command**. A Terminal window starts the local server and your browser opens at **http://127.0.0.1:8766**. Keep Terminal open while using the app. Press Control+C in that window to stop it.

Alternative, from this folder:

```sh
python3 serve.py
```

Windows: use `Start.bat` with Python 3 installed. Linux: use the command above. Python 3 and a modern browser with WebGL are the only runtime requirements. The built app and all browser libraries are included; no internet, account, Node installation, or cloud service is needed to use it. Do not open `dist/index.html` directly: WebAssembly needs the local web server.

If the port is already in use, visit the existing app or run `python3 serve.py --port 8767`.

## Make a part

1. Add a **Box**, **Cylinder**, **Sphere**, or **Cone** from the left.
2. Click a piece to select it. Set width, depth, height, position, and rotation on the right. All lengths are **millimeters**. X/Y place the center of the bounding box; Z places its bottom, including after rotation. Width/depth/height refer to the shape before rotation. To keep a cylinder circular, give it equal width and depth.
3. Drag the colored arrows to move it. The snap dropdown controls drag increments; numeric entry remains exact.
4. Use **Place & stack** to center the selected piece on top of another solid. Use **Drop to ground** or **Center X / Y** to align it.
5. For a cut or recess, add a shape and switch it to **Hole**. Position it so it overlaps the material you want to remove. Holes appear translucent in Build view. **Every hole cuts every solid it overlaps.**
6. Click **Result preview** to see the final union of solids minus holes.
7. Click **Export STL** and open the download in Bambu Studio (or another slicer). Confirm dimensions, select your printer/material, slice, and inspect the toolpath.

### Extrude a 2D profile

Click **Draw a 2D profile**. Click polygon corners on the grid, or choose Rectangle, Circle, or Hexagon. Set the extrusion height, then choose Solid or Hole and click **Extrude profile**. The profile closes automatically and is centered when added. Custom corners snap to 1 mm; grid squares are 5 mm. This first version supports one simple closed outline per profile, not sketch constraints or nested contours. Use separate hole pieces for internal openings.

### Import other people's STL files

Use **Import STL / STEP** or drag files into the 3D viewport. Both ASCII and binary STL are supported. Imported shapes can be resized, moved, rotated, stacked, or used as cutters. STL has no units: imports are interpreted as millimeters. Imports are centered and placed on the ground.

STLs must contain closed, consistently oriented solids. Duplicate vertex positions are welded, but open, inverted, or broken meshes are rejected rather than silently exported. Limit: 25 MB and 250,000 triangles per import. This app does not reconstruct the original editable sketches from an STL.

### Save your work

**Save project** downloads a `.littlecad` file containing all editable pieces and imported meshes. **Open project** restores it. Browser autosave is also provided, but storage limits or clearing browser data can remove it; project files are your durable backup. A different browser or port has its own autosave.

**Combine result into one piece** applies all holes and makes the current result a single mesh piece. Use this before adding new pieces if you don't want old holes to cut them. Undo restores the source pieces during the current session.

Keyboard: Command/Ctrl Z = undo; Command/Ctrl Shift Z = redo; Command/Ctrl D = duplicate; Delete = remove selected piece. Undo keeps the last 20 edits and does not survive page reload. Maximum 100 editable pieces per project.

## Included example

`examples/capped-sleeve.littlecad` contains the 22 mm high, 10 mm outside diameter sleeve: a 7 mm cavity open from the bottom to 18 mm, and a 4 mm thick cap with a centered 4 mm hole. No side hole. You can also load this example from the app's left panel.

## Practical limits

This is a mesh-based constructive-solid modeling tool for straightforward parts, not a replacement for a full mechanical CAD suite. It does not include fillets, thread generation, dimensioned drawings, parametric sketch constraints, STEP export, or automatic print-support design. Curves are finely tessellated; parts may still need fit allowances for your printer. Separate, disconnected solids export as separate shells in one STL; stack or overlap parts if they should be one connected print. Color is for editing only; STL does not preserve it.

## Development

Source: `src/app.js` (interface), `src/geometry.js` (solid modeling), `dist/index.html` and `dist/style.css` (layout). Geometry uses Manifold WASM; visualization uses Three.js.

```sh
npm ci
npm test
npm run build
python3 serve.py
```

Tests cover dimensions, cavity and bore subtraction, stacking, concave extrusion, rotation, STL round-trip, project round-trip, and invalid input. The server binds to loopback only and serves `dist/`; it does not upload files or expose the rest of your computer.

## STEP-to-STL conversion

Choose **Import STL / STEP** and open a `.step` or `.stp` file (or drop it into the viewport). Conversion runs locally in a background browser worker using OpenCascade, with output in millimeters and 0.01 mm linear mesh deflection. Once it appears, use **Export STL**. To convert just that file, start a new project before importing; export includes every solid in the workspace.

The converted part is a triangle mesh that can be moved, scaled, stacked, and cut. STEP feature history is not retained. Multiple bodies are imported together as one mesh piece, preserving their relative placement. Files must represent closed solids; surface-only or broken geometry is rejected. Limits: 25 MB input, 250,000 output triangles, and 2 minutes for conversion. Native SolidWorks `.sldprt` is not supported. All converter libraries are bundled; the DGX needs no additional CAD installation.

### Updating an existing DGX copy

Save your current project file first. Stop the server with Ctrl+C, extract the updated ZIP and replace the old app folder (keep your saved project files), then run `python3 serve.py --no-browser` from the new `little-cad` folder. Keep your SSH tunnel as before and refresh the browser. If the import button still says only STL, do a hard refresh.
