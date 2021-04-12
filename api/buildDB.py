import sqlite3 as sql


conn = sql.connect('./database.db')
print("Opened database successfully")
cur = conn.cursor()

# User Table:
# 1. User ID == Row Number
# 2. Consent: Integer
# 3. Condition: String (EF or HF)
# 4. Time Constraint: String (S or L)
conn.execute('CREATE TABLE Consent (consent INTEGER NOT NULL)')

# User Initial Guess Table
# 1. User ID: Integer
# 2. Question ID: String (E1 or H3)
# 3. Initial Guess: Integer
# 4. Final Guess: Integer
# 5. Response Time: Integer (in seconds)

# Image Table
# 1. Question ID: String
# 2. Image Path: String
# 3. Ground Truth: Integer
# 4. AI Guess: Integer

# Test Add Value
consent = -1
cur.execute('INSERT INTO Consent (consent) VALUES(?)', [consent])
cur.execute('DELETE FROM Consent WHERE consent=?', [consent])
conn.commit()

print("Table created successfully")
conn.close()

