import os
from flask import Flask, render_template, flash, request, redirect, url_for

ALLOWED_EXTENSIONS = {'txt', 'log', 'pdf', 'png', 'jpg', 'jpeg', 'gif'}

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def upload_file():
    if request.method == 'POST':
        if 'file' not in request.files:
            return render_template('upload.html')
        file = request.files['file']
        if file.filename == '':
            return render_template('upload.html')
        if file and allowed_file(file.filename):
            file.save(file.filename)
            return f'The file {file.filename} was uploaded successfully'
    return render_template('upload.html')
        
def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS
