import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/modules/redux/store';
import { RootNavigation } from './src/modules/navigation/rootNavigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const App = () => {

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <RootNavigation />
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;