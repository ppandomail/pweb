from flask import Flask,request
from prometheus_flask_exporter import PrometheusMetrics

app = Flask(__name__)
metrics = PrometheusMetrics(app)
metrics.info('app_info', 'Application info', version='1.0.3')

@app.post("/route1")
def postroute1():
    return "Route 1 Post call"

@app.get("/route1")
def getroute1():
    return "Route 1 Get call"

@app.post("/route2")
def postroute2():
    return "Route 2 Post call"

@app.get("/route2")
def getroute2():
    return "Route 2 Get call"

@app.get("/superSecretRoute")
@metrics.do_not_track()
def iamasecretfunction():
    return "Something secret used to be here"

# register additional default metrics
metrics.register_default(
    metrics.counter(
        'by_path_counter', 'Request count by request paths',
        labels={'path': lambda: request.path}
    )
)
