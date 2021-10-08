import React, { Component } from 'react';
import { Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import { Spring, animated } from '@react-spring/native';
import { GameBoardSpries } from './GameBoardSprites';
import AsyncStorage from '@react-native-async-storage/async-storage';


const AnimatedView = animated(View);

const storeData = async (value) => {
    try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem('@pokemonList', jsonValue)
    } catch (e) {
        // saving error
    }
}

const getData = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem('@pokemonList')
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
        // error reading value
    }
}

const Item = ({ Name }) => (
    <View>
        <Text>{Name}</Text>
    </View>
);

const renderItem = ({ item }) => (
    <Item title={item.name} />
);

const GameBoard = {
    overflow: 'scroll'
}

const GameTable = {
    marginTop: 20,
    marginBottom: 20
}

const GameRow = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
}

const GameCell = {
    height: 50,
    backgroundColor: 'rgb(90, 162, 132)',
    padding: 1
}

const GameCellImage = {
    height: 50,
}

const GamePad = {
    margin: 10
}

const GamePadRow = {
    display: 'flex',
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'center'
}

const textBoxWWrapper = {
    borderColor: 'black',
    borderWidth: 3,
    height: 50,
    borderRadius: 5,
    margin: 3,
}

const textBoxStyles = {
    borderColor: 'black',
    borderWidth: 4,
    height: 40,
    padding: 10,
    margin: 2,
    borderRadius: 5,
    fontWeight: 'bold',
    fontFamily: 'monospace'
}

const delay = ms => new Promise(res => setTimeout(res, ms));

