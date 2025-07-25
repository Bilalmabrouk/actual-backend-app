import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import i18n, { initLocalization } from '../i18n';

export default function LanguageSwitcher() {
  const [lang, setLang] = useState(i18n.locale);

  const toggleLang = () => {
    const newLang = lang === 'ar' ? 'fr' : 'ar';
    setLang(newLang);
    initLocalization(newLang);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleLang}>
        <Text style={styles.text}>{lang === 'ar' ? 'FR' : 'AR'}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 40,
    right: 20,
    zIndex: 10
  },
  text: {
    color: '#fff',
    fontSize: 16
  }
});
