import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import Articulos from './components/Articulos';
import Galeria from './components/Galeria';
import Camara from './components/Camara';

const Tab = createBottomTabNavigator();


export default function App() {

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Articulos" component={Articulos} />
        <Tab.Screen name="Galeria" component={Galeria} />
        <Tab.Screen name="Camara" component={Camara} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}
