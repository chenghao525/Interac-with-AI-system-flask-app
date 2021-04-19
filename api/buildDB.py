import sqlite3 as sql


conn = sql.connect('./database.db')
print("Opened database successfully")
cur = conn.cursor()

# User - User Table
# User ID == Row Number
# 1. consent: Integer (1 for consent)
# 2. q_order: String (0 or 1) - question order: E7 E3 E2 ... E4 H7 H1 H4 ... H6
# 3. timing: Integer (0 or 1) - timing constraint for changing answer: short(0) or long(1)
conn.execute('CREATE TABLE User ('
             'consent INTEGER NOT NULL, '
             'q_order TEXT NOT NULL, '
             'timing INTEGER NOT NULL)')

# Guess - Guess Table
# 1. user_id: Integer - User ID
# 2. q_id: String (E1 or H3) - Question ID
# 3. init_guess: Integer - Initial Guess
# 4. final_guess: Integer -  Final Guess
# 5. resp_time: Integer - Response Time (in seconds)
conn.execute('CREATE TABLE Guess ('
             'user_id INTEGER NOT NULL, '
             'q_id TEXT NOT NULL, '
             'init_guess INTEGER, '
             'final_guess INTEGER, '
             'resp_time INTEGER)')

# Image Table
# 1. q_id: String - Question ID
# 3. truth: Integer - Ground Truth
# 2. orig_img_name: String - Image Path
conn.execute('CREATE TABLE Image ('
             'q_id TEXT NOT NULL, '
             'truth INTEGER NOT NULL,'
             'orig_img_name TEXT NOT NULL)')

# Test Add Value
consent = -1
q_order = 'E7 E3 E2 E4 H7 H1 H4 H6'
timing = -3
cur.execute('INSERT INTO User (consent, q_order, timing) VALUES(?, ?, ?)', [consent, q_order, timing])
cur.execute('DELETE FROM User WHERE consent=?', [consent])
conn.commit()

user_id = 1
q_id = 'H2'
init_guess = 23
final_guess = 33
resp_time = 4
cur.execute('INSERT INTO Guess (user_id, q_id, init_guess, final_guess, resp_time) VALUES(?, ?, ?, ?, ?)', [user_id, q_id, init_guess, final_guess, resp_time])
cur.execute('DELETE FROM Guess WHERE user_id=?', [user_id])
conn.commit()

q_id = 'E1'
truth = 30
orig_img_name = 'abc'
cur.execute('INSERT INTO Image (q_id, truth, orig_img_name) VALUES(?, ?, ?)', [q_id, truth, orig_img_name])
cur.execute('DELETE FROM Image WHERE q_id=?', [q_id])
conn.commit()

print("Table created successfully")

# Add Ground Truth Info
cur.execute('INSERT INTO Image (q_id, truth, orig_img_name) VALUES(?, ?, ?)', ['E1', 29, 'PETEc2013a_000040'])
cur.execute('INSERT INTO Image (q_id, truth, orig_img_name) VALUES(?, ?, ?)', ['E2', 29, 'PETEc2013a_000884'])
cur.execute('INSERT INTO Image (q_id, truth, orig_img_name) VALUES(?, ?, ?)', ['E3', 35, 'NEKOc2013c_000145'])
cur.execute('INSERT INTO Image (q_id, truth, orig_img_name) VALUES(?, ?, ?)', ['E4', 30, 'PETEc2014a_000759'])
cur.execute('INSERT INTO Image (q_id, truth, orig_img_name) VALUES(?, ?, ?)', ['E5', 34, 'PETEc2013a_000262'])
cur.execute('INSERT INTO Image (q_id, truth, orig_img_name) VALUES(?, ?, ?)', ['H1', 60, 'MAIVb2012a_000016'])
cur.execute('INSERT INTO Image (q_id, truth, orig_img_name) VALUES(?, ?, ?)', ['H2', 39, 'MAIVb2012a_000362'])
cur.execute('INSERT INTO Image (q_id, truth, orig_img_name) VALUES(?, ?, ?)', ['H3', 49, 'MAIVb2013a_000035'])
cur.execute('INSERT INTO Image (q_id, truth, orig_img_name) VALUES(?, ?, ?)', ['H4', 46, 'MAIVb2012a_000595'])
cur.execute('INSERT INTO Image (q_id, truth, orig_img_name) VALUES(?, ?, ?)', ['H5', 47, 'MAIVb2013a_000120'])
conn.commit()

conn.close()

