import requests
from flask import Flask

app = Flask(__name__)

@app.route('/users')
def users_api():
    users = requests.get('https://jsonplaceholder.typicode.com/users').json()
    return users

@app.route('/me')
def me_api():
    return {
        'address': {
              'city': 'Capilla del Señor',
              'geo': {
                'lat': '-34.287194',
                'lng': '-59.101833'
              },
              'street': 'Rivadavia',
              'suite': '411',
              'zipcode': 'B2812DII'
        },
        'company': {
              'bs': 'Agencia de Recaudación y Control Aduanero',
              'catchPhrase': 'recaudación de impuestos, control del comercio exterior y cumplimiento de las obligaciones tributarias',
              'name': 'ARCA'
        },
        'email': 'ppandomail@gmail.com',
        'id': 101,
        'name': 'Pablo Pandolfo',
        'phone': '11-5981-7493',
        'username': 'ppandolfo',
        'website': 'https://github.com/ppandomail/pweb'
    }
