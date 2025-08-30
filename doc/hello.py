from flask import Flask

app = Flask(__name__)
@app.route('/')  # le dice a Flask qué URL debe ejecutar 
def index():
  return 'Hola mundo!'
