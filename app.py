

from flask import Flask, render_template,request,url_for
from flask_bootstrap import Bootstrap 
import pickle
import numpy as np
model=pickle.load(open('model.pkl','rb'))


# NLP Packages
from textblob import TextBlob, Word
import random
import time

app = Flask(__name__, template_folder='pages')
Bootstrap(app)


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/login')
def login():
    return render_template('login.html')


@app.route('/form')
def form():
    blob_polarity = 0
    blob_subjectivity = 0
    sentiment = 'None'
    received_text = 'None'
    return render_template('input_form.html',
                           blob_polarity=blob_polarity,
                           blob_subjectivity=blob_subjectivity,
                           sentiment=sentiment,
                           )


@app.route('/analyse', methods=['POST'])
def analyse():

<<<<<<< HEAD
	blob_polarity = 0 
	blob_subjectivity = 0
	sentiment = 'None'
	received_text = 'None'
	if request.method == 'POST':
		raw_text = request.form['rawtext']
		developer_field=request.form['developer']
		option1=request.form.get("1", False)
		option2=request.form.get("2", False)
		option3=request.form.get("3", False)
		option4=request.form.get("4", False)
		option5=request.form.get("5", False)
		option6=request.form.get("6", False)
		option7=request.form.get("7", False)
		option8=request.form.get("8", False)
		option9=request.form.get("9", False)
		option10=request.form.get("10", False)
		option11=request.form.get("11", False)
		option12=request.form.get("12", False)
		option13=request.form.get("13", False)
		option14=request.form.get("14", False)
		option15=request.form.get("15", False)
		option16=request.form.get("16", False)
		option17=request.form.get("17", False)
		option18=request.form.get("18", False)
		option19=request.form.get("19", False)
		option20=request.form.get("20", False)
		option21=request.form.get("21", False)
		option22=request.form.get("22", False)
		option23=request.form.get("23", False)
		option24=request.form.get("24", False)
		option25=request.form.get("25", False)
		option26=request.form.get("26", False)
		option27=request.form.get("27", False)
		option28=request.form.get("28", False)
		option29=request.form.get("29", False)
		option30=request.form.get("30", False)
		option31=request.form.get("31", False)
		option32=request.form.get("32", False)
		option33=request.form.get("33", False)
		option34=request.form.get("34", False)
		option35=request.form.get("35", False)
		option36=request.form.get("36", False)
		option37=request.form.get("37", False)
		option38=request.form.get("38", False)
		option39=request.form.get("39", False)
		option40=request.form.get("40", False)
		option41=request.form.get("41", False)
		option42=request.form.get("42", False)
		option43=request.form.get("43", False)
		option44=request.form.get("44", False)
		option45=request.form.get("45", False)
		option46=request.form.get("46", False)
		option47=request.form.get("47", False)
		option48=request.form.get("48", False)
		option49=request.form.get("49", False)
		option50=request.form.get("50", False)
		option51=request.form.get("51", False)
		option52=request.form.get("52", False)
		option53=request.form.get("53", False)
		option54=request.form.get("54", False)
		option55=request.form.get("55", False)
		option56=request.form.get("56", False)
		list1=[option1, option2, option3, option4, option5, option6, option7, option8, option9, option10, option11, option12, option13, option14, option15, option16, option17, option18, option19, option20, option21, option22, option23, option24, option25, option26, option27,option28, option29, option30, option31, option32, option33, option34, option35, option36, option37, option38, option39, option40, option41, option42, option43,option44, option45, option46, option47, option48, option49, option50, option51, option52, option53, option54, option55, option56]
		list2=[]
		for i in range(0,len(list1)):
			if (list1[i] != False) :
				list2.append(1)
			else:
				list2.append(0)
		developer_list1=['Android Developer','AI Developer','Backend Developer','Business Analyst','Cloud Computing','Data Analyst','Data Science','Deep Learning','Flutter Developer','Game Developer']
		developer_list2=[8,16,24,31,38,44,50,54,59,65]
		developer_list3=[0,0,0,0,0,0,0,0,0,0]
		for i in range(len(developer_list1)):
			if(developer_field==developer_list1[i]):
				developer_list3[i]=1
				break
		for i in range(len(developer_list3)):
			list2.insert(developer_list2[i],developer_list3[i])
		
		prediction=model.predict([list2])
		final_output="Your current estimated market value is ₹"+str(int(prediction))+".00 "
		#NLP stuff
		
		blob = TextBlob(raw_text)
		received_text2 = blob
		blob_polarity = blob.sentiment.polarity
		blob_subjectivity = blob.sentiment.subjectivity
		
		if blob_polarity < 0:
			sentiment = 'Negative'
		elif blob_polarity > 0:
			sentiment = 'Positive'
		else:
			sentiment = "Neutral"

	return render_template('input_form.html', 
							received_text = received_text2,
							blob_polarity = round(blob_polarity*100,2),
							blob_subjectivity = round(blob_subjectivity*100,2),
							sentiment = sentiment,
							developer_field=developer_field,
							option1=final_output,

							)

if __name__ == '__main__':
    app.run(debug=True)
