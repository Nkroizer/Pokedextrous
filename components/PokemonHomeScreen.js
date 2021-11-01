import React from 'react';
import { View, SectionList, Image, Text, FlatList, ImageBackground, StyleSheet } from 'react-native';
import { PokemonHomeData } from './PokemonHomeInformation';
import unknownPokemon from "../assets/img/pokemon/unknown-pokemon.png"

function renderItem(data) {
    return (
        <View style={styles.homeBoxRow}>
            <FlatList
                numColumns={6}
                data={data.item.row}
                renderItem={item => renderRowItem(item)}
                keyExtractor={item => item.name}
            />
        </View>
    )
};

function renderRowItem(data) {
    return (
        <View>
            <Item image={data.item.image && data.item.image.image ? data.item.image.image : unknownPokemon} />
        </View>
    )
};

const Item = ({ image }) => (
    <View style={styles.homeBoxCell}>
        <Image source={image}
            style={{
                resizeMode: "cover",
                height: 50,
                width: 50,
                backgroundColor: 'rgb(217,249,236)',
                borderRadius: 100,
                shadowColor: '#000',
                shadowOpacity: 0.5,
                shadowRadius: 5,
                elevation: 2,
            }} />
    </View>
);

const PokemonHomeScreen = () => {
    return (
        <View>
            <SectionList
                sections={PokemonHomeData}
                keyExtractor={(item, index) => item + index}
                numColumns={6}
                renderItem={item => renderItem(item)}
                renderSectionHeader={({ section: { title } }) => (
                    <View style={styles.homeBox}>
                        <Text style={styles.homeBoxText}>{title}</Text>
                    </View>
                )}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    homeBox: {
        backgroundColor: 'rgb(17,167,168)',
        display: 'flex',
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center'
    },
    homeBoxRow: {
        display: 'flex',
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    homeBoxCell: {
        padding: 7,
        backgroundColor: 'rgb(250,251,245)',
    },
    homeBoxText: {
        margin: 10,
        textAlign: 'center',
        paddingTop: 5,
        backgroundColor: 'rgb(188,218,218)',
        color: 'rgb(150,172,170)',
        borderRadius: 10,
        width: '80%',
        height: 30
    }
});

export default PokemonHomeScreen;