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
             'img_path TEXT NOT NULL, '
             'init_guess INTEGER, '
             'final_guess INTEGER, '
             'resp_time INTEGER)')

# Image Table
# 1. q_id: String - Question ID
# 2. img_path: String - Image Path
# 3. truth: Integer - Ground Truth
# 4. ai: Integer - AI Guess
conn.execute('CREATE TABLE Image ('
             'q_id TEXT NOT NULL, '
             'img_path TEXT NOT NULL, '
             'truth INTEGER NOT NULL, '
             'ai INTEGER NOT NULL)')

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
img_path = '/images/'
truth = 30
ai = 28
cur.execute('INSERT INTO Image (q_id, img_path, truth, ai) VALUES(?, ?, ?, ?)', [q_id, img_path, truth, ai])
cur.execute('DELETE FROM Image WHERE q_id=?', [q_id])
conn.commit()

print("Table created successfully")
conn.close()

