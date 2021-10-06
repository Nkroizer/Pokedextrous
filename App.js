import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import InformationScreen from './components/InformationMain';
import GameScreen from './components/GameMain';
import AwardScreen from './components/AwardMain';
import CollectionScreen from './components/CollectionMain';
import RegionPokedex from './components/RegionPokedex';
import PokemonDetails from './components/PokemonDetails';

function HomeScreen({ navigation }) {
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <div style={mainScreenButton}>
        <TouchableOpacity onPress={() => navigation.navigate('Information')}>

          <Text style={mainScreenButtonText}>
            Information
          </Text>

        </TouchableOpacity>
      </div>

      <div style={mainScreenButton}>
        <TouchableOpacity onPress={() => navigation.navigate('CollectionHelper')}>

          <Text style={mainScreenButtonText}>
            Collection
          </Text>

        </TouchableOpacity>
      </div>

      <div style={mainScreenButton}>
        <TouchableOpacity onPress={() => navigation.navigate('PokemonGame')}>

          <Text style={mainScreenButtonText}>
            Game
          </Text>

        </TouchableOpacity>
      </div>

      <div style={mainScreenButton}>
        <TouchableOpacity onPress={() => navigation.navigate('PokemonAwards')}>

          <Text style={mainScreenButtonText}>
            Awards
          </Text>

        </TouchableOpacity>
      </div>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Information" component={InformationScreen} />
        <Stack.Screen name="CollectionHelper" component={CollectionScreen} />
        <Stack.Screen name="PokemonGame" component={GameScreen} />
        <Stack.Screen name="PokemonAwards" component={AwardScreen} />
        <Stack.Screen name="Kanto" component={RegionPokedex} />
        <Stack.Screen name="Jhoto" component={RegionPokedex} />
        <Stack.Screen name="Hoenn" component={RegionPokedex} />
        <Stack.Screen name="Sinnoh" component={RegionPokedex} />
        <Stack.Screen name="Unova" component={RegionPokedex} />
        <Stack.Screen name="Kalos" component={RegionPokedex} />
        <Stack.Screen name="Alola" component={RegionPokedex} />
        <Stack.Screen name="Galar" component={RegionPokedex} />
        <Stack.Screen name="Other" component={RegionPokedex} />
        <Stack.Screen name="PokemonDetails" component={PokemonDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const mainScreenButton = {
  background: '#fe0066',
  borderRadius: '5px',
  border: '1px solid black',
  boxShadow: '2px 2px 7px 0px',
  margin: '10px',
  textAlign: 'center',
  textTransform: 'uppercase',
  width: '90%'
}

const mainScreenButtonText = {
  color: 'white',
  fontFamily: '"Flexo-Demi", arial, sans-serif',
  margin: '5px',
  fontWeight: '700',
  fontSize: '20px'
}