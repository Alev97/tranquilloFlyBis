import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet, TouchableOpacity } from 'react-native';
import axios from 'axios';

const Voli= () => {
  const [voli, setVoli] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVoli = async () => {
      try {
        const response = await axios.get('http://localhost:8080/voli'); 
        setVoli(response.data);
      } catch (err) {
        setError("Errore nel recuperare i dati dei voli.");
      } finally {
        setLoading(false);
      }
    };

    fetchVoli();
  }, []);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#00b5e2" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>I nostri voli:</Text>
      
      <FlatList
        data={voli}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card}>
            <View style={styles.cardRow}>
              <Text style={styles.text}>Compagnia: {item.compagnia}</Text>
              <Text style={styles.text}>Duarata: {item.durata ? item.durata : 'Non disponibile'}</Text>
            </View>
            <View style={styles.cardRow}>
              <Text style={styles.text}>Partenza: {item.partenza}</Text>
              <Text style={styles.text}>Arrivo: {item.arrivo}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#f4f4f4',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#00b5e2',
    marginBottom: 15,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#ffffff',
    marginBottom: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    padding: 15,
    borderLeftWidth: 5,
    borderColor: '#FF7043',
  },
  cardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    color: '#333',
    flex: 1,
    marginRight: 5,
  },
  errorText: {
    fontSize: 18,
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Voli;
