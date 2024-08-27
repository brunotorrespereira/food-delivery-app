

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Listagem({ data }) {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Nome:{data.nome}</Text>
      <Text style={styles.texto}>SobreNome:{data.sobreNome}</Text>
      <Text style={styles.texto}>Cargo:{data.cargo}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFED",
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc'
  },
  texto: {
    margin:5,
    fontSize: 20,
    color:'#000'
  }
});


