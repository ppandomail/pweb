from flask import Flask, render_template

app = Flask(__name__)

@app.route('/home')
@app.route('/home/<name>')
def hello(name=None):
    return render_template('index3.html', person=name)
