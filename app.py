from flask import Flask, render_template
import os
app = Flask(__name__)

@app.route('/')
def index():
    diploms = [diplom for diplom in os.listdir('./static/images/') if diplom.startswith('diplom')]
    
    return render_template('index.html', diploms=diploms)

if __name__ == '__main__':
    app.run('localhost', 8000, debug=True)