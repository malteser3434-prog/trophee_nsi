from flask import Flask, render_template, request, redirect, url_for, session

app = Flask(__name__)

@app.route("/")
def accueil():
    return render_template("index.html")

@app.route('/chemin')
def chemin():
    return render_template('chemin.html')

@app.route('/front_eglise')
def front_eglise():
    return render_template('front_eglise.html')

@app.route('/in_eglise')
def in_eglise():
    return render_template('in_eglise.html')

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

@app.route('/ramasser/<item>')
def ramasser(item):
    if 'inventory' not in session:
        session['inventory'] = []
    
    inventory = session['inventory']
    if item not in inventory:
        inventory.append(item)
        session['inventory'] = inventory # Crucial pour Flask
    
    return {"status": "ok", "inventory": session['inventory']}