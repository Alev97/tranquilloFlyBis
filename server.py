from flask import Flask, jsonify, request
import json
import os
from flask_cors import CORS
import traceback


api = Flask(__name__)

CORS(api, resources={r"/*": {"origins": "*"}})

def caricaDati(filename):
   if not os.path.exists(filename):
        return None  
   try:
        with open(filename, 'r') as file:
            return json.load(file)  
   except Exception as e:
        print(f"Errore durante il caricamento dei dati: {e}")
        return None  


def caricaUtenti(filename):
    print(f"Caricamento utenti dal file: {filename}") 
    
    try:
        with open(filename, 'r') as file:
            utenti = json.load(file)
            print(f"Utenti caricati: {utenti}")  
            return utenti  
    except Exception as e:
        print(f"Errore durante il caricamento dei dati: {e}")
        return None


@api.route('/login', methods = ['POST'])
def login():

    try: 
        data = request.get_json()
        
        if data is None:
            return jsonify({"error": "Username e password sono richiesti."}), 400

        username = data['username']
        password = data['password']
        
        utenti = caricaUtenti('./json/utenti.json')
        
        if utenti is None:
            return jsonify({"error": "Impossibile caricare i dati degli utenti."}), 500
        
        for utente in utenti:
            if utente['username'] == username:
                if utente['password'] == password:
                    return jsonify({"message": "Login effettuato con successo!"}), 200
                else:
                    return jsonify({"error":"Crendenziali errate."}), 401
                
        return jsonify({"error":"Credenziali errate."}), 404
    
    except Exception as e:
        return jsonify({"error": f"Errore interno: {str(e)}", "details": traceback.format_exc()}), 500




@api.route('/voli', methods = ['GET'])
def mostraVoli():
    voli = caricaDati('./json/voli.json')
    if voli is None:
        return jsonify({"error": "Impossibile caricare i dati dei voli."}), 500
    if not voli:
        return jsonify({"error": "Nessun volo disponibile."}), 404
    
    return jsonify(voli)


@api.route('/hotels', methods = ['GET'])
def mostraHotel():
    hotels = caricaDati('./json/hotels.json')
    if hotels is None:
        return jsonify({"error": "Impossibile caricare i dati degli hotels."}), 500
    if not hotels:
        return jsonify({"error": "Nessun hotel disponibile."}), 404
    
    return jsonify(hotels)


@api.route('/attività', methods = ['GET'])
def mostraAttività():
    attività = caricaDati('./json/attività.json')
    if attività is None:
        return jsonify({"error": "Impossibile caricare i dati delle attività."}), 500
    if not attività:
        return jsonify({"error": "Nessun attività disponibile."}), 404
    
    return jsonify(attività)


if __name__ == '__main__':
    api.run(host = "127.0.0.1", port = 8080)

