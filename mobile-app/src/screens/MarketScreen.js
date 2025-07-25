import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import ProductCard from '../components/ProductCard';
import i18n from '../i18n';

const products = [
  { id: 1, name: 'Perfume A', price: 50, image: 'https://placehold.co/100x100', category: 'products' },
  { id: 2, name: 'Accessory B', price: 20, image: 'https://placehold.co/100x100', category: 'accessories' }
];

export default function MarketScreen() {
  const [filter, setFilter] = useState(null);

  const filtered = filter ? products.filter(p => p.category === filter) : products;

  return (
    <View style={styles.container}>
      <View style={styles.filterRow}>
        <TouchableOpacity onPress={() => setFilter('products')} style={styles.filterButton}>
          <Text style={styles.filterText}>{i18n.t('products')}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setFilter('accessories')} style={styles.filterButton}>
          <Text style={styles.filterText}>{i18n.t('accessories')}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setFilter(null)} style={styles.filterButton}>
          <Text style={styles.filterText}>{i18n.t('filter')}</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={filtered}
        numColumns={2}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => <ProductCard product={item} onAdd={() => {}} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingTop: 80
  },
  filterRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10
  },
  filterButton: {
    marginHorizontal: 5,
    borderColor: '#fff',
    borderWidth: 1,
    padding: 5,
    borderRadius: 4
  },
  filterText: {
    color: '#fff'
  }
});
