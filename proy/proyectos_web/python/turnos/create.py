import sqlite3

con = sqlite3.connect('turnos.db')
print('BD abierta exitosamente')
con.execute('create table turnos (id integer primary key autoincrement, paciente text not null, fecha text not null)')
print('Tabla creada exitosamente')
con.close()