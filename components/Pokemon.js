import React from 'react';
import { capitalizeFirstLetter } from './PokemonDetails';

export function getPokeId(pokeId) {
  var prefix = "#";
  if (pokeId < 10) {
      prefix += "00"
  } else if (pokeId < 100) {
      prefix += "0"
  }

  return prefix + pokeId;
};

export function getTypeBakgroundColor(poketype) {
  switch (poketype) {
      case "grass": {
          return { backgroundColor: "#9bcc50" }
      }
      case "poison": {
          return { backgroundColor: "#b97fc9", color: "#fff" }
      }
      case "fire": {
          return { backgroundColor: "#fd7d24", color: "#fff" }
      }
      case "electric": {
          return { backgroundColor: "#eed535" }
      }
      case "steel": {
          return { backgroundColor: "#9eb7b8" }
      }
      case "water": {
          return { backgroundColor: "#4592c4", color: "#fff" }
      }
      case "flying": {
          return { backgroundColor: "#3dc7ef", background: "linear-gradient(180deg, #3dc7ef 50%, #bdb9b8 50%)" }
      }
      case "dragon": {
          return { backgroundColor: "#53a4cf", background: "linear-gradient(180deg, #53a4cf 50%, #f16e57 50%)", color: "#fff" }
      }
      case "ground": {
          return { backgroundColor: "#f7de3f", background: "linear-gradient(180deg, #f7de3f 50%, #ab9842 50%)" }
      }
      case "fairy": {
          return { backgroundColor: "#fdb9e9" }
      }
      case "fighting": {
          return { backgroundColor: "#d56723", color: "#fff" }
      }
      case "psychic": {
          return { backgroundColor: "#f366b9", color: "#fff" }
      }
      case "ghost": {
          return { backgroundColor: "#7b62a3", color: "#fff" }
      }
      case "rock": {
          return { backgroundColor: "#a38c21", color: "#fff" }
      }
      case "bug": {
          return { backgroundColor: "#729f3f", color: "#fff" }
      }
      case "dark": {
          return { backgroundColor: "#707070", color: "#fff" }
      }
      default: {
          return { backgroundColor: "#a4acaf" }
      }
  }
};

const Pokemon = (props) => {
  return (
    <>
      <div style={pokemonCube}>
        <div style={pokemonImageWrapper}>
          <img style={pokemonImage} src={props.pokeData.item.sprites.other['official-artwork'].front_default} alt="Logo" />
        </div>

        <div style={pokemonId}>
          {getPokeId(props.pokeData.item.id)}
        </div>

        <div style={pokemonText}>
          <b>
            {capitalizeFirstLetter(props.pokeData.item.name)}
          </b>
        </div>

        <div>
          <div style={{ ...pokemonAbility, ...getTypeBakgroundColor(props.pokeData.item.types[0].type.name) }}>
            {props.pokeData.item.types[0].type.name}
          </div>

          {props.pokeData.item.types[1] ?
            <div style={{ ...pokemonAbility, ...getTypeBakgroundColor(props.pokeData.item.types[1].type.name) }}>
              {props.pokeData.item.types[1].type.name}
            </div> : null
          }
        </div>

      </div>
    </>
  );
};

const pokemonCube = {
  borderRadius: '5px',
  border: '1px solid blue',
  boxShadow: '2px 2px 7px 0px',
  margin: '5px',
  padding: '5px',
}

const pokemonImageWrapper = {
  background: '#f2f2f2',
  borderRadius: '5px',
  display: 'block',
  float: 'left',
  paddingTop: '100%',
  position: 'relative',
  width: '100%',
}

const pokemonImage = {
  float: 'left',
  position: 'absolute',
  top: '0',
  width: '100%',
}

const pokemonText = {
  color: '#313131',
  fontFamily: '"Flexo-Demi", arial, sans-serif',
  fontSize: '145%',
  marginBottom: '5px',
  textTransform: 'none',
}

const pokemonId = {
  color: '#919191',
  fontFamily: '"Flexo-Bold", arial, sans-serif',
  fontSize: '80%',
  paddingTop: '2px',
}

const pokemonAbility = {
  borderRadius: '3px',
  float: 'left',
  fontFamily: '"Flexo-Medium", arial, sans-serif',
  fontSize: '11px',
  lineHeight: '18px',
  margin: '0 1.5625% 0 0',
  maxWidth: '110px',
  textAlign: 'center',
  textTransform: 'none',
  width: '38.4375%',
}

export default Pokemon;