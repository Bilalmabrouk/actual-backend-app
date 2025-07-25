import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, ActivityIndicator } from 'react-native';

import HomeScreen from './src/screens/HomeScreen';
import MarketScreen from './src/screens/MarketScreen';
import NewsScreen from './src/screens/NewsScreen';
import { initLocalization } from './src/i18n';
import LanguageSwitcher from './src/components/LanguageSwitcher';
import i18n from './src/i18n';

const Tab = createBottomTabNavigator();

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Initialize localization with device settings
    initLocalization();
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#000' }}>
        <ActivityIndicator color="#fff" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <LanguageSwitcher />
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Home" component={HomeScreen} options={{ title: i18n.t('home') }} />
        <Tab.Screen name="Market" component={MarketScreen} options={{ title: i18n.t('market') }} />
        <Tab.Screen name="News" component={NewsScreen} options={{ title: i18n.t('news') }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
