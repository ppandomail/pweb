import sqlite3

con = sqlite3.connect('turnos.db')
print('BD abierta exitosamente')
con.execute('CREATE TABLE turnos (id INTEGER PRIMARY KEY AUTOINCREMENT, paciente TEXT NOT NULL, fecha TEXT NOT NULL)')
print('Tabla creada exitosamente')
con.close()
