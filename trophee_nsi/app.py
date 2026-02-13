from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

@app.route("/")
def accueil():
    return render_template("index.html")

@app.route("/enigme1", methods=["GET", "POST"])
def enigme1():
    message = ""
    if request.method == "POST":
        # .strip() enlève les espaces en trop si le joueur en met par erreur
        reponse = request.form.get("reponse").strip() 
        
        if reponse == "42":
            # Au lieu d'un message, on peut aussi rediriger directement :
            # return redirect(url_for('index')) 
            return redirect(url_for('accueil'))
        else:
            message = "Mauvaise réponse, cherche encore..."
            
    return render_template('enigme1.html', message=message)

if __name__ == "__main__":
    app.run(debug=True)
