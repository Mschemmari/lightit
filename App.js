import * as React from 'react';
import { Image } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Aberturas, Equipamiento, Terminaciones } from './src/screens'
import { images } from './src/theme'
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Aberturas" component={Aberturas}
          options={{
            tabBarIcon: () => {
              return (
                <Image
                  style={{ width: 25, height: 25 }}
                  source={images.ABERTURAS_TAB}
                />
              );
            },
          }}
        />
        <Tab.Screen name="Equipamiento" component={Equipamiento}
          options={{
            tabBarIcon: () => {
              return (
                <Image
                  style={{ width: 30, height: 30 }}
                  source={images.EQUIPAMIENTO_TAB}
                />
              );
            },
          }}
        />
        <Tab.Screen name="Terminaciones" component={Terminaciones}
          options={{
            tabBarIcon: () => {
              return (
                <Image
                  style={{ width: 25, height: 25 }}
                  source={images.TERMINACIONES_TAB}
                />
              );
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App;