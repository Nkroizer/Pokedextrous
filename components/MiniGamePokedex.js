import React, { Component } from 'react';
import { Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import unknownPokemon from "../assets/img/pokemon/unknown-pokemon.png"
import { allImages } from './RegularPokemonSprites';

const MiniGamePokedexCube = {
    borderColor: 'black',
    borderWidth: 3,
    width: '32%',
    height: 100,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    margin: 2,
}

function renderItem(data) {
    const defaultSprite = allImages.findIndex(element => element.link.toLower() == data.item.defaultSprite);
    return (
        <View style={MiniGamePokedexCube}>
                <Image source={data.item.isStarted ? defaultSprite : unknownPokemon}
                style={{
                    resizeMode: "contain",
                    height: 45,
                    width: 45
                }} />
            <Text>{data.item.isStarted ? data.item.name: "????"}</Text>
        </View>
    )
};


export default class MiniGamePokedex extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pokemonListData: this.props.route.params.pokemonList.pokemonList,
        };
    };

    render() {
        return (
            <View>
                <FlatList
                    numColumns={3}
                    initialNumToRender={10}
                    data={this.state.pokemonListData}
                    renderItem={item => renderItem(item)}
                    keyExtractor={item => item.id.toString()}
                />
            </View>
        );
    }
}
