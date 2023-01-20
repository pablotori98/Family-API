"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Family, FamilyMembers
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)


@api.route('/user', methods=['GET'])
def get_all_users():
    all_users = User.query.all()
    list_users = []
    for user in all_users:
        list_users.append(user.serialize())

    return jsonify(list_users)


@api.route('/getfamily', methods=['GET'])
def get_all_members():
    get_family = Family.query.all()
    list_family = []
    for family in get_family:
        list_family.append(family.serialize())
        
    return jsonify(list_family)













    # @api.route('/signup', methods=['POST'])
# def create_user():
#     request_data = request.get_json()
#     new_user= User(
#         username = request_data['username'],
#         first_name = request_data['first_name'],
#         last_name = request_data['last_name'],
#         email = request_data['email'],
#         password = request_data['password']
#     )
#     db.session.add(new_user)
#     db.session.commit()

#     return jsonify({'msg':'new user created', 'user': new_user.serialize()})
