from flask import Flask, render_template  # On ajoute render_template ici

app = Flask(__name__)

@app.route('/')
def home():
    # render_template va chercher automatiquement dans le dossier /templates
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)