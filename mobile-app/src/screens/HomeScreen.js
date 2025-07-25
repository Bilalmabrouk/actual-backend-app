import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import i18n from '../i18n';

const featured = [
  { id: 1, image: 'https://placehold.co/300x200' },
  { id: 2, image: 'https://placehold.co/300x200' },
  { id: 3, image: 'https://placehold.co/300x200' }
];

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>{i18n.t('welcome')}</Text>
      <Text style={styles.slogan}>{i18n.t('slogan')}</Text>
      <ScrollView horizontal style={styles.carousel} showsHorizontalScrollIndicator={false}>
        {featured.map(item => (
          <Image key={item.id} source={{ uri: item.image }} style={styles.slide} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingTop: 80,
    alignItems: 'center'
  },
  welcome: {
    color: '#fff',
    fontSize: 22,
    marginBottom: 10
  },
  slogan: {
    color: '#fff',
    marginBottom: 20
  },
  carousel: {
    flexGrow: 0
  },
  slide: {
    width: 300,
    height: 200,
    marginRight: 10
  }
});
