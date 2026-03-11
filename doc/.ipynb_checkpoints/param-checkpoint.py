from flask import Flask

    app = Flask(__name__)

    @app.route('/hola/<string:nombre>')
    def hola(nombre):
        return f'<h1>Hola {nombre}</h1>'
