import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import i18n from '../i18n';

export default function ProductCard({ product, onAdd }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.price}>{product.price} $</Text>
      <TouchableOpacity onPress={() => onAdd(product)}>
        <Text style={styles.add}>{i18n.t('add_to_cart')}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#111',
    padding: 10,
    margin: 10,
    borderRadius: 8,
    width: 150,
    alignItems: 'center'
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10
  },
  name: {
    color: '#fff',
    marginBottom: 5
  },
  price: {
    color: '#fff',
    marginBottom: 5
  },
  add: {
    color: '#fff'
  }
});
