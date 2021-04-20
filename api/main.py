from flask import Flask, request, Response, jsonify, json
from flask_cors import CORS, cross_origin

import sqlite3 as sql

import random
import os


app = Flask(__name__)

cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'


@app.route('/start', methods=['POST'])
@cross_origin()
def start():
    body_decoded = request.get_json()

    # User ID == Row Number
    # 1. consent: Integer (1 for consent)
    # 2. q_order: String (0 or 1) - question order: E7 E3 E2 ... E4 H7 H1 H4 ... H6
    # 3. timing: Integer (0 or 1) - timing constraint: short(0) or long(1)
    consent = body_decoded['consent']

    l = list(range(1, 6))
    l_easy = random.sample(l, len(l))
    q_easy = ["E" + str(q) for q in l_easy]
    q_order_easy = " ".join(q_easy)

    l_hard = random.sample(l, len(l))
    q_hard = ["H" + str(q) for q in l_hard]
    q_order_hard = " ".join(q_hard)

    diff_order = random.choice([0, 1])
    if diff_order == 0:
        q_order = q_order_easy + " " + q_order_hard
    else:
        q_order = q_order_hard + " " + q_order_easy

    timing_level = random.choice([0, 1])
    if timing_level == 0:
        timing = 10
    else:
        timing = 15

    con = sql.connect(os.path.join(os.getcwd(), 'api/database.db'))
    cur = con.cursor()
    cur.execute('INSERT INTO User (consent, q_order, timing) VALUES(?, ?, ?)', [consent, q_order, timing])

    con.commit()
    msg = "Record successfully added"
    print(msg)

    user_id = cur.execute("SELECT last_insert_rowid()").fetchone()[0]

    response_body = {'user_id': user_id}
    con.close()

    return jsonify(response_body)

    #
    # print("user_id=" + str(user_id))
    # con.close()

    # return jsonify(response_body)


@app.route('/userInfo', methods=['GET'])
@cross_origin()
def getUserData():
    user_id = request.args.get('userID')

    con = sql.connect(os.path.join(os.getcwd(), 'api/database.db'))
    cur = con.cursor()

    q_order = cur.execute('SELECT q_order FROM User WHERE rowid =(?) ;', [int(user_id)]).fetchone()[0]
    timing = cur.execute('SELECT timing FROM User WHERE rowid =(?) ;', [int(user_id)]).fetchone()[0]
    con.close()

    response_body = {'user_id': user_id, 'q_order': q_order, "timing": timing}
    return jsonify(response_body)


@app.route('/answer', methods=['POST'])
@cross_origin()
def inputAnswer():
    body_decoded = request.get_json()

    user_id = body_decoded['user_id']
    q_id = body_decoded['q_id']
    init_guess = body_decoded['init_guess']
    final_guess = body_decoded['final_guess']
    resp_time = body_decoded['resp_time']

    con = sql.connect(os.path.join(os.getcwd(), 'api/database.db'))
    cur = con.cursor()

    cur.execute('INSERT INTO Guess (user_id, q_id, init_guess, final_guess, resp_time) VALUES(?, ?, ?, ?, ?)',
                [user_id, q_id, init_guess, final_guess, resp_time])
    con.commit()
    con.close()

    msg = "Record successfully added"
    print(msg)

    response_body = {'user_id': user_id}
    print("user_id=" + str(user_id))
    con.close()

    return jsonify(response_body)


@app.route('/imageInfo', methods=['GET'])
@cross_origin()
def getImageInfo():
    q_id = request.args.get('q_id')

    con = sql.connect(os.path.join(os.getcwd(), 'api/database.db'))
    cur = con.cursor()

    truth = cur.execute('SELECT truth FROM Image WHERE q_id =(?) ;', [q_id]).fetchone()[0]

    rand_num = round(random.sample(range(10, 21), 1)[0] * truth / 100)
    rand_var = random.sample(range(0, 2), 1)[0]

    if rand_var == 1:
        ai = truth + rand_num
    else:
        ai = truth - rand_num

    con.close()

    response_body = {'q_id': q_id, 'ai': ai}
    return jsonify(response_body)


if __name__ == "__main__":
    app.run(debug=True)
