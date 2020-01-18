from flask import Flask,render_template,request
app = Flask(__name__,static_folder="../public",template_folder="../public")

@app.route('/',methods=['GET','POST'])
def hello_world():
    return render_template('index.html')
@app.route('/Volunteer')
def hello():
	return {'request.data':request.data}
