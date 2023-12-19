from flask import Flask,jsonify,request
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
import datetime,random
import base64
import io
from flask import send_file

app=Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "mysql://root:@127.0.0.1/crm for college campus"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
app.config['MAX_CONTENT_LENGTH'] = 16 * 1024 * 1024 
CORS(app)
db=SQLAlchemy(app)
ma=Marshmallow(app)

class Students(db.Model):
    rollno=db.Column(db.String(30),primary_key=True)
    name=db.Column(db.String(70))
    password=db.Column(db.String(50))
    department=db.Column(db.String(100))

    def __init__(self,rollno,name,password,department):
        self.rollno=rollno
        self.name=name
        self.password=password
        self.department=department
class StudentsSchema(ma.Schema):
    class Meta:
        fields=('rollno','name','password','department')
student_schema=StudentsSchema()
students_schema=StudentsSchema(many=True)



class BtechDepartments(db.Model):
    sno=db.Column(db.Integer,primary_key=True)
    year_estd=db.Column(db.String(10))
    name_of_the_course=db.Column(db.String(100))
    course_code=db.Column(db.String(10))
    intake=db.Column(db.Integer)

    def __init__(self,sno,year_estd,name_of_the_course,course_code,intake):
        self.sno=sno
        self.year_estd=year_estd
        self.name_of_the_course=name_of_the_course
        self.course_code=course_code
        self.intake=intake
class BtechDepartmentsSchema(ma.Schema):
    class Meta:
        fields=('sno','year_estd','name_of_the_course','course_code','intake')
btech_department_schema=BtechDepartmentsSchema()
btech_departments_schema=BtechDepartmentsSchema(many=True)

class SubjectsSchema(ma.Schema):
    class Meta:
        fields=('sno','subject_code','subject_name','lecture','tutorial','practical_drawing','contact_hours_weekly','subject_credits','semister')
subject_schema=SubjectsSchema()
subjects_schema=SubjectsSchema(many=True)

class IT_Subjects(db.Model):
    sno=db.Column(db.Integer)
    subject_code=db.Column(db.String(20),primary_key=True)
    subject_name=db.Column(db.String(60))
    lecture=db.Column(db.String(10))
    tutorial=db.Column(db.String(10))
    practical_drawing=db.Column(db.String(10))
    contact_hours_weekly=db.Column(db.String(10))
    subject_credits=db.Column(db.String(10))
    semister=db.Column(db.Integer)

    def __init__(self,sno,subject_code,subject_name,lecture,tutorial,practical_drawing,contact_hours_weekly,subject_credits,semister):
        self.sno=sno
        self.subject_code=subject_code
        self.subject_name=subject_name
        self.lecture=lecture
        self.tutorial=tutorial
        self.practical_drawing=practical_drawing
        self.contact_hours_weekly=contact_hours_weekly
        self.subject_credits=subject_credits
        self.semister=semister



class CE_Subjects(db.Model):
    sno=db.Column(db.Integer)
    subject_code=db.Column(db.String(20),primary_key=True)
    subject_name=db.Column(db.String(60))
    lecture=db.Column(db.String(10))
    tutorial=db.Column(db.String(10))
    practical_drawing=db.Column(db.String(10))
    contact_hours_weekly=db.Column(db.String(10))
    subject_credits=db.Column(db.String(10))
    semister=db.Column(db.Integer)

    def __init__(self,sno,subject_code,subject_name,lecture,tutorial,practical_drawing,contact_hours_weekly,subject_credits,semister):
        self.sno=sno
        self.subject_code=subject_code
        self.subject_name=subject_name
        self.lecture=lecture
        self.tutorial=tutorial
        self.practical_drawing=practical_drawing
        self.contact_hours_weekly=contact_hours_weekly
        self.subject_credits=subject_credits
        self.semister=semister



class EEE_Subjects(db.Model):
    sno=db.Column(db.Integer)
    subject_code=db.Column(db.String(20),primary_key=True)
    subject_name=db.Column(db.String(60))
    lecture=db.Column(db.String(10))
    tutorial=db.Column(db.String(10))
    practical_drawing=db.Column(db.String(10))
    contact_hours_weekly=db.Column(db.String(10))
    subject_credits=db.Column(db.String(10))
    semister=db.Column(db.Integer)

    def __init__(self,sno,subject_code,subject_name,lecture,tutorial,practical_drawing,contact_hours_weekly,subject_credits,semister):
        self.sno=sno
        self.subject_code=subject_code
        self.subject_name=subject_name
        self.lecture=lecture
        self.tutorial=tutorial
        self.practical_drawing=practical_drawing
        self.contact_hours_weekly=contact_hours_weekly
        self.subject_credits=subject_credits
        self.semister=semister



class ME_Subjects(db.Model):
    sno=db.Column(db.Integer)
    subject_code=db.Column(db.String(20),primary_key=True)
    subject_name=db.Column(db.String(60))
    lecture=db.Column(db.String(10))
    tutorial=db.Column(db.String(10))
    practical_drawing=db.Column(db.String(10))
    contact_hours_weekly=db.Column(db.String(10))
    subject_credits=db.Column(db.String(10))
    semister=db.Column(db.Integer)

    def __init__(self,sno,subject_code,subject_name,lecture,tutorial,practical_drawing,contact_hours_weekly,subject_credits,semister):
        self.sno=sno
        self.subject_code=subject_code
        self.subject_name=subject_name
        self.lecture=lecture
        self.tutorial=tutorial
        self.practical_drawing=practical_drawing
        self.contact_hours_weekly=contact_hours_weekly
        self.subject_credits=subject_credits
        self.semister=semister



class ECE_Subjects(db.Model):
    sno=db.Column(db.Integer)
    subject_code=db.Column(db.String(20),primary_key=True)
    subject_name=db.Column(db.String(60))
    lecture=db.Column(db.String(10))
    tutorial=db.Column(db.String(10))
    practical_drawing=db.Column(db.String(10))
    contact_hours_weekly=db.Column(db.String(10))
    subject_credits=db.Column(db.String(10))
    semister=db.Column(db.Integer)

    def __init__(self,sno,subject_code,subject_name,lecture,tutorial,practical_drawing,contact_hours_weekly,subject_credits,semister):
        self.sno=sno
        self.subject_code=subject_code
        self.subject_name=subject_name
        self.lecture=lecture
        self.tutorial=tutorial
        self.practical_drawing=practical_drawing
        self.contact_hours_weekly=contact_hours_weekly
        self.subject_credits=subject_credits
        self.semister=semister



class CSBS_Subjects(db.Model):
    sno=db.Column(db.Integer)
    subject_code=db.Column(db.String(20),primary_key=True)
    subject_name=db.Column(db.String(60))
    lecture=db.Column(db.String(10))
    tutorial=db.Column(db.String(10))
    practical_drawing=db.Column(db.String(10))
    contact_hours_weekly=db.Column(db.String(10))
    subject_credits=db.Column(db.String(10))
    semister=db.Column(db.Integer)

    def __init__(self,sno,subject_code,subject_name,lecture,tutorial,practical_drawing,contact_hours_weekly,subject_credits,semister):
        self.sno=sno
        self.subject_code=subject_code
        self.subject_name=subject_name
        self.lecture=lecture
        self.tutorial=tutorial
        self.practical_drawing=practical_drawing
        self.contact_hours_weekly=contact_hours_weekly
        self.subject_credits=subject_credits
        self.semister=semister



class CS_AIML_Subjects(db.Model):
    sno=db.Column(db.Integer)
    subject_code=db.Column(db.String(20),primary_key=True)
    subject_name=db.Column(db.String(60))
    lecture=db.Column(db.String(10))
    tutorial=db.Column(db.String(10))
    practical_drawing=db.Column(db.String(10))
    contact_hours_weekly=db.Column(db.String(10))
    subject_credits=db.Column(db.String(10))
    semister=db.Column(db.Integer)

    def __init__(self,sno,subject_code,subject_name,lecture,tutorial,practical_drawing,contact_hours_weekly,subject_credits,semister):
        self.sno=sno
        self.subject_code=subject_code
        self.subject_name=subject_name
        self.lecture=lecture
        self.tutorial=tutorial
        self.practical_drawing=practical_drawing
        self.contact_hours_weekly=contact_hours_weekly
        self.subject_credits=subject_credits
        self.semister=semister



class CS_DS_Subjects(db.Model):
    sno=db.Column(db.Integer)
    subject_code=db.Column(db.String(20),primary_key=True)
    subject_name=db.Column(db.String(60))
    lecture=db.Column(db.String(10))
    tutorial=db.Column(db.String(10))
    practical_drawing=db.Column(db.String(10))
    contact_hours_weekly=db.Column(db.String(10))
    subject_credits=db.Column(db.String(10))
    semister=db.Column(db.Integer)

    def __init__(self,sno,subject_code,subject_name,lecture,tutorial,practical_drawing,contact_hours_weekly,subject_credits,semister):
        self.sno=sno
        self.subject_code=subject_code
        self.subject_name=subject_name
        self.lecture=lecture
        self.tutorial=tutorial
        self.practical_drawing=practical_drawing
        self.contact_hours_weekly=contact_hours_weekly
        self.subject_credits=subject_credits
        self.semister=semister



class EIE_Subjects(db.Model):
    sno=db.Column(db.Integer)
    subject_code=db.Column(db.String(20),primary_key=True)
    subject_name=db.Column(db.String(60))
    lecture=db.Column(db.String(10))
    tutorial=db.Column(db.String(10))
    practical_drawing=db.Column(db.String(10))
    contact_hours_weekly=db.Column(db.String(10))
    subject_credits=db.Column(db.String(10))
    semister=db.Column(db.Integer)

    def __init__(self,sno,subject_code,subject_name,lecture,tutorial,practical_drawing,contact_hours_weekly,subject_credits,semister):
        self.sno=sno
        self.subject_code=subject_code
        self.subject_name=subject_name
        self.lecture=lecture
        self.tutorial=tutorial
        self.practical_drawing=practical_drawing
        self.contact_hours_weekly=contact_hours_weekly
        self.subject_credits=subject_credits
        self.semister=semister



class AE_Subjects(db.Model):
    sno=db.Column(db.Integer)
    subject_code=db.Column(db.String(20),primary_key=True)
    subject_name=db.Column(db.String(60))
    lecture=db.Column(db.String(10))
    tutorial=db.Column(db.String(10))
    practical_drawing=db.Column(db.String(10))
    contact_hours_weekly=db.Column(db.String(10))
    subject_credits=db.Column(db.String(10))
    semister=db.Column(db.Integer)

    def __init__(self,sno,subject_code,subject_name,lecture,tutorial,practical_drawing,contact_hours_weekly,subject_credits,semister):
        self.sno=sno
        self.subject_code=subject_code
        self.subject_name=subject_name
        self.lecture=lecture
        self.tutorial=tutorial
        self.practical_drawing=practical_drawing
        self.contact_hours_weekly=contact_hours_weekly
        self.subject_credits=subject_credits
        self.semister=semister



class CSE_Subjects(db.Model):
    sno=db.Column(db.Integer)
    subject_code=db.Column(db.String(20),primary_key=True)
    subject_name=db.Column(db.String(60))
    lecture=db.Column(db.String(10))
    tutorial=db.Column(db.String(10))
    practical_drawing=db.Column(db.String(10))
    contact_hours_weekly=db.Column(db.String(10))
    subject_credits=db.Column(db.String(10))
    semister=db.Column(db.Integer)

    def __init__(self,sno,subject_code,subject_name,lecture,tutorial,practical_drawing,contact_hours_weekly,subject_credits,semister):
        self.sno=sno
        self.subject_code=subject_code
        self.subject_name=subject_name
        self.lecture=lecture
        self.tutorial=tutorial
        self.practical_drawing=practical_drawing
        self.contact_hours_weekly=contact_hours_weekly
        self.subject_credits=subject_credits
        self.semister=semister



class CS_CYS_Subjects(db.Model):
    sno=db.Column(db.Integer)
    subject_code=db.Column(db.String(20),primary_key=True)
    subject_name=db.Column(db.String(60))
    lecture=db.Column(db.String(10))
    tutorial=db.Column(db.String(10))
    practical_drawing=db.Column(db.String(10))
    contact_hours_weekly=db.Column(db.String(10))
    subject_credits=db.Column(db.String(10))
    semister=db.Column(db.Integer)

    def __init__(self,sno,subject_code,subject_name,lecture,tutorial,practical_drawing,contact_hours_weekly,subject_credits,semister):
        self.sno=sno
        self.subject_code=subject_code
        self.subject_name=subject_name
        self.lecture=lecture
        self.tutorial=tutorial
        self.practical_drawing=practical_drawing
        self.contact_hours_weekly=contact_hours_weekly
        self.subject_credits=subject_credits
        self.semister=semister



class CS_IoT_Subjects(db.Model):
    sno=db.Column(db.Integer)
    subject_code=db.Column(db.String(20),primary_key=True)
    subject_name=db.Column(db.String(60))
    lecture=db.Column(db.String(10))
    tutorial=db.Column(db.String(10))
    practical_drawing=db.Column(db.String(10))
    contact_hours_weekly=db.Column(db.String(10))
    subject_credits=db.Column(db.String(10))
    semister=db.Column(db.Integer)

    def __init__(self,sno,subject_code,subject_name,lecture,tutorial,practical_drawing,contact_hours_weekly,subject_credits,semister):
        self.sno=sno
        self.subject_code=subject_code
        self.subject_name=subject_name
        self.lecture=lecture
        self.tutorial=tutorial
        self.practical_drawing=practical_drawing
        self.contact_hours_weekly=contact_hours_weekly
        self.subject_credits=subject_credits
        self.semister=semister


