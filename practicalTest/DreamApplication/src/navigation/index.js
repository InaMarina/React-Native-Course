import React from 'react';

//This is the import for the UI library
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import {AuthProvider} from './AuthProvider';
import Routes from './Routes';

//Theme for react native paper
const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#b55f91',
    accent: '#f1c40f',
    background: 'rgba(243, 230, 251,  0.5)',
  },
};

//All providers here
export default function Providers() {
  return (
    <PaperProvider theme={theme}>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </PaperProvider>
  );
}
