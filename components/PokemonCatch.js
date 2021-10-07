import React, { Component } from 'react';
import { Text, View, Dimensions, Image } from 'react-native';
import { Spring, animated } from '@react-spring/native';
import tainerCatch from "../assets/Game/tainerCatch.png";
import { allImages } from './RegularPokemonSprites';
import { capitalizeFirstLetter } from './PokemonDetails';

const AnimatedView = animated(View);

const styles = {
    marginTop: 50,
    height: 100,
    width: 100,
}

const textBoxWWrapper = {
    borderColor: 'black',
    borderWidth: 3,
    height: 100,
    margin: 6,
    borderRadius: 5
}

const textBoxStyles = {
    borderColor: 'black',
    borderWidth: 3,
    height: 90,
    padding: 8,
    margin: 2,
    borderRadius: 5,
    fontWeight: 'bold',
    fontFamily: 'monospace'
}

export default class PokemonCatch extends Component {
    render() {
        const random = Math.floor(Math.random() * allImages.length);
        const windowWidth = Dimensions.get('window').width;
        return (
            <View>
                <Spring
                    native
                    from={{ translateX: 0 }}
                    to={{ translateX: windowWidth - 100 }}
                >
                    {props => (
                        <AnimatedView style={{ ...styles, ...props }}>
                            <Image source={allImages[random].image}
                                style={{
                                    resizeMode: "contain",
                                    height: 100,
                                    width: 100,
                                }} />
                        </AnimatedView>
                    )}
                </Spring>

                <Spring
                    native
                    from={{ translateX: windowWidth - 100 }}
                    to={{ translateX: 0 }}
                >
                    {props => (
                        <AnimatedView style={{ ...styles, ...props }}>
                            <Image source={tainerCatch}
                                style={{
                                    resizeMode: "contain",
                                    height: 100,
                                    width: 100,
                                }} />
                        </AnimatedView>
                    )}
                </Spring>

                <View style={textBoxWWrapper}>
                    <Text style={textBoxStyles}>
                        A Wild {capitalizeFirstLetter(allImages[random].name)} Appeared!
                    </Text>
                </View>
            </View>
        );
    }
}