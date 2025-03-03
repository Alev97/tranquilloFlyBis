import React, {useEffect, useState} from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import SplashScreen from '../splashscreen/SplashScreen'
import Carosello from '../../components/carosello/carosello';

const { width, height } = Dimensions.get('window');

const Home = ({ navigation }) => {
    const [showSplash, setShowSplash] = useState(true);


    useEffect(() => {
        const timer = setTimeout(() => {
            setShowSplash(false);
        }, 2500);
        return () => clearTimeout(timer);
        }, []);
        
        if (showSplash) {
            return <SplashScreen />; 
           }

  return (
    <View style={styles.container}>
      <View style={styles.menu}>
        <View style={styles.leftMenu}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')} >
            <Text style={styles.buttonText}>ACCEDI</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.rightMenu}>
          <Image source={require('../../assets/trtr.jpg')} style={styles.logo} />
        </View>
      </View>

      <View style={styles.body}>
        <Carosello />
      </View>

      <View style={styles.footer}>
        <View style={styles.leftFooter}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AboutUs')}>
            <Text style={styles.buttonText}>ABOUT US</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.rightFooter}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Contatti')}>
            <Text style={styles.buttonText}>CONTATTI</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: 'hidden',
    justifyContent: 'space-between',
  },
  menu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#A8E6CF',
    alignItems: 'center'

  },
  leftMenu: {
    flex: 1,
    alignItems: 'flex-start',
  },
  rightMenu: {
    flex: 1,
    alignItems: 'flex-end',

  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 20,
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#A8E6CF',
    alignItems: 'center',
  },
  leftFooter: {
    flex: 1,
    alignItems: 'flex-start',
  },
  rightFooter: {
    flex: 1,
    alignItems: 'flex-end',
  },

  button: {
    backgroundColor: '#FF7043', 
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },

  buttonText: {
    color: 'black',
    fontSize: width * 0.045,
  }
});


export default Home;