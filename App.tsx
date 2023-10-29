import 'react-native-gesture-handler';

import React from 'react'
import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from '@/contexts/auth';

import Routes from '@/routes';

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
}
