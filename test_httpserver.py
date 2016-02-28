from http.server import HTTPServer, SimpleHTTPRequestHandler

class TestHandler(SimpleHTTPRequestHandler):

    def do_GET(self):
        body = b'Hello World'
        self.send_response(200)
        self.send_header('Content-type', 'text/html; charset=utf-8')
        self.send_header('Content-length', len(body))
        self.end_headers()
        self.wfile.write(body)
        print("get");

    def do_POST(self):
        print("post")


host = ''
port = 8001
httpd = HTTPServer((host, port), TestHandler)
print('serving at port', port)
httpd.serve_forever()
