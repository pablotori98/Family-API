"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Family, FamilyMembers
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required

api = Blueprint('api', __name__)

# Signup

@api.route('/signup', methods=['POST'])
def sign_up():
    request_data=request.get_json(force=True)
    if db.session.query(User).filter(User.email == request_data['email']).first():
        return jsonify({"Mensaje":"Email registrado"})
    if db.session.query(User).filter(User.username == request_data['username']).first():
        return jsonify({"Mensaje": "El usuario ya esta registrado"})

    nuevo_user = User(
        username = request_data['username'],
        first_name= request_data['first_name'],
        last_name= request_data['last_name'],
        email = request_data['email'],
        password= request_data['password']
    )
    db.session.add(nuevo_user)
    db.session.commit()

    return jsonify({"Mensaje": "Usuario creado correctamente"})

# Login

@api.route("/login", methods=['POST'])
def back_login():
    request_data=request.get_json(force=True)
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    user = User.query.filter_by(email=email, password=password).first()
    if  user == None:
        return jsonify({"msg": "usuario o password incorrecto"}), 401
    access_token = create_access_token(identity=user.username)
    return jsonify({"msg":"usuario loggeado", "access_token": access_token}), 200


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


@api.route('/createfamily/<string:username_var>', methods=['POST'])
@jwt_required()
def create_family(username_var):
    user = get_jwt_identity()
    if user != username_var:
        return jsonify({"Access Denied"})
    request_data = request.get_json(force=True)
    user = db.session.query(User).filter(User.username == username_var).first()
    
    new_family = Family(
        last_name= request_data['last_name'],
    )
    db.session.add(new_family)
    db.session.commit()

    return jsonify({"msg":"Familia creada"})

@api.route('/family/<string:last_name>', methods=['GET'])
def get_family_members(last_name):
        family = Family.query.filter_by(last_name=last_name).first()
        familymembers = family.members 
        return jsonify([members.serialize() for members in familymembers]), 200
        
   







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
