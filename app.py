from flask import Flask, send_from_directory
from flask_restful import Api, Resource, reqparse
from flask_cors import CORS #comment this on deployment
from api.main import main

app = Flask(__name__, static_url_path='', static_folder='react-frontend/build')
CORS(app) #comment this on deployment
api = Api(app)

api.add_resource(main, '/flask/hello')