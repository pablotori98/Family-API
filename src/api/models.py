from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username= db.Column(db.String(50), unique=True, nullable=False)
    first_name= db.Column(db.String(50), unique=False, nullable=False)
    last_name= db.Column(db.String(50), unique=False, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)

    def __repr__(self):
        return f'<User {self.username}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "username": self.username,

            # do not serialize the password, its a security breach
        }


class Family(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    last_name = db.Column(db.String(255), unique=True, nullable=False)
    members = db.relationship('FamilyMembers', backref='Family', lazy=True)

    def __repr__(self):
        return f'<Family {self.last_name}>'

    def serialize(self):
        return{
            "id": self.id,
            "last_name": self.last_name,
            "members": [member.serialize() for member in self.members]
    }

class FamilyMembers(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(255), unique=True, nullable=False)
    last_name = db.Column(db.String(255), db.ForeignKey('family.last_name'))
    age = db.Column(db.Integer(), unique=False, nullable=False)
    gender = db.Column(db.String(255), unique=False, nullable=False)


    def __repr__(self):
        return f'<FamilyMembers {self.first_name}>'


    def serialize(self):
        return {
            "id": self.id,
            "first_name": self.first_name,
            "last_name": self.last_name,
            "age": self.age,
            "gender": self.gender
        }      
