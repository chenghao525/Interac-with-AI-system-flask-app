from flask import Flask, jsonify, make_response

import sqlite3 as sql

import json

app = Flask(__name__)


@app.route('/start', methods=['POST'])
def starter(request):
    if request.method == 'POST':
        try:
            body_decoded = json.loads(request.body)
            consent = body_decoded['consent']

            with sql.connect("database.db") as con:
                cur = con.cursor()
                cur.execute('INSERT INTO Consent (consent) VALUES(?)', consent)

                con.commit()
                msg = "Record successfully added"
                print(msg)

        except:
            con.rollback()
            msg = "error in insert operation"
            print(msg)

        finally:
            user_id = "SELECT last_insert_rowid()"
            response_body = {"user_id": user_id}

            con.close()

            return make_response(jsonify(response_body), 200)


if __name__ == "__main__":
    app.run(debug=True)
