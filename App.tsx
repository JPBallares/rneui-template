import {Text} from '@rneui/themed';
import React from 'react';
import {View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaProvider>
      <View>
        <Text>Home</Text>
      </View>
    </SafeAreaProvider>
  );
};

export default App;
