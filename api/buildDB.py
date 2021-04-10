import sqlite3 as sql


conn = sql.connect('./database.db')
print("Opened database successfully")
cur = conn.cursor()

conn.execute('CREATE TABLE Consent (consent INTEGER NOT NULL)')

# Test Add Value
consent = -1
cur.execute('INSERT INTO Consent (consent) VALUES(?)', [consent])
cur.execute('DELETE FROM Consent WHERE consent=?', [consent])
conn.commit()

print("Table created successfully")
conn.close()

