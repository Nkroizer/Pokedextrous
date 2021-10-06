import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
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
      <View style={styles.mainScreenButton}>
        <TouchableOpacity onPress={() => navigation.navigate('Information')}>

          <Text style={styles.mainScreenButtonText}>
            Information
          </Text>

        </TouchableOpacity>
      </View>

      <View style={styles.mainScreenButton}>
        <TouchableOpacity onPress={() => navigation.navigate('CollectionHelper')}>

          <Text style={styles.mainScreenButtonText}>
            Collection
          </Text>

        </TouchableOpacity>
      </View>

      <View style={styles.mainScreenButton}>
        <TouchableOpacity onPress={() => navigation.navigate('PokemonGame')}>

          <Text style={styles.mainScreenButtonText}>
            Game
          </Text>

        </TouchableOpacity>
      </View>

      <View style={styles.mainScreenButton}>
        <TouchableOpacity onPress={() => navigation.navigate('PokemonAwards')}>

          <Text style={styles.mainScreenButtonText}>
            Awards
          </Text>

        </TouchableOpacity>
      </View>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
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

const styles = StyleSheet.create({
  mainScreenButton: {
    backgroundColor: '#fe0066',
    borderRadius: 5,
    borderColor: 'black',
    margin: 10,
    textAlign: 'center',
    textTransform: 'uppercase',
    width: '90%'
  },

  mainScreenButtonText: {
    color: 'white',
    margin: 5,
    fontWeight: '700',
    fontSize: 20
  }
});