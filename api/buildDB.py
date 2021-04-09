import sqlite3 as sql

conn = sql.connect('./database.db')
print("Opened database successfully")

conn.execute('CREATE TABLE Consent (consent INTEGER NOT NULL)')
print("Table created successfully")
conn.close()
