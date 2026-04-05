from flask import Flask, render_template, request, abort

app = Flask(__name__)

@app.errorhandler(400)
def bad_request(e):
  return render_template('error.html', error='Bad Request'), 400

@app.errorhandler(404)
def file_not_found(e):
  return render_template('error.html', error='File Not Found'), 404

@app.route('/')
def index():
    username = request.args.get('username')
    if username is None:
        abort(400)
    return render_template('pepe.html')
