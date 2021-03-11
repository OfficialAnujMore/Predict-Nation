
from flask import Flask, render_template,request,url_for
from flask_bootstrap import Bootstrap 


# NLP Packages
from textblob import TextBlob,Word 
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
	return render_template('input_form.html')


@app.route('/analyse',methods = ['POST'])
def analyse():

	if request.method == 'POST':
		raw_text = request.form['rawtext']
		#NLP stuff
		blob_polarity = 0 
		blob_subjectivity = 0
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
							blob_polarity = blob_polarity,
							blob_subjectivity = blob_subjectivity,
							sentiment = sentiment,
							)




if __name__ == '__main__':
	app.run(debug=True)