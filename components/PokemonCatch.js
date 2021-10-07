import React, { Component, useState } from 'react';
import { Text, View, Dimensions, Image, TouchableOpacity } from 'react-native';
import { Spring, animated } from '@react-spring/native';
import tainerCatch from "../assets/Game/tainerCatch.png";
import pokeBallButton from "../assets/Game/Pokeball.png";
import pokeBall from "../assets/img/items/poke-ball.png";
import { allImages } from './RegularPokemonSprites';
import { capitalizeFirstLetter } from './PokemonDetails';

const AnimatedView = animated(View);

const styles = {
    marginTop: 50,
    height: 100,
    width: 100,
}

const pokeballStyle = {
    height: 100,
    width: 100,
    marginRight: 'auto',
    marginLeft: 'auto',
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
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
    constructor(props) {
        super(props);
        this.state = {
            pokeballFlag: false,
        };
      }
    displayCatchMessage() {
        this.setState({ pokeballFlag: true })
        console.log("Cuaght!")
    }
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

                {this.state.pokeballFlag &&
                    <Spring
                        native
                        from={{ translateX: 80, translateY: -40 }}
                        to={{ translateX: windowWidth - 70, translateY: -200 }}
                    >
                        {props => (
                            <AnimatedView style={{ ...props }}>
                                <Image source={pokeBall}
                                    style={{
                                        height: 50,
                                        width: 50,
                                        top: 0,
                                        position: 'absolute'
                                    }} />
                            </AnimatedView>
                        )}
                    </Spring>
                }

                <View style={textBoxWWrapper}>
                    <Text style={textBoxStyles}>
                        A Wild {capitalizeFirstLetter(allImages[random].name)} Appeared!
                    </Text>
                </View>

                <Spring
                    native
                    from={{ opacity: 0 }}
                    to={{ opacity: 1 }}
                >
                    {props => (
                        <TouchableOpacity
                            onPress={() => {
                                this.displayCatchMessage()
                            }}>
                            <AnimatedView style={{ ...pokeballStyle, ...props, }} >
                                <Image source={pokeBallButton}
                                    style={{
                                        resizeMode: "contain",
                                        height: 100,
                                        width: 100,
                                    }} />
                            </AnimatedView>
                        </TouchableOpacity>
                    )}
                </Spring>
            </View>
        );
    }
}