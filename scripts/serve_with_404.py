#!/usr/bin/env python3
"""Static server that mimics GitHub Pages: missing paths return 404.html with status 404.
usage: python3 scripts/serve_with_404.py [port]  (default 4290). For testing legacy-link redirects locally."""
import http.server, os, sys
class Handler(http.server.SimpleHTTPRequestHandler):
    def log_message(self, *a): pass
    def send_error(self, code, message=None, explain=None):
        if code == 404 and os.path.exists('404.html'):
            body = open('404.html', 'rb').read()
            self.send_response(404); self.send_header('Content-Type', 'text/html; charset=utf-8'); self.send_header('Content-Length', str(len(body))); self.end_headers()
            self.wfile.write(body); return
        super().send_error(code, message, explain)
port = int(sys.argv[1]) if len(sys.argv) > 1 else 4290
http.server.ThreadingHTTPServer(('127.0.0.1', port), Handler).serve_forever()
