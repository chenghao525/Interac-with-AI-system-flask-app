from flask import Flask, request, Response, jsonify

import sqlite3 as sql

import os

app = Flask(__name__)


@app.route('/start/', methods=['POST'])
def start():
    body_decoded = request.get_json()
    consent = body_decoded['consent']

    con = sql.connect(os.path.join(os.getcwd(), 'api/database.db'))
    cur = con.cursor()
    cur.execute('INSERT INTO Consent (consent) VALUES(?)', [consent])

    con.commit()
    msg = "Record successfully added"
    print(msg)

    user_id = cur.execute("SELECT last_insert_rowid()").fetchone()[0]

    response_body = {'user_id': user_id}
    print("user_id=" + str(user_id))
    con.close()

    return jsonify(response_body)


@app.route('/userData/', methods=['POST'])
def userData():
    body_decoded = request.get_json()
    userInputTime = body_decoded['userInputTime']
    
    print("userInputTime",userInputTime)

    # print("user input time: ",userInputTime)
    return "1"


if __name__ == "__main__":
    app.run(debug=True)