export default class GameScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            playerPosition: { x: 0, y: 0, facing: 1 },
            messageFlag: false,
            pokemonListData: {},
            showPokemonList: false,
            messageBoxText: "",
            boardRefresh: [
                [
                    {
                        displayImage: GameBoardSpries.trainerDefault // 0,0
                    },
                    {
                        displayImage: GameBoardSpries.fieldTile // 0,1
                    },
                    {
                        displayImage: GameBoardSpries.fieldTile // 0,2
                    },
                    {
                        displayImage: GameBoardSpries.fieldTile // 0,3
                    },
                    {
                        displayImage: GameBoardSpries.fieldTile // 0,4
                    },
                    {
                        displayImage: GameBoardSpries.fieldTile // 0,5
                    },
                    {
                        displayImage: GameBoardSpries.fieldTile // 0,6
                    },
                    {
                        displayImage: GameBoardSpries.fieldTile // 0,7
                    }
                ],
                [
                    {
                        displayImage: GameBoardSpries.fieldTile // 1,0
                    },
                    {
                        displayImage: GameBoardSpries.grassTile // 1,1
                    },
                    {
                        displayImage: GameBoardSpries.grassTile // 1,2
                    },
                    {
                        displayImage: GameBoardSpries.grassTile // 1,3
                    },
                    {
                        displayImage: GameBoardSpries.grassTile // 1,4
                    },
                    {
                        displayImage: GameBoardSpries.grassTile // 1,5
                    },
                    {
                        displayImage: GameBoardSpries.grassTile // 1,6
                    },
                    {
                        displayImage: GameBoardSpries.fieldTile // 1,7
                    }
                ],
                [
                    {
                        displayImage: GameBoardSpries.fieldTile // 2,0
                    },
                    {
                        displayImage: GameBoardSpries.grassTile // 2,1
                    },
                    {
                        displayImage: GameBoardSpries.grassTile // 2,2
                    },
                    {
                        displayImage: GameBoardSpries.grassTile // 2,3
                    },
                    {
                        displayImage: GameBoardSpries.grassTile // 2,4
                    },
                    {
                        displayImage: GameBoardSpries.grassTile // 2,5
                    },
                    {
                        displayImage: GameBoardSpries.grassTile // 2,6
                    },
                    {
                        displayImage: GameBoardSpries.fieldTile // 2,7
                    }
                ],
                [
                    {
                        displayImage: GameBoardSpries.fieldTile // 3,0
                    },
                    {
                        displayImage: GameBoardSpries.grassTile // 3,1
                    },
                    {
                        displayImage: GameBoardSpries.grassTile // 3,2
                    },
                    {
                        displayImage: GameBoardSpries.grassTile // 3,3
                    },
                    {
                        displayImage: GameBoardSpries.grassTile // 3,4
                    },
                    {
                        displayImage: GameBoardSpries.grassTile // 3,5
                    },
                    {
                        displayImage: GameBoardSpries.grassTile // 3,6
                    },
                    {
                        displayImage: GameBoardSpries.fieldTile // 3,7
                    }
                ],
                [
                    {
                        displayImage: GameBoardSpries.fieldTile // 4,0
                    },
                    {
                        displayImage: GameBoardSpries.grassTile // 4,1
                    },
                    {
                        displayImage: GameBoardSpries.grassTile // 4,2
                    },
                    {
                        displayImage: GameBoardSpries.grassTile // 4,3
                    },
                    {
                        displayImage: GameBoardSpries.grassTile // 4,4
                    },
                    {
                        displayImage: GameBoardSpries.grassTile // 4,5
                    },
                    {
                        displayImage: GameBoardSpries.grassTile // 4,6
                    },
                    {
                        displayImage: GameBoardSpries.fieldTile // 4,7
                    }
                ],
                [
                    {
                        displayImage: GameBoardSpries.fieldTile // 5,0
                    },
                    {
                        displayImage: GameBoardSpries.grassTile // 5,1
                    },
                    {
                        displayImage: GameBoardSpries.grassTile // 5,2
                    },
                    {
                        displayImage: GameBoardSpries.grassTile // 5,3
                    },
                    {
                        displayImage: GameBoardSpries.grassTile // 5,4
                    },
                    {
                        displayImage: GameBoardSpries.grassTile // 5,5
                    },
                    {
                        displayImage: GameBoardSpries.grassTile // 5,6
                    },
                    {
                        displayImage: GameBoardSpries.fieldTile // 5,7
                    }
                ],
                [
                    {
                        displayImage: GameBoardSpries.fieldTile // 6,0
                    },
                    {
                        displayImage: GameBoardSpries.grassTile // 6,1
                    },
                    {
                        displayImage: GameBoardSpries.grassTile // 6,2
                    },
                    {
                        displayImage: GameBoardSpries.grassTile // 6,3
                    },
                    {
                        displayImage: GameBoardSpries.grassTile // 6,4
                    },
                    {
                        displayImage: GameBoardSpries.grassTile // 6,5
                    },
                    {
                        displayImage: GameBoardSpries.grassTile // 6,6
                    },
                    {
                        displayImage: GameBoardSpries.fieldTile // 6,7
                    }
                ],
                [
                    {
                        displayImage: GameBoardSpries.fieldTile // 7,0
                    },
                    {
                        displayImage: GameBoardSpries.fieldTile // 7,1
                    },
                    {
                        displayImage: GameBoardSpries.fieldTile // 7,2
                    },
                    {
                        displayImage: GameBoardSpries.fieldTile // 7,3
                    },
                    {
                        displayImage: GameBoardSpries.fieldTile // 7,4
                    },
                    {
                        displayImage: GameBoardSpries.fieldTile // 7,5
                    },
                    {
                        displayImage: GameBoardSpries.fieldTile // 7,6
                    },
                    {
                        displayImage: GameBoardSpries.fieldTile // 7,7
                    }
                ]
            ],
        };
    }
    async loadPokemonList() {
        var tmpPokemonListData = await getData();

        if (!tmpPokemonListData) {
            tmpPokemonListData = { pokemoCuaght: [] }
        }

        if (this.props.newPokemon) {
            tmpPokemonListData.pokemoCuaght.push({ name: props.newPokemonName, id: propsnewPokemonId })
        }

        if (tmpPokemonListData) {
            storeData(tmpPokemonListData);
            this.setState({ pokemonListData: tmpPokemonListData, showPokemonList: true });
        }
    }
    async showAlert() {
        await delay(100);
        this.setState({ messageBoxText: "A " });
        await delay(100);
        this.setState({ messageBoxText: this.state.messageBoxText + "Wild " });
        await delay(100);
        this.setState({ messageBoxText: this.state.messageBoxText + "Pokemon " });
        await delay(100);
        this.setState({ messageBoxText: this.state.messageBoxText + "Has " });
        await delay(100);
        this.setState({ messageBoxText: this.state.messageBoxText + "Appeared!" });
        await delay(1000);
        this.props.navigation.navigate('PokemonCatch', {
            navigation: this.props.navigation
        });
        this.setState({ messageFlag: false });
    }

    async movePlayer(upPosition, rightPosition) {
        const currentX = this.state.playerPosition.x;
        const currentY = this.state.playerPosition.y;

        var newX = currentX;
        var newY = currentY;
        var newFacing = this.state.playerPosition.facing;
        var trainetImage = GameBoardSpries.trainerDefault;
        var walkingImage = GameBoardSpries.trainerDefault;
        var tileImage = GameBoardSpries.grassTile;
        var inGrass = true;
        var previousBoard = this.state.boardRefresh;

        if (currentX == 0 || currentX == 7 || currentY == 0 || currentY == 7) {
            tileImage = GameBoardSpries.fieldTile;
        }

        if (currentX + upPosition <= 7 && currentX + upPosition >= 0) {
            newX = currentX + upPosition;
        }

        if (currentY + rightPosition <= 7 && currentY + rightPosition >= 0) {
            newY = currentY + rightPosition;
        }

        if (newX == 0 || newX == 7 || newY == 0 || newY == 7) {
            inGrass = false;
        }

        if (upPosition == 1) {
            newFacing = 1;
            trainetImage = inGrass ? GameBoardSpries.grassTileTrainer : GameBoardSpries.trainerDefault;
            walkingImage = inGrass ? GameBoardSpries.grassTileTrainer : GameBoardSpries.trainerFront2;
        } else if (rightPosition == 1) {
            newFacing = 2;
            trainetImage = inGrass ? GameBoardSpries.grassTileTrainerRight : GameBoardSpries.trainerRight1;
            walkingImage = inGrass ? GameBoardSpries.grassTileTrainerRight : GameBoardSpries.trainerRight2;
        } else if (upPosition == -1) {
            newFacing = 4;
            trainetImage = inGrass ? GameBoardSpries.grassTileTrainerBack : GameBoardSpries.trainerBack1;
            walkingImage = inGrass ? GameBoardSpries.grassTileTrainerBack : GameBoardSpries.trainerBack2;
        } else if (rightPosition == -1) {
            newFacing = 3;
            trainetImage = inGrass ? GameBoardSpries.grassTileTrainerLeft : GameBoardSpries.trainerLeft1;
            walkingImage = inGrass ? GameBoardSpries.grassTileTrainerLeft : GameBoardSpries.trainerLeft2;
        }

        if (!inGrass) {
            previousBoard[currentX][currentY] = { displayImage: walkingImage };
            this.setState({ boardRefresh: previousBoard });
            await delay(100);
        }

        this.setState({ playerPosition: { x: newX, y: newY, facing: newFacing } });

        previousBoard[currentX][currentY] = { displayImage: tileImage };
        previousBoard[newX][newY] = { displayImage: trainetImage };
        this.setState({ boardRefresh: previousBoard });

        if (inGrass && this.pokemonAppear() > 0) {
            this.setState({ messageFlag: true });
            this.showAlert();
        }
    };
    pokemonAppear() {
        return Math.floor(Math.random() * 2);
    }
    render() {
        this.loadPokemonList();
        return (
            <View style={GameBoard}>
                <View style={GameTable}>
                    <View style={GameRow}>
                        <View style={GameCell}>
                            <Image style={GameCellImage} source={this.state.boardRefresh[0][0].displayImage} alt="Logo" />
                        </View>

                        <View style={GameCell}>
                            <Image style={GameCellImage} source={this.state.boardRefresh[0][1].displayImage} alt="Logo" />
                        </View>

                        <View style={GameCell}>
                            <Image style={GameCellImage} source={this.state.boardRefresh[0][2].displayImage} alt="Logo" />
                        </View>

                        <View style={GameCell}>
                            <Image style={GameCellImage} source={this.state.boardRefresh[0][3].displayImage} alt="Logo" />
                        </View>

                        <View style={GameCell}>
                            <Image style={GameCellImage} source={this.state.boardRefresh[0][4].displayImage} alt="Logo" />
                        </View>

                        <View style={GameCell}>
                            <Image style={GameCellImage} source={this.state.boardRefresh[0][5].displayImage} alt="Logo" />
                        </View>

                        <View style={GameCell}>
                            <Image style={GameCellImage} source={this.state.boardRefresh[0][6].displayImage} alt="Logo" />
                        </View>

                        <View style={GameCell}>
                            <Image style={GameCellImage} source={this.state.boardRefresh[0][7].displayImage} alt="Logo" />
                        </View>
                    </View>

                    <View style={GameRow}>
                        <View style={GameCell}>
                            <Image style={GameCellImage} source={this.state.boardRefresh[1][0].displayImage} alt="Logo" />
                        </View>

                        <View style={GameCell}>
                            <Image style={GameCellImage} source={this.state.boardRefresh[1][1].displayImage} alt="Logo" />
                        </View>

                        <View style={GameCell}>
                            <Image style={GameCellImage} source={this.state.boardRefresh[1][2].displayImage} alt="Logo" />
                        </View>

                        <View style={GameCell}>
                            <Image style={GameCellImage} source={this.state.boardRefresh[1][3].displayImage} alt="Logo" />
                        </View>

                        <View style={GameCell}>
                            <Image style={GameCellImage} source={this.state.boardRefresh[1][4].displayImage} alt="Logo" />
                        </View>

                        <View style={GameCell}>
                            <Image style={GameCellImage} source={this.state.boardRefresh[1][5].displayImage} alt="Logo" />
                        </View>

                        <View style={GameCell}>
                            <Image style={GameCellImage} source={this.state.boardRefresh[1][6].displayImage} alt="Logo" />
                        </View>

                        <View style={GameCell}>
                            <Image style={GameCellImage} source={this.state.boardRefresh[1][7].displayImage} alt="Logo" />
                        </View>
                    </View>

                    <View style={GameRow}>
                        <View style={GameCell}>
                            <Image style={GameCellImage} source={this.state.boardRefresh[2][0].displayImage} alt="Logo" />
                        </View>

                        <View style={GameCell}>
                            <Image style={GameCellImage} source={this.state.boardRefresh[2][1].displayImage} alt="Logo" />
                        </View>

                        <View style={GameCell}>
                            <Image style={GameCellImage} source={this.state.boardRefresh[2][2].displayImage} alt="Logo" />
                        </View>

                        <View style={GameCell}>
                            <Image style={GameCellImage} source={this.state.boardRefresh[2][3].displayImage} alt="Logo" />
                        </View>

                        <View style={GameCell}>
                            <Image style={GameCellImage} source={this.state.boardRefresh[2][4].displayImage} alt="Logo" />
                        </View>

                        <View style={GameCell}>
                            <Image style={GameCellImage} source={this.state.boardRefresh[2][5].displayImage} alt="Logo" />
                        </View>

                        <View style={GameCell}>
                            <Image style={GameCellImage} source={this.state.boardRefresh[2][6].displayImage} alt="Logo" />
                        </View>

                        <View style={GameCell}>
                            <Image style={GameCellImage} source={this.state.boardRefresh[2][7].displayImage} alt="Logo" />
                        </View>
                    </View>

                    <View style={GameRow}>
                        <View style={GameCell}>
                            <Image style={GameCellImage} source={this.state.boardRefresh[3][0].displayImage} alt="Logo" />
                        </View>

                        <View style={GameCell}>
                            <Image style={GameCellImage} source={this.state.boardRefresh[3][1].displayImage} alt="Logo" />
                        </View>

                        <View style={GameCell}>
                            <Image style={GameCellImage} source={this.state.boardRefresh[3][2].displayImage} alt="Logo" />
                        </View>

                        <View style={GameCell}>
                            <Image style={GameCellImage} source={this.state.boardRefresh[3][3].displayImage} alt="Logo" />
                        </View>

                        <View style={GameCell}>
                            <Image style={GameCellImage} source={this.state.boardRefresh[3][4].displayImage} alt="Logo" />
                        </View>

                        <View style={GameCell}>
                            <Image style={GameCellImage} source={this.state.boardRefresh[3][5].displayImage} alt="Logo" />
                        </View>

                        <View style={GameCell}>
                            <Image style={GameCellImage} source={this.state.boardRefresh[3][6].displayImage} alt="Logo" />
                        </View>

                        <View style={GameCell}>
                            <Image style={GameCellImage} source={this.state.boardRefresh[3][7].displayImage} alt="Logo" />
                        </View>
                    </View>

                    <View style={GameRow}>
                        <View style={GameCell}>
                            <Image style={GameCellImage} source={this.state.boardRefresh[4][0].displayImage} alt="Logo" />
                        </View>

                        <View style={GameCell}>
                            <Image style={GameCellImage} source={this.state.boardRefresh[4][1].displayImage} alt="Logo" />
                        </View>

                        <View style={GameCell}>
                            <Image style={GameCellImage} source={this.state.boardRefresh[4][2].displayImage} alt="Logo" />
                        </View>

                        <View style={GameCell}>
                            <Image style={GameCellImage} source={this.state.boardRefresh[4][3].displayImage} alt="Logo" />
                        </View>

                        <View style={GameCell}>
                            <Image style={GameCellImage} source={this.state.boardRefresh[4][4].displayImage} alt="Logo" />
                        </View>

                        <View style={GameCell}>
                            <Image style={GameCellImage} source={this.state.boardRefresh[4][5].displayImage} alt="Logo" />
                        </View>

                        <View style={GameCell}>
                            <Image style={GameCellImage} source={this.state.boardRefresh[4][6].displayImage} alt="Logo" />
                        </View>

                        <View style={GameCell}>
                            <Image style={GameCellImage} source={this.state.boardRefresh[4][7].displayImage} alt="Logo" />
                        </View>
                    </View>

                    <View style={GameRow}>
                        <View style={GameCell}>
                            <Image style={GameCellImage} source={this.state.boardRefresh[5][0].displayImage} alt="Logo" />
                        </View>

                        <View style={GameCell}>
                            <Image style={GameCellImage} source={this.state.boardRefresh[5][1].displayImage} alt="Logo" />
                        </View>

                        <View style={GameCell}>
                            <Image style={GameCellImage} source={this.state.boardRefresh[5][2].displayImage} alt="Logo" />
                        </View>

                        <View style={GameCell}>
                            <Image style={GameCellImage} source={this.state.boardRefresh[5][3].displayImage} alt="Logo" />
                        </View>

                        <View style={GameCell}>
                            <Image style={GameCellImage} source={this.state.boardRefresh[5][4].displayImage} alt="Logo" />
                        </View>

                        <View style={GameCell}>
                            <Image style={GameCellImage} source={this.state.boardRefresh[5][5].displayImage} alt="Logo" />
                        </View>

                        <View style={GameCell}>
                            <Image style={GameCellImage} source={this.state.boardRefresh[5][6].displayImage} alt="Logo" />
                        </View>

                        <View style={GameCell}>
                            <Image style={GameCellImage} source={this.state.boardRefresh[5][7].displayImage} alt="Logo" />
                        </View>
                    </View>

                    <View style={GameRow}>
                        <View style={GameCell}>
                            <Image style={GameCellImage} source={this.state.boardRefresh[6][0].displayImage} alt="Logo" />
                        </View>

                        <View style={GameCell}>
                            <Image style={GameCellImage} source={this.state.boardRefresh[6][1].displayImage} alt="Logo" />
                        </View>

                        <View style={GameCell}>
                            <Image style={GameCellImage} source={this.state.boardRefresh[6][2].displayImage} alt="Logo" />
                        </View>

                        <View style={GameCell}>
                            <Image style={GameCellImage} source={this.state.boardRefresh[6][3].displayImage} alt="Logo" />
                        </View>

                        <View style={GameCell}>
                            <Image style={GameCellImage} source={this.state.boardRefresh[6][4].displayImage} alt="Logo" />
                        </View>

                        <View style={GameCell}>
                            <Image style={GameCellImage} source={this.state.boardRefresh[6][5].displayImage} alt="Logo" />
                        </View>

                        <View style={GameCell}>
                            <Image style={GameCellImage} source={this.state.boardRefresh[6][6].displayImage} alt="Logo" />
                        </View>

                        <View style={GameCell}>
                            <Image style={GameCellImage} source={this.state.boardRefresh[6][7].displayImage} alt="Logo" />
                        </View>
                    </View>

                    <View style={GameRow}>
                        <View style={GameCell}>
                            <Image style={GameCellImage} source={this.state.boardRefresh[7][0].displayImage} alt="Logo" />
                        </View>

                        <View style={GameCell}>
                            <Image style={GameCellImage} source={this.state.boardRefresh[7][1].displayImage} alt="Logo" />
                        </View>

                        <View style={GameCell}>
                            <Image style={GameCellImage} source={this.state.boardRefresh[7][2].displayImage} alt="Logo" />
                        </View>

                        <View style={GameCell}>
                            <Image style={GameCellImage} source={this.state.boardRefresh[7][3].displayImage} alt="Logo" />
                        </View>

                        <View style={GameCell}>
                            <Image style={GameCellImage} source={this.state.boardRefresh[7][4].displayImage} alt="Logo" />
                        </View>

                        <View style={GameCell}>
                            <Image style={GameCellImage} source={this.state.boardRefresh[7][5].displayImage} alt="Logo" />
                        </View>

                        <View style={GameCell}>
                            <Image style={GameCellImage} source={this.state.boardRefresh[7][6].displayImage} alt="Logo" />
                        </View>

                        <View style={GameCell}>
                            <Image style={GameCellImage} source={this.state.boardRefresh[7][7].displayImage} alt="Logo" />
                        </View>
                    </View>
                </View>

                {this.state.messageFlag &&
                    <View style={textBoxWWrapper}>
                        <Text style={textBoxStyles}>
                            {this.state.messageBoxText}
                        </Text>
                    </View>
                }

                <View style={GamePad}>
                    <View style={GamePadRow}>
                        <TouchableOpacity
                            onPress={() => {
                                this.movePlayer(-1, 0)
                            }}>

                            <Image source={GameBoardSpries.upArrow}
                                style={{
                                    resizeMode: "contain",
                                    height: 50,
                                    width: 50
                                }} />
                        </TouchableOpacity>
                    </View>

                    <View style={GamePadRow}>
                        <TouchableOpacity
                            onPress={() => {
                                this.movePlayer(0, -1)
                            }}>

                            <Image source={GameBoardSpries.leftArrow}
                                style={{
                                    resizeMode: "contain",
                                    height: 50,
                                    width: 50
                                }} />
                        </TouchableOpacity>

                        <Image source={GameBoardSpries.padCenter}
                            style={{
                                resizeMode: "contain",
                                height: 50,
                                width: 50,
                            }} />

                        <TouchableOpacity
                            onPress={() => {
                                this.movePlayer(0, 1)
                            }}>

                            <Image source={GameBoardSpries.rightArrow}
                                style={{
                                    resizeMode: "contain",
                                    height: 50,
                                    width: 50
                                }} />
                        </TouchableOpacity>
                    </View>

                    <View style={GamePadRow}>
                        <TouchableOpacity
                            onPress={() => {
                                this.movePlayer(1, 0)
                            }}>

                            <Image source={GameBoardSpries.downArrow}
                                style={{
                                    resizeMode: "contain",
                                    height: 50,
                                    width: 50
                                }} />
                        </TouchableOpacity>
                    </View>
                </View>

                {this.state.showPokemonList &&
                    <View style={textBoxWWrapper}>
                        <FlatList
                            data={this.state.pokemonListData}
                            renderItem={renderItem}
                            keyExtractor={item => item.id}
                        />
                    </View>
                }
            </View>
        );
    }
}
