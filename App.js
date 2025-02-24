import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import SplashScreen from './components/splashscreen/SplashScreen';


const App = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [showLogin, setShowLogin] = useState(false);
  const [activeComponent, setActiveComponent] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return <SplashScreen />; 
  }


  const handleLogin = () => {
    console.log('Email:', email);
    console.log('Password:', password);
    // resetta i campi dopo il login
    setEmail('');
    setPassword('');
    setShowLogin(false);
  };

  const renderActiveComponent = () => {
    switch (activeComponent) {
      case 'shopping':
        return <Text>Elenco degli acquisti fatti</Text>;
      case 'noi':
        return (
        <Text style={styles.contactText}>
          Siamo molto bravi
          </Text>
        );
      case 'search':
        return <Text>Form per cercare dei viaggi</Text>;
      case 'contatti':
        return (
          <Text style={styles.contactText}>
            Telefono: +39 123456789{'\n'}
            Email: qwerty@qaz.com
          </Text>
        );
        
      default:
        return null;
    }
  };

 
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.leftHeader}>
          <Button
            title="Accedi"
            onPress={() => setShowLogin(true)}
            icon={<Icon name="sign-in" size={20} color="white" />}
          />
        </View>
        <View>
        <TouchableOpacity onPress={() => console.log('Bandiera cliccata')} style={styles.headerButton}>
            <Image
              source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/0/03/Flag_of_Italy.svg'}}// Percorso dell'immagine della bandiera
              style={styles.flagImage} // Stile dell'immagine
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.activeComponent}>
        {showLogin ? (
          <View style={styles.loginContainer}>
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
              <Button title="Esegui Login" onPress={handleLogin} />
            </View>
        ) : (
        renderActiveComponent()
        )}
      </View>
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => setActiveComponent('noi')} style={styles.footerButton}>
          <Text>ABOUT US</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveComponent('contatti')} style={styles.footerButton}>
          <Icon name="phone" size={20} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#ADD8E6',
    alignItems: 'center',
  },
  headerButton: {
    alignItems: 'center',
  },
  leftHeader: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  rightHeader: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'row',
    paddingRight: 35,
  },
  cartIcon: {
    width: 30,
    height: 30,
    marginLeft: 30,
  },
  flagImage: {
    width: 30, // Larghezza dell'immagine
    height: 20, // Altezza dell'immagine
  },
  activeComponent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: '#ADD8E6',
  },
  footerButton: {
    alignItems: 'center',
  },
  contactText: {
    fontSize: 30, // Imposta la dimensione del font
    color: 'black', // Puoi anche impostare il colore se necessario
  },
  loginContainer: {
    alignItems: 'center',
  },
});

export default App;