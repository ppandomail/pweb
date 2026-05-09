from flask import Flask, jsonify
from flasgger import Swagger

app = Flask(__name__)
swagger = Swagger(app)

productos = [
    {'id':1, 'nombre':'python', 'precio':10.0},
    {'id':2, 'nombre':'javascript', 'precio':12.0},
    {'id':3, 'nombre':'java', 'precio':19.0}
]

carrito = {}

@app.get('/')
def get_productos():
    """
    Obtener lista de productos
    ---
    responses:
      200:
        description: Lista de productos disponibles
        schema:
          type: array
          items:
            type: object
            properties:
              id:
                type: integer
              nombre:
                type: string
              precio:
                type: number
    """
    return jsonify(productos)

@app.get('/carrito')
def get_carrito():
    """
    Obtener contenido del carrito
    ---
    responses:
      200:
        description: Carrito actual con cantidades
        schema:
          type: object
    """
    return jsonify(carrito)

@app.post('/agregar/<int:id>')
def agregar(id):
    """
    Agregar producto al carrito
    ---
    parameters:
      - name: id
        in: path
        type: integer
        required: true
        description: ID del producto a agregar
    responses:
      200:
        description: Carrito actualizado
    """
    prod = next((p for p in productos if p['id'] == id), None)
    if prod is None:
        return jsonify({'error': 'Producto no encontrado'}), 404
    carrito[id] = carrito.get(id, 0) + 1
    return jsonify(carrito)

@app.delete('/eliminar/<int:id>')
def eliminar(id):
    """
    Eliminar producto del carrito
    ---
    parameters:
      - name: id
        in: path
        type: integer
        required: true
        description: ID del producto a eliminar
    responses:
      200:
        description: Carrito actualizado
    """
    if id not in carrito:
        return jsonify({'error': 'Producto no está en el carrito'}), 404
    if carrito[id] > 1:
        carrito[id] -= 1
    else:
        del carrito[id] 
    return jsonify(carrito)

@app.get('/total')
def total():
    """
    Calcular total de la compra
    ---
    responses:
      200:
        description: Total acumulado del carrito
        schema:
          type: object
          properties:
            total:
              type: number
    """
    total = 0.0
    for id, cantidad in carrito.items():
        producto = next((p for p in productos if p['id'] == id), None)
        if producto:
            total += producto['precio'] * cantidad   
    return jsonify({'total': total})

@app.delete('/vaciar')
def vaciar_carrito():
    """
    Vaciar el carrito
    ---
    responses:
      200:
        description: Carrito vaciado correctamente
        schema:
          type: object
          properties:
            mensaje:
              type: string
            carrito:
              type: object
    """
    carrito.clear()
    return jsonify({'mensaje': 'Carrito vaciado', 'carrito': carrito})
