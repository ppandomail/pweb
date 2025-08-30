from flask import Flask

    app = Flask(__name__)

    @app.route('/contacto')
    def contacto():
        return '<h1>Contacto</h1>'
