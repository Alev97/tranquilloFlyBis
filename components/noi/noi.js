// TextPage.js
import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const AboutUs = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>La nostra storia</Text>

        <View style={styles.textContainer}>
        <Text style={styles.text}>
            C'era una volta un'agenzia di viaggi chiamata "TranquilloTravel", situata nel cuore di una tranquilla città. Fondata da due amici, Tran e Quillo, la loro missione era quella di trasformare i sogni di viaggio in tranquille realtà per chiunque varcasse la soglia dell'agenzia. Ogni giorno, accoglievano clienti con occhi sognanti, pronti a esplorare tranquillamente il mondo.
            Un giorno, un cliente entrò con un desiderio particolare: visitare le meraviglie del Giappone. Marco e Laura si misero subito al lavoro, creando un itinerario che includeva templi antichi, giardini zen e la tranquillità di Tokyo.
            Dopo settimane di preparativi, il cliente partì, e al suo ritorno, tornò in agenzia con un sorriso contagioso e racconti affascinanti. La sua esperienza ispirò altri a visitare "TranquilloTravel", trasformando l'agenzia in un punto di riferimento per chi desiderava scoprire il mondo.
            Con il passare del tempo, Tran e Quillo capirono che non stavano solo vendendo viaggi tranquilli, ma creando ricordi indimenticabili per tutti.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    justifyContent: 'flex-start', 
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center', 
    marginBottom: 20, 
    color: '#333'
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    color: 'black',
    padding: 10,
  },
});

export default AboutUs;