class MIDSubjects(db.Model):
    sno=db.Column(db.Integer,primary_key=True)
    subject_code=db.Column(db.String(20))
    subject_name=db.Column(db.String(60))
    department=db.Column(db.String(100))
    semister=db.Column(db.Integer)

    def __init__(self,sno,subject_code,subject_name,department,semister):
        self.sno=sno
        self.subject_code=subject_code
        self.subject_name=subject_name
        self.department=department
        self.semister=semister
class MIDSubjectsSchema(ma.Schema):
    class Meta:
        fields=('sno','subject_code','subject_name','department','semister')
mid_subject_schema=MIDSubjectsSchema()
mid_subjects_schema=MIDSubjectsSchema(many=True)


class LOH(db.Model):
    holiday=db.Column(db.String(100),primary_key=True)
    holiday_date=db.Column(db.Date)
    holiday_day=db.Column(db.String(20))

    def __init__(self,holiday,holiday_date,holiday_day):
        self.holiday=holiday
        self.holiday_date=holiday_date
        self.holiday_day=holiday_day
class LOHSchema(ma.Schema):
    class Meta:
        fields=('holiday','holiday_date','holiday_day')
loh_schema=LOHSchema(many=True)


class MID_IT(db.Model):
    sno=db.Column(db.Integer,primary_key=True)
    rollno=db.Column(db.String(20))
    subject_code=db.Column(db.String(20))
    subject_name=db.Column(db.String(100))
    marks=db.Column(db.Integer)
    semister=db.Column(db.Integer)

    def __init__(self,sno,rollno,subject_code,subject_name,marks,semister):
        self.sno=sno
        self.rollno=rollno
        self.subject_code=subject_code
        self.subject_name=subject_name
        self.marks=marks
        self.semister=semister
class MIDSchema(ma.Schema):
    class Meta:
        fields=('sno','rollno','subject_code','subject_name','marks','semister')
mid_schema=MIDSchema(many=True)


class MID_AE(db.Model):
    sno=db.Column(db.Integer,primary_key=True)
    rollno=db.Column(db.String(20))
    subject_code=db.Column(db.String(20))
    subject_name=db.Column(db.String(100))
    marks=db.Column(db.Integer)
    semister=db.Column(db.Integer)

    def __init__(self,sno,rollno,subject_code,subject_name,marks,semister):
        self.sno=sno
        self.rollno=rollno
        self.subject_code=subject_code
        self.subject_name=subject_name
        self.marks=marks
        self.semister=semister


class MID_CE(db.Model):
    sno=db.Column(db.Integer,primary_key=True)
    rollno=db.Column(db.String(20))
    subject_code=db.Column(db.String(20))
    subject_name=db.Column(db.String(100))
    marks=db.Column(db.Integer)
    semister=db.Column(db.Integer)

    def __init__(self,sno,rollno,subject_code,subject_name,marks,semister):
        self.sno=sno
        self.rollno=rollno
        self.subject_code=subject_code
        self.subject_name=subject_name
        self.marks=marks
        self.semister=semister


class MID_CS_AIML(db.Model):
    sno=db.Column(db.Integer,primary_key=True)
    rollno=db.Column(db.String(20))
    subject_code=db.Column(db.String(20))
    subject_name=db.Column(db.String(100))
    marks=db.Column(db.Integer)
    semister=db.Column(db.Integer)

    def __init__(self,sno,rollno,subject_code,subject_name,marks,semister):
        self.sno=sno
        self.rollno=rollno
        self.subject_code=subject_code
        self.subject_name=subject_name
        self.marks=marks
        self.semister=semister


class MID_CS_CYS(db.Model):
    sno=db.Column(db.Integer,primary_key=True)
    rollno=db.Column(db.String(20))
    subject_code=db.Column(db.String(20))
    subject_name=db.Column(db.String(100))
    marks=db.Column(db.Integer)
    semister=db.Column(db.Integer)

    def __init__(self,sno,rollno,subject_code,subject_name,marks,semister):
        self.sno=sno
        self.rollno=rollno
        self.subject_code=subject_code
        self.subject_name=subject_name
        self.marks=marks
        self.semister=semister


class MID_CS_DS(db.Model):
    sno=db.Column(db.Integer,primary_key=True)
    rollno=db.Column(db.String(20))
    subject_code=db.Column(db.String(20))
    subject_name=db.Column(db.String(100))
    marks=db.Column(db.Integer)
    semister=db.Column(db.Integer)

    def __init__(self,sno,rollno,subject_code,subject_name,marks,semister):
        self.sno=sno
        self.rollno=rollno
        self.subject_code=subject_code
        self.subject_name=subject_name
        self.marks=marks
        self.semister=semister


class MID_CS_IoT(db.Model):
    sno=db.Column(db.Integer,primary_key=True)
    rollno=db.Column(db.String(20))
    subject_code=db.Column(db.String(20))
    subject_name=db.Column(db.String(100))
    marks=db.Column(db.Integer)
    semister=db.Column(db.Integer)

    def __init__(self,sno,rollno,subject_code,subject_name,marks,semister):
        self.sno=sno
        self.rollno=rollno
        self.subject_code=subject_code
        self.subject_name=subject_name
        self.marks=marks
        self.semister=semister


class MID_CSBS(db.Model):
    sno=db.Column(db.Integer,primary_key=True)
    rollno=db.Column(db.String(20))
    subject_code=db.Column(db.String(20))
    subject_name=db.Column(db.String(100))
    marks=db.Column(db.Integer)
    semister=db.Column(db.Integer)

    def __init__(self,sno,rollno,subject_code,subject_name,marks,semister):
        self.sno=sno
        self.rollno=rollno
        self.subject_code=subject_code
        self.subject_name=subject_name
        self.marks=marks
        self.semister=semister


class MID_CSE(db.Model):
    sno=db.Column(db.Integer,primary_key=True)
    rollno=db.Column(db.String(20))
    subject_code=db.Column(db.String(20))
    subject_name=db.Column(db.String(100))
    marks=db.Column(db.Integer)
    semister=db.Column(db.Integer)

    def __init__(self,sno,rollno,subject_code,subject_name,marks,semister):
        self.sno=sno
        self.rollno=rollno
        self.subject_code=subject_code
        self.subject_name=subject_name
        self.marks=marks
        self.semister=semister


class MID_ECE(db.Model):
    sno=db.Column(db.Integer,primary_key=True)
    rollno=db.Column(db.String(20))
    subject_code=db.Column(db.String(20))
    subject_name=db.Column(db.String(100))
    marks=db.Column(db.Integer)
    semister=db.Column(db.Integer)

    def __init__(self,sno,rollno,subject_code,subject_name,marks,semister):
        self.sno=sno
        self.rollno=rollno
        self.subject_code=subject_code
        self.subject_name=subject_name
        self.marks=marks
        self.semister=semister


class MID_EEE(db.Model):
    sno=db.Column(db.Integer,primary_key=True)
    rollno=db.Column(db.String(20))
    subject_code=db.Column(db.String(20))
    subject_name=db.Column(db.String(100))
    marks=db.Column(db.Integer)
    semister=db.Column(db.Integer)

    def __init__(self,sno,rollno,subject_code,subject_name,marks,semister):
        self.sno=sno
        self.rollno=rollno
        self.subject_code=subject_code
        self.subject_name=subject_name
        self.marks=marks
        self.semister=semister


class MID_EIE(db.Model):
    sno=db.Column(db.Integer,primary_key=True)
    rollno=db.Column(db.String(20))
    subject_code=db.Column(db.String(20))
    subject_name=db.Column(db.String(100))
    marks=db.Column(db.Integer)
    semister=db.Column(db.Integer)

    def __init__(self,sno,rollno,subject_code,subject_name,marks,semister):
        self.sno=sno
        self.rollno=rollno
        self.subject_code=subject_code
        self.subject_name=subject_name
        self.marks=marks
        self.semister=semister


class MID_ME(db.Model):
    sno=db.Column(db.Integer,primary_key=True)
    rollno=db.Column(db.String(20))
    subject_code=db.Column(db.String(20))
    subject_name=db.Column(db.String(100))
    marks=db.Column(db.Integer)
    semister=db.Column(db.Integer)

    def __init__(self,sno,rollno,subject_code,subject_name,marks,semister):
        self.sno=sno
        self.rollno=rollno
        self.subject_code=subject_code
        self.subject_name=subject_name
        self.marks=marks
        self.semister=semister


class Complaints(db.Model):
    id = db.Column(db.Integer, db.Sequence('user_id_seq'), primary_key=True)
    name=db.Column(db.Text())
    rollno=db.Column(db.String(20))
    department=db.Column(db.String(100))
    body=db.Column(db.Text())
    date=db.Column(db.DateTime,default=datetime.datetime.now)

    def __init__(self,rollno,name,department,body):
        self.name=name
        self.rollno=rollno
        self.department=department
        self.body=body
class ComplaintsSchema(ma.Schema):
    class Meta:
        fields=('id','rollno','name','department','body','date')
complaint_schema=ComplaintsSchema()
complaints_schema=ComplaintsSchema(many=True)


class Replies(db.Model):
    id = db.Column(db.Integer, db.Sequence('user_id_seq'), primary_key=True)
    mid = db.Column(db.Integer)
    admin=db.Column(db.Text())
    rollno=db.Column(db.String(20))
    message=db.Column(db.Text())
    reply=db.Column(db.Text())
    date=db.Column(db.DateTime,default=datetime.datetime.now)

    def __init__(self,mid,rollno,admin,message,reply):
        self.mid=mid
        self.admin=admin
        self.rollno=rollno
        self.message=message
        self.reply=reply
class RepliesSchema(ma.Schema):
    class Meta:
        fields=('id','mid','admin','rollno','message','reply','date')
reply_schema=RepliesSchema()
replies_schema=RepliesSchema(many=True)


class StudentMessages(db.Model):
    id = db.Column(db.Integer, db.Sequence('user_id_seq'), primary_key=True)
    admin=db.Column(db.Text())
    rollno=db.Column(db.String(20))
    message=db.Column(db.Text())
    date=db.Column(db.DateTime,default=datetime.datetime.now)

    def __init__(self,rollno,admin,message):
        self.admin=admin
        self.rollno=rollno
        self.message=message
class StudentMessagesSchema(ma.Schema):
    class Meta:
        fields=('id','admin','rollno','message','date')
student_message_schema=StudentMessagesSchema()
student_messages_schema=StudentMessagesSchema(many=True)


class DepartmentMessages(db.Model):
    id = db.Column(db.Integer, db.Sequence('user_id_seq'), primary_key=True)
    admin=db.Column(db.Text())
    department=db.Column(db.String(100))
    message=db.Column(db.Text())
    date=db.Column(db.DateTime,default=datetime.datetime.now)

    def __init__(self,admin,department,message):
        self.admin=admin
        self.department=department
        self.message=message
class DepartmentMessagesSchema(ma.Schema):
    class Meta:
        fields=('id','admin','department','message','date')
department_message_schema=DepartmentMessagesSchema()
department_messages_schema=DepartmentMessagesSchema(many=True)


class CollegeMessages(db.Model):
    id = db.Column(db.Integer, db.Sequence('user_id_seq'), primary_key=True)
    admin=db.Column(db.Text())
    message=db.Column(db.Text())
    date=db.Column(db.DateTime,default=datetime.datetime.now)

    def __init__(self,admin,message):
        self.admin=admin
        self.message=message
class CollegeMessagesSchema(ma.Schema):
    class Meta:
        fields=('id','admin','message','date')
clg_message_schema=CollegeMessagesSchema()
clg_messages_schema=CollegeMessagesSchema(many=True)


class Results_IT(db.Model):
    sno=db.Column(db.Integer,primary_key=True)
    rollno=db.Column(db.String(20))
    subject_code=db.Column(db.String(20))
    subject_name=db.Column(db.String(100))
    credits=db.Column(db.String(5))
    points=db.Column(db.Integer)
    semister=db.Column(db.Integer)

    def __init__(self,sno,rollno,subject_code,subject_name,credits,points,semister):
        self.sno=sno
        self.rollno=rollno
        self.subject_code=subject_code
        self.subject_name=subject_name
        self.credits=credits
        self.points=points
        self.semister=semister
class ResultsSchema(ma.Schema):
    class Meta:
        fields=('sno','rollno','subject_code','subject_name','credits','points','semister')
results_schema=ResultsSchema(many=True)


class Results_AE(db.Model):
    sno=db.Column(db.Integer,primary_key=True)
    rollno=db.Column(db.String(20))
    subject_code=db.Column(db.String(20))
    subject_name=db.Column(db.String(100))
    credits=db.Column(db.String(5))
    points=db.Column(db.Integer)
    semister=db.Column(db.Integer)

    def __init__(self,sno,rollno,subject_code,subject_name,credits,points,semister):
        self.sno=sno
        self.rollno=rollno
        self.subject_code=subject_code
        self.subject_name=subject_name
        self.credits=credits
        self.points=points
        self.semister=semister


class Results_CE(db.Model):
    sno=db.Column(db.Integer,primary_key=True)
    rollno=db.Column(db.String(20))
    subject_code=db.Column(db.String(20))
    subject_name=db.Column(db.String(100))
    credits=db.Column(db.String(5))
    points=db.Column(db.Integer)
    semister=db.Column(db.Integer)

    def __init__(self,sno,rollno,subject_code,subject_name,credits,points,semister):
        self.sno=sno
        self.rollno=rollno
        self.subject_code=subject_code
        self.subject_name=subject_name
        self.credits=credits
        self.points=points
        self.semister=semister


class Results_CS_AIML(db.Model):
    sno=db.Column(db.Integer,primary_key=True)
    rollno=db.Column(db.String(20))
    subject_code=db.Column(db.String(20))
    subject_name=db.Column(db.String(100))
    credits=db.Column(db.String(5))
    points=db.Column(db.Integer)
    semister=db.Column(db.Integer)

    def __init__(self,sno,rollno,subject_code,subject_name,credits,points,semister):
        self.sno=sno
        self.rollno=rollno
        self.subject_code=subject_code
        self.subject_name=subject_name
        self.credits=credits
        self.points=points
        self.semister=semister



class Results_CS_CYS(db.Model):
    sno=db.Column(db.Integer,primary_key=True)
    rollno=db.Column(db.String(20))
    subject_code=db.Column(db.String(20))
    subject_name=db.Column(db.String(100))
    credits=db.Column(db.String(5))
    points=db.Column(db.Integer)
    semister=db.Column(db.Integer)

    def __init__(self,sno,rollno,subject_code,subject_name,credits,points,semister):
        self.sno=sno
        self.rollno=rollno
        self.subject_code=subject_code
        self.subject_name=subject_name
        self.credits=credits
        self.points=points
        self.semister=semister
                


class Results_CS_DS(db.Model):
    sno=db.Column(db.Integer,primary_key=True)
    rollno=db.Column(db.String(20))
    subject_code=db.Column(db.String(20))
    subject_name=db.Column(db.String(100))
    credits=db.Column(db.String(5))
    points=db.Column(db.Integer)
    semister=db.Column(db.Integer)

    def __init__(self,sno,rollno,subject_code,subject_name,credits,points,semister):
        self.sno=sno
        self.rollno=rollno
        self.subject_code=subject_code
        self.subject_name=subject_name
        self.credits=credits
        self.points=points
        self.semister=semister        



class Results_CS_IoT(db.Model):
    sno=db.Column(db.Integer,primary_key=True)
    rollno=db.Column(db.String(20))
    subject_code=db.Column(db.String(20))
    subject_name=db.Column(db.String(100))
    credits=db.Column(db.String(5))
    points=db.Column(db.Integer)
    semister=db.Column(db.Integer)

    def __init__(self,sno,rollno,subject_code,subject_name,credits,points,semister):
        self.sno=sno
        self.rollno=rollno
        self.subject_code=subject_code
        self.subject_name=subject_name
        self.credits=credits
        self.points=points
        self.semister=semister
                


class Results_CSBS(db.Model):
    sno=db.Column(db.Integer,primary_key=True)
    rollno=db.Column(db.String(20))
    subject_code=db.Column(db.String(20))
    subject_name=db.Column(db.String(100))
    credits=db.Column(db.String(5))
    points=db.Column(db.Integer)
    semister=db.Column(db.Integer)

    def __init__(self,sno,rollno,subject_code,subject_name,credits,points,semister):
        self.sno=sno
        self.rollno=rollno
        self.subject_code=subject_code
        self.subject_name=subject_name
        self.credits=credits
        self.points=points
        self.semister=semister
                


class Results_CSE(db.Model):
    sno=db.Column(db.Integer,primary_key=True)
    rollno=db.Column(db.String(20))
    subject_code=db.Column(db.String(20))
    subject_name=db.Column(db.String(100))
    credits=db.Column(db.String(5))
    points=db.Column(db.Integer)
    semister=db.Column(db.Integer)

    def __init__(self,sno,rollno,subject_code,subject_name,credits,points,semister):
        self.sno=sno
        self.rollno=rollno
        self.subject_code=subject_code
        self.subject_name=subject_name
        self.credits=credits
        self.points=points
        self.semister=semister
                        


class Results_ECE(db.Model):
    sno=db.Column(db.Integer,primary_key=True)
    rollno=db.Column(db.String(20))
    subject_code=db.Column(db.String(20))
    subject_name=db.Column(db.String(100))
    credits=db.Column(db.String(5))
    points=db.Column(db.Integer)
    semister=db.Column(db.Integer)

    def __init__(self,sno,rollno,subject_code,subject_name,credits,points,semister):
        self.sno=sno
        self.rollno=rollno
        self.subject_code=subject_code
        self.subject_name=subject_name
        self.credits=credits
        self.points=points
        self.semister=semister
                


class Results_EEE(db.Model):
    sno=db.Column(db.Integer,primary_key=True)
    rollno=db.Column(db.String(20))
    subject_code=db.Column(db.String(20))
    subject_name=db.Column(db.String(100))
    credits=db.Column(db.String(5))
    points=db.Column(db.Integer)
    semister=db.Column(db.Integer)

    def __init__(self,sno,rollno,subject_code,subject_name,credits,points,semister):
        self.sno=sno
        self.rollno=rollno
        self.subject_code=subject_code
        self.subject_name=subject_name
        self.credits=credits
        self.points=points
        self.semister=semister
                


class Results_EIE(db.Model):
    sno=db.Column(db.Integer,primary_key=True)
    rollno=db.Column(db.String(20))
    subject_code=db.Column(db.String(20))
    subject_name=db.Column(db.String(100))
    credits=db.Column(db.String(5))
    points=db.Column(db.Integer)
    semister=db.Column(db.Integer)

    def __init__(self,sno,rollno,subject_code,subject_name,credits,points,semister):
        self.sno=sno
        self.rollno=rollno
        self.subject_code=subject_code
        self.subject_name=subject_name
        self.credits=credits
        self.points=points
        self.semister=semister
                


class Results_ME(db.Model):
    sno=db.Column(db.Integer,primary_key=True)
    rollno=db.Column(db.String(20))
    subject_code=db.Column(db.String(20))
    subject_name=db.Column(db.String(100))
    credits=db.Column(db.String(5))
    points=db.Column(db.Integer)
    semister=db.Column(db.Integer)

    def __init__(self,sno,rollno,subject_code,subject_name,credits,points,semister):
        self.sno=sno
        self.rollno=rollno
        self.subject_code=subject_code
        self.subject_name=subject_name
        self.credits=credits
        self.points=points
        self.semister=semister


class SEMResults(db.Model):
    sno=db.Column(db.Integer,primary_key=True)
    rollno=db.Column(db.String(20))
    name=db.Column(db.String(100))
    department=db.Column(db.String(100))
    cgpa=db.Column(db.String(10))
    semister=db.Column(db.Integer)

    def __init__(self,sno,rollno,name,department,cgpa,semister):
        self.sno=sno
        self.rollno=rollno
        self.name=name
        self.department=department
        self.cgpa=cgpa
        self.semister=semister
class SEMResultsSchema(ma.Schema):
    class Meta:
        fields=('sno','rollno','name','department','cgpa','semister')
sem_result_schema=SEMResultsSchema()
sem_results_schema=SEMResultsSchema(many=True)



class Admins(db.Model):
    sno=db.Column(db.Integer,primary_key=True)
    admin_id=db.Column(db.String(50))
    name=db.Column(db.String(100))
    password=db.Column(db.String(100))

    def __init__(self,sno,admin_id,name,password):
        self.sno=sno
        self.admin_id=admin_id
        self.name=name
        self.password=password
class AdminsSchema(ma.Schema):
    class Meta:
        fields=('sno','admin_id','name','password')
admins_schema=AdminsSchema(many=True)



class Attendance(db.Model):
    rollno=db.Column(db.String(30),primary_key=True)
    name=db.Column(db.String(70))
    attendance=db.Column(db.String(50))
    department=db.Column(db.String(100))

    def __init__(self,rollno,name,attendance,department):
        self.rollno=rollno
        self.name=name
        self.attendance=attendance
        self.department=department
class AttendanceSchema(ma.Schema):
    class Meta:
        fields=('rollno','name','attendance','department')
attendance_schema=AttendanceSchema(many=True)



class StudentPersonalDetails(db.Model):
    rollno=db.Column(db.String(30),primary_key=True)
    name=db.Column(db.String(70))
    department=db.Column(db.String(100))
    gmail=db.Column(db.String(100))
    phone_no=db.Column(db.String(100))
    city=db.Column(db.String(70))


    def __init__(self,rollno,name,department,gmail,phone_no,city):
        self.rollno=rollno
        self.name=name
        self.department=department
        self.gmail=gmail
        self.phone_no=phone_no
        self.city=city
class StudentPersonalDetailsSchema(ma.Schema):
    class Meta:
        fields=('rollno','name','department','gmail','phone_no','city')
student_personal_details_schema=StudentPersonalDetailsSchema(many=True)



class Faculty(db.Model):
    name=db.Column(db.String(100))
    designation=db.Column(db.String(100))
    doj=db.Column(db.String(100))
    qualification=db.Column(db.String(50))
    noa=db.Column(db.String(70))
    jntuh_id=db.Column(db.String(100),primary_key=True)
    department=db.Column(db.String(100))

    def __init__(self,name,designation,doj,qualification,noa,jntuh_id,department):
        self.name=name
        self.designation=designation
        self.doj=doj
        self.qualification=qualification
        self.noa=noa
        self.jntuh_id=jntuh_id
        self.department=department
class FacultySchema(ma.Schema):
    class Meta:
        fields=('name','designation','doj','designation','qualification','noa','jntuh_id','department')
faculty_schema=FacultySchema(many=True)




class StudentRecords(db.Model):
    rollno=db.Column(db.String(30),primary_key=True)
    department=db.Column(db.String(100))
    year_of_join=db.Column(db.String(10))
    year_of_pass=db.Column(db.String(10))


    def __init__(self,rollno,department,year_of_join,year_of_pass):
        self.rollno=rollno
        self.department=department
        self.year_of_join=year_of_join
        self.year_of_pass=year_of_pass
class StudentRecordsSchema(ma.Schema):
    class Meta:
        fields=('rollno','department','year_of_join','year_of_pass')
student_records_schema=StudentRecordsSchema(many=True)






class Image(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    image_data = db.Column(db.LargeBinary(length=(2**32)-1))


@app.route('/upload', methods=['POST'])
def upload_image():
    try:
        if 'image' not in request.files:
            return jsonify({'error': 'No file part'})

        image_file = request.files['image']

        # Read image data and create a new Image object
        image_data = image_file.read()
        new_image = Image(image_data=image_data)

        # Add the new image to the database
        db.session.add(new_image)
        db.session.commit()

        return jsonify({'message': 'Image uploaded successfully'})
    except Exception as e:
        return jsonify({'error': str(e)})


@app.route('/get-image',methods=['GET'])
def get_image():
    image = Image.query.first()
    if image:
        return send_file(io.BytesIO(image.image_data), mimetype='image/png')

    return jsonify({'error': 'No image found'})


@app.route('/get-multiple-images')
def get_multiple_images():
    images = Image.query.all()
    
    image_data_list = [base64.b64encode(image.image_data).decode('utf-8') for image in images]

    return jsonify({'image_data_list': image_data_list})


@app.route('/upload-multiple', methods=['POST'])
def upload_multiple_files():
    try:
        files = request.files.getlist('files')

        for file in files:
            file_data = file.read()
            new_file = Image(image_data=file_data)
            db.session.add(new_file)
        
        db.session.commit()

        return jsonify({'message': 'Files uploaded successfully'})
    except Exception as e:
        return jsonify({'error': str(e)})
    

    
    


class Alumni(db.Model):
    rollno=db.Column(db.String(30),primary_key=True)
    name=db.Column(db.String(70))
    department=db.Column(db.String(100))
    username=db.Column(db.String(50))
    password=db.Column(db.String(50))
    state_your_purpose=db.Column(db.Text)
    year_of_pass=db.Column(db.String(50))
    year_of_join=db.Column(db.String(50))
    date=db.Column(db.DateTime,default=datetime.datetime.now)
    

    def __init__(self,rollno,name,department,username,password,state_your_purpose,year_of_join,year_of_pass):
        self.rollno=rollno
        self.name=name
        self.department=department
        self.username=username
        self.password=password
        self.state_your_purpose=state_your_purpose
        self.year_of_join=year_of_join
        self.year_of_pass=year_of_pass          
class AlumniSchema(ma.Schema):
    class Meta:
        fields=('rollno','name','department','username','password','state_your_purpose','year_of_join','year_of_pass','date')
alumni_schema=AlumniSchema(many=True)
alumnis_schema=AlumniSchema(many=True)


class AlumniAppication(db.Model):
    rollno=db.Column(db.String(30),primary_key=True)
    name=db.Column(db.String(70))
    department=db.Column(db.String(100))
    username=db.Column(db.String(50))
    password=db.Column(db.String(50))
    state_your_purpose=db.Column(db.Text)
    year_of_pass=db.Column(db.String(50))
    year_of_join=db.Column(db.String(50))
    date=db.Column(db.DateTime,default=datetime.datetime.now)


    def __init__(self,rollno,name,department,username,password,state_your_purpose,year_of_join,year_of_pass):
        self.rollno=rollno
        self.name=name
        self.department=department
        self.username=username
        self.password=password
        self.state_your_purpose=state_your_purpose
        self.year_of_join=year_of_join
        self.year_of_pass=year_of_pass          
class AlumniApplicationSchema(ma.Schema):
    class Meta:
        fields=('rollno','name','department','username','password','state_your_purpose','year_of_join','year_of_pass','date')
alumniapplication_schema=AlumniApplicationSchema()
alumnisapplication_schema=AlumniApplicationSchema(many=True)


class AlumniAvailableEvents(db.Model):
    id = db.Column(db.Integer, db.Sequence('user_id_seq'), primary_key=True)
    date=db.Column(db.String(70))
    time=db.Column(db.String(10))
    venue=db.Column(db.String(50))
    status=db.Column(db.String(50))
    

    def __init__(self,date,time,venue,status):
        self.date=date
        self.time=time
        self.venue=venue
        self.status=status
class AlumniAvailableEventsSchema(ma.Schema):
    class Meta:
        fields=('id','date','time','venue','status')
alumniavailableevent_schema=AlumniAvailableEventsSchema()
alumniavailableevents_schema=AlumniAvailableEventsSchema(many=True)


class Events(db.Model):
    id = db.Column(db.Integer, db.Sequence('user_id_seq'), primary_key=True)
    title=db.Column(db.String(100))
    email=db.Column(db.String(100))
    phone_no=db.Column(db.String(100))
    date=db.Column(db.String(100))
    time=db.Column(db.String(100))
    venue=db.Column(db.String(100))
    alumni_id=db.Column(db.String(100),nullable=False)
    description=db.Column(db.Text)
    planneddate=db.Column(db.DateTime,default=datetime.datetime.now)
    

    def __init__(self,title,email,phone_no,date,time,venue,alumni_id,description):
        self.title=title
        self.email=email
        self.phone_no=phone_no
        self.date=date
        self.time=time
        self.venue=venue
        self.alumni_id=alumni_id
        self.description=description
class EventsSchema(ma.Schema):
    class Meta:
        fields=('title','email','phone_no','date','time','venue','alumni_id','description','planneddate')
event_schema=EventsSchema()
events_schema=EventsSchema(many=True)


with app.app_context():
    db.create_all()



#inserting into alumni available events
# from datetime import datetime, timedelta
# now = datetime.now()
# time_slots = [10,12,14]
# venue=['Panda Punnaiah Square','KS Auditorium C-Block','JSK Greens','Seminar Hall B-Block','APJ Abdul Kalam Auditorium D-Block']
# with app.app_context():
#     k=AlumniAvailableEvents.query.count()
#     if k!=7*len(time_slots)*len(venue):
#         for i in range(7):
#             next_date = now + timedelta(days=i)
#             for hour in time_slots:
#                 for v in venue:
#                     row=AlumniAvailableEvents(next_date.strftime('%Y-%m-%d'),hour,v,'Available')
#                     db.session.add(row)
#                     db.session.commit()


#inserting into student records
# with app.app_context():
#     dept=BtechDepartments.query.filter_by(course_code='ME').first().name_of_the_course
#     r=Students.query.filter_by(department=dept).all()
#     years=[]
#     for i in range(2011,2022):
#         years.append(i)
#     rolls=[]
#     for j in years:
#         for i in r:
#             row=StudentRecords(str(j-2000)+i.rollno[2:],dept,j,j+4)
#             db.session.add(row)
#             db.session.commit()
    # print(rolls)



#inserting into facultytablel
# with app.app_context():
#     f=open("C:/Users/jogee/Desktop/CRM/frontend/src/components/departments/Faculty/cse.txt",'r')
#     jid=[]
#     email=[]
#     noa=[]
#     q=[]
#     doj=[]
#     prof=[]
#     name=[]
#     # d=[]
#     for i in f.readlines():
#         k=(i.split())[2:]
#         # d.append((k.pop()))
#         jid.append(k.pop())
#         email.append(k.pop())
#         noa.append(k.pop())
#         q.append(k.pop())
#         doj.append(k.pop())
#         n=''
#         for j in k:
#             if j=='Professor' or j=='Assistant' or j=='Associate' or j=='Prof.' or j=='Assoc.' or j=='Asst.' or j=='Sr.Asst.Professor' or j=='Sr.' or j=='Senior':
#                 break
#             else:
#                 n+=j+' '
#         name.append(n)
#         v=''
#         for j in k:
#             if j not in n:
#                 v+=j+' '
#         prof.append(v)
#     for i in range(len(jid)):
#         # print(name[i],'k',prof[i],'k',doj[i],'k',q[i],'Regular',jid[i],'CSE')
#         row=Faculty(name[i],prof[i],doj[i],q[i],'Regular',jid[i],'CSE')
#         db.session.add(row)
#         db.session.commit()


#inserting into attendancetable
# with app.app_context():
#     d=BtechDepartments.query.filter_by(course_code="IT").first().name_of_the_course
#     s=Students.query.filter_by(department=d).all()
#     for i in s:
#         k=''
#         for j in i.name.lower():
#             if j!=' ':
#                 k+=j
#         g=k+'@gmail.com'
#         cities=["Hyderabad",
#                 "Warangal",
#                 "Nizamabad",
#                 "Khammam",
#                 "Karimnagar",
#                 "Ramagundam",
#                 "Mahabubnagar",
#                 "Nalgonda",
#                 "Adilabad",
#                 "Suryapet",
#                 "Miryalaguda",
#                 "Jagtial",
#                 "Nirmal",
#                 "Kothagudem",
#                 "Wanaparthy",
#                 "Mancherial",
#                 "Bhongir",
#                 "Siddipet",
#                 "Koratla",
#                 "Jangaon"]
#         # StudentPersonalDetails(r,n,g,p,c)
#         first = random.randint(800, 999)
#         second = random.randint(100, 999)
#         last = random.randint(1000, 9999)
#         phone_no=str(first)+str(second)+str(last)
#         row=StudentPersonalDetails(i.rollno,i.name,i.department,g,phone_no,random.choice(cities))
#         db.session.add(row)
#         db.session.commit()


#inserting into attendance
# with app.app_context():
#     d=BtechDepartments.query.all()
#     for j in d:
#         s=Students.query.filter_by(department=j.name_of_the_course).all()
#         for i in s:
#             row=Attendance(i.rollno,i.name,random.randint(66,93),i.department)
#             db.session.add(row)
#             db.session.commit()


#results departmentwise
# with app.app_context():
#     d=BtechDepartments.query.filter_by(course_code="ME").first().name_of_the_course
#     s=Students.query.filter_by(department=d).all()
#     rolls=[]
#     semister=4
#     for i in s:
#         rolls.append(i.rollno)
#     # print(rolls)
#     m=ME_Subjects.query.filter_by(semister=semister).order_by(ME_Subjects.sno).all()
#     v=Results_ME.query.filter_by(semister=semister).count()
#     print(len(m)*30,v)
#     # print(m)


#     if v!=(len(m)*30):
#         for j in m:
#             k=Results_ME.query.count()
#             for i in range(k,k+30):
#                 points=random.randint(6,10)
#                 row=Results_ME(i+1,rolls[k-i],j.subject_code,j.subject_name,j.subject_credits,points,semister)
#                 db.session.add(row)
#                 db.session.commit()



            # print(i+1,rolls[i],j.subject_code,j.subject_name,j.subject_credits,points,4)
#     for j in d:
#         s=Students.query.filter_by(department=j.name_of_the_course).all()
#         for i in s:
#             row=Attendance(i.rollno,i.name,random.randint(66,93),i.department)



#inserting into department_results table
# with app.app_context():
#     d=BtechDepartments.query.filter_by(course_code="EEE").first().name_of_the_course
#     s=Students.query.filter_by(department=d).all()
#     rolls=[]
#     for i in s:
#         rolls.append(i.rollno)
#     print(d)
#     m=EEE_Subjects.query.filter(EEE_Subjects.semister<4).order_by(EEE_Subjects.sno).all()
#     print(len(m))
#     # for i in m:
#     #     print(i.subject_credits)
#     k=Results_EEE.query.count()
#     n=0
#     if k==0:
#         for j in rolls:
#             for i in m:
#                 n+=1
#                 # print(i.subject_code)
#                 # print(i.subject_name)
#                 # print(i.semister)
#                 points=random.randint(6,10)
#                 row=Results_EEE(n,j,i.subject_code,i.subject_name,i.subject_credits,points,i.semister)
#                 db.session.add(row)
#                 db.session.commit()
#         print("JOGEE")


#inserting into results table
# with app.app_context():
#     d=BtechDepartments.query.filter_by(course_code="ME").first().name_of_the_course
#     s=Students.query.filter_by(department=d)
#     rolls=[]
#     for i in s:
#         rolls.append(i.rollno)
#     k=SEMResults.query.count()
#     v=SEMResults.query.filter_by(department='ME').count()
#     if v!=(120):
#         for r in rolls:
#             k+=1
#             p=Results_ME.query.filter_by(rollno=r).filter_by(semister=4).all()
#             sum=0
#             total_credits=0
#             for i in p:
#                 sum+=i.points*float(i.credits)
#                 total_credits+=float(i.credits)
#             print(r,sum,total_credits)
#             name=Students.query.filter_by(department=d).filter_by(rollno=r).first().name
#             row=SEMResults(k,r,name,'ME',str(sum/total_credits)[:4],4)
#             db.session.add(row)
#             db.session.commit()


            # print(r,i.semister,str(sum/total_credits)[:4])
    # subject_codes=[]
    # subject_names=[]
    # semisters=[]
    # sno=[]
    # m=MIDSubjects.query.count()
    # v=MIDSubjects.query.filter_by(department='ME').count()
    # print(v)
    # for i in range(m+1,m+k+1):
    #     sno.append(i)
    # if v!=k:
    #     for i in d:
    #         subject_codes.append(i.subject_code)
    #         subject_names.append(i.subject_name)
    #         semisters.append(i.semister)
    #     for i in range(len(sno)):
    #         row=MIDSubjects(sno[i],subject_codes[i],subject_names[i],'ME',semisters[i])
    #         db.session.add(row)
    #         db.session.commit()



#inserting into subjects_table table
# subject_codes=[]
# subject_names=[]
# lecture=[]
# tutorial=[]
# practical_drawing=[]
# contact_hours_weekly=[]
# subject_credits=[]
# sems=[]
# f=open("C:/Users/jogee/Desktop/CRM for college campus Project/backend/mech syllabus/mech syllabus.txt",'r')
# for i in f.readlines():
#     k=i.split()
#     r=''
#     subject_codes.append(k[0])
#     k.remove(k[0])
#     k.reverse()
#     sems.append(k[0])
#     k.remove(k[0])
#     subject_credits.append((k[0]))
#     k.remove(k[0])
#     contact_hours_weekly.append(k[0])
#     k.remove(k[0])
#     practical_drawing.append(k[0])
#     k.remove(k[0])
#     tutorial.append(k[0])
#     k.remove(k[0])
#     lecture.append(k[0])
#     k.remove(k[0])
#     k.reverse()
#     for j in range(len(k)):
#         r+=k[j]
#         if j!=len(k)-1:
#             r+=' '
#     subject_names.append(r)
# sem1=[]
# for i in range(len(subject_codes)):
#     a=[]
#     a.append(i+1)
#     a.append(subject_codes[i])
#     a.append(subject_names[i])
#     a.append(lecture[i])
#     a.append(tutorial[i])
#     a.append(practical_drawing[i])
#     a.append(contact_hours_weekly[i])
#     a.append(subject_credits[i])
#     a.append(int(sems[i]))
#     sem1.append(a)
# # print(len(sem1))

# for i in sem1:
#     with app.app_context():
#         row=ME_Subjects(i[0],i[1],i[2],i[3],i[4],i[5],i[6],i[7],i[8])
#         db.session.add(row)
#         db.session.commit()


#inserting into student table
# from tabula import read_pdf
# df = read_pdf("C:/Users/jogee/Desktop/CRM for college campus Project/backend/I-B.Tech-I-Sem-(2021-22)[1] Roll List.pdf",pages="55") #address of pdf file
# a=[]
# for i in df:
#     for j in range(30):
#         a.append(i.loc[j])
# names=[]
# rollnos=[]
# passwords=[]
# for i in a:
#     names.append(i[1])
#     rollnos.append(i[2])
#     passwords.append(i[2]+'@'+'iot')
# k=1001
# for i in range(30):
#     rollnos.append('21071A'+str(k))
#     k+=1
# for i in range(30):
#     passwords.append(rollnos[i]+'@'+'eie')
# print(names)
# print(rollnos)
# print(passwords)

# for i in range(len(names)):
#     with app.app_context():
#         row=Students(rollnos[i],names[i],passwords[i],'Computer Science and Engineering (Internet of Things)')
#         db.session.add(row)
#         db.session.commit()


#inserting into mid_subjects table
# with app.app_context():
#     d=AE_Subjects.query.filter(AE_Subjects.lecture>=2).filter(AE_Subjects.subject_credits!='0').order_by(AE_Subjects.sno)
#     k=d.count()
#     print(k)
#     subject_codes=[]
#     subject_names=[]
#     semisters=[]
#     sno=[]
#     m=MIDSubjects.query.count()
#     v=MIDSubjects.query.filter_by(department='AE').count()
#     print(v)
#     for i in range(m+1,m+k+1):
#         sno.append(i)
#     if v!=k:
#         for i in d:
#             subject_codes.append(i.subject_code)
#             subject_names.append(i.subject_name)
#             semisters.append(i.semister)
#         for i in range(len(sno)):
#             row=MIDSubjects(sno[i],subject_codes[i],subject_names[i],'AE',semisters[i])
#             db.session.add(row)
#             db.session.commit()

    # k=CSBS_Subjects.query.count()
    # print(k)
    # l=Students.query.filter_by(department=k)
    # r=students_schema.dump(l)

#inserting list 0f holidays
# holidays_days=[]
# holidays_dates=[]
# holidays=[]
# f=open("C:/Users/jogee/Desktop/CRM for college campus Project/backend/loh.txt",'r')
# for i in f.readlines():
#     k=i.split()
#     holidays_days.append(k[-1])
#     k.remove(k[-1])
#     holidays_dates.append(k[-1])
#     k.remove(k[-1])
#     r=''
#     for j in range(len(k)):
#         r+=k[j]
#         if j!=len(k)-1:
#             r+=' '
#     holidays.append(r)
# a=[]
# for i in range(len(holidays)):
#     b=[]
#     b.append(holidays[i])
#     b.append(holidays_dates[i])
#     b.append(holidays_days[i])
#     a.append(b)
# for i in a:
#     with app.app_context():
#         d=i[1].split('-')
#         d.reverse()
#         s=''
#         for v in range(len(d)):
#             s+=d[v]
#             if v!=len(d)-1:
#                 s+='-'
#         # print(s,i[0])
#         row=LOH(i[0],s,i[2])
#         db.session.add(row)
#         db.session.commit()

#inserting into midmarks
# with app.app_context():
#     d=BtechDepartments.query.filter_by(course_code="EEE").all() 
#     for i in d:
#         k=i.name_of_the_course
#     s=Students.query.filter_by(department=k)
#     rolls=[]
#     for i in s:
#         rolls.append(i.rollno)
#     m=MIDSubjects.query.filter_by(department="EEE").filter(MIDSubjects.semister<=4).order_by(MIDSubjects.sno).all()
#     print(len(m))
#     k=MID_EEE.query.count()
#     n=0
#     if k==0:
#         for j in rolls:
#             for i in m:
#                 n+=1
#                 # print(i.subject_code)
#                 # print(i.subject_name)
#                 # print(i.semister)
#                 marks=random.randint(20, 30)
#                 row=MID_EEE(n,j,i.subject_code,i.subject_name,marks,i.semister)
#                 db.session.add(row)
#                 db.session.commit()



@app.route('/get/results',methods=['GET'])    
def results():
    with app.app_context():
        l=SEMResults.query.all()
        r=sem_results_schema.dump(l)
        return jsonify(r)
    

@app.route('/get/admin/results/<department>/',methods=['GET'])    
def results_department(department):
    with app.app_context():
        l=SEMResults.query.filter_by(department=department).all()
        r=sem_results_schema.dump(l)
        return jsonify(r)
    

@app.route('/get/admin/results/<department>/<sem>/',methods=['GET'])    
def results_department_sem(department,sem):
    with app.app_context():
        l=SEMResults.query.filter_by(department=department).filter_by(semister=sem).all()
        r=sem_results_schema.dump(l)
        return jsonify(r)
    

@app.route('/get/admin/results/<department>/<rollno>/<sem>/',methods=['GET'])    
def results_department_sem_rollno(department,sem,rollno):
    with app.app_context():
        l=SEMResults.query.filter_by(department=department).filter_by(semister=sem).filter_by(rollno=rollno).first()
        return jsonify(l.cgpa)



@app.route('/get/results/ME',methods=['GET'])    
def results_me():
    with app.app_context():
        l=Results_ME.query.all()
        r=results_schema.dump(l)
        return jsonify(r)
    

@app.route('/get/results/ME/<rollno>/',methods=['GET'])    
def results_me_rollno(rollno):
    with app.app_context():
        l=Results_ME.query.filter_by(rollno=rollno).all()
        r=results_schema.dump(l)
        return jsonify(r)
    

@app.route('/get/results/ME/<rollno>/<sem>',methods=['GET'])    
def results_me_rollno_sem(rollno,sem):
    with app.app_context():
        l=Results_ME.query.filter_by(rollno=rollno).filter_by(semister=sem).all()
        r=results_schema.dump(l)
        return jsonify(r)



@app.route('/get/results/EIE',methods=['GET'])    
def results_eie():
    with app.app_context():
        l=Results_EIE.query.all()
        r=results_schema.dump(l)
        return jsonify(r)
    

@app.route('/get/results/EIE/<rollno>/',methods=['GET'])    
def results_eie_rollno(rollno):
    with app.app_context():
        l=Results_EIE.query.filter_by(rollno=rollno).all()
        r=results_schema.dump(l)
        return jsonify(r)
    

@app.route('/get/results/EIE/<rollno>/<sem>',methods=['GET'])    
def results_eie_rollno_sem(rollno,sem):
    with app.app_context():
        l=Results_EIE.query.filter_by(rollno=rollno).filter_by(semister=sem).all()
        r=results_schema.dump(l)
        return jsonify(r)



@app.route('/get/results/EEE',methods=['GET'])    
def results_eee():
    with app.app_context():
        l=Results_EEE.query.all()
        r=results_schema.dump(l)
        return jsonify(r)
    

@app.route('/get/results/EEE/<rollno>/',methods=['GET'])    
def results_eee_rollno(rollno):
    with app.app_context():
        l=Results_EEE.query.filter_by(rollno=rollno).all()
        r=results_schema.dump(l)
        return jsonify(r)
    

@app.route('/get/results/EEE/<rollno>/<sem>',methods=['GET'])    
def results_eee_rollno_sem(rollno,sem):
    with app.app_context():
        l=Results_EEE.query.filter_by(rollno=rollno).filter_by(semister=sem).all()
        r=results_schema.dump(l)
        return jsonify(r)




@app.route('/get/results/ECE',methods=['GET'])    
def results_ece():
    with app.app_context():
        l=Results_ECE.query.all()
        r=results_schema.dump(l)
        return jsonify(r)
    

@app.route('/get/results/ECE/<rollno>/',methods=['GET'])    
def results_ece_rollno(rollno):
    with app.app_context():
        l=Results_ECE.query.filter_by(rollno=rollno).all()
        r=results_schema.dump(l)
        return jsonify(r)
    

@app.route('/get/results/ECE/<rollno>/<sem>',methods=['GET'])    
def results_ece_rollno_sem(rollno,sem):
    with app.app_context():
        l=Results_ECE.query.filter_by(rollno=rollno).filter_by(semister=sem).all()
        r=results_schema.dump(l)
        return jsonify(r)



@app.route('/get/results/CSE',methods=['GET'])    
def results_cse():
    with app.app_context():
        l=Results_CSE.query.all()
        r=results_schema.dump(l)
        return jsonify(r)
    

@app.route('/get/results/CSE/<rollno>/',methods=['GET'])    
def results_cse_rollno(rollno):
    with app.app_context():
        l=Results_CSE.query.filter_by(rollno=rollno).all()
        r=results_schema.dump(l)
        return jsonify(r)
    

@app.route('/get/results/CSE/<rollno>/<sem>',methods=['GET'])    
def results_cse_rollno_sem(rollno,sem):
    with app.app_context():
        l=Results_CSE.query.filter_by(rollno=rollno).filter_by(semister=sem).all()
        r=results_schema.dump(l)
        return jsonify(r)



@app.route('/get/results/CSBS',methods=['GET'])    
def results_csbs():
    with app.app_context():
        l=Results_CSBS.query.all()
        r=results_schema.dump(l)
        return jsonify(r)
    

@app.route('/get/results/CSBS/<rollno>/',methods=['GET'])    
def results_csbs_rollno(rollno):
    with app.app_context():
        l=Results_CSBS.query.filter_by(rollno=rollno).all()
        r=results_schema.dump(l)
        return jsonify(r)
    

@app.route('/get/results/CSBS/<rollno>/<sem>',methods=['GET'])    
def results_csbs_rollno_sem(rollno,sem):
    with app.app_context():
        l=Results_CSBS.query.filter_by(rollno=rollno).filter_by(semister=sem).all()
        r=results_schema.dump(l)
        return jsonify(r)



@app.route('/get/results/CS-IoT',methods=['GET'])    
def results_cs_iot():
    with app.app_context():
        l=Results_CS_IoT.query.all()
        r=results_schema.dump(l)
        return jsonify(r)
    

@app.route('/get/results/CS-IoT/<rollno>/',methods=['GET'])    
def results_cs_iot_rollno(rollno):
    with app.app_context():
        l=Results_CS_IoT.query.filter_by(rollno=rollno).all()
        r=results_schema.dump(l)
        return jsonify(r)
    

@app.route('/get/results/CS-IoT/<rollno>/<sem>',methods=['GET'])    
def results_cs_iot_rollno_sem(rollno,sem):
    with app.app_context():
        l=Results_CS_IoT.query.filter_by(rollno=rollno).filter_by(semister=sem).all()
        r=results_schema.dump(l)
        return jsonify(r)



@app.route('/get/results/CS-DS',methods=['GET'])    
def results_cs_ds():
    with app.app_context():
        l=Results_CS_DS.query.all()
        r=results_schema.dump(l)
        return jsonify(r)
    

@app.route('/get/results/CS-DS/<rollno>/',methods=['GET'])    
def results_cs_ds_rollno(rollno):
    with app.app_context():
        l=Results_CS_DS.query.filter_by(rollno=rollno).all()
        r=results_schema.dump(l)
        return jsonify(r)
    

@app.route('/get/results/CS-DS/<rollno>/<sem>',methods=['GET'])    
def results_cs_ds_rollno_sem(rollno,sem):
    with app.app_context():
        l=Results_CS_DS.query.filter_by(rollno=rollno).filter_by(semister=sem).all()
        r=results_schema.dump(l)
        return jsonify(r)



@app.route('/get/results/CS-CYS',methods=['GET'])    
def results_cs_cys():
    with app.app_context():
        l=Results_CS_CYS.query.all()
        r=results_schema.dump(l)
        return jsonify(r)
    

@app.route('/get/results/CS-CYS/<rollno>/',methods=['GET'])    
def results_cs_cys_rollno(rollno):
    with app.app_context():
        l=Results_CS_CYS.query.filter_by(rollno=rollno).all()
        r=results_schema.dump(l)
        return jsonify(r)
    

@app.route('/get/results/CS-CYS/<rollno>/<sem>',methods=['GET'])    
def results_cs_cys_rollno_sem(rollno,sem):
    with app.app_context():
        l=Results_CS_CYS.query.filter_by(rollno=rollno).filter_by(semister=sem).all()
        r=results_schema.dump(l)
        return jsonify(r)



@app.route('/get/results/CS-AIML',methods=['GET'])    
def results_cs_aiml():
    with app.app_context():
        l=Results_CS_AIML.query.all()
        r=results_schema.dump(l)
        return jsonify(r)
    

@app.route('/get/results/CS-AIML/<rollno>/',methods=['GET'])    
def results_cs_aiml_rollno(rollno):
    with app.app_context():
        l=Results_CS_AIML.query.filter_by(rollno=rollno).all()
        r=results_schema.dump(l)
        return jsonify(r)
    

@app.route('/get/results/CS-AIML/<rollno>/<sem>',methods=['GET'])    
def results_cs_aiml_rollno_sem(rollno,sem):
    with app.app_context():
        l=Results_CS_AIML.query.filter_by(rollno=rollno).filter_by(semister=sem).all()
        r=results_schema.dump(l)
        return jsonify(r)



@app.route('/get/results/CE',methods=['GET'])    
def results_ce():
    with app.app_context():
        l=Results_CE.query.all()
        r=results_schema.dump(l)
        return jsonify(r)
    

@app.route('/get/results/CE/<rollno>/',methods=['GET'])    
def results_ce_rollno(rollno):
    with app.app_context():
        l=Results_CE.query.filter_by(rollno=rollno).all()
        r=results_schema.dump(l)
        return jsonify(r)
    

@app.route('/get/results/CE/<rollno>/<sem>',methods=['GET'])    
def results_ce_rollno_sem(rollno,sem):
    with app.app_context():
        l=Results_CE.query.filter_by(rollno=rollno).filter_by(semister=sem).all()
        r=results_schema.dump(l)
        return jsonify(r)



@app.route('/get/results/AE',methods=['GET'])    
def results_ae():
    with app.app_context():
        l=Results_AE.query.all()
        r=results_schema.dump(l)
        return jsonify(r)
    

@app.route('/get/results/AE/<rollno>/',methods=['GET'])    
def results_ae_rollno(rollno):
    with app.app_context():
        l=Results_AE.query.filter_by(rollno=rollno).all()
        r=results_schema.dump(l)
        return jsonify(r)
    

@app.route('/get/results/AE/<rollno>/<sem>',methods=['GET'])    
def results_ae_rollno_sem(rollno,sem):
    with app.app_context():
        l=Results_AE.query.filter_by(rollno=rollno).filter_by(semister=sem).all()
        r=results_schema.dump(l)
        return jsonify(r)




@app.route('/get/results/IT',methods=['GET'])    
def results_it():
    with app.app_context():
        l=Results_IT.query.all()
        r=results_schema.dump(l)
        return jsonify(r)
    

@app.route('/get/results/IT/<rollno>/',methods=['GET'])    
def results_it_rollno(rollno):
    with app.app_context():
        l=Results_IT.query.filter_by(rollno=rollno).all()
        r=results_schema.dump(l)
        return jsonify(r)
    

@app.route('/get/results/IT/<rollno>/<sem>',methods=['GET'])    
def results_it_rollno_sem(rollno,sem):
    with app.app_context():
        l=Results_IT.query.filter_by(rollno=rollno).filter_by(semister=sem).all()
        r=results_schema.dump(l)
        return jsonify(r)



@app.route('/get/mid/IT',methods=['GET'])    
def mid_it():
    with app.app_context():
        l=MID_IT.query.all()
        r=mid_schema.dump(l)
        return jsonify(r)
    

@app.route('/get/mid/IT/<sem>',methods=['GET'])    
def mid_it_sem(sem):
    with app.app_context():
        l=MID_IT.query.filter_by(semister=sem).all()
        r=mid_schema.dump(l)
        return jsonify(r)
    

@app.route('/get/mid/IT/<rollno>/',methods=['GET'])    
def mid_it_rollno(rollno):
    with app.app_context():
        l=MID_IT.query.filter_by(rollno=rollno).all()
        r=mid_schema.dump(l)
        return jsonify(r)
    

@app.route('/get/mid/IT/<rollno>/<sem>',methods=['GET'])    
def mid_it_rollno_sem(rollno,sem):
    with app.app_context():
        l=MID_IT.query.filter_by(rollno=rollno).filter_by(semister=sem).all()
        r=mid_schema.dump(l)
        return jsonify(r)
    

@app.route('/get/mid/CE',methods=['GET'])    
def mid_ce():
    with app.app_context():
        l=MID_CE.query.all()
        r=mid_schema.dump(l)
        return jsonify(r)
    

@app.route('/get/mid/CE/<sem>',methods=['GET'])    
def mid_ce_sem(sem):
    with app.app_context():
        l=MID_CE.query.filter_by(semister=sem).all()
        r=mid_schema.dump(l)
        return jsonify(r)
    

@app.route('/get/mid/CE/<rollno>/',methods=['GET'])    
def mid_ce_rollno(rollno):
    with app.app_context():
        l=MID_CE.query.filter_by(rollno=rollno).all()
        r=mid_schema.dump(l)
        return jsonify(r)
    

@app.route('/get/mid/CE/<rollno>/<sem>',methods=['GET'])    
def mid_ce_rollno_sem(rollno,sem):
    with app.app_context():
        l=MID_CE.query.filter_by(rollno=rollno).filter_by(semister=sem).all()
        r=mid_schema.dump(l)
        return jsonify(r)

    

@app.route('/get/mid/AE',methods=['GET'])    
def mid_ae():
    with app.app_context():
        l=MID_AE.query.all()
        r=mid_schema.dump(l)
        return jsonify(r)
    

@app.route('/get/mid/AE/<sem>',methods=['GET'])    
def mid_ae_sem(sem):
    with app.app_context():
        l=MID_AE.query.filter_by(semister=sem).all()
        r=mid_schema.dump(l)
        return jsonify(r)
    

@app.route('/get/mid/AE/<rollno>/',methods=['GET'])    
def mid_ae_rollno(rollno):
    with app.app_context():
        l=MID_AE.query.filter_by(rollno=rollno).all()
        r=mid_schema.dump(l)
        return jsonify(r)
    

@app.route('/get/mid/AE/<rollno>/<sem>',methods=['GET'])    
def mid_ae_rollno_sem(rollno,sem):
    with app.app_context():
        l=MID_AE.query.filter_by(rollno=rollno).filter_by(semister=sem).all()
        r=mid_schema.dump(l)
        return jsonify(r)

    

@app.route('/get/mid/CS-AIML',methods=['GET'])    
def mid_cs_aiml():
    with app.app_context():
        l=MID_CS_AIML.query.all()
        r=mid_schema.dump(l)
        return jsonify(r)
    

@app.route('/get/mid/CS-AIML/<sem>',methods=['GET'])    
def mid_cs_aiml_sem(sem):
    with app.app_context():
        l=MID_CS_AIML.query.filter_by(semister=sem).all()
        r=mid_schema.dump(l)
        return jsonify(r)
    

@app.route('/get/mid/CS-AIML/<rollno>/',methods=['GET'])    
def mid_cs_aiml_rollno(rollno):
    with app.app_context():
        l=MID_CS_AIML.query.filter_by(rollno=rollno).all()
        r=mid_schema.dump(l)
        return jsonify(r)
    

@app.route('/get/mid/CS-AIML/<rollno>/<sem>',methods=['GET'])    
def mid_cs_aiml_rollno_sem(rollno,sem):
    with app.app_context():
        l=MID_CS_AIML.query.filter_by(rollno=rollno).filter_by(semister=sem).all()
        r=mid_schema.dump(l)
        return jsonify(r)

    

@app.route('/get/mid/CS-CYS',methods=['GET'])    
def mid_cs_cys():
    with app.app_context():
        l=MID_CS_CYS.query.all()
        r=mid_schema.dump(l)
        return jsonify(r)
    

@app.route('/get/mid/CS-CYS/<sem>',methods=['GET'])    
def mid_cs_cys_sem(sem):
    with app.app_context():
        l=MID_CS_CYS.query.filter_by(semister=sem).all()
        r=mid_schema.dump(l)
        return jsonify(r)
    

@app.route('/get/mid/CS-CYS/<rollno>/',methods=['GET'])    
def mid_cs_cys_rollno(rollno):
    with app.app_context():
        l=MID_CS_CYS.query.filter_by(rollno=rollno).all()
        r=mid_schema.dump(l)
        return jsonify(r)
    

@app.route('/get/mid/CS-CYS/<rollno>/<sem>',methods=['GET'])    
def mid_cs_cys_rollno_sem(rollno,sem):
    with app.app_context():
        l=MID_CS_CYS.query.filter_by(rollno=rollno).filter_by(semister=sem).all()
        r=mid_schema.dump(l)
        return jsonify(r)
    
    

@app.route('/get/mid/CS-DS',methods=['GET'])    
def mid_cs_ds():
    with app.app_context():
        l=MID_CS_DS.query.all()
        r=mid_schema.dump(l)
        return jsonify(r)
    

@app.route('/get/mid/CS-DS/<sem>',methods=['GET'])    
def mid_cs_ds_sem(sem):
    with app.app_context():
        l=MID_CS_DS.query.filter_by(semister=sem).all()
        r=mid_schema.dump(l)
        return jsonify(r)
    

@app.route('/get/mid/CS-DS/<rollno>/',methods=['GET'])    
def mid_cs_ds_rollno(rollno):
    with app.app_context():
        l=MID_CS_DS.query.filter_by(rollno=rollno).all()
        r=mid_schema.dump(l)
        return jsonify(r)
    

@app.route('/get/mid/CS-DS/<rollno>/<sem>',methods=['GET'])    
def mid_cs_ds_rollno_sem(rollno,sem):
    with app.app_context():
        l=MID_CS_DS.query.filter_by(rollno=rollno).filter_by(semister=sem).all()
        r=mid_schema.dump(l)
        return jsonify(r)
    
    

@app.route('/get/mid/CS-IoT',methods=['GET'])    
def mid_cs_iot():
    with app.app_context():
        l=MID_CS_IoT.query.all()
        r=mid_schema.dump(l)
        return jsonify(r)
    

@app.route('/get/mid/CS-IoT/<sem>',methods=['GET'])    
def mid_cs_iot_sem(sem):
    with app.app_context():
        l=MID_CS_IoT.query.filter_by(semister=sem).all()
        r=mid_schema.dump(l)
        return jsonify(r)
    

@app.route('/get/mid/CS-IoT/<rollno>/',methods=['GET'])    
def mid_cs_iot_rollno(rollno):
    with app.app_context():
        l=MID_CS_IoT.query.filter_by(rollno=rollno).all()
        r=mid_schema.dump(l)
        return jsonify(r)
    

@app.route('/get/mid/CS-IoT/<rollno>/<sem>',methods=['GET'])    
def mid_cs_iot_rollno_sem(rollno,sem):
    with app.app_context():
        l=MID_CS_IoT.query.filter_by(rollno=rollno).filter_by(semister=sem).all()
        r=mid_schema.dump(l)
        return jsonify(r)
    
    

@app.route('/get/mid/CSBS',methods=['GET'])    
def mid_csbs():
    with app.app_context():
        l=MID_CSBS.query.all()
        r=mid_schema.dump(l)
        return jsonify(r)
    

@app.route('/get/mid/CSBS/<sem>',methods=['GET'])    
def mid_csbs_sem(sem):
    with app.app_context():
        l=MID_CSBS.query.filter_by(semister=sem).all()
        r=mid_schema.dump(l)
        return jsonify(r)
    

@app.route('/get/mid/CSBS/<rollno>/',methods=['GET'])    
def mid_csbs_rollno(rollno):
    with app.app_context():
        l=MID_CSBS.query.filter_by(rollno=rollno).all()
        r=mid_schema.dump(l)
        return jsonify(r)
    

@app.route('/get/mid/CSBS/<rollno>/<sem>',methods=['GET'])    
def mid_csbs_rollno_sem(rollno,sem):
    with app.app_context():
        l=MID_CSBS.query.filter_by(rollno=rollno).filter_by(semister=sem).all()
        r=mid_schema.dump(l)
        return jsonify(r)
    
    

@app.route('/get/mid/CSE',methods=['GET'])    
def mid_cse():
    with app.app_context():
        l=MID_CSE.query.all()
        r=mid_schema.dump(l)
        return jsonify(r)
    

@app.route('/get/mid/CSE/<sem>',methods=['GET'])    
def mid_cse_sem(sem):
    with app.app_context():
        l=MID_CSE.query.filter_by(semister=sem).all()
        r=mid_schema.dump(l)
        return jsonify(r)
    

@app.route('/get/mid/CSE/<rollno>/',methods=['GET'])    
def mid_cse_rollno(rollno):
    with app.app_context():
        l=MID_CSE.query.filter_by(rollno=rollno).all()
        r=mid_schema.dump(l)
        return jsonify(r)
    

@app.route('/get/mid/CSE/<rollno>/<sem>',methods=['GET'])    
def mid_cse_rollno_sem(rollno,sem):
    with app.app_context():
        l=MID_CSE.query.filter_by(rollno=rollno).filter_by(semister=sem).all()
        r=mid_schema.dump(l)
        return jsonify(r)
    
    

@app.route('/get/mid/ECE',methods=['GET'])    
def mid_ece():
    with app.app_context():
        l=MID_ECE.query.all()
        r=mid_schema.dump(l)
        return jsonify(r)
    

@app.route('/get/mid/ECE/<sem>',methods=['GET'])    
def mid_ece_sem(sem):
    with app.app_context():
        l=MID_ECE.query.filter_by(semister=sem).all()
        r=mid_schema.dump(l)
        return jsonify(r)
    

@app.route('/get/mid/ECE/<rollno>/',methods=['GET'])    
def mid_ece_rollno(rollno):
    with app.app_context():
        l=MID_ECE.query.filter_by(rollno=rollno).all()
        r=mid_schema.dump(l)
        return jsonify(r)
    

@app.route('/get/mid/ECE/<rollno>/<sem>',methods=['GET'])    
def mid_ece_rollno_sem(rollno,sem):
    with app.app_context():
        l=MID_ECE.query.filter_by(rollno=rollno).filter_by(semister=sem).all()
        r=mid_schema.dump(l)
        return jsonify(r)
    
    

@app.route('/get/mid/EEE',methods=['GET'])    
def mid_eee():
    with app.app_context():
        l=MID_EEE.query.all()
        r=mid_schema.dump(l)
        return jsonify(r)
    

@app.route('/get/mid/EEE/<sem>',methods=['GET'])    
def mid_eee_sem(sem):
    with app.app_context():
        l=MID_EEE.query.filter_by(semister=sem).all()
        r=mid_schema.dump(l)
        return jsonify(r)
    

@app.route('/get/mid/EEE/<rollno>/',methods=['GET'])    
def mid_eee_rollno(rollno):
    with app.app_context():
        l=MID_EEE.query.filter_by(rollno=rollno).all()
        r=mid_schema.dump(l)
        return jsonify(r)
    

@app.route('/get/mid/EEE/<rollno>/<sem>',methods=['GET'])    
def mid_eee_rollno_sem(rollno,sem):
    with app.app_context():
        l=MID_EEE.query.filter_by(rollno=rollno).filter_by(semister=sem).all()
        r=mid_schema.dump(l)
        return jsonify(r)
    
    

@app.route('/get/mid/EIE',methods=['GET'])    
def mid_eie():
    with app.app_context():
        l=MID_EIE.query.all()
        r=mid_schema.dump(l)
        return jsonify(r)
    

@app.route('/get/mid/EIE/<sem>',methods=['GET'])    
def mid_eie_sem(sem):
    with app.app_context():
        l=MID_EIE.query.filter_by(semister=sem).all()
        r=mid_schema.dump(l)
        return jsonify(r)
    

@app.route('/get/mid/EIE/<rollno>/',methods=['GET'])    
def mid_eie_rollno(rollno):
    with app.app_context():
        l=MID_EIE.query.filter_by(rollno=rollno).all()
        r=mid_schema.dump(l)
        return jsonify(r)
    

@app.route('/get/mid/EIE/<rollno>/<sem>',methods=['GET'])    
def mid_eie_rollno_sem(rollno,sem):
    with app.app_context():
        l=MID_EIE.query.filter_by(rollno=rollno).filter_by(semister=sem).all()
        r=mid_schema.dump(l)
        return jsonify(r)
    
    

@app.route('/get/mid/ME',methods=['GET'])    
def mid_me():
    with app.app_context():
        l=MID_ME.query.all()
        r=mid_schema.dump(l)
        return jsonify(r)
    

@app.route('/get/mid/ME/<rollno>/',methods=['GET'])    
def mid_me_rollno(rollno):
    with app.app_context():
        l=MID_ME.query.filter_by(rollno=rollno).all()
        r=mid_schema.dump(l)
        return jsonify(r)
    

@app.route('/get/mid/ME/<sem>',methods=['GET'])    
def mid_me_sem(sem):
    with app.app_context():
        l=MID_ME.query.filter_by(semister=sem).all()
        r=mid_schema.dump(l)
        return jsonify(r)
    

@app.route('/get/mid/ME/<rollno>/<sem>',methods=['GET'])    
def mid_me_rollno_sem(rollno,sem):
    with app.app_context():
        l=MID_ME.query.filter_by(rollno=rollno).filter_by(semister=sem).all()
        r=mid_schema.dump(l)
        return jsonify(r)
    

@app.route('/get/admins',methods=['GET'])    
def admins():
    with app.app_context():
        l=Admins.query.all()
        r=admins_schema.dump(l)
        return jsonify(r)
    

@app.route('/get/admins/<adminid>/',methods=['GET'])    
def admin_name(adminid):
    with app.app_context():
        l=Admins.query.filter_by(admin_id=adminid).first().name
        return jsonify(l)



@app.route('/get/students',methods=['GET'])    
def students():
    with app.app_context():
        l=Students.query.all()
        r=students_schema.dump(l)
        return jsonify(r)
    

@app.route('/get/students/<rollno>/',methods=['GET'])    
def student_name(rollno):
    with app.app_context():
        l=Students.query.filter_by(rollno=rollno).first().name
        return jsonify(l)
    

@app.route('/get/studentsdept/<department>/',methods=['GET'])    
def department_students(department):
    with app.app_context():
        d=BtechDepartments.query.filter_by(course_code=department).all() 
        for i in d:
            k=i.name_of_the_course
        l=Students.query.filter_by(department=k)
        r=students_schema.dump(l)
        return jsonify(r)
    

@app.route('/get/midsubjects',methods=['GET'])    
def mid_subjects():
    with app.app_context():
        l=MIDSubjects.query.all()
        r=mid_subjects_schema.dump(l)
        return jsonify(r)


@app.route('/get/midsubjects/<department>/',methods=['GET'])    
def mid_subjects_department(department):
    with app.app_context():
        l=MIDSubjects.query.filter_by(department=department)
        r=mid_subjects_schema.dump(l)
        return jsonify(r)
    

@app.route('/get/midsubjects/<department>/<sem>/',methods=['GET'])    
def mid_subjects_department_sem(department,sem):
    with app.app_context():
        l=MIDSubjects.query.filter_by(department=department).filter_by(semister=sem).all()
        r=mid_subjects_schema.dump(l)
        return jsonify(r) 



@app.route('/get/departments',methods=['GET'])    
def departments():
    with app.app_context():
        l=BtechDepartments.query.order_by(BtechDepartments.sno).all()
        r=btech_departments_schema.dump(l)
        return jsonify(r)
    

@app.route('/get/departments/<code>/',methods=['GET'])    
def get_department(code):
    with app.app_context():
        l=BtechDepartments.query.filter_by(course_code=code).first().name_of_the_course
        return jsonify(l)
    

@app.route('/get/loh',methods=['GET'])    
def loh():
    with app.app_context():
        l=LOH.query.order_by(LOH.holiday_date).all()
        r=loh_schema.dump(l)
        return jsonify(r)



@app.route('/get/IT',methods=['GET'])    
def it_subjects():
    with app.app_context():
        s=IT_Subjects.query.order_by(IT_Subjects.sno).all()
        r=subjects_schema.dump(s)
        return jsonify(r)

@app.route('/get/IT/<sem>/',methods=['GET'])
def it_sem_subjects(sem):
    with app.app_context():
        s=IT_Subjects.query.filter_by(semister=sem).order_by(IT_Subjects.sno)
        r=subjects_schema.dump(s)
        return jsonify(r)
    

@app.route('/get/CE',methods=['GET'])    
def ce_subjects():
    with app.app_context():
        s=CE_Subjects.query.order_by(CE_Subjects.sno).all()
        r=subjects_schema.dump(s)
        return jsonify(r)
    
@app.route('/get/CE/<sem>/',methods=['GET'])
def ce_sem_subjects(sem):
    with app.app_context():
        s=CE_Subjects.query.filter_by(semister=sem).order_by(CE_Subjects.sno)
        r=subjects_schema.dump(s)
        return jsonify(r)
    

@app.route('/get/EEE',methods=['GET'])    
def eee_subjects():
    with app.app_context():
        s=EEE_Subjects.query.order_by(EEE_Subjects.sno).all()
        r=subjects_schema.dump(s)
        return jsonify(r)
    
@app.route('/get/EEE/<sem>/',methods=['GET'])
def eee_sem_subjects(sem):
    with app.app_context():
        s=EEE_Subjects.query.filter_by(semister=sem).order_by(EEE_Subjects.sno)
        r=subjects_schema.dump(s)
        return jsonify(r)
    

@app.route('/get/ME',methods=['GET'])    
def me_subjects():
    with app.app_context():
        s=ME_Subjects.query.order_by(ME_Subjects.sno).all()
        r=subjects_schema.dump(s)
        return jsonify(r)
    
@app.route('/get/ME/<sem>/',methods=['GET'])
def me_sem_subjects(sem):
    with app.app_context():
        s=ME_Subjects.query.filter_by(semister=sem).order_by(ME_Subjects.sno)
        r=subjects_schema.dump(s)
        return jsonify(r)
    

@app.route('/get/ECE',methods=['GET'])    
def ece_subjects():
    with app.app_context():
        s=ECE_Subjects.query.order_by(ECE_Subjects.sno).all()
        r=subjects_schema.dump(s)
        return jsonify(r)
    
@app.route('/get/ECE/<sem>/',methods=['GET'])
def ece_sem_subjects(sem):
    with app.app_context():
        s=ECE_Subjects.query.filter_by(semister=sem).order_by(ECE_Subjects.sno)
        r=subjects_schema.dump(s)
        return jsonify(r)
    

@app.route('/get/CSBS',methods=['GET'])    
def csbs_subjects():
    with app.app_context():
        s=CSBS_Subjects.query.order_by(CSBS_Subjects.sno).all()
        r=subjects_schema.dump(s)
        return jsonify(r)
    
@app.route('/get/CSBS/<sem>/',methods=['GET'])
def csbs_sem_subjects(sem):
    with app.app_context():
        s=CSBS_Subjects.query.filter_by(semister=sem).order_by(CSBS_Subjects.sno)
        r=subjects_schema.dump(s)
        return jsonify(r)
    

@app.route('/get/CS-AIML',methods=['GET'])    
def cs_aiml_subjects():
    with app.app_context():
        s=CS_AIML_Subjects.query.order_by(CS_AIML_Subjects.sno).all()
        r=subjects_schema.dump(s)
        return jsonify(r)
    
@app.route('/get/CS-AIML/<sem>/',methods=['GET'])
def cs_aiml_sem_subjects(sem):
    with app.app_context():
        s=CS_AIML_Subjects.query.filter_by(semister=sem).order_by(CS_AIML_Subjects.sno)
        r=subjects_schema.dump(s)
        return jsonify(r)
    

@app.route('/get/CS-DS',methods=['GET'])    
def cs_ds_subjects():
    with app.app_context():
        s=CS_DS_Subjects.query.order_by(CS_DS_Subjects.sno).all()
        r=subjects_schema.dump(s)
        return jsonify(r)
    
@app.route('/get/CS-DS/<sem>/',methods=['GET'])
def cs_ds_sem_subjects(sem):
    with app.app_context():
        s=CS_DS_Subjects.query.filter_by(semister=sem).order_by(CS_DS_Subjects.sno)
        r=subjects_schema.dump(s)
        return jsonify(r)
    

@app.route('/get/EIE',methods=['GET'])    
def eie_subjects():
    with app.app_context():
        s=EIE_Subjects.query.order_by(EIE_Subjects.sno).all()
        r=subjects_schema.dump(s)
        return jsonify(r)
    
@app.route('/get/EIE/<sem>/',methods=['GET'])
def eie_sem_subjects(sem):
    with app.app_context():
        s=EIE_Subjects.query.filter_by(semister=sem).order_by(EIE_Subjects.sno)
        r=subjects_schema.dump(s)
        return jsonify(r)
    

@app.route('/get/CSE',methods=['GET'])    
def cse_subjects():
    with app.app_context():
        s=CSE_Subjects.query.order_by(CSE_Subjects.sno).all()
        r=subjects_schema.dump(s)
        return jsonify(r)
    
@app.route('/get/CSE/<sem>/',methods=['GET'])
def cse_sem_subjects(sem):
    with app.app_context():
        s=CSE_Subjects.query.filter_by(semister=sem).order_by(CSE_Subjects.sno)
        r=subjects_schema.dump(s)
        return jsonify(r)
    

@app.route('/get/AE',methods=['GET'])    
def ae_subjects():
    with app.app_context():
        s=AE_Subjects.query.order_by(AE_Subjects.sno).all()
        r=subjects_schema.dump(s)
        return jsonify(r)
    
@app.route('/get/AE/<sem>/',methods=['GET'])
def ae_sem_subjects(sem):
    with app.app_context():
        s=AE_Subjects.query.filter_by(semister=sem).order_by(AE_Subjects.sno)
        r=subjects_schema.dump(s)
        return jsonify(r)
    

@app.route('/get/CS-CYS',methods=['GET'])    
def cs_cys_subjects():
    with app.app_context():
        s=CS_CYS_Subjects.query.order_by(CS_CYS_Subjects.sno).all()
        r=subjects_schema.dump(s)
        return jsonify(r)
    
@app.route('/get/CS-CYS/<sem>/',methods=['GET'])
def cs_cys_sem_subjects(sem):
    with app.app_context():
        s=CS_CYS_Subjects.query.filter_by(semister=sem).order_by(CS_CYS_Subjects.sno)
        r=subjects_schema.dump(s)
        return jsonify(r)
    

@app.route('/get/CS-IoT',methods=['GET'])    
def cs_iot_subjects():
    with app.app_context():
        s=CS_IoT_Subjects.query.order_by(CS_IoT_Subjects.sno).all()
        r=subjects_schema.dump(s)
        return jsonify(r)
    
@app.route('/get/CS-IoT/<sem>/',methods=['GET'])
def cs_iot_sem_subjects(sem):
    with app.app_context():
        s=CS_IoT_Subjects.query.filter_by(semister=sem).order_by(CS_IoT_Subjects.sno)
        r=subjects_schema.dump(s)
        return jsonify(r)
    

@app.route('/get/<rollno>/',methods=["GET"])
def get_department_rollno(rollno):
    with app.app_context():
        s=Students.query.filter_by(rollno=rollno).first()
        d=BtechDepartments.query.filter_by(name_of_the_course=s.department).first() 
        return d.course_code
    


@app.route('/student/login',methods=["POST"])
def student_login():
    username=request.json["Rollno"]
    password=request.json["Password"]
    s=Students.query.filter_by(rollno=username).first()
    print(username)
    print(password)
    if s:
        if password==s.password:
            return '2',200
        else:
            return '1',401
    else:
        return '0',401
    

@app.route('/student/update',methods=["PUT"])
def student_update_password():
    username=request.json["Rollno"]
    new_password=request.json["NewPassword"]
    old_password=request.json["OldPassword"]
    s=Students.query.filter_by(rollno=username).first()
    if s:
        if s.password==old_password:
            s.password=new_password
            db.session.commit()
            return 'PASSWORD CHANGED',200
        else:
            return 'Password Not Matched',401
    else:
        return 'USER NOT FOUND'
    

@app.route('/admin/login',methods=["POST"])
def admin_login():
    username=request.json["AdminID"]
    password=request.json["Password"]
    s=Admins.query.filter_by(admin_id=username).first()
    print(username)
    print(password)
    if s:
        if password==s.password:
            return '2',200
        else:
            return '1',401
    else:
        return '0',401
    

@app.route('/admin/update',methods=["PUT"])
def admin_update_password():
    username=request.json["AdminID"]
    new_password=request.json["NewPassword"]
    old_password=request.json["OldPassword"]
    s=Admins.query.filter_by(admin_id=username).first()
    if s:
        if s.password==old_password:
            s.password=new_password
            db.session.commit()
            return 'PASSWORD CHANGED',200
        else:
            return 'Password Not Matched',401
    else:
        return 'USER NOT FOUND'
    

@app.route('/student/complaint',methods=["POST"])
def student_complaint():
    # sno=Complaints.query.count()+1
    rollno=request.json["Rollno"]
    name=request.json["Name"]
    department=request.json["Department"]
    body=request.json["Body"]
    s=Complaints.query.filter_by(rollno=rollno).all()
    k=0
    for i in s:
        if i.body==body:
            k=1
            break
    if k==0:
        row=Complaints(rollno,name,department,body)
        db.session.add(row)
        db.session.commit()
        return 'Complaint Successfully Registered',200
    return 'Complaint Already Registered',401


@app.route('/student/complaint/<rollno>/<c>/',methods=["GET"])
def student_complaint_rollno_get(rollno,c):
    if c=='true':
        s=Complaints.query.filter_by(rollno=rollno).order_by(Complaints.date.desc()).all()
        ss=complaints_schema.dump(s)
        return jsonify(ss)
    else:
        s=Complaints.query.filter_by(rollno=rollno).all()
        ss=complaints_schema.dump(s)
        return jsonify(ss)


@app.route('/student/complaint/<rollno>/<id>',methods=["PUT"])
def student_complaint_rollno_put(rollno,id):
    body=request.json["Body"]
    s=Complaints.query.filter_by(rollno=rollno).filter_by(id=id).first()
    s.body=body
    db.session.commit()
    return jsonify('Posted'),200


@app.route('/admin/<adminid>/message/student/',methods=["POST"])
def admin_message_student(adminid):
    admin_name=adminid
    message=request.json["Message"]
    rolls=request.json["Response"]
    # print(message)
    # print(rolls)
    k=0
    s=StudentMessages.query.filter_by(admin=adminid).all()
    for i in s:
        if i.message==message:
            k=1
            break
    if k==0:
        for j in rolls:
            row=StudentMessages(j,admin_name,message)
            # print(j,admin_name,message)
            db.session.add(row)
            db.session.commit()
        return 'Message Successfully Sent',200
    return 'Message Already Sent',401


@app.route('/admin/<adminid>/message/department/',methods=["POST"])
def admin_message_department(adminid):
    admin_name=adminid
    message=request.json["Message"]
    d=request.json["Response"]
    # print(message)
    # print(d)
    k=0
    s=DepartmentMessages.query.filter_by(admin=adminid).all()
    for i in s:
        if i.message==message:
            k=1
            break
    if k==0:
        for j in d:
            row=DepartmentMessages(admin_name,j,message)
            # print(j,admin_name,message)
            db.session.add(row)
            db.session.commit()
        return 'Message Successfully Sent',200
    return 'Message Already Sent',401



@app.route('/admin/message/clg',methods=["POST"])
def admin_message_clg():
    admin_name=request.json["AdminID"]
    message=request.json["Message"]
    k=0
    s=CollegeMessages.query.all()
    for i in s:
        if i.message==message:
            k=1
            break
    if k==0:
        row=CollegeMessages(admin_name,message)
        db.session.add(row)
        db.session.commit()
        return 'Message Successfully Sent',200
    return 'Message Already Sent',401


@app.route('/admin/message/clg',methods=["PUT"])
def admin_message_clg_edit():
    admin_id=request.json["AdminID"]
    id=request.json["ID"]
    message=request.json["Body"]
    s=CollegeMessages.query.filter_by(admin=admin_id).filter_by(id=id).first()
    s.message=message
    db.session.commit()
    return 'Message Edited',200


@app.route('/admin/put/message/department/<adminid>/<dept>/<id>/',methods=["PUT"])
def admin_message_department_put(adminid,dept,id):
    message=request.json["Body"]
    s=DepartmentMessages.query.filter_by(admin=adminid).filter_by(department=dept).filter_by(id=id).first()
    print(adminid,dept,id)
    s.message=message
    db.session.commit()
    return "Edited",200


@app.route('/admin/message/department/<adminid>/<dept>/<id>/',methods=["DELETE"])
def admin_message_department_delete(dept,adminid,id):
    s=DepartmentMessages.query.filter_by(admin=adminid).filter_by(department=dept).filter_by(id=id).first()
    db.session.delete(s)
    db.session.commit()
    return "Deleted",200


@app.route('/admin/put/message/student/<adminid>/<rollno>/<id>/',methods=["PUT"])
def admin_message_student_put(adminid,rollno,id):
    message=request.json["Body"]
    s=StudentMessages.query.filter_by(admin=adminid).filter_by(rollno=rollno).filter_by(id=id).first()
    # print(adminid,dept,id)
    s.message=message
    db.session.commit()
    return "Edited",200


@app.route('/admin/message/student/<adminid>/<rollno>/<id>/',methods=["DELETE"])
def admin_message_student_delete(adminid,rollno,id):
    s=StudentMessages.query.filter_by(admin=adminid).filter_by(rollno=rollno).filter_by(id=id).first()
    db.session.delete(s)
    db.session.commit()
    return "Deleted",200



@app.route('/get/admin/message/student/<rollno>/<c>/',methods=["GET"])
def get_admin_message_student(rollno,c):
    if c=='true':
        m=StudentMessages.query.filter_by(rollno=rollno).order_by(StudentMessages.date.desc()).all()
        r=student_messages_schema.dump(m)
        return jsonify(r)
    else:
        m=StudentMessages.query.filter_by(rollno=rollno).all()
        r=student_messages_schema.dump(m)
        return jsonify(r)


@app.route('/get/student/message/student/<adminid>/<c>/',methods=["GET"])
def student_get_message_student(adminid,c):
    if c=='true':
        m=StudentMessages.query.filter_by(admin=adminid).order_by(StudentMessages.date.desc()).all()
        r=student_messages_schema.dump(m)
        return jsonify(r)
    else:
        m=StudentMessages.query.filter_by(admin=adminid).all()
        r=student_messages_schema.dump(m)
        return jsonify(r)



@app.route('/get/admin/message/department/<admin>/<dept>/<c>/',methods=["GET"])
def get_admin_message_department(dept,admin,c):
    if c=='true':
        m=DepartmentMessages.query.filter_by(admin=admin).order_by(DepartmentMessages.date.desc()).filter_by(department=dept).all()
        r=department_messages_schema.dump(m)
        return jsonify(r)
    else:
        m=DepartmentMessages.query.filter_by(admin=admin).filter_by(department=dept).all()
        r=department_messages_schema.dump(m)
        return jsonify(r)


@app.route('/get/student/message/department/<dept>/<c>/',methods=["GET"])
def student_get_message_department(dept,c):
    if c=='true':
        m=DepartmentMessages.query.filter_by(department=dept).order_by(DepartmentMessages.date.desc()).all()
        r=department_messages_schema.dump(m)
        return jsonify(r)
    else:
        m=DepartmentMessages.query.filter_by(department=dept).all()
        r=department_messages_schema.dump(m)
        return jsonify(r)



@app.route('/get/admin/message/clg/<admin>/<c>/',methods=["GET"])
def get_admin_message_clg_separate(admin,c):
    if c=='true':
        m=CollegeMessages.query.filter_by(admin=admin).order_by(CollegeMessages.date.desc()).all()
        r=clg_messages_schema.dump(m)
        return jsonify(r)
    else:
        m=CollegeMessages.query.filter_by(admin=admin).all()
        r=clg_messages_schema.dump(m)
        return jsonify(r)


@app.route('/get/admin/message/clg/<c>/',methods=["GET"])
def get_admin_message_clg(c):
    if c=='true':
        m=CollegeMessages.query.order_by(CollegeMessages.date.desc()).all()
        r=clg_messages_schema.dump(m)
        return jsonify(r)
    else:
        m=CollegeMessages.query.all()
        r=clg_messages_schema.dump(m)
        return jsonify(r)


@app.route('/delete/admin/<adminid>/message/clg/<id>/',methods=["DELETE"])
def del_admin_message_clg(adminid,id):
    m=CollegeMessages.query.filter_by(admin=adminid).filter_by(id=id).first()
    db.session.delete(m)
    db.session.commit()
    return "Deleted",200



@app.route('/student/complaint/<rollno>/<id>/',methods=["DELETE"])
def student_complaint_rollno_delete(rollno,id):
    s=Complaints.query.filter_by(rollno=rollno).filter_by(id=id).first()
    db.session.delete(s)
    db.session.commit()
    return "Deleted",200


@app.route('/admin/complaints/<c>/',methods=["GET"])
def admin_complaints(c):
    if c=='true':
        s=Complaints.query.order_by(Complaints.date.desc()).all()
        ss=complaints_schema.dump(s)
        return jsonify(ss)
    else:
        s=Complaints.query.all()
        ss=complaints_schema.dump(s)
        return jsonify(ss)



@app.route('/admin/get/reply/<adminid>/<rollno>/<id>/',methods=["GET"])
def get_admin_reply(adminid,rollno,id):
    m=Replies.query.filter_by(admin=adminid).filter_by(rollno=rollno).filter_by(mid=id).all()
    r=replies_schema.dump(m)
    return jsonify(r)


@app.route('/admin/delete/reply/<adminid>/<rollno>/<id>/',methods=["DELETE"])
def delete_admin_reply(adminid,rollno,id):
    m=Replies.query.filter_by(admin=adminid).filter_by(rollno=rollno).filter_by(id=id).first()
    db.session.delete(m)
    db.session.commit()
    return "Deleted",200



@app.route('/admin/put/reply/<adminid>/<rollno>/<id>/',methods=["PUT"])
def put_admin_reply(adminid,rollno,id):
    m=Replies.query.filter_by(admin=adminid).filter_by(rollno=rollno).filter_by(id=id).first()
    reply=request.json["EditReply"]
    m.reply=reply
    db.session.commit()
    return "Edited",200



@app.route('/admin/post/reply/<adminid>/<rollno>/<mid>/',methods=["POST"])
def post_admin_reply(adminid,rollno,mid):
    message=request.json["Complaint"]
    reply=request.json["Reply"]
    k=0
    s=Replies.query.filter_by(mid=id).all()
    for i in s:
        if i.reply==reply:
            k=1
            break
    if k==0:
        row=Replies(mid,rollno,adminid,message,reply)
        db.session.add(row)
        db.session.commit()
        return 'Reply Successfully Sent',200
    return 'Reply Already Sent',401


@app.route('/student/get/reply/<rollno>/<id>/',methods=["GET"])
def get_student_reply(rollno,id):
    m=Replies.query.filter_by(rollno=rollno).filter_by(mid=id).all()
    r=replies_schema.dump(m)
    return jsonify(r)


@app.route('/get/students/details/<rollno>/',methods=["GET"])
def get_students_details(rollno):
    m=StudentPersonalDetails.query.filter_by(rollno=rollno).all()
    r=student_personal_details_schema.dump(m)
    return jsonify(r)


@app.route('/get/student/attendance/<rollno>/',methods=["GET"])
def get_students_attendance(rollno):
    m=Attendance.query.filter_by(rollno=rollno).first().attendance
    return jsonify(int(m))


@app.route('/get/faculty/<dept>/',methods=["GET"])
def get_faculty(dept):
    m=Faculty.query.filter_by(department=dept).all()
    r=faculty_schema.dump(m)
    return jsonify(r)


@app.route('/alumni/login',methods=["POST"])
def alumni_login():
    username=request.json["AlumniID"]
    password=request.json["Password"]
    s=Alumni.query.filter_by(username=username).first()
    print(username)
    print(password)
    if s:
        if password==s.password:
            return '2',200
        else:
            return '1',401
    else:
        return '0',401
    


@app.route('/alumni/application',methods=["POST"])
def alumni_application():
    name=request.json["Name"]
    rollno=request.json["RollNo"]
    dept=request.json["Department"]
    yoj=request.json["YOJ"]
    yop=request.json["YOP"]
    username=request.json["AlumniID"]
    password=request.json["Password"]
    purpose=request.json["Purpose"]
    print(name,rollno,dept,yoj,yop,username,password,purpose)
    with app.app_context():
        row=AlumniAppication(rollno,name,dept,username,password,purpose,yoj,yop)
        db.session.add(row)
        db.session.commit()
        return '200'


@app.route('/get/alumni',methods=['GET'])    
def get_alumni():
    with app.app_context():
        l=Alumni.query.all()
        r=alumnis_schema.dump(l)
        return jsonify(r)



@app.route('/get/alumni/details/<id>/',methods=['GET'])    
def get_alumni_details(id):
    with app.app_context():
        l=Alumni.query.filter_by(username=id).all()
        r=alumnis_schema.dump(l)
        return jsonify(r)


@app.route('/get/alumni/<username>/',methods=['GET'])    
def alumni_name(username):
    with app.app_context():
        l=Alumni.query.filter_by(username=username).first().name
        # r=alumnis_schema.dump(l)
        return jsonify(l)



@app.route('/get/alumniapplication',methods=['GET'])    
def alumni_get_application():
    with app.app_context():
        l=AlumniAppication.query.order_by(AlumniAppication.date).all()
        r=alumnisapplication_schema.dump(l)
        return jsonify(r)
    


@app.route('/get/passedouts/<rollno>/',methods=['GET'])    
def passedouts(rollno):
    with app.app_context():
        l=StudentRecords.query.filter_by(rollno=rollno).all()
        r=student_records_schema.dump(l)
        return jsonify(r)


@app.route('/alumni/acceptapplication',methods=["PUT"])
def alumni_accept_application():
    rollno=request.json["rollno"]
    row=AlumniAppication.query.filter_by(rollno=rollno).first()
    r=Alumni(row.rollno,row.name,row.department,row.username,row.password,row.state_your_purpose,row.year_of_join,row.year_of_pass)
    db.session.add(r)
    db.session.delete(row)
    db.session.commit()
    return 'Accepted'



@app.route('/alumni/rejectapplication',methods=["PUT"])
def alumni_reject_application():
    rollno=request.json["rollno"]
    row=AlumniAppication.query.filter_by(rollno=rollno).first()
    db.session.delete(row)
    db.session.commit()
    return 'Rejected'


@app.route('/alumni/availableevents',methods=["GET"])
def alumni_available_events():
    with app.app_context():
        k=AlumniAvailableEvents.query.all()
        for i in k:
            db.session.delete(i)
        db.session.commit()
        from datetime import datetime, timedelta
        now = datetime.now()
        time_slots = [10,12,14]
        venue=['Panda Punnaiah Square','KS Auditorium C-Block','JSK Greens','Seminar Hall B-Block','APJ Abdul Kalam Auditorium D-Block']
        with app.app_context():
            k=AlumniAvailableEvents.query.count()
            if k!=7*len(time_slots)*len(venue):
                for i in range(7):
                    next_date = now + timedelta(days=i)
                    for hour in time_slots:
                        for v in venue:
                            row=AlumniAvailableEvents(next_date.strftime('%Y-%m-%d'),hour,v,'Available')
                            db.session.add(row)
                            db.session.commit()
        now = datetime.now()
        date=now.strftime("%Y-%m-%d")
        p=int(str(now.strftime("%H:%M:%S")).split(":")[0])
        k=AlumniAvailableEvents.query.all()
        for i in k:
            if date==i.date:
                if p>=int((i.time)):
                    i.status='UnAvailable'
                    db.session.commit()
        get=Events.query.all()
        for i in get:
            v=AlumniAvailableEvents.query.filter_by(date=i.date).filter_by(time=i.time).filter_by(venue=i.venue).first()
            if v:
                v.status='UnAvailable'
        db.session.commit()
        k=AlumniAvailableEvents.query.all()
        r=alumniavailableevents_schema.dump(k)
        return jsonify(r)


@app.route('/alumni/event',methods=["POST"])
def alumni_event():
    title=request.json["Title"]
    email=request.json["Email"]
    phone_no=request.json["PhoneNo"]
    date=request.json["Date"]
    time=request.json["Time"]
    venue=request.json["Venue"]
    alumni_id=request.json["AlumniID"]
    description=request.json["Description"]
    k=AlumniAvailableEvents.query.filter_by(date=date).filter_by(time=time).filter_by(venue=venue).first()
    k.status='UnAvailable'
    db.session.commit()
    with app.app_context():
        row=Events(title,email,phone_no,date,time,venue,alumni_id,description)
        db.session.add(row)
        db.session.commit()
        return '200'
 


@app.route('/get/alumni/events/<alumni_id>/',methods=['GET'])    
def get_alumni_events(alumni_id):
    with app.app_context():
        l=Events.query.filter_by(alumni_id=alumni_id).order_by(Events.id.desc()).all()
        r=events_schema.dump(l)
        return jsonify(r)


@app.route('/get/alumnievents',methods=['GET'])    
def get_alumni_events_all():
    with app.app_context():
        l=Events.query.order_by(Events.id.desc()).all()
        r=events_schema.dump(l)
        return jsonify(r)
    

@app.route('/get/alumnievents/today',methods=['GET'])    
def get_alumni_events_today():
    from datetime import datetime
    now = datetime.now()
    date=now.strftime("%Y-%m-%d")
    with app.app_context():
        l=Events.query.filter_by(date=date).order_by(Events.id.desc()).all()
        r=events_schema.dump(l)
        return jsonify(r)



if __name__=='__main__':
    app.run(debug = True)