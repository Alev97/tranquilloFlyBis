import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import decollo from '../../assets/decollo.jpeg'
 
const SplashScreen = () => {
    return (
        <View style={styles.splashContainer}>
            <Image source={decollo} style={styles.splashImage} />
            <View style={styles.overlay}>
                <Text style={styles.overlayText}>La Tranquillità è vitale!</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

  splashContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  splashImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  overlay: {
    position: 'absolute', // Posiziona l'overlay sopra l'immagine
    bottom: 50, // Distanza dal fondo
    left: 0,
    right: 0,
    alignItems: 'center', // Centra il testo orizzontalmente
},
overlayText: {
    color: 'white', // Colore del testo
    fontSize: 30, // Dimensione del font
    textAlign: 'center', // Centra il testo
    backgroundColor: 'rgba(0, 0, 0, 0.83)', // Sfondo semi-trasparente per migliorare la leggibilità
    padding: 10, // Padding attorno al testo
    borderRadius: 5, // Angoli arrotondati
},
});

export default SplashScreen;