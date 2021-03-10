from flask import Flask, render_template,request,url_for


# NLP Packages
from textblob import TextBlob,Word 
import random 
import time

app = Flask(__name__)


@app.route('/')
def index():
	return render_template('/index.html')




if __name__ == '__main__':
	app.run(debug=True)