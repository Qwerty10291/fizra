from flask import Flask, render_template
import os
app = Flask(__name__)

@app.route('/')
def index():
    diploms = [diplom for diplom in os.listdir('./static/images/') if diplom.startswith('diplom')]
    return render_template('index.html', diploms=diploms)

@app.route('/pupils')
def pupils():
    return render_template('pupils.html')

@app.route('/manuals')
def manuals():
    return render_template('manual.html')

if __name__ == '__main__':
    app.run('localhost', 8000, debug=True)