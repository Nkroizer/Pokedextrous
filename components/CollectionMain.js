import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

const CollectionScreen = ({ navigation }) => {
    return (
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <View style={styles.mainScreenButton}>
                <TouchableOpacity onPress={() => navigation.navigate('PokemonHomeScreen')}>

                    <Text style={styles.mainScreenButtonText}>
                        Pokemon Home
                    </Text>

                </TouchableOpacity>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    mainScreenButton: {
        backgroundColor: '#fe0066',
        borderRadius: 5,
        borderColor: 'black',
        borderWidth: 2,
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

export default CollectionScreen;