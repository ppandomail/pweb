from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/contacto', methods=['POST'])   # Por default es 'GET'
def contacto():
    nombre = request.form.get('nombre')     # 'nombre' es el valor del attr 'name' del input
    return render_template('contacto.html', nombre=nombre)
