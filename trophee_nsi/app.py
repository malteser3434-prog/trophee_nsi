from flask import Flask, render_template, request, redirect, url_for, session

app = Flask(__name__)
app.secret_key


@app.route("/")
def view():
    return render_template("view.html")

@app.route('/chemin')
def chemin():
    return render_template('chemin.html')

@app.route('/front_eglise')
def front_eglise():
    # On récupère l'inventaire pour que Jinja sache s'il doit afficher le bouton
    inventory = session.get('inventory', [])
    return render_template('front_eglise.html', inventory=inventory)

@app.route('/in_eglise')
def in_eglise():
    # On récupère l'inventaire ou une liste vide si rien n'existe
    inventory = session.get('inventory', [])
    
    # On envoie l'info au HTML
    return render_template('in_eglise.html', inventory=inventory)

@app.route("/enigme1")
def enigme1():
    inventory = session.get('inventory', [])
    return render_template('enigme1.html', inventory=inventory)



@app.route('/inside_car', methods=["GET", "POST"])
def inside_car():
    message = ""
    if request.method == "POST":
        # .strip() enlève les espaces en trop si le joueur en met par erreur
        reponse = request.form.get("reponse").strip() 
        
        if reponse == "42":
            # Au lieu d'un message, on peut aussi rediriger directement :
            # return redirect(url_for('index')) 
            return redirect(url_for('in_eglise'))
        else:
            message = "Mauvaise réponse, cherche encore..."
            
    return render_template('inside_car.html', message=message)

@app.route('/ramasser/<item>')
def ramasser(item):
    if 'inventory' not in session:
        session['inventory'] = []
    
    # On crée une copie, on ajoute, et on réassigne (obligatoire pour Flask)
    inv = list(session['inventory'])
    if item not in inv:
        inv.append(item)
        session['inventory'] = inv 
        session.modified = True # Force la sauvegarde immédiate
    
    return {"status": "ok", "inventory": session['inventory']}

if __name__ == "__main__":
    app.run(debug=True)