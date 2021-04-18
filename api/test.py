import sqlite3 as sql


conn = sql.connect('./database.db')
print("Opened database successfully")
cur = conn.cursor()

consent = -1
q_order = 'E7 E3 E2 E4 H7 H1 H4 H6'
timing = -3
cur.execute('INSERT INTO User (consent, q_order, timing) VALUES(?, ?, ?)', [consent, q_order, timing])
conn.commit()

user_id = 1
timing = cur.execute('SELECT timing FROM User WHERE rowid =(?) ;', [user_id]).fetchone()[0]
print(timing)