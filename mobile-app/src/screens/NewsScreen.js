import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import i18n from '../i18n';

const news = [
  { id: 1, title: 'New perfume launched', desc: 'Try our latest scent.', image: 'https://placehold.co/200x100' },
  { id: 2, title: 'Summer sale', desc: 'Get 20% off.', image: 'https://placehold.co/200x100' }
];

export default function NewsScreen() {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.desc}>{item.desc}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList data={news} keyExtractor={i => i.id.toString()} renderItem={renderItem} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingTop: 80
  },
  item: {
    flexDirection: 'row',
    margin: 10,
    borderBottomColor: '#444',
    borderBottomWidth: 1,
    paddingBottom: 10
  },
  image: {
    width: 100,
    height: 50,
    marginRight: 10
  },
  info: {
    flex: 1
  },
  title: {
    color: '#fff',
    marginBottom: 5
  },
  desc: {
    color: '#fff'
  }
});
