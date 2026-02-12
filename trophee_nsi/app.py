from flask import Flask, render_template, request

app = Flask(__name__)

@app.route("/")
def accueil():
    return render_template("index.html")

@app.route("/enigme1", methods=["GET", "POST"])
def enigme1():
    message = ""
    if request.method == "POST":
        if request.form.get("reponse") == "42":
            message = "Bravo ! Prochaine énigme : /enigme2xg"
        else:
            message = "Mauvaise réponse"

    return render_template("enigme1.html", message=message)

if __name__ == "__main__":
    app.run(debug=True)
