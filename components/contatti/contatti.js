import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const Contatti = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          Contattaci per ulteriori informazioni!{'\n'},{'\n'}
          Puoi raggiungerci via email a: info@tranquillotravel.com{'\n'}
          O chiamarci al: +123 456 789
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'flex-start',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: height * 0.1, 
  },
  text: {
    fontSize: width * 0.045,
    textAlign: 'center',
    color: 'black',
    padding: 10,
  },
});

export default Contatti;
