"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)


@api.route('/hellos', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

@api.route('/user', methods=['GET'])
def get_all_users():
    all_users = User.query.all()
    list_users = []
    for user in all_users:
        list_users.append(user.serialize())

    return jsonify(list_users)

@api.route('/signup', methods=['POST'])
def create_user():
    request_data = request.get_json()
    new_user= User(
        username = request_data['username'],
        first_name = request_data['first_name'],
        last_name = request_data['last_name'],
        email = request_data['email'],
        password = request_data['password']
    )
    db.session.add(new_user)
    db.session.commit()

    return jsonify({'msg':'new user created', 'user': new_user.serialize()})
