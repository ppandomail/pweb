from flask import Flask, render_template, request, redirect, url_for, flash
from io import open
import sqlite3

app = Flask(__name__)
app.secret_key = "super secret key"

@app.route('/')
def index():
    con = sqlite3.connect('turnos.db')
    con.row_factory = sqlite3.Row
    cur = con.cursor()
    cur.execute('select * from turnos')
    all_data = cur.fetchall()
    return render_template("index.html", all_data = all_data)

@app.route('/insert', methods = ['POST'])
def insert():
    if request.method == 'POST':
        paciente = request.form['paciente']
        fecha = request.form['fecha']
        con = sqlite3.connect('turnos.db')
        cur = con.cursor()
        cur.execute('insert into turnos (paciente, fecha) values (?,?)', (paciente, fecha))
        con.commit()
        flash("Turno agregado satisfactoriamente")
        return redirect(url_for('index'))

@app.route('/update', methods = ['POST'])
def update():
    if request.method == "POST":
        id = request.form.get('id')
        paciente = request.form['paciente']
        fecha = request.form['fecha']
        con = sqlite3.connect('turnos.db')
        cur = con.cursor()
        cur.execute('update turnos set paciente = ?, fecha = ? where id = ?', (paciente, fecha, id))
        con.commit()
        flash("Turno modificado satisfactoriamente")
        return redirect(url_for('index'))

@app.route('/delete/<id>/')
def delete(id):
    con = sqlite3.connect('turnos.db')
    cur = con.cursor()
    cur.execute('delete from turnos where id = ?', (id))
    con.commit()
    flash("Turno eliminado satisfactoriamente")
    return redirect(url_for('index'))

@app.route('/reporte/')
def reporte():
    con = sqlite3.connect('turnos.db')
    con.row_factory = sqlite3.Row
    cur = con.cursor()
    cur.execute('select * from turnos')
    all_data = cur.fetchall()
    fw = open('reporte.txt', 'w')
    fw.write('PACIENTE       FECHA \n')
    fw.write('--------------------------- \n')
    for row in all_data:
        fw.write(f'{row['paciente']} - {row['fecha']}\n')
    fw.close()
    return redirect(url_for('index'))

if __name__ == "__main__":
    app.run(debug = True)

# Se ejecuta: flask --app api run --debug