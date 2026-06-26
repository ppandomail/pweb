from flask import Flask,request
app = Flask(__name__)

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
def iamasecretfunction():
    return "Something secret used to be here"
