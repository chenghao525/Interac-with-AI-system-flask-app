from flask import Flask, request, Response, jsonify, json, render_template
from flask_cors import CORS, cross_origin
from flask_sqlalchemy import SQLAlchemy

import psycopg2

import random
import os

import urllib.parse as urlparse
from urllib.parse import urlencode

app = Flask(__name__)

cors = CORS(app)


# Get Database_url from Heroku config and add sslmode to query
# DATABASE_URL = os.environ['DATABASE_URL']
DATABASE_URL = 'postgresql://ststorukymhbaj:643f2dd332c333cf2d659de25a99ee0a697a2ac9d14933a362ceb061ad9ce9ad@ec2-34-225-167-77.compute-1.amazonaws.com:5432/d9pmgqc5g5r6go'
params = {'sslmode': 'require'}
url_parts = list(urlparse.urlparse(DATABASE_URL))
query = dict(urlparse.parse_qsl(url_parts[4]))
query.update(params)
url_parts[4] = urlencode(query)

app.config['CORS_HEADERS'] = 'Content-Type'
app.config['SQLALCHEMY_DATABASE_URI'] = urlparse.urlunparse(url_parts)
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

db = SQLAlchemy(app)


# User - User Table
# User ID == Row Number
# 1. consent: Integer (1 for consent)
# 2. q_order: String (0 or 1) - question order: E7 E3 E2 ... E4 H7 H1 H4 ... H6
# 3. timing: Integer (0 or 1) - timing constraint for changing answer: short(0) or long(1)
class User(db.Model):
    user_id = db.Column(db.Integer, nullable=False, primary_key=True)
    consent = db.Column(db.Integer, nullable=False)
    q_order = db.Column(db.String(120), nullable=False)
    timing = db.Column(db.Integer, nullable=False)

    def __init__(self, consent, q_order, timing):
        self.consent = consent
        self.q_order = q_order
        self.timing = timing


# Demographic - User Table
# User ID == Row Number
# 1. age
# 2. gender
# 3. education
# 4. rate
class Demographic(db.Model):
    user_id = db.Column(db.Integer, nullable=False, primary_key=True)
    age = db.Column(db.Integer, nullable=False, primary_key=True)
    gender = db.Column(db.String(120), nullable=False)
    education = db.Column(db.Integer, nullable=False)
    rate = db.Column(db.Integer, nullable=False)

    def __init__(self, user_id, age, gender, education, rate):
        self.user_id = user_id
        self.age = age
        self.gender = gender
        self.education = education
        self.rate = rate


# Guess - Guess Table
# 1. user_id: Integer - User ID
# 2. q_id: String (E1 or H3) - Question ID
# 3. init_guess: Integer - Initial Guess
# 4. final_guess: Integer -  Final Guess
# 5. resp_time: Integer - Response Time (in seconds)
class Guess(db.Model):
    id = db.Column(db.Integer, nullable=False, primary_key=True)
    user_id = db.Column(db.Integer, nullable=False)
    q_id = db.Column(db.String(20), nullable=False)
    init_guess = db.Column(db.Integer, nullable=False)
    final_guess = db.Column(db.Integer, nullable=False)
    resp_time = db.Column(db.Float, nullable=False)

    def __init__(self, user_id, q_id, init_guess, final_guess, resp_time):
        self.user_id = user_id
        self.q_id = q_id
        self.init_guess = init_guess
        self.final_guess = final_guess
        self.resp_time = resp_time


# Image Table
# 1. q_id: String - Question ID
# 2. truth: Integer - Ground Truth
# 3. orig_img_name: String - Image Path
class Image(db.Model):
    q_id = db.Column(db.String(20), nullable=False, primary_key=True)
    truth = db.Column(db.Integer, nullable=False)
    orig_img_name = db.Column(db.String(120), nullable=False)

    def __init__(self, q_id, truth, orig_img_name):
        self.q_id = q_id
        self.truth = truth
        self.orig_img_name = orig_img_name


class Survey(db.Model):
    user_id = db.Column(db.Integer, nullable=False, primary_key=True)
    q1 = db.Column(db.Integer, nullable=False, primary_key=True)
    q2 = db.Column(db.Integer, nullable=False)
    q3 = db.Column(db.Integer, nullable=False)
    q4 = db.Column(db.Integer, nullable=False)
    q5 = db.Column(db.Integer, nullable=False)
    q6 = db.Column(db.Integer, nullable=False)
    q7 = db.Column(db.Integer, nullable=False)
    q8 = db.Column(db.Integer, nullable=False)
    q9 = db.Column(db.Integer, nullable=False)
    q10 = db.Column(db.String(200), nullable=False)
    q11 = db.Column(db.String(200), nullable=True)

    def __init__(self, user_id, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11):
        self.user_id=user_id
        self.q1 = q1
        self.q2 = q2
        self.q3 = q3
        self.q4 = q4
        self.q5 = q5
        self.q6 = q6
        self.q7 = q7
        self.q8 = q8
        self.q9 = q9
        self.q10 = q10
        self.q11 = q11


