#!/usr/bin/env python3
"""Local-only Little CAD launcher. No Python packages required."""
import argparse
import functools
import http.server
from pathlib import Path
import threading
import webbrowser

ROOT = Path(__file__).resolve().parent / 'dist'
class Handler(http.server.SimpleHTTPRequestHandler):
    extensions_map = {**http.server.SimpleHTTPRequestHandler.extensions_map, '.wasm':'application/wasm', '.js':'text/javascript'}
    def end_headers(self):
        self.send_header('Cache-Control', 'no-cache')
        self.send_header('X-Content-Type-Options', 'nosniff')
        super().end_headers()
    def log_message(self, format, *args):
        if args and str(args[1]) not in ('200', '304'):
            super().log_message(format, *args)

def main():
    parser=argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--port',type=int,default=8766)
    parser.add_argument('--no-browser',action='store_true')
    args=parser.parse_args()
    if not (ROOT/'app.js').exists():
        raise SystemExit('Built files missing. Run npm ci and npm run build first.')
    handler=functools.partial(Handler,directory=str(ROOT))
    try:
        server=http.server.ThreadingHTTPServer(('127.0.0.1',args.port),handler)
    except OSError as exc:
        raise SystemExit(f'Cannot open port {args.port}: {exc}. Close the existing server or use --port 8767.')
    url=f'http://127.0.0.1:{server.server_port}'
    print(f'\nLittle CAD is ready: {url}\nKeep this window open. Press Ctrl+C to stop.\n',flush=True)
    if not args.no_browser:
        threading.Timer(.4,lambda:webbrowser.open(url)).start()
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print('\nWorkbench stopped.')
    finally:
        server.server_close()
if __name__=='__main__':
    main()
