from flask import Flask, send_from_directory
from flask_restful import Api, Resource, reqparse
from flask_cors import CORS #comment this on deployment
from api.main import start, getUserData, inputAnswer, getImageInfo

app = Flask(__name__, static_folder='react-frontend/build')
CORS(app) #comment this on deployment
api = Api(app)

api.add_resource(start, '/start')
api.add_resource(getUserData, '/userInfo')
api.add_resource(inputAnswer, '/answer')
api.add_resource(getImageInfo, '/imageInfo')