@app.route('/')
@cross_origin()
def index():
    """serves React App"""
    return render_template('index.html')


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

    newUser = User(consent, q_order, timing)
    db.session.add(newUser)
    db.session.commit()

    user_id = newUser.user_id

    msg = "Record successfully added"
    print(msg)

    # user_id = db.engine.execute("SELECT ").fetchone()[0]

    response_body = {'user_id': user_id}

    return jsonify(response_body)


@app.route('/userDemographic', methods=['POST'])
@cross_origin()
def demographicData():
    body_decoded = request.get_json()

    # Demographic - User Table
    # 1. User ID
    # 2. Age
    # 3. Gender
    # 4. Education
    # 5. Rate
    user_id = request.args.get('userID')
    age = body_decoded['age']
    gender = body_decoded['gender']
    education = body_decoded['education']
    rate = body_decoded['rate']

    user_demographic = Demographic(user_id, age, gender, education, rate)
    db.session.add(user_demographic)
    db.session.commit()

    msg = "Record successfully added"
    print(msg)

    response_body = {'user_id': user_id}

    return jsonify(response_body)


@app.route('/userInfo', methods=['GET'])
@cross_origin()
def getUserData():
    user_id = request.args.get('userID')

    # q_order = db.engine.execute('SELECT User.q_order FROM User WHERE user_id = %s', [int(user_id)]).fetchone()[0]
    q_order = User.query.filter_by(user_id = user_id).first().q_order
    timing = User.query.filter_by(user_id = user_id).first().timing

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

    db.session.add(Guess(user_id, q_id, init_guess, final_guess, resp_time))
    db.session.commit()

    msg = "Record successfully added"
    print(msg)

    response_body = {'user_id': user_id}
    print("user_id=" + str(user_id))

    return jsonify(response_body)


@app.route('/imageInfo', methods=['GET'])
@cross_origin()
def getImageInfo():
    q_id = request.args.get('q_id')

    # truth = db.engine.execute('SELECT truth FROM Image WHERE q_id =(?) ;', [q_id]).fetchone()[0]
    truth = Image.query.filter_by(q_id=q_id).first().truth

    rand_num = round(random.sample(range(10, 21), 1)[0] * truth / 100)
    rand_var = random.sample(range(0, 2), 1)[0]

    if rand_var == 1:
        ai = truth + rand_num
    else:
        ai = truth - rand_num

    response_body = {'q_id': q_id, 'ai': ai}

    return jsonify(response_body)


@app.route('/userSurveyData', methods=['POST'])
@cross_origin()
def userSurveyData():
    body_decoded = request.get_json()

    # Demographic - User Table
    # 1. User ID
    # 2. Age
    # 3. Gender
    # 4. Education
    # 5. Rate
    user_id = request.args.get('userID')
    q1 = body_decoded['q1']
    q2 = body_decoded['q2']
    q3 = body_decoded['q3']
    q4 = body_decoded['q4']
    q5 = body_decoded['q5']
    q6 = body_decoded['q6']
    q7 = body_decoded['q7']
    q8 = body_decoded['q8']
    q9 = body_decoded['q9']
    q10 = str(body_decoded['q10'])

    if len(body_decoded) == 11:
        q11 = body_decoded['q11']
    else:
        q11 = " "

    user_survey = Survey(user_id, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11)
    db.session.add(user_survey)
    db.session.commit()

    msg = "Record successfully added"
    print(msg)

    response_body = {'user_id': user_id}

    return jsonify(response_body)


if __name__ == "__main__":
    # db.drop_all()
    db.create_all()

    # Add Ground Truth Info
    # db.session.add(Image('E1', 29, 'PETEc2013a_000040'))
    # db.session.add(Image('E2', 29, 'PETEc2013a_000884'))
    # db.session.add(Image('E3', 35, 'NEKOc2013c_000145'))
    # db.session.add(Image('E4', 30, 'PETEc2014a_000759'))
    # db.session.add(Image('E5', 34, 'PETEc2013a_000262'))
    #
    # db.session.add(Image('H1', 60, 'MAIVb2012a_000016'))
    # db.session.add(Image('H2', 39, 'MAIVb2012a_000362'))
    # db.session.add(Image('H3', 49, 'MAIVb2013a_000035'))
    # db.session.add(Image('H4', 46, 'MAIVb2012a_000595'))
    # db.session.add(Image('H5', 47, 'MAIVb2013a_000120'))

    # db.session.commit()

    port = int(os.environ.get('PORT', 5000))
    app.run(host='127.0.0.1', port=port)
