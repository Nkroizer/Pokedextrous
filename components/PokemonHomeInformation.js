import { allImages } from './RegularPokemonSprites';
import { RegularGMaxPokemonSprites } from './RegularGMaxPokemonSprites';
import { RegularLegendaryPokemonSprites } from './RegularLegendaryPokemonSprites';
import { allShinyImages } from './ShinyPokemonSprites';
import { ShinyLegendaryPokemonSprites } from './ShinyLegendaryPokemonSprites';

export const PokemonHomeData = [
    {
        title: "HOME 1",
        data: [
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "bulbasaur"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "bulbasaur"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "ivysaur"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "ivysaur"),
                    },
                    {
                        image: allImages.find((element) => element.link == "venusaur"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "venusaur"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: RegularGMaxPokemonSprites.find(
                            (element) => element.link == "venusaur-gmax"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "charmander"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "charmander"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "charmeleon"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "charmeleon"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "charizard"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "charizard"
                        ),
                    },
                    {
                        image: RegularGMaxPokemonSprites.find(
                            (element) => element.link == "charizard-gmax"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "squirtle"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "squirtle"),
                    },
                    {
                        image: allImages.find((element) => element.link == "wartortle"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "wartortle"
                        ),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "blastoise"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "blastoise"
                        ),
                    },
                    {
                        image: RegularGMaxPokemonSprites.find(
                            (element) => element.link == "blastoise-gmax"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "caterpie"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "caterpie"),
                    },
                    {
                        image: allImages.find((element) => element.link == "metapod"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allShinyImages.find((element) => element.link == "metapod"),
                    },
                    {
                        image: allImages.find((element) => element.link == "butterfree"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "butterfree"
                        ),
                    },
                    {
                        image: RegularGMaxPokemonSprites.find(
                            (element) => element.link == "butterfree-gmax"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "weedle"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "weedle"),
                    },
                ],
            },
        ],
    },
    {
        title: "HOME 2",
        data: [
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "kakuna"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "kakuna"),
                    },
                    {
                        image: allImages.find((element) => element.link == "beedrill"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "beedrill"),
                    },
                    {
                        image: allImages.find((element) => element.link == "pidgey"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "pidgey"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "pidgeotto"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "pidgeotto"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "pidgeot"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "pidgeot"),
                    },
                    {
                        image: allImages.find((element) => element.link == "rattata"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "rattata"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "rattataalola"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "rattataalola"),
                    },
                    {
                        image: allImages.find((element) => element.link == "raticate"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "raticate"),
                    },
                    {
                        image: allImages.find((element) => element.link == "raticatealola"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "raticatealola"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "spearow"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "spearow"),
                    },
                    {
                        image: allImages.find((element) => element.link == "fearow"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "fearow"),
                    },
                    {
                        image: allImages.find((element) => element.link == "ekans"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "ekans"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "arbok"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "arbok"),
                    },
                    {
                        image: allImages.find((element) => element.link == "pikachu"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "pikachu"),
                    },
                    {
                        image: allImages.find((element) => element.link == "pikachuoriginalcap"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "pikachuoriginalcap"),
                    },
                ],
            },
        ],
    },
    {
        title: "HOME 3",
        data: [
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "pikachuhoenncap"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "pikachuhoenncap"),
                    },
                    {
                        image: allImages.find((element) => element.link == "pikachusinnohcap"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "pikachusinnohcap"),
                    },
                    {
                        image: allImages.find((element) => element.link == "pikachuunovacap"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "pikachuunovacap"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "pikachukaloscap"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "pikachukaloscap"),
                    },
                    {
                        image: allImages.find((element) => element.link == "pikachualolacap"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "pikachualolacap"),
                    },
                    {
                        image: allImages.find((element) => element.link == "pikachupartnercap"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "pikachupartnercap"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "pikachuworldcap"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "pikachuworldcap"),
                    },
                    {
                        image: RegularGMaxPokemonSprites.find(
                            (element) => element.link == "pikachu-gmax"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "raichu"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "raichu"),
                    },
                    {
                        image: allImages.find((element) => element.link == "raichualola"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allShinyImages.find((element) => element.link == "raichualola"),
                    },
                    {
                        image: allImages.find((element) => element.link == "sandshrew"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "sandshrew"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "sandshrewalola"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "sandshrewalola"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "sandslash"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "sandslash"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "sandslashalola"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "sandslashalola"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "nidoran-f"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "nidoran-f"),
                    },
                    {
                        image: allImages.find((element) => element.link == "nidorina"),
                    },
                ],
            },
        ],
    },
    {
        title: "HOME 4",
        data: [
            {
                row: [
                    {
                        image: allShinyImages.find((element) => element.link == "nidorina"),
                    },
                    {
                        image: allImages.find((element) => element.link == "nidoqueen"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "nidoqueen"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "nidoran-m"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "nidoran-m"),
                    },
                    {
                        image: allImages.find((element) => element.link == "nidorino"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allShinyImages.find((element) => element.link == "nidorino"),
                    },
                    {
                        image: allImages.find((element) => element.link == "nidoking"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "nidoking"),
                    },
                    {
                        image: allImages.find((element) => element.link == "clefairy"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "clefairy"),
                    },
                    {
                        image: allImages.find((element) => element.link == "clefable"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allShinyImages.find((element) => element.link == "clefable"),
                    },
                    {
                        image: allImages.find((element) => element.link == "vulpix"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "vulpix"),
                    },
                    {
                        image: allImages.find((element) => element.link == "vulpixalola"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "vulpixalola"),
                    },
                    {
                        image: allImages.find((element) => element.link == "ninetales"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "ninetales"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "ninetalesalola"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "ninetalesalola"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "jigglypuff"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "jigglypuff"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "wigglytuff"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "wigglytuff"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "zubat"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "zubat"),
                    },
                    {
                        image: allImages.find((element) => element.link == "golbat"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "golbat"),
                    },
                    {
                        image: allImages.find((element) => element.link == "oddish"),
                    },
                ],
            },
        ],
    },
    {
        title: "HOME 5",
        data: [
            {
                row: [
                    {
                        image: allShinyImages.find((element) => element.link == "oddish"),
                    },
                    {
                        image: allImages.find((element) => element.link == "gloom"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "gloom"),
                    },
                    {
                        image: allImages.find((element) => element.link == "vileplume"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "vileplume"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "paras"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allShinyImages.find((element) => element.link == "paras"),
                    },
                    {
                        image: allImages.find((element) => element.link == "parasect"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "parasect"),
                    },
                    {
                        image: allImages.find((element) => element.link == "venonat"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "venonat"),
                    },
                    {
                        image: allImages.find((element) => element.link == "venomoth"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allShinyImages.find((element) => element.link == "venomoth"),
                    },
                    {
                        image: allImages.find((element) => element.link == "diglett"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "diglett"),
                    },
                    {
                        image: allImages.find((element) => element.link == "diglettalola"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "diglettalola"),
                    },
                    {
                        image: allImages.find((element) => element.link == "dugtrio"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allShinyImages.find((element) => element.link == "dugtrio"),
                    },
                    {
                        image: allImages.find((element) => element.link == "dugtrioalola"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "dugtrioalola"),
                    },
                    {
                        image: allImages.find((element) => element.link == "meowth"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "meowth"),
                    },
                    {
                        image: allImages.find((element) => element.link == "meowthalola"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allShinyImages.find((element) => element.link == "meowthalola"),
                    },
                    {
                        image: allImages.find((element) => element.link == "meowthgalar"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "meowthgalar"),
                    },
                    {
                        image: RegularGMaxPokemonSprites.find(
                            (element) => element.link == "meowth-gmax"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "persian"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "persian"),
                    },
                ],
            },
        ],
    },
    {
        title: "HOME 6",
        data: [
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "persianalola"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "persianalola"),
                    },
                    {
                        image: allImages.find((element) => element.link == "psyduck"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "psyduck"),
                    },
                    {
                        image: allImages.find((element) => element.link == "golduck"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "golduck"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "mankey"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "mankey"),
                    },
                    {
                        image: allImages.find((element) => element.link == "primeape"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "primeape"),
                    },
                    {
                        image: allImages.find((element) => element.link == "growlithe"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "growlithe"
                        ),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "arcanine"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "arcanine"),
                    },
                    {
                        image: allImages.find((element) => element.link == "poliwag"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "poliwag"),
                    },
                    {
                        image: allImages.find((element) => element.link == "poliwhirl"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "poliwhirl"
                        ),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "poliwrath"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "poliwrath"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "abra"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "abra"),
                    },
                    {
                        image: allImages.find((element) => element.link == "kadabra"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "kadabra"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "alakazam"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "alakazam"),
                    },
                    {
                        image: allImages.find((element) => element.link == "machop"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "machop"),
                    },
                    {
                        image: allImages.find((element) => element.link == "machoke"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "machoke"),
                    },
                ],
            },
        ],
    },
    {
        title: "HOME 7",
        data: [
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "machamp"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "machamp"),
                    },
                    {
                        image: RegularGMaxPokemonSprites.find(
                            (element) => element.link == "machamp-gmax"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "bellsprout"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "bellsprout"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "weepinbell"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "weepinbell"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "victreebel"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "victreebel"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "tentacool"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "tentacool"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "tentacruel"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "tentacruel"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "geodude"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "geodude"),
                    },
                    {
                        image: allImages.find((element) => element.link == "geodudealola"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "geodudealola"),
                    },
                    {
                        image: allImages.find((element) => element.link == "graveler"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allShinyImages.find((element) => element.link == "graveler"),
                    },
                    {
                        image: allImages.find((element) => element.link == "graveleralola"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "graveleralola"),
                    },
                    {
                        image: allImages.find((element) => element.link == "golem"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "golem"),
                    },
                    {
                        image: allImages.find((element) => element.link == "golemalola"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allShinyImages.find((element) => element.link == "golemalola"),
                    },
                    {
                        image: allImages.find((element) => element.link == "ponyta"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "ponyta"),
                    },
                    {
                        image: allImages.find((element) => element.link == "ponytagalar"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "ponytagalar"),
                    },
                    {
                        image: allImages.find((element) => element.link == "rapidash"),
                    },
                ],
            },
        ],
    },
    {
        title: "HOME 8",
        data: [
            {
                row: [
                    {
                        image: allShinyImages.find((element) => element.link == "rapidash"),
                    },
                    {
                        image: allImages.find((element) => element.link == "rapidashgalar"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "rapidashgalar"),
                    },
                    {
                        image: allImages.find((element) => element.link == "slowpoke"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "slowpoke"),
                    },
                    {
                        image: allImages.find((element) => element.link == "slowpokegalar"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allShinyImages.find((element) => element.link == "slowpokegalar"),
                    },
                    {
                        image: allImages.find((element) => element.link == "slowbro"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "slowbro"),
                    },
                    {
                        image: allImages.find((element) => element.link == "slowbrogalar"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "slowbrogalar"),
                    },
                    {
                        image: allImages.find((element) => element.link == "magnemite"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "magnemite"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "magneton"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "magneton"),
                    },
                    {
                        image: allImages.find((element) => element.link == "farfetchd"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "farfetchd"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "farfetchdgalar"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "farfetchdgalar"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "doduo"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "doduo"),
                    },
                    {
                        image: allImages.find((element) => element.link == "dodrio"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "dodrio"),
                    },
                    {
                        image: allImages.find((element) => element.link == "seel"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allShinyImages.find((element) => element.link == "seel"),
                    },
                    {
                        image: allImages.find((element) => element.link == "dewgong"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "dewgong"),
                    },
                    {
                        image: allImages.find((element) => element.link == "grimer"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "grimer"),
                    },
                    {
                        image: allImages.find((element) => element.link == "grimeralola"),
                    },
                ],
            },
        ],
    },
    {
        title: "HOME 9",
        data: [
            {
                row: [
                    {
                        image: allShinyImages.find((element) => element.link == "grimeralola"),
                    },
                    {
                        image: allImages.find((element) => element.link == "muk"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "muk"),
                    },
                    {
                        image: allImages.find((element) => element.link == "mukalola"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "mukalola"),
                    },
                    {
                        image: allImages.find((element) => element.link == "shellder"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allShinyImages.find((element) => element.link == "shellder"),
                    },
                    {
                        image: allImages.find((element) => element.link == "cloyster"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "cloyster"),
                    },
                    {
                        image: allImages.find((element) => element.link == "gastly"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "gastly"),
                    },
                    {
                        image: allImages.find((element) => element.link == "haunter"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allShinyImages.find((element) => element.link == "haunter"),
                    },
                    {
                        image: allImages.find((element) => element.link == "gengar"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "gengar"),
                    },
                    {
                        image: RegularGMaxPokemonSprites.find(
                            (element) => element.link == "gengar-gmax"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "onix"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "onix"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "drowzee"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "drowzee"),
                    },
                    {
                        image: allImages.find((element) => element.link == "hypno"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "hypno"),
                    },
                    {
                        image: allImages.find((element) => element.link == "krabby"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "krabby"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "kingler"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "kingler"),
                    },
                    {
                        image: RegularGMaxPokemonSprites.find(
                            (element) => element.link == "kingler-gmax"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "voltorb"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "voltorb"),
                    },
                    {
                        image: allImages.find((element) => element.link == "electrode"),
                    },
                ],
            },
        ],
    },
    {
        title: "HOME 10",
        data: [
            {
                row: [
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "electrode"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "exeggcute"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "exeggcute"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "exeggutor"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "exeggutor"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "exeggutor"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "exeggutor"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "cubone"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "cubone"),
                    },
                    {
                        image: allImages.find((element) => element.link == "marowak"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "marowak"),
                    },
                    {
                        image: allImages.find((element) => element.link == "marowakalola"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allShinyImages.find((element) => element.link == "marowakalola"),
                    },
                    {
                        image: allImages.find((element) => element.link == "hitmonlee"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "hitmonlee"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "hitmonchan"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "hitmonchan"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "lickitung"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "lickitung"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "koffing"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "koffing"),
                    },
                    {
                        image: allImages.find((element) => element.link == "weezing"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "weezing"),
                    },
                    {
                        image: allImages.find((element) => element.link == "weezinggalar"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allShinyImages.find((element) => element.link == "weezinggalar"),
                    },
                    {
                        image: allImages.find((element) => element.link == "rhyhorn"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "rhyhorn"),
                    },
                    {
                        image: allImages.find((element) => element.link == "rhydon"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "rhydon"),
                    },
                    {
                        image: allImages.find((element) => element.link == "chansey"),
                    },
                ],
            },
        ],
    },
    {
        title: "HOME 11",
        data: [
            {
                row: [
                    {
                        image: allShinyImages.find((element) => element.link == "chansey"),
                    },
                    {
                        image: allImages.find((element) => element.link == "tangela"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "tangela"),
                    },
                    {
                        image: allImages.find((element) => element.link == "kangaskhan"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "kangaskhan"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "horsea"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allShinyImages.find((element) => element.link == "horsea"),
                    },
                    {
                        image: allImages.find((element) => element.link == "seadra"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "seadra"),
                    },
                    {
                        image: allImages.find((element) => element.link == "goldeen"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "goldeen"),
                    },
                    {
                        image: allImages.find((element) => element.link == "seaking"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allShinyImages.find((element) => element.link == "seaking"),
                    },
                    {
                        image: allImages.find((element) => element.link == "staryu"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "staryu"),
                    },
                    {
                        image: allImages.find((element) => element.link == "starmie"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "starmie"),
                    },
                    {
                        image: allImages.find((element) => element.link == "mrmime"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allShinyImages.find((element) => element.link == "mrmime"),
                    },
                    {
                        image: allImages.find((element) => element.link == "mrmimegalar"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "mrmimegalar"),
                    },
                    {
                        image: allImages.find((element) => element.link == "scyther"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "scyther"),
                    },
                    {
                        image: allImages.find((element) => element.link == "jynx"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allShinyImages.find((element) => element.link == "jynx"),
                    },
                    {
                        image: allImages.find((element) => element.link == "electabuzz"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "electabuzz"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "magmar"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "magmar"),
                    },
                    {
                        image: allImages.find((element) => element.link == "pinsir"),
                    },
                ],
            },
        ],
    },
    {
        title: "HOME 12",
        data: [
            {
                row: [
                    {
                        image: allShinyImages.find((element) => element.link == "pinsir"),
                    },
                    {
                        image: allImages.find((element) => element.link == "tauros"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "tauros"),
                    },
                    {
                        image: allImages.find((element) => element.link == "magikarp"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "magikarp"),
                    },
                    {
                        image: allImages.find((element) => element.link == "gyarados"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allShinyImages.find((element) => element.link == "gyarados"),
                    },
                    {
                        image: allImages.find((element) => element.link == "lapras"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "lapras"),
                    },
                    {
                        image: RegularGMaxPokemonSprites.find(
                            (element) => element.link == "lapras-gmax"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "ditto"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "ditto"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "eevee"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "eevee"),
                    },
                    {
                        image: RegularGMaxPokemonSprites.find(
                            (element) => element.link == "eevee-gmax"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "vaporeon"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "vaporeon"),
                    },
                    {
                        image: allImages.find((element) => element.link == "jolteon"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allShinyImages.find((element) => element.link == "jolteon"),
                    },
                    {
                        image: allImages.find((element) => element.link == "flareon"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "flareon"),
                    },
                    {
                        image: allImages.find((element) => element.link == "porygon"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "porygon"),
                    },
                    {
                        image: allImages.find((element) => element.link == "omanyte"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allShinyImages.find((element) => element.link == "omanyte"),
                    },
                    {
                        image: allImages.find((element) => element.link == "omastar"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "omastar"),
                    },
                    {
                        image: allImages.find((element) => element.link == "kabuto"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "kabuto"),
                    },
                    {
                        image: allImages.find((element) => element.link == "kabutops"),
                    },
                ],
            },
        ],
    },
    {
        title: "HOME 13",
        data: [
            {
                row: [
                    {
                        image: allShinyImages.find((element) => element.link == "kabutops"),
                    },
                    {
                        image: allImages.find((element) => element.link == "aerodactyl"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "aerodactyl"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "snorlax"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "snorlax"),
                    },
                    {
                        image: RegularGMaxPokemonSprites.find(
                            (element) => element.link == "snorlax-gmax"
                        ),
                    },
                ],
            },
            {
                row: [
                    {
                        image: RegularLegendaryPokemonSprites.find((element) => element.link == "articuno"),
                    },
                    {
                        image: ShinyLegendaryPokemonSprites.find((element) => element.link == "articuno"),
                    },
                    {
                        image: RegularLegendaryPokemonSprites.find((element) => element.link == "articunogalar"),
                    },
                    {
                        image: ShinyLegendaryPokemonSprites.find((element) => element.link == "articunogalar"),
                    },
                    {
                        image: RegularLegendaryPokemonSprites.find((element) => element.link == "zapdos"),
                    },
                    {
                        image: ShinyLegendaryPokemonSprites.find((element) => element.link == "zapdos"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: RegularLegendaryPokemonSprites.find((element) => element.link == "zapdosgalar"),
                    },
                    {
                        image: ShinyLegendaryPokemonSprites.find((element) => element.link == "zapdosgalar"),
                    },
                    {
                        image: RegularLegendaryPokemonSprites.find((element) => element.link == "moltres"),
                    },
                    {
                        image: ShinyLegendaryPokemonSprites.find((element) => element.link == "moltres"),
                    },
                    {
                        image: RegularLegendaryPokemonSprites.find((element) => element.link == "moltresgalar"),
                    },
                    {
                        image: ShinyLegendaryPokemonSprites.find((element) => element.link == "moltresgalar"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "dratini"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "dratini"),
                    },
                    {
                        image: allImages.find((element) => element.link == "dragonair"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "dragonair"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "dragonite"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "dragonite"
                        ),
                    },
                ],
            },
            {
                row: [
                    {
                        image: RegularLegendaryPokemonSprites.find((element) => element.link == "mewtwo"),
                    },
                    {
                        image: ShinyLegendaryPokemonSprites.find((element) => element.link == "mewtwo"),
                    },
                    {
                        image: RegularLegendaryPokemonSprites.find((element) => element.link == "mew"),
                    },
                    {
                        image: ShinyLegendaryPokemonSprites.find((element) => element.link == "mew"),
                    },
                    {
                        image: allImages.find((element) => element.link == "chikorita"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "chikorita"
                        ),
                    },
                ],
            },
        ],
    },
    {
        title: "HOME 14",
        data: [
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "bayleef"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "bayleef"),
                    },
                    {
                        image: allImages.find((element) => element.link == "meganium"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "meganium"),
                    },
                    {
                        image: allImages.find((element) => element.link == "cyndaquil"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "cyndaquil"
                        ),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "quilava"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "quilava"),
                    },
                    {
                        image: allImages.find((element) => element.link == "typhlosion"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "typhlosion"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "totodile"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "totodile"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "croconaw"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "croconaw"),
                    },
                    {
                        image: allImages.find((element) => element.link == "feraligatr"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "feraligatr"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "sentret"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "sentret"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "furret"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "furret"),
                    },
                    {
                        image: allImages.find((element) => element.link == "hoothoot"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "hoothoot"),
                    },
                    {
                        image: allImages.find((element) => element.link == "noctowl"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "noctowl"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "ledyba"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "ledyba"),
                    },
                    {
                        image: allImages.find((element) => element.link == "ledian"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "ledian"),
                    },
                    {
                        image: allImages.find((element) => element.link == "spinarak"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "spinarak"),
                    },
                ],
            },
        ],
    },
    {
        title: "HOME 15",
        data: [
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "ariados"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "ariados"),
                    },
                    {
                        image: allImages.find((element) => element.link == "crobat"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "crobat"),
                    },
                    {
                        image: allImages.find((element) => element.link == "chinchou"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "chinchou"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "lanturn"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "lanturn"),
                    },
                    {
                        image: allImages.find((element) => element.link == "pichu"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "pichu"),
                    },
                    {
                        image: allImages.find((element) => element.link == "cleffa"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "cleffa"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "igglybuff"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "igglybuff"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "togepi"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "togepi"),
                    },
                    {
                        image: allImages.find((element) => element.link == "togetic"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "togetic"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "natu"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "natu"),
                    },
                    {
                        image: allImages.find((element) => element.link == "xatu"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "xatu"),
                    },
                    {
                        image: allImages.find((element) => element.link == "mareep"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "mareep"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "flaaffy"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "flaaffy"),
                    },
                    {
                        image: allImages.find((element) => element.link == "ampharos"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "ampharos"),
                    },
                    {
                        image: allImages.find((element) => element.link == "bellossom"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "bellossom"
                        ),
                    },
                ],
            },
        ],
    },
    {
        title: "HOME 16",
        data: [
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "marill"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "marill"),
                    },
                    {
                        image: allImages.find((element) => element.link == "azumarill"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "azumarill"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "sudowoodo"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "sudowoodo"
                        ),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "politoed"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "politoed"),
                    },
                    {
                        image: allImages.find((element) => element.link == "hoppip"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "hoppip"),
                    },
                    {
                        image: allImages.find((element) => element.link == "skiploom"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "skiploom"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "jumpluff"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "jumpluff"),
                    },
                    {
                        image: allImages.find((element) => element.link == "aipom"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "aipom"),
                    },
                    {
                        image: allImages.find((element) => element.link == "sunkern"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "sunkern"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "sunflora"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "sunflora"),
                    },
                    {
                        image: allImages.find((element) => element.link == "yanma"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "yanma"),
                    },
                    {
                        image: allImages.find((element) => element.link == "wooper"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "wooper"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "quagsire"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "quagsire"),
                    },
                    {
                        image: allImages.find((element) => element.link == "espeon"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "espeon"),
                    },
                    {
                        image: allImages.find((element) => element.link == "umbreon"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "umbreon"),
                    },
                ],
            },
        ],
    },
    {
        title: "HOME 17",
        data: [
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "murkrow"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "murkrow"),
                    },
                    {
                        image: allImages.find((element) => element.link == "slowking"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "slowking"),
                    },
                    {
                        image: allImages.find((element) => element.link == "slowkinggalar"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "slowkinggalar"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "misdreavus"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "misdreavus"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "unown"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "unown"),
                    },
                    {
                        image: allImages.find((element) => element.link == "unownb"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "unownb"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "unownc"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "unownc"),
                    },
                    {
                        image: allImages.find((element) => element.link == "unownd"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "unownd"),
                    },
                    {
                        image: allImages.find((element) => element.link == "unowne"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "unowne"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "unownf"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "unownf"),
                    },
                    {
                        image: allImages.find((element) => element.link == "unowng"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "unowng"),
                    },
                    {
                        image: allImages.find((element) => element.link == "unownh"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "unownh"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "unowni"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "unowni"),
                    },
                    {
                        image: allImages.find((element) => element.link == "unownj"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "unownj"),
                    },
                    {
                        image: allImages.find((element) => element.link == "unownk"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "unownk"),
                    },
                ],
            },
        ],
    },
    {
        title: "HOME 18",
        data: [
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "unownl"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "unownl"),
                    },
                    {
                        image: allImages.find((element) => element.link == "unownm"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "unownm"),
                    },
                    {
                        image: allImages.find((element) => element.link == "unownn"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "unownn"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "unowno"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "unowno"),
                    },
                    {
                        image: allImages.find((element) => element.link == "unownp"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "unownp"),
                    },
                    {
                        image: allImages.find((element) => element.link == "unownq"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "unownq"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "unownr"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "unownr"),
                    },
                    {
                        image: allImages.find((element) => element.link == "unowns"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "unowns"),
                    },
                    {
                        image: allImages.find((element) => element.link == "unownt"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "unownt"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "unownu"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "unownu"),
                    },
                    {
                        image: allImages.find((element) => element.link == "unownv"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "unownv"),
                    },
                    {
                        image: allImages.find((element) => element.link == "unownw"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "unownw"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "unownx"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "unownx"),
                    },
                    {
                        image: allImages.find((element) => element.link == "unowny"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "unowny"),
                    },
                    {
                        image: allImages.find((element) => element.link == "unownz"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "unownz"),
                    },
                ],
            },
        ],
    },
    {
        title: "HOME 19",
        data: [
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "unownexclamation"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "unownexclamation"),
                    },
                    {
                        image: allImages.find((element) => element.link == "unownquestion"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "unownquestion"),
                    },
                    {
                        image: allImages.find((element) => element.link == "wobbuffet"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "wobbuffet"
                        ),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "girafarig"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "girafarig"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "pineco"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "pineco"),
                    },
                    {
                        image: allImages.find((element) => element.link == "forretress"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "forretress"
                        ),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "dunsparce"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "dunsparce"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "gligar"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "gligar"),
                    },
                    {
                        image: allImages.find((element) => element.link == "steelix"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "steelix"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "snubbull"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "snubbull"),
                    },
                    {
                        image: allImages.find((element) => element.link == "granbull"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "granbull"),
                    },
                    {
                        image: allImages.find((element) => element.link == "qwilfish"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "qwilfish"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "scizor"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "scizor"),
                    },
                    {
                        image: allImages.find((element) => element.link == "shuckle"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "shuckle"),
                    },
                    {
                        image: allImages.find((element) => element.link == "heracross"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "heracross"
                        ),
                    },
                ],
            },
        ],
    },
    {
        title: "HOME 20",
        data: [
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "sneasel"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "sneasel"),
                    },
                    {
                        image: allImages.find((element) => element.link == "teddiursa"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "teddiursa"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "ursaring"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "ursaring"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "slugma"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "slugma"),
                    },
                    {
                        image: allImages.find((element) => element.link == "magcargo"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "magcargo"),
                    },
                    {
                        image: allImages.find((element) => element.link == "swinub"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "swinub"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "piloswine"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "piloswine"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "corsola"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "corsola"),
                    },
                    {
                        image: allImages.find((element) => element.link == "corsolagalar"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "corsolagalar"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "remoraid"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "remoraid"),
                    },
                    {
                        image: allImages.find((element) => element.link == "octillery"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "octillery"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "delibird"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "delibird"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "mantine"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "mantine"),
                    },
                    {
                        image: allImages.find((element) => element.link == "skarmory"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "skarmory"),
                    },
                    {
                        image: allImages.find((element) => element.link == "houndour"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "houndour"),
                    },
                ],
            },
        ],
    },
    {
        title: "HOME 21",
        data: [
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "houndoom"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "houndoom"),
                    },
                    {
                        image: allImages.find((element) => element.link == "kingdra"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "kingdra"),
                    },
                    {
                        image: allImages.find((element) => element.link == "phanpy"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "phanpy"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "donphan"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "donphan"),
                    },
                    {
                        image: allImages.find((element) => element.link == "porygon2"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "porygon2"),
                    },
                    {
                        image: allImages.find((element) => element.link == "stantler"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "stantler"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "smeargle"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "smeargle"),
                    },
                    {
                        image: allImages.find((element) => element.link == "tyrogue"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "tyrogue"),
                    },
                    {
                        image: allImages.find((element) => element.link == "hitmontop"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "hitmontop"
                        ),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "smoochum"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "smoochum"),
                    },
                    {
                        image: allImages.find((element) => element.link == "elekid"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "elekid"),
                    },
                    {
                        image: allImages.find((element) => element.link == "magby"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "magby"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "miltank"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "miltank"),
                    },
                    {
                        image: allImages.find((element) => element.link == "blissey"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "blissey"),
                    },
                    {
                        image: RegularLegendaryPokemonSprites.find((element) => element.link == "raikou"),
                    },
                    {
                        image: ShinyLegendaryPokemonSprites.find((element) => element.link == "raikou"),
                    },
                ],
            },
        ],
    },
    {
        title: "HOME 22",
        data: [
            {
                row: [
                    {
                        image: RegularLegendaryPokemonSprites.find((element) => element.link == "entei"),
                    },
                    {
                        image: ShinyLegendaryPokemonSprites.find((element) => element.link == "entei"),
                    },
                    {
                        image: RegularLegendaryPokemonSprites.find((element) => element.link == "suicune"),
                    },
                    {
                        image: ShinyLegendaryPokemonSprites.find((element) => element.link == "suicune"),
                    },
                    {
                        image: allImages.find((element) => element.link == "larvitar"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "larvitar"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "pupitar"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "pupitar"),
                    },
                    {
                        image: allImages.find((element) => element.link == "tyranitar"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "tyranitar"
                        ),
                    },
                    {
                        image: RegularLegendaryPokemonSprites.find((element) => element.link == "lugia"),
                    },
                    {
                        image: ShinyLegendaryPokemonSprites.find((element) => element.link == "lugia"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: RegularLegendaryPokemonSprites.find((element) => element.link == "hooh"),
                    },
                    {
                        image: ShinyLegendaryPokemonSprites.find((element) => element.link == "hooh"),
                    },
                    {
                        image: RegularLegendaryPokemonSprites.find((element) => element.link == "celebi"),
                    },
                    {
                        image: ShinyLegendaryPokemonSprites.find((element) => element.link == "celebi"),
                    },
                    {
                        image: allImages.find((element) => element.link == "treecko"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "treecko"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "grovyle"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "grovyle"),
                    },
                    {
                        image: allImages.find((element) => element.link == "sceptile"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "sceptile"),
                    },
                    {
                        image: allImages.find((element) => element.link == "torchic"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "torchic"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "combusken"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "combusken"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "blaziken"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "blaziken"),
                    },
                    {
                        image: allImages.find((element) => element.link == "mudkip"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "mudkip"),
                    },
                ],
            },
        ],
    },
    {
        title: "HOME 23",
        data: [
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "marshtomp"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "marshtomp"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "swampert"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "swampert"),
                    },
                    {
                        image: allImages.find((element) => element.link == "poochyena"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "poochyena"
                        ),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "mightyena"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "mightyena"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "zigzagoon"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "zigzagoon"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "zigzagoongalar"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "zigzagoongalar"
                        ),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "linoone"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "linoone"),
                    },
                    {
                        image: allImages.find((element) => element.link == "linoonegalar"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "linoonegalar"),
                    },
                    {
                        image: allImages.find((element) => element.link == "wurmple"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "wurmple"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "silcoon"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "silcoon"),
                    },
                    {
                        image: allImages.find((element) => element.link == "beautifly"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "beautifly"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "cascoon"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "cascoon"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "dustox"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "dustox"),
                    },
                    {
                        image: allImages.find((element) => element.link == "lotad"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "lotad"),
                    },
                    {
                        image: allImages.find((element) => element.link == "lombre"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "lombre"),
                    },
                ],
            },
        ],
    },
    {
        title: "HOME 24",
        data: [
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "ludicolo"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "ludicolo"),
                    },
                    {
                        image: allImages.find((element) => element.link == "seedot"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "seedot"),
                    },
                    {
                        image: allImages.find((element) => element.link == "nuzleaf"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "nuzleaf"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "shiftry"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "shiftry"),
                    },
                    {
                        image: allImages.find((element) => element.link == "taillow"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "taillow"),
                    },
                    {
                        image: allImages.find((element) => element.link == "swellow"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "swellow"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "wingull"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "wingull"),
                    },
                    {
                        image: allImages.find((element) => element.link == "pelipper"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "pelipper"),
                    },
                    {
                        image: allImages.find((element) => element.link == "ralts"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "ralts"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "kirlia"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "kirlia"),
                    },
                    {
                        image: allImages.find((element) => element.link == "gardevoir"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "gardevoir"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "surskit"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "surskit"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "masquerain"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "masquerain"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "shroomish"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "shroomish"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "breloom"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "breloom"),
                    },
                ],
            },
        ],
    },
    {
        title: "HOME 25",
        data: [
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "slakoth"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "slakoth"),
                    },
                    {
                        image: allImages.find((element) => element.link == "vigoroth"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "vigoroth"),
                    },
                    {
                        image: allImages.find((element) => element.link == "slaking"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "slaking"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "nincada"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "nincada"),
                    },
                    {
                        image: allImages.find((element) => element.link == "ninjask"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "ninjask"),
                    },
                    {
                        image: allImages.find((element) => element.link == "shedinja"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "shedinja"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "whismur"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "whismur"),
                    },
                    {
                        image: allImages.find((element) => element.link == "loudred"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "loudred"),
                    },
                    {
                        image: allImages.find((element) => element.link == "exploud"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "exploud"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "makuhita"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "makuhita"),
                    },
                    {
                        image: allImages.find((element) => element.link == "hariyama"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "hariyama"),
                    },
                    {
                        image: allImages.find((element) => element.link == "azurill"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "azurill"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "nosepass"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "nosepass"),
                    },
                    {
                        image: allImages.find((element) => element.link == "skitty"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "skitty"),
                    },
                    {
                        image: allImages.find((element) => element.link == "delcatty"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "delcatty"),
                    },
                ],
            },
        ],
    },
    {
        title: "HOME 26",
        data: [
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "sableye"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "sableye"),
                    },
                    {
                        image: allImages.find((element) => element.link == "mawile"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "mawile"),
                    },
                    {
                        image: allImages.find((element) => element.link == "aron"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "aron"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "lairon"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "lairon"),
                    },
                    {
                        image: allImages.find((element) => element.link == "aggron"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "aggron"),
                    },
                    {
                        image: allImages.find((element) => element.link == "meditite"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "meditite"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "medicham"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "medicham"),
                    },
                    {
                        image: allImages.find((element) => element.link == "electrike"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "electrike"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "manectric"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "manectric"
                        ),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "plusle"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "plusle"),
                    },
                    {
                        image: allImages.find((element) => element.link == "minun"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "minun"),
                    },
                    {
                        image: allImages.find((element) => element.link == "volbeat"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "volbeat"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "illumise"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "illumise"),
                    },
                    {
                        image: allImages.find((element) => element.link == "roselia"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "roselia"),
                    },
                    {
                        image: allImages.find((element) => element.link == "gulpin"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "gulpin"),
                    },
                ],
            },
        ],
    },
    {
        title: "HOME 27",
        data: [
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "swalot"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "swalot"),
                    },
                    {
                        image: allImages.find((element) => element.link == "carvanha"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "carvanha"),
                    },
                    {
                        image: allImages.find((element) => element.link == "sharpedo"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "sharpedo"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "wailmer"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "wailmer"),
                    },
                    {
                        image: allImages.find((element) => element.link == "wailord"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "wailord"),
                    },
                    {
                        image: allImages.find((element) => element.link == "numel"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "numel"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "camerupt"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "camerupt"),
                    },
                    {
                        image: allImages.find((element) => element.link == "torkoal"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "torkoal"),
                    },
                    {
                        image: allImages.find((element) => element.link == "spoink"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "spoink"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "grumpig"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "grumpig"),
                    },
                    {
                        image: allImages.find((element) => element.link == "spinda"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "spinda"),
                    },
                    {
                        image: allImages.find((element) => element.link == "trapinch"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "trapinch"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "vibrava"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "vibrava"),
                    },
                    {
                        image: allImages.find((element) => element.link == "flygon"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "flygon"),
                    },
                    {
                        image: allImages.find((element) => element.link == "cacnea"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "cacnea"),
                    },
                ],
            },
        ],
    },
    {
        title: "HOME 28",
        data: [
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "cacturne"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "cacturne"),
                    },
                    {
                        image: allImages.find((element) => element.link == "swablu"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "swablu"),
                    },
                    {
                        image: allImages.find((element) => element.link == "altaria"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "altaria"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "zangoose"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "zangoose"),
                    },
                    {
                        image: allImages.find((element) => element.link == "seviper"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "seviper"),
                    },
                    {
                        image: allImages.find((element) => element.link == "lunatone"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "lunatone"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "solrock"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "solrock"),
                    },
                    {
                        image: allImages.find((element) => element.link == "barboach"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "barboach"),
                    },
                    {
                        image: allImages.find((element) => element.link == "whiscash"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "whiscash"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "corphish"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "corphish"),
                    },
                    {
                        image: allImages.find((element) => element.link == "crawdaunt"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "crawdaunt"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "baltoy"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "baltoy"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "claydol"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "claydol"),
                    },
                    {
                        image: allImages.find((element) => element.link == "lileep"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "lileep"),
                    },
                    {
                        image: allImages.find((element) => element.link == "cradily"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "cradily"),
                    },
                ],
            },
        ],
    },
    {
        title: "HOME 29",
        data: [
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "anorith"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "anorith"),
                    },
                    {
                        image: allImages.find((element) => element.link == "armaldo"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "armaldo"),
                    },
                    {
                        image: allImages.find((element) => element.link == "feebas"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "feebas"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "milotic"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "milotic"),
                    },
                    {
                        image: allImages.find((element) => element.link == "castform"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "castform"),
                    },
                    {
                        image: allImages.find((element) => element.link == "kecleon"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "kecleon"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "shuppet"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "shuppet"),
                    },
                    {
                        image: allImages.find((element) => element.link == "banette"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "banette"),
                    },
                    {
                        image: allImages.find((element) => element.link == "duskull"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "duskull"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "dusclops"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "dusclops"),
                    },
                    {
                        image: allImages.find((element) => element.link == "tropius"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "tropius"),
                    },
                    {
                        image: allImages.find((element) => element.link == "chimecho"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "chimecho"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "absol"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "absol"),
                    },
                    {
                        image: allImages.find((element) => element.link == "wynaut"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "wynaut"),
                    },
                    {
                        image: allImages.find((element) => element.link == "snorunt"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "snorunt"),
                    },
                ],
            },
        ],
    },
    {
        title: "HOME 30",
        data: [
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "glalie"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "glalie"),
                    },
                    {
                        image: allImages.find((element) => element.link == "spheal"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "spheal"),
                    },
                    {
                        image: allImages.find((element) => element.link == "sealeo"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "sealeo"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "walrein"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "walrein"),
                    },
                    {
                        image: allImages.find((element) => element.link == "clamperl"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "clamperl"),
                    },
                    {
                        image: allImages.find((element) => element.link == "huntail"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "huntail"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "gorebyss"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "gorebyss"),
                    },
                    {
                        image: allImages.find((element) => element.link == "relicanth"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "relicanth"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "luvdisc"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "luvdisc"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "bagon"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "bagon"),
                    },
                    {
                        image: allImages.find((element) => element.link == "shelgon"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "shelgon"),
                    },
                    {
                        image: allImages.find((element) => element.link == "salamence"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "salamence"
                        ),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "beldum"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "beldum"),
                    },
                    {
                        image: allImages.find((element) => element.link == "metang"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "metang"),
                    },
                    {
                        image: allImages.find((element) => element.link == "metagross"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "metagross"
                        ),
                    },
                ],
            },
        ],
    },
    {
        title: "HOME 31",
        data: [
            {
                row: [
                    {
                        image: RegularLegendaryPokemonSprites.find((element) => element.link == "regirock"),
                    },
                    {
                        image: ShinyLegendaryPokemonSprites.find((element) => element.link == "regirock"),
                    },
                    {
                        image: RegularLegendaryPokemonSprites.find((element) => element.link == "regice"),
                    },
                    {
                        image: ShinyLegendaryPokemonSprites.find((element) => element.link == "regice"),
                    },
                    {
                        image: RegularLegendaryPokemonSprites.find((element) => element.link == "registeel"),
                    },
                    {
                        image: ShinyLegendaryPokemonSprites.find(
                            (element) => element.link == "registeel"
                        ),
                    },
                ],
            },
            {
                row: [
                    {
                        image: RegularLegendaryPokemonSprites.find((element) => element.link == "latias"),
                    },
                    {
                        image: ShinyLegendaryPokemonSprites.find((element) => element.link == "latias"),
                    },
                    {
                        image: RegularLegendaryPokemonSprites.find((element) => element.link == "latios"),
                    },
                    {
                        image: ShinyLegendaryPokemonSprites.find((element) => element.link == "latios"),
                    },
                    {
                        image: RegularLegendaryPokemonSprites.find((element) => element.link == "kyogre"),
                    },
                    {
                        image: ShinyLegendaryPokemonSprites.find((element) => element.link == "kyogre"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: RegularLegendaryPokemonSprites.find((element) => element.link == "groudon"),
                    },
                    {
                        image: ShinyLegendaryPokemonSprites.find((element) => element.link == "groudon"),
                    },
                    {
                        image: RegularLegendaryPokemonSprites.find((element) => element.link == "rayquaza"),
                    },
                    {
                        image: ShinyLegendaryPokemonSprites.find((element) => element.link == "rayquaza"),
                    },
                    {
                        image: RegularLegendaryPokemonSprites.find((element) => element.link == "jirachi"),
                    },
                    {
                        image: ShinyLegendaryPokemonSprites.find((element) => element.link == "jirachi"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: RegularLegendaryPokemonSprites.find((element) => element.link == "deoxys"),
                    },
                    {
                        image: ShinyLegendaryPokemonSprites.find((element) => element.link == "deoxys"),
                    },
                    {
                        image: RegularLegendaryPokemonSprites.find((element) => element.link == "deoxysattack"),
                    },
                    {
                        image: ShinyLegendaryPokemonSprites.find((element) => element.link == "deoxysattack"),
                    },
                    {
                        image: RegularLegendaryPokemonSprites.find((element) => element.link == "deoxysdefense"),
                    },
                    {
                        image: ShinyLegendaryPokemonSprites.find((element) => element.link == "deoxysdefense"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: RegularLegendaryPokemonSprites.find((element) => element.link == "deoxysspeed"),
                    },
                    {
                        image: ShinyLegendaryPokemonSprites.find((element) => element.link == "deoxysspeed"),
                    },
                    {
                        image: allImages.find((element) => element.link == "turtwig"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "turtwig"),
                    },
                    {
                        image: allImages.find((element) => element.link == "grotle"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "grotle"),
                    },
                ],
            },
        ],
    },
    {
        title: "HOME 32",
        data: [
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "torterra"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "torterra"),
                    },
                    {
                        image: allImages.find((element) => element.link == "chimchar"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "chimchar"),
                    },
                    {
                        image: allImages.find((element) => element.link == "monferno"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "monferno"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "infernape"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "infernape"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "piplup"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "piplup"),
                    },
                    {
                        image: allImages.find((element) => element.link == "prinplup"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "prinplup"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "empoleon"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "empoleon"),
                    },
                    {
                        image: allImages.find((element) => element.link == "starly"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "starly"),
                    },
                    {
                        image: allImages.find((element) => element.link == "staravia"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "staravia"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "staraptor"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "staraptor"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "bidoof"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "bidoof"),
                    },
                    {
                        image: allImages.find((element) => element.link == "bibarel"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "bibarel"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "kricketot"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "kricketot"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "kricketune"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "kricketune"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "shinx"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "shinx"),
                    },
                ],
            },
        ],
    },
    {
        title: "HOME 33",
        data: [
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "luxio"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "luxio"),
                    },
                    {
                        image: allImages.find((element) => element.link == "luxray"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "luxray"),
                    },
                    {
                        image: allImages.find((element) => element.link == "budew"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "budew"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "roserade"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "roserade"),
                    },
                    {
                        image: allImages.find((element) => element.link == "cranidos"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "cranidos"),
                    },
                    {
                        image: allImages.find((element) => element.link == "rampardos"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "rampardos"
                        ),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "shieldon"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "shieldon"),
                    },
                    {
                        image: allImages.find((element) => element.link == "bastiodon"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "bastiodon"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "burmy"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "burmy"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "burmysandy"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "burmysandy"),
                    },
                    {
                        image: allImages.find((element) => element.link == "burmytrash"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "burmytrash"),
                    },
                    {
                        image: allImages.find((element) => element.link == "wormadam"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "wormadam"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "wormadamsandy"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "wormadamsandy"),
                    },
                    {
                        image: allImages.find((element) => element.link == "wormadamtrash"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "wormadamtrash"),
                    },
                    {
                        image: allImages.find((element) => element.link == "mothim"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "mothim"),
                    },
                ],
            },
        ],
    },
    {
        title: "HOME 34",
        data: [
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "combee"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "combee"),
                    },
                    {
                        image: allImages.find((element) => element.link == "vespiquen"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "vespiquen"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "pachirisu"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "pachirisu"
                        ),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "buizel"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "buizel"),
                    },
                    {
                        image: allImages.find((element) => element.link == "floatzel"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "floatzel"),
                    },
                    {
                        image: allImages.find((element) => element.link == "cherubi"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "cherubi"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "cherrim"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "cherrim"),
                    },
                    {
                        image: allImages.find((element) => element.link == "shellos"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "shellos"),
                    },
                    {
                        image: allImages.find((element) => element.link == "shelloseast"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "shelloseast"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "gastrodon"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "gastrodon"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "gastrodoneast"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "gastrodoneast"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "ambipom"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "ambipom"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "drifloon"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "drifloon"),
                    },
                    {
                        image: allImages.find((element) => element.link == "drifblim"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "drifblim"),
                    },
                    {
                        image: allImages.find((element) => element.link == "buneary"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "buneary"),
                    },
                ],
            },
        ],
    },
    {
        title: "HOME 35",
        data: [
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "lopunny"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "lopunny"),
                    },
                    {
                        image: allImages.find((element) => element.link == "mismagius"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "mismagius"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "honchkrow"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "honchkrow"
                        ),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "glameow"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "glameow"),
                    },
                    {
                        image: allImages.find((element) => element.link == "purugly"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "purugly"),
                    },
                    {
                        image: allImages.find((element) => element.link == "chingling"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "chingling"
                        ),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "stunky"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "stunky"),
                    },
                    {
                        image: allImages.find((element) => element.link == "skuntank"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "skuntank"),
                    },
                    {
                        image: allImages.find((element) => element.link == "bronzor"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "bronzor"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "bronzong"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "bronzong"),
                    },
                    {
                        image: allImages.find((element) => element.link == "bonsly"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "bonsly"),
                    },
                    {
                        image: allImages.find((element) => element.link == "mimejr"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "mimejr"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "happiny"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "happiny"),
                    },
                    {
                        image: allImages.find((element) => element.link == "chatot"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "chatot"),
                    },
                    {
                        image: allImages.find((element) => element.link == "spiritomb"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "spiritomb"
                        ),
                    },
                ],
            },
        ],
    },
    {
        title: "HOME 36",
        data: [
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "gible"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "gible"),
                    },
                    {
                        image: allImages.find((element) => element.link == "gabite"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "gabite"),
                    },
                    {
                        image: allImages.find((element) => element.link == "garchomp"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "garchomp"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "munchlax"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "munchlax"),
                    },
                    {
                        image: allImages.find((element) => element.link == "riolu"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "riolu"),
                    },
                    {
                        image: allImages.find((element) => element.link == "lucario"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "lucario"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "hippopotas"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "hippopotas"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "hippowdon"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "hippowdon"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "skorupi"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "skorupi"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "drapion"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "drapion"),
                    },
                    {
                        image: allImages.find((element) => element.link == "croagunk"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "croagunk"),
                    },
                    {
                        image: allImages.find((element) => element.link == "toxicroak"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "toxicroak"
                        ),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "carnivine"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "carnivine"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "finneon"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "finneon"),
                    },
                    {
                        image: allImages.find((element) => element.link == "lumineon"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "lumineon"),
                    },
                ],
            },
        ],
    },
    {
        title: "HOME 37",
        data: [
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "mantyke"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "mantyke"),
                    },
                    {
                        image: allImages.find((element) => element.link == "snover"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "snover"),
                    },
                    {
                        image: allImages.find((element) => element.link == "abomasnow"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "abomasnow"
                        ),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "weavile"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "weavile"),
                    },
                    {
                        image: allImages.find((element) => element.link == "magnezone"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "magnezone"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "lickilicky"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "lickilicky"
                        ),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "rhyperior"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "rhyperior"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "tangrowth"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "tangrowth"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "electivire"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "electivire"
                        ),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "magmortar"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "magmortar"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "togekiss"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "togekiss"),
                    },
                    {
                        image: allImages.find((element) => element.link == "yanmega"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "yanmega"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "leafeon"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "leafeon"),
                    },
                    {
                        image: allImages.find((element) => element.link == "glaceon"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "glaceon"),
                    },
                    {
                        image: allImages.find((element) => element.link == "gliscor"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "gliscor"),
                    },
                ],
            },
        ],
    },
    {
        title: "HOME 38",
        data: [
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "mamoswine"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "mamoswine"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "porygonz"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "porygonz"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "gallade"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "gallade"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "probopass"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "probopass"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "dusknoir"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "dusknoir"),
                    },
                    {
                        image: allImages.find((element) => element.link == "froslass"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "froslass"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "rotom"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "rotom"),
                    },
                    {
                        image: allImages.find((element) => element.link == "rotomfan"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "rotomfan"),
                    },
                    {
                        image: allImages.find((element) => element.link == "rotomfrost"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "rotomfrost"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "rotomheat"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "rotomheat"),
                    },
                    {
                        image: allImages.find((element) => element.link == "rotommow"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "rotommow"),
                    },
                    {
                        image: allImages.find((element) => element.link == "rotomwash"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "rotomwash"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: RegularLegendaryPokemonSprites.find((element) => element.link == "uxie"),
                    },
                    {
                        image: ShinyLegendaryPokemonSprites.find((element) => element.link == "uxie"),
                    },
                    {
                        image: RegularLegendaryPokemonSprites.find((element) => element.link == "mesprit"),
                    },
                    {
                        image: ShinyLegendaryPokemonSprites.find((element) => element.link == "mesprit"),
                    },
                    {
                        image: RegularLegendaryPokemonSprites.find((element) => element.link == "azelf"),
                    },
                    {
                        image: ShinyLegendaryPokemonSprites.find((element) => element.link == "azelf"),
                    },
                ],
            },
        ],
    },
    {
        title: "HOME 39",
        data: [
            {
                row: [
                    {
                        image: RegularLegendaryPokemonSprites.find((element) => element.link == "dialga"),
                    },
                    {
                        image: ShinyLegendaryPokemonSprites.find((element) => element.link == "dialga"),
                    },
                    {
                        image: RegularLegendaryPokemonSprites.find((element) => element.link == "palkia"),
                    },
                    {
                        image: ShinyLegendaryPokemonSprites.find((element) => element.link == "palkia"),
                    },
                    {
                        image: RegularLegendaryPokemonSprites.find((element) => element.link == "heatran"),
                    },
                    {
                        image: ShinyLegendaryPokemonSprites.find((element) => element.link == "heatran"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: RegularLegendaryPokemonSprites.find((element) => element.link == "regigigas"),
                    },
                    {
                        image: ShinyLegendaryPokemonSprites.find(
                            (element) => element.link == "regigigas"
                        ),
                    },
                    {
                        image: RegularLegendaryPokemonSprites.find((element) => element.link == "giratina"),
                    },
                    {
                        image: ShinyLegendaryPokemonSprites.find((element) => element.link == "giratina"),
                    },
                    {
                        image: RegularLegendaryPokemonSprites.find((element) => element.link == "cresselia"),
                    },
                    {
                        image: ShinyLegendaryPokemonSprites.find(
                            (element) => element.link == "cresselia"
                        ),
                    },
                ],
            },
            {
                row: [
                    {
                        image: RegularLegendaryPokemonSprites.find((element) => element.link == "phione"),
                    },
                    {
                        image: ShinyLegendaryPokemonSprites.find((element) => element.link == "phione"),
                    },
                    {
                        image: RegularLegendaryPokemonSprites.find((element) => element.link == "manaphy"),
                    },
                    {
                        image: ShinyLegendaryPokemonSprites.find((element) => element.link == "manaphy"),
                    },
                    {
                        image: RegularLegendaryPokemonSprites.find((element) => element.link == "darkrai"),
                    },
                    {
                        image: ShinyLegendaryPokemonSprites.find((element) => element.link == "darkrai"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: RegularLegendaryPokemonSprites.find((element) => element.link == "shaymin"),
                    },
                    {
                        image: ShinyLegendaryPokemonSprites.find((element) => element.link == "shaymin"),
                    },
                    {
                        image: RegularLegendaryPokemonSprites.find((element) => element.link == "arceus"),
                    },
                    {
                        image: ShinyLegendaryPokemonSprites.find((element) => element.link == "arceus"),
                    },
                    {
                        image: RegularLegendaryPokemonSprites.find((element) => element.link == "victini"),
                    },
                    {
                        image: ShinyLegendaryPokemonSprites.find((element) => element.link == "victini"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "snivy"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "snivy"),
                    },
                    {
                        image: allImages.find((element) => element.link == "servine"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "servine"),
                    },
                    {
                        image: allImages.find((element) => element.link == "serperior"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "serperior"
                        ),
                    },
                ],
            },
        ],
    },
    {
        title: "HOME 40",
        data: [
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "tepig"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "tepig"),
                    },
                    {
                        image: allImages.find((element) => element.link == "pignite"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "pignite"),
                    },
                    {
                        image: allImages.find((element) => element.link == "emboar"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "emboar"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "oshawott"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "oshawott"),
                    },
                    {
                        image: allImages.find((element) => element.link == "dewott"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "dewott"),
                    },
                    {
                        image: allImages.find((element) => element.link == "samurott"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "samurott"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "patrat"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "patrat"),
                    },
                    {
                        image: allImages.find((element) => element.link == "watchog"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "watchog"),
                    },
                    {
                        image: allImages.find((element) => element.link == "lillipup"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "lillipup"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "herdier"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "herdier"),
                    },
                    {
                        image: allImages.find((element) => element.link == "stoutland"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "stoutland"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "purrloin"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "purrloin"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "liepard"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "liepard"),
                    },
                    {
                        image: allImages.find((element) => element.link == "pansage"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "pansage"),
                    },
                    {
                        image: allImages.find((element) => element.link == "simisage"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "simisage"),
                    },
                ],
            },
        ],
    },
    {
        title: "HOME 41",
        data: [
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "pansear"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "pansear"),
                    },
                    {
                        image: allImages.find((element) => element.link == "simisear"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "simisear"),
                    },
                    {
                        image: allImages.find((element) => element.link == "panpour"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "panpour"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "simipour"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "simipour"),
                    },
                    {
                        image: allImages.find((element) => element.link == "munna"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "munna"),
                    },
                    {
                        image: allImages.find((element) => element.link == "musharna"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "musharna"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "pidove"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "pidove"),
                    },
                    {
                        image: allImages.find((element) => element.link == "tranquill"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "tranquill"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "unfezant"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "unfezant"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "unfezantf"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "unfezantf"),
                    },
                    {
                        image: allImages.find((element) => element.link == "blitzle"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "blitzle"),
                    },
                    {
                        image: allImages.find((element) => element.link == "zebstrika"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "zebstrika"
                        ),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "roggenrola"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "roggenrola"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "boldore"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "boldore"),
                    },
                    {
                        image: allImages.find((element) => element.link == "gigalith"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "gigalith"),
                    },
                ],
            },
        ],
    },
    {
        title: "HOME 42",
        data: [
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "woobat"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "woobat"),
                    },
                    {
                        image: allImages.find((element) => element.link == "swoobat"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "swoobat"),
                    },
                    {
                        image: allImages.find((element) => element.link == "drilbur"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "drilbur"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "excadrill"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "excadrill"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "audino"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "audino"),
                    },
                    {
                        image: allImages.find((element) => element.link == "timburr"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "timburr"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "gurdurr"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "gurdurr"),
                    },
                    {
                        image: allImages.find((element) => element.link == "conkeldurr"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "conkeldurr"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "tympole"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "tympole"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "palpitoad"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "palpitoad"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "seismitoad"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "seismitoad"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "throh"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "throh"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "sawk"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "sawk"),
                    },
                    {
                        image: allImages.find((element) => element.link == "sewaddle"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "sewaddle"),
                    },
                    {
                        image: allImages.find((element) => element.link == "swadloon"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "swadloon"),
                    },
                ],
            },
        ],
    },
    {
        title: "HOME 43",
        data: [
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "leavanny"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "leavanny"),
                    },
                    {
                        image: allImages.find((element) => element.link == "venipede"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "venipede"),
                    },
                    {
                        image: allImages.find((element) => element.link == "whirlipede"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "whirlipede"
                        ),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "scolipede"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "scolipede"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "cottonee"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "cottonee"),
                    },
                    {
                        image: allImages.find((element) => element.link == "whimsicott"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "whimsicott"
                        ),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "petilil"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "petilil"),
                    },
                    {
                        image: allImages.find((element) => element.link == "lilligant"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "lilligant"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "basculin"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "basculin"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "basculin"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "basculin"),
                    },
                    {
                        image: allImages.find((element) => element.link == "sandile"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "sandile"),
                    },
                    {
                        image: allImages.find((element) => element.link == "krokorok"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "krokorok"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "krookodile"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "krookodile"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "darumaka"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "darumaka"),
                    },
                    {
                        image: allImages.find((element) => element.link == "darumakagalar"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "darumakagalar"),
                    },
                ],
            },
        ],
    },
    {
        title: "HOME 44",
        data: [
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "darmanitan"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "darmanitan"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "darmanitangalar"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "darmanitangalar"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "maractus"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "maractus"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "dwebble"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "dwebble"),
                    },
                    {
                        image: allImages.find((element) => element.link == "crustle"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "crustle"),
                    },
                    {
                        image: allImages.find((element) => element.link == "scraggy"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "scraggy"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "scrafty"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "scrafty"),
                    },
                    {
                        image: allImages.find((element) => element.link == "sigilyph"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "sigilyph"),
                    },
                    {
                        image: allImages.find((element) => element.link == "yamask"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "yamask"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "yamaskgalar"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "yamaskgalar"),
                    },
                    {
                        image: allImages.find((element) => element.link == "cofagrigus"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "cofagrigus"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "tirtouga"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "tirtouga"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "carracosta"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "carracosta"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "archen"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "archen"),
                    },
                    {
                        image: allImages.find((element) => element.link == "archeops"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "archeops"),
                    },
                ],
            },
        ],
    },
    {
        title: "HOME 45",
        data: [
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "trubbish"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "trubbish"),
                    },
                    {
                        image: allImages.find((element) => element.link == "garbodor"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "garbodor"),
                    },
                    {
                        image: RegularGMaxPokemonSprites.find(
                            (element) => element.link == "garbodor-gmax"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "zorua"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allShinyImages.find((element) => element.link == "zorua"),
                    },
                    {
                        image: allImages.find((element) => element.link == "zoroark"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "zoroark"),
                    },
                    {
                        image: allImages.find((element) => element.link == "minccino"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "minccino"),
                    },
                    {
                        image: allImages.find((element) => element.link == "cinccino"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allShinyImages.find((element) => element.link == "cinccino"),
                    },
                    {
                        image: allImages.find((element) => element.link == "gothita"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "gothita"),
                    },
                    {
                        image: allImages.find((element) => element.link == "gothorita"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "gothorita"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "gothitelle"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "gothitelle"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "solosis"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "solosis"),
                    },
                    {
                        image: allImages.find((element) => element.link == "duosion"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "duosion"),
                    },
                    {
                        image: allImages.find((element) => element.link == "reuniclus"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "reuniclus"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "ducklett"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "ducklett"),
                    },
                    {
                        image: allImages.find((element) => element.link == "swanna"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "swanna"),
                    },
                    {
                        image: allImages.find((element) => element.link == "vanillite"),
                    },
                ],
            },
        ],
    },
    {
        title: "HOME 46",
        data: [
            {
                row: [
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "vanillite"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "vanillish"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "vanillish"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "vanilluxe"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "vanilluxe"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "deerling"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allShinyImages.find((element) => element.link == "deerling"),
                    },
                    {
                        image: allImages.find((element) => element.link == "deerlingautumn"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "deerlingautumn"),
                    },
                    {
                        image: allImages.find((element) => element.link == "deerlingsummer"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "deerlingsummer"),
                    },
                    {
                        image: allImages.find((element) => element.link == "deerlingwinter"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allShinyImages.find((element) => element.link == "deerlingwinter"),
                    },
                    {
                        image: allImages.find((element) => element.link == "sawsbuck"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "sawsbuck"),
                    },
                    {
                        image: allImages.find((element) => element.link == "sawsbuckautumn"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "sawsbuckautumn"),
                    },
                    {
                        image: allImages.find((element) => element.link == "sawsbucksummer"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allShinyImages.find((element) => element.link == "sawsbucksummer"),
                    },
                    {
                        image: allImages.find((element) => element.link == "sawsbuckwinter"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "sawsbuckwinter"),
                    },
                    {
                        image: allImages.find((element) => element.link == "emolga"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "emolga"),
                    },
                    {
                        image: allImages.find((element) => element.link == "karrablast"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "karrablast"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "escavalier"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "escavalier"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "foongus"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "foongus"),
                    },
                    {
                        image: allImages.find((element) => element.link == "amoonguss"),
                    },
                ],
            },
        ],
    },
    {
        title: "HOME 47",
        data: [
            {
                row: [
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "amoonguss"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "frillish"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "frillish"),
                    },
                    {
                        image: allImages.find((element) => element.link == "frillishf"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "frillishf"),
                    },
                    {
                        image: allImages.find((element) => element.link == "jellicent"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "jellicent"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "jellicentf"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "jellicentf"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "alomomola"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "alomomola"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "joltik"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allShinyImages.find((element) => element.link == "joltik"),
                    },
                    {
                        image: allImages.find((element) => element.link == "galvantula"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "galvantula"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "ferroseed"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "ferroseed"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "ferrothorn"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "ferrothorn"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "klink"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "klink"),
                    },
                    {
                        image: allImages.find((element) => element.link == "klang"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "klang"),
                    },
                    {
                        image: allImages.find((element) => element.link == "klinklang"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "klinklang"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "tynamo"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "tynamo"),
                    },
                    {
                        image: allImages.find((element) => element.link == "eelektrik"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "eelektrik"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "eelektross"),
                    },
                ],
            },
        ],
    },
    {
        title: "HOME 48",
        data: [
            {
                row: [
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "eelektross"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "elgyem"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "elgyem"),
                    },
                    {
                        image: allImages.find((element) => element.link == "beheeyem"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "beheeyem"),
                    },
                    {
                        image: allImages.find((element) => element.link == "litwick"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allShinyImages.find((element) => element.link == "litwick"),
                    },
                    {
                        image: allImages.find((element) => element.link == "lampent"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "lampent"),
                    },
                    {
                        image: allImages.find((element) => element.link == "chandelure"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "chandelure"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "axew"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allShinyImages.find((element) => element.link == "axew"),
                    },
                    {
                        image: allImages.find((element) => element.link == "fraxure"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "fraxure"),
                    },
                    {
                        image: allImages.find((element) => element.link == "haxorus"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "haxorus"),
                    },
                    {
                        image: allImages.find((element) => element.link == "cubchoo"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allShinyImages.find((element) => element.link == "cubchoo"),
                    },
                    {
                        image: allImages.find((element) => element.link == "beartic"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "beartic"),
                    },
                    {
                        image: allImages.find((element) => element.link == "cryogonal"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "cryogonal"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "shelmet"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allShinyImages.find((element) => element.link == "shelmet"),
                    },
                    {
                        image: allImages.find((element) => element.link == "accelgor"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "accelgor"),
                    },
                    {
                        image: allImages.find((element) => element.link == "stunfisk"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "stunfisk"),
                    },
                    {
                        image: allImages.find((element) => element.link == "stunfiskgalar"),
                    },
                ],
            },
        ],
    },
    {
        title: "HOME 49",
        data: [
            {
                row: [
                    {
                        image: allShinyImages.find((element) => element.link == "stunfiskgalar"),
                    },
                    {
                        image: allImages.find((element) => element.link == "mienfoo"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "mienfoo"),
                    },
                    {
                        image: allImages.find((element) => element.link == "mienshao"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "mienshao"),
                    },
                    {
                        image: allImages.find((element) => element.link == "druddigon"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "druddigon"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "golett"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "golett"),
                    },
                    {
                        image: allImages.find((element) => element.link == "golurk"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "golurk"),
                    },
                    {
                        image: allImages.find((element) => element.link == "pawniard"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allShinyImages.find((element) => element.link == "pawniard"),
                    },
                    {
                        image: allImages.find((element) => element.link == "bisharp"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "bisharp"),
                    },
                    {
                        image: allImages.find((element) => element.link == "bouffalant"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "bouffalant"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "rufflet"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allShinyImages.find((element) => element.link == "rufflet"),
                    },
                    {
                        image: allImages.find((element) => element.link == "braviary"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "braviary"),
                    },
                    {
                        image: allImages.find((element) => element.link == "vullaby"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "vullaby"),
                    },
                    {
                        image: allImages.find((element) => element.link == "mandibuzz"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "mandibuzz"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "heatmor"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "heatmor"),
                    },
                    {
                        image: allImages.find((element) => element.link == "durant"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "durant"),
                    },
                    {
                        image: allImages.find((element) => element.link == "deino"),
                    },
                ],
            },
        ],
    },
    {
        title: "HOME 50",
        data: [
            {
                row: [
                    {
                        image: allShinyImages.find((element) => element.link == "deino"),
                    },
                    {
                        image: allImages.find((element) => element.link == "zweilous"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "zweilous"),
                    },
                    {
                        image: allImages.find((element) => element.link == "hydreigon"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "hydreigon"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "larvesta"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allShinyImages.find((element) => element.link == "larvesta"),
                    },
                    {
                        image: allImages.find((element) => element.link == "volcarona"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "volcarona"
                        ),
                    },
                    {
                        image: RegularLegendaryPokemonSprites.find((element) => element.link == "cobalion"),
                    },
                    {
                        image: ShinyLegendaryPokemonSprites.find((element) => element.link == "cobalion"),
                    },
                    {
                        image: RegularLegendaryPokemonSprites.find((element) => element.link == "terrakion"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: ShinyLegendaryPokemonSprites.find(
                            (element) => element.link == "terrakion"
                        ),
                    },
                    {
                        image: RegularLegendaryPokemonSprites.find((element) => element.link == "virizion"),
                    },
                    {
                        image: ShinyLegendaryPokemonSprites.find((element) => element.link == "virizion"),
                    },
                    {
                        image: RegularLegendaryPokemonSprites.find((element) => element.link == "tornadus"),
                    },
                    {
                        image: ShinyLegendaryPokemonSprites.find((element) => element.link == "tornadus"),
                    },
                    {
                        image: RegularLegendaryPokemonSprites.find((element) => element.link == "tornadustherian"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: ShinyLegendaryPokemonSprites.find((element) => element.link == "tornadustherian"),
                    },
                    {
                        image: RegularLegendaryPokemonSprites.find((element) => element.link == "thundurus"),
                    },
                    {
                        image: ShinyLegendaryPokemonSprites.find(
                            (element) => element.link == "thundurus"
                        ),
                    },
                    {
                        image: RegularLegendaryPokemonSprites.find((element) => element.link == "thundurustherian"),
                    },
                    {
                        image: ShinyLegendaryPokemonSprites.find(
                            (element) => element.link == "thundurustherian"
                        ),
                    },
                    {
                        image: RegularLegendaryPokemonSprites.find((element) => element.link == "reshiram"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: ShinyLegendaryPokemonSprites.find((element) => element.link == "reshiram"),
                    },
                    {
                        image: RegularLegendaryPokemonSprites.find((element) => element.link == "zekrom"),
                    },
                    {
                        image: ShinyLegendaryPokemonSprites.find((element) => element.link == "zekrom"),
                    },
                    {
                        image: RegularLegendaryPokemonSprites.find((element) => element.link == "landorus"),
                    },
                    {
                        image: ShinyLegendaryPokemonSprites.find((element) => element.link == "landorus"),
                    },
                    {
                        image: RegularLegendaryPokemonSprites.find((element) => element.link == "landorustherian"),
                    },
                ],
            },
        ],
    },
    {
        title: "HOME 51",
        data: [
            {
                row: [
                    {
                        image: ShinyLegendaryPokemonSprites.find((element) => element.link == "landorustherian"),
                    },
                    {
                        image: RegularLegendaryPokemonSprites.find((element) => element.link == "kyurem"),
                    },
                    {
                        image: ShinyLegendaryPokemonSprites.find((element) => element.link == "kyurem"),
                    },
                    {
                        image: RegularLegendaryPokemonSprites.find((element) => element.link == "keldeo"),
                    },
                    {
                        image: ShinyLegendaryPokemonSprites.find((element) => element.link == "keldeo"),
                    },
                    {
                        image: RegularLegendaryPokemonSprites.find((element) => element.link == "keldeoresolute"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: ShinyLegendaryPokemonSprites.find((element) => element.link == "keldeoresolute"),
                    },
                    {
                        image: RegularLegendaryPokemonSprites.find((element) => element.link == "meloetta"),
                    },
                    {
                        image: ShinyLegendaryPokemonSprites.find((element) => element.link == "meloetta"),
                    },
                    {
                        image: RegularLegendaryPokemonSprites.find((element) => element.link == "genesect"),
                    },
                    {
                        image: ShinyLegendaryPokemonSprites.find((element) => element.link == "genesect"),
                    },
                    {
                        image: allImages.find((element) => element.link == "chespin"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allShinyImages.find((element) => element.link == "chespin"),
                    },
                    {
                        image: allImages.find((element) => element.link == "quilladin"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "quilladin"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "chesnaught"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "chesnaught"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "fennekin"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allShinyImages.find((element) => element.link == "fennekin"),
                    },
                    {
                        image: allImages.find((element) => element.link == "braixen"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "braixen"),
                    },
                    {
                        image: allImages.find((element) => element.link == "delphox"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "delphox"),
                    },
                    {
                        image: allImages.find((element) => element.link == "froakie"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allShinyImages.find((element) => element.link == "froakie"),
                    },
                    {
                        image: allImages.find((element) => element.link == "frogadier"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "frogadier"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "greninja"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "greninja"),
                    },
                    {
                        image: allImages.find((element) => element.link == "bunnelby"),
                    },
                ],
            },
        ],
    },
    {
        title: "HOME 52",
        data: [
            {
                row: [
                    {
                        image: allShinyImages.find((element) => element.link == "bunnelby"),
                    },
                    {
                        image: allImages.find((element) => element.link == "diggersby"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "diggersby"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "fletchling"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "fletchling"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "fletchinder"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "fletchinder"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "talonflame"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "talonflame"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "scatterbug"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "scatterbug"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "spewpa"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allShinyImages.find((element) => element.link == "spewpa"),
                    },
                    {
                        image: allImages.find((element) => element.link == "vivillon"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "vivillon"),
                    },
                    {
                        image: allImages.find((element) => element.link == "vivillonpolar"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "vivillonpolar"),
                    },
                    {
                        image: allImages.find((element) => element.link == "vivillontundra"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allShinyImages.find((element) => element.link == "vivillontundra"),
                    },
                    {
                        image: allImages.find((element) => element.link == "vivilloncontinental"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "vivilloncontinental"),
                    },
                    {
                        image: allImages.find((element) => element.link == "vivillongarden"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "vivillongarden"),
                    },
                    {
                        image: allImages.find((element) => element.link == "vivillonelegant"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allShinyImages.find((element) => element.link == "vivillonelegant"),
                    },
                    {
                        image: allImages.find((element) => element.link == "vivillonicysnow"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "vivillonicysnow"),
                    },
                    {
                        image: allImages.find((element) => element.link == "vivillonmodern"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "vivillonmodern"),
                    },
                    {
                        image: allImages.find((element) => element.link == "vivillonmarine"),
                    },
                ],
            },
        ],
    },
    {
        title: "HOME 53",
        data: [
            {
                row: [
                    {
                        image: allShinyImages.find((element) => element.link == "vivillonmarine"),
                    },
                    {
                        image: allImages.find((element) => element.link == "vivillonarchipelago"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "vivillonarchipelago"),
                    },
                    {
                        image: allImages.find((element) => element.link == "vivillonhighplains"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "vivillonhighplains"),
                    },
                    {
                        image: allImages.find((element) => element.link == "vivillonsandstorm"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allShinyImages.find((element) => element.link == "vivillonsandstorm"),
                    },
                    {
                        image: allImages.find((element) => element.link == "vivillonriver"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "vivillonriver"),
                    },
                    {
                        image: allImages.find((element) => element.link == "vivillonmonsoon"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "vivillonmonsoon"),
                    },
                    {
                        image: allImages.find((element) => element.link == "vivillonsavanna"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allShinyImages.find((element) => element.link == "vivillonsavanna"),
                    },
                    {
                        image: allImages.find((element) => element.link == "vivillonsun"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "vivillonsun"),
                    },
                    {
                        image: allImages.find((element) => element.link == "vivillonocean"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "vivillonocean"),
                    },
                    {
                        image: allImages.find((element) => element.link == "vivillonjungle"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allShinyImages.find((element) => element.link == "vivillonjungle"),
                    },
                    {
                        image: allImages.find((element) => element.link == "vivillonfancy"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "vivillonfancy"),
                    },
                    {
                        image: allImages.find((element) => element.link == "vivillonpokeball"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "vivillonpokeball"),
                    },
                    {
                        image: allImages.find((element) => element.link == "litleo"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allShinyImages.find((element) => element.link == "litleo"),
                    },
                    {
                        image: allImages.find((element) => element.link == "pyroarf"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "pyroarf"),
                    },
                    {
                        image: allImages.find((element) => element.link == "pyroar"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "pyroar"),
                    },
                    {
                        image: allImages.find((element) => element.link == "flabebe"),
                    },
                ],
            },
        ],
    },
    {
        title: "HOME 54",
        data: [
            {
                row: [
                    {
                        image: allShinyImages.find((element) => element.link == "flabebe"),
                    },
                    {
                        image: allImages.find((element) => element.link == "flabebeblue"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "flabebeblue"),
                    },
                    {
                        image: allImages.find((element) => element.link == "flabebeorange"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "flabebeorange"),
                    },
                    {
                        image: allImages.find((element) => element.link == "flabebewhite"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allShinyImages.find((element) => element.link == "flabebewhite"),
                    },
                    {
                        image: allImages.find((element) => element.link == "flabebeyellow"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "flabebeyellow"),
                    },
                    {
                        image: allImages.find((element) => element.link == "floette"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "floette"),
                    },
                    {
                        image: allImages.find((element) => element.link == "floetteblue"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allShinyImages.find((element) => element.link == "floetteblue"),
                    },
                    {
                        image: allImages.find((element) => element.link == "floetteorange"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "floetteorange"),
                    },
                    {
                        image: allImages.find((element) => element.link == "floettewhite"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "floettewhite"),
                    },
                    {
                        image: allImages.find((element) => element.link == "floetteyellow"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allShinyImages.find((element) => element.link == "floetteyellow"),
                    },
                    {
                        image: allImages.find((element) => element.link == "florges"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "florges"),
                    },
                    {
                        image: allImages.find((element) => element.link == "florgesblue"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "florgesblue"),
                    },
                    {
                        image: allImages.find((element) => element.link == "florgesorange"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allShinyImages.find((element) => element.link == "florgesorange"),
                    },
                    {
                        image: allImages.find((element) => element.link == "florgeswhite"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "florgeswhite"),
                    },
                    {
                        image: allImages.find((element) => element.link == "florgesyellow"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "florgesyellow"),
                    },
                    {
                        image: allImages.find((element) => element.link == "skiddo"),
                    },
                ],
            },
        ],
    },
    {
        title: "HOME 55",
        data: [
            {
                row: [
                    {
                        image: allShinyImages.find((element) => element.link == "skiddo"),
                    },
                    {
                        image: allImages.find((element) => element.link == "gogoat"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "gogoat"),
                    },
                    {
                        image: allImages.find((element) => element.link == "pancham"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "pancham"),
                    },
                    {
                        image: allImages.find((element) => element.link == "pangoro"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allShinyImages.find((element) => element.link == "pangoro"),
                    },
                    {
                        image: allImages.find((element) => element.link == "furfrou"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "furfrou"),
                    },
                    {
                        image: allImages.find((element) => element.link == "furfrouheart"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "furfrouheart"),
                    },
                    {
                        image: allImages.find((element) => element.link == "furfroustar"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allShinyImages.find((element) => element.link == "furfroustar"),
                    },
                    {
                        image: allImages.find((element) => element.link == "furfroudiamond"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "furfroudiamond"),
                    },
                    {
                        image: allImages.find((element) => element.link == "furfroudebutante"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "furfroudebutante"),
                    },
                    {
                        image: allImages.find((element) => element.link == "furfroumatron"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allShinyImages.find((element) => element.link == "furfroumatron"),
                    },
                    {
                        image: allImages.find((element) => element.link == "furfroudandy"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "furfroudandy"),
                    },
                    {
                        image: allImages.find((element) => element.link == "furfroulareine"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "furfroulareine"),
                    },
                    {
                        image: allImages.find((element) => element.link == "furfroukabuki"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allShinyImages.find((element) => element.link == "furfroukabuki"),
                    },
                    {
                        image: allImages.find((element) => element.link == "furfroupharaoh"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "furfroupharaoh"),
                    },
                    {
                        image: allImages.find((element) => element.link == "espurr"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "espurr"),
                    },
                    {
                        image: allImages.find((element) => element.link == "meowstic"),
                    },
                ],
            },
        ],
    },
    {
        title: "HOME 56",
        data: [
            {
                row: [
                    {
                        image: allShinyImages.find((element) => element.link == "meowstic"),
                    },
                    {
                        image: allImages.find((element) => element.link == "meowsticf"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "meowsticf"),
                    },
                    {
                        image: allImages.find((element) => element.link == "honedge"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "honedge"),
                    },
                    {
                        image: allImages.find((element) => element.link == "doublade"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allShinyImages.find((element) => element.link == "doublade"),
                    },
                    {
                        image: allImages.find((element) => element.link == "aegislash"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "aegislash"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "spritzee"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "spritzee"),
                    },
                    {
                        image: allImages.find((element) => element.link == "aromatisse"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "aromatisse"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "swirlix"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "swirlix"),
                    },
                    {
                        image: allImages.find((element) => element.link == "slurpuff"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "slurpuff"),
                    },
                    {
                        image: allImages.find((element) => element.link == "inkay"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allShinyImages.find((element) => element.link == "inkay"),
                    },
                    {
                        image: allImages.find((element) => element.link == "malamar"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "malamar"),
                    },
                    {
                        image: allImages.find((element) => element.link == "binacle"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "binacle"),
                    },
                    {
                        image: allImages.find((element) => element.link == "barbaracle"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "barbaracle"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "skrelp"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "skrelp"),
                    },
                    {
                        image: allImages.find((element) => element.link == "dragalge"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "dragalge"),
                    },
                    {
                        image: allImages.find((element) => element.link == "clauncher"),
                    },
                ],
            },
        ],
    },
    {
        title: "HOME 57",
        data: [
            {
                row: [
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "clauncher"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "clawitzer"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "clawitzer"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "helioptile"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "helioptile"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "heliolisk"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "heliolisk"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "tyrunt"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "tyrunt"),
                    },
                    {
                        image: allImages.find((element) => element.link == "tyrantrum"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "tyrantrum"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "amaura"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allShinyImages.find((element) => element.link == "amaura"),
                    },
                    {
                        image: allImages.find((element) => element.link == "aurorus"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "aurorus"),
                    },
                    {
                        image: allImages.find((element) => element.link == "sylveon"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "sylveon"),
                    },
                    {
                        image: allImages.find((element) => element.link == "hawlucha"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allShinyImages.find((element) => element.link == "hawlucha"),
                    },
                    {
                        image: allImages.find((element) => element.link == "dedenne"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "dedenne"),
                    },
                    {
                        image: allImages.find((element) => element.link == "carbink"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "carbink"),
                    },
                    {
                        image: allImages.find((element) => element.link == "goomy"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allShinyImages.find((element) => element.link == "goomy"),
                    },
                    {
                        image: allImages.find((element) => element.link == "sliggoo"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "sliggoo"),
                    },
                    {
                        image: allImages.find((element) => element.link == "goodra"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "goodra"),
                    },
                    {
                        image: allImages.find((element) => element.link == "klefki"),
                    },
                ],
            },
        ],
    },
    {
        title: "HOME 58",
        data: [
            {
                row: [
                    {
                        image: allShinyImages.find((element) => element.link == "klefki"),
                    },
                    {
                        image: allImages.find((element) => element.link == "phantump"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "phantump"),
                    },
                    {
                        image: allImages.find((element) => element.link == "trevenant"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "trevenant"),
                    },
                    {
                        image: allImages.find((element) => element.link == "pumpkaboosmall"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allShinyImages.find((element) => element.link == "pumpkaboosmall"),
                    },
                    {
                        image: allImages.find((element) => element.link == "pumpkaboo"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "pumpkaboo"),
                    },
                    {
                        image: allImages.find((element) => element.link == "pumpkaboolarge"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "pumpkaboolarge"),
                    },
                    {
                        image: allImages.find((element) => element.link == "pumpkaboosuper"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allShinyImages.find((element) => element.link == "pumpkaboosuper"),
                    },
                    {
                        image: allImages.find((element) => element.link == "gourgeistsmall"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "gourgeistsmall"),
                    },
                    {
                        image: allImages.find((element) => element.link == "gourgeist"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "gourgeist"),
                    },
                    {
                        image: allImages.find((element) => element.link == "gourgeistlarge"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allShinyImages.find((element) => element.link == "gourgeistlarge"),
                    },
                    {
                        image: allImages.find((element) => element.link == "gourgeistsuper"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "gourgeistsuper"),
                    },
                    {
                        image: allImages.find((element) => element.link == "bergmite"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "bergmite"),
                    },
                    {
                        image: allImages.find((element) => element.link == "avalugg"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allShinyImages.find((element) => element.link == "avalugg"),
                    },
                    {
                        image: allImages.find((element) => element.link == "noibat"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "noibat"),
                    },
                    {
                        image: allImages.find((element) => element.link == "noivern"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "noivern"),
                    },
                    {
                        image: RegularLegendaryPokemonSprites.find((element) => element.link == "xerneas"),
                    },
                ],
            },
        ],
    },
    {
        title: "HOME 59",
        data: [
            {
                row: [
                    {
                        image: ShinyLegendaryPokemonSprites.find((element) => element.link == "xerneas"),
                    },
                    {
                        image: RegularLegendaryPokemonSprites.find((element) => element.link == "yveltal"),
                    },
                    {
                        image: ShinyLegendaryPokemonSprites.find((element) => element.link == "yveltal"),
                    },
                    {
                        image: RegularLegendaryPokemonSprites.find((element) => element.link == "zygarde10"),
                    },
                    {
                        image: ShinyLegendaryPokemonSprites.find((element) => element.link == "zygarde10"),
                    },
                    {
                        image: RegularLegendaryPokemonSprites.find((element) => element.link == "zygarde"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: ShinyLegendaryPokemonSprites.find((element) => element.link == "zygarde"),
                    },
                    {
                        image: RegularLegendaryPokemonSprites.find((element) => element.link == "diancie"),
                    },
                    {
                        image: ShinyLegendaryPokemonSprites.find((element) => element.link == "diancie"),
                    },
                    {
                        image: RegularLegendaryPokemonSprites.find((element) => element.link == "hoopa"),
                    },
                    {
                        image: ShinyLegendaryPokemonSprites.find((element) => element.link == "hoopa"),
                    },
                    {
                        image: RegularLegendaryPokemonSprites.find((element) => element.link == "hoopaunbound"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: ShinyLegendaryPokemonSprites.find((element) => element.link == "hoopaunbound"),
                    },
                    {
                        image: RegularLegendaryPokemonSprites.find((element) => element.link == "volcanion"),
                    },
                    {
                        image: ShinyLegendaryPokemonSprites.find((element) => element.link == "volcanion"),
                    },
                    {
                        image: allImages.find((element) => element.link == "rowlet"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "rowlet"),
                    },
                    {
                        image: allImages.find((element) => element.link == "dartrix"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allShinyImages.find((element) => element.link == "dartrix"),
                    },
                    {
                        image: allImages.find((element) => element.link == "decidueye"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "decidueye"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "litten"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "litten"),
                    },
                    {
                        image: allImages.find((element) => element.link == "torracat"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allShinyImages.find((element) => element.link == "torracat"),
                    },
                    {
                        image: allImages.find((element) => element.link == "incineroar"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "incineroar"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "popplio"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "popplio"),
                    },
                    {
                        image: allImages.find((element) => element.link == "brionne"),
                    },
                ],
            },
        ],
    },
    {
        title: "HOME 60",
        data: [
            {
                row: [
                    {
                        image: allShinyImages.find((element) => element.link == "brionne"),
                    },
                    {
                        image: allImages.find((element) => element.link == "primarina"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "primarina"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "pikipek"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "pikipek"),
                    },
                    {
                        image: allImages.find((element) => element.link == "trumbeak"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allShinyImages.find((element) => element.link == "trumbeak"),
                    },
                    {
                        image: allImages.find((element) => element.link == "toucannon"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "toucannon"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "yungoos"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "yungoos"),
                    },
                    {
                        image: allImages.find((element) => element.link == "gumshoos"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allShinyImages.find((element) => element.link == "gumshoos"),
                    },
                    {
                        image: allImages.find((element) => element.link == "grubbin"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "grubbin"),
                    },
                    {
                        image: allImages.find((element) => element.link == "charjabug"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "charjabug"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "vikavolt"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allShinyImages.find((element) => element.link == "vikavolt"),
                    },
                    {
                        image: allImages.find((element) => element.link == "crabrawler"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "crabrawler"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "crabominable"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "crabominable"),
                    },
                    {
                        image: allImages.find((element) => element.link == "oricorio"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allShinyImages.find((element) => element.link == "oricorio"),
                    },
                    {
                        image: allImages.find((element) => element.link == "oricoriopau"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "oricoriopau"),
                    },
                    {
                        image: allImages.find((element) => element.link == "oricoriopompom"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "oricoriopompom"),
                    },
                    {
                        image: allImages.find((element) => element.link == "oricoriosensu"),
                    },
                ],
            },
        ],
    },
    {
        title: "HOME 61",
        data: [
            {
                row: [
                    {
                        image: allShinyImages.find((element) => element.link == "oricoriosensu"),
                    },
                    {
                        image: allImages.find((element) => element.link == "cutiefly"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "cutiefly"),
                    },
                    {
                        image: allImages.find((element) => element.link == "ribombee"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "ribombee"),
                    },
                    {
                        image: allImages.find((element) => element.link == "rockruff"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allShinyImages.find((element) => element.link == "rockruff"),
                    },
                    {
                        image: allImages.find((element) => element.link == "rockruff"),
                    },
                    {
                        image: allImages.find((element) => element.link == "lycanroc"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "lycanroc"),
                    },
                    {
                        image: allImages.find((element) => element.link == "lycanrocdusk"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "lycanrocdusk"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "lycanrocmidnight"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "lycanrocmidnight"),
                    },
                    {
                        image: allImages.find((element) => element.link == "wishiwashi"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "wishiwashi"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "mareanie"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "mareanie"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "toxapex"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "toxapex"),
                    },
                    {
                        image: allImages.find((element) => element.link == "mudbray"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "mudbray"),
                    },
                    {
                        image: allImages.find((element) => element.link == "mudsdale"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "mudsdale"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "dewpider"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "dewpider"),
                    },
                    {
                        image: allImages.find((element) => element.link == "araquanid"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "araquanid"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "fomantis"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "fomantis"),
                    },
                ],
            },
        ],
    },
    {
        title: "HOME 62",
        data: [
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "lurantis"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "lurantis"),
                    },
                    {
                        image: allImages.find((element) => element.link == "morelull"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "morelull"),
                    },
                    {
                        image: allImages.find((element) => element.link == "shiinotic"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "shiinotic"
                        ),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "salandit"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "salandit"),
                    },
                    {
                        image: allImages.find((element) => element.link == "salazzle"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "salazzle"),
                    },
                    {
                        image: allImages.find((element) => element.link == "stufful"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "stufful"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "bewear"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "bewear"),
                    },
                    {
                        image: allImages.find((element) => element.link == "bounsweet"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "bounsweet"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "steenee"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "steenee"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "tsareena"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "tsareena"),
                    },
                    {
                        image: allImages.find((element) => element.link == "comfey"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "comfey"),
                    },
                    {
                        image: allImages.find((element) => element.link == "oranguru"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "oranguru"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "passimian"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "passimian"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "wimpod"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "wimpod"),
                    },
                    {
                        image: allImages.find((element) => element.link == "golisopod"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "golisopod"
                        ),
                    },
                ],
            },
        ],
    },
    {
        title: "HOME 63",
        data: [
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "sandygast"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "sandygast"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "palossand"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "palossand"),
                    },
                    {
                        image: allImages.find((element) => element.link == "pyukumuku"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "pyukumuku"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: RegularLegendaryPokemonSprites.find((element) => element.link == "typenull"),
                    },
                    {
                        image: ShinyLegendaryPokemonSprites.find((element) => element.link == "typenull"),
                    },
                    {
                        image: RegularLegendaryPokemonSprites.find((element) => element.link == "silvally"),
                    },
                    {
                        image: ShinyLegendaryPokemonSprites.find((element) => element.link == "silvally"),
                    },
                    {
                        image: allImages.find((element) => element.link == "minioryellow"),
                    },
                    {
                        image: allImages.find((element) => element.link == "miniorviolet"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "miniorblue"),
                    },
                    {
                        image: allImages.find((element) => element.link == "miniorgreen"),
                    },
                    {
                        image: allImages.find((element) => element.link == "miniorindigo"),
                    },
                    {
                        image: allImages.find((element) => element.link == "miniororange"),
                    },
                    {
                        image: allImages.find((element) => element.link == "miniorred"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "miniorred"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "komala"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "komala"),
                    },
                    {
                        image: allImages.find((element) => element.link == "turtonator"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "turtonator"),
                    },
                    {
                        image: allImages.find((element) => element.link == "togedemaru"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "togedemaru"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "mimikyu"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "mimikyu"),
                    },
                    {
                        image: allImages.find((element) => element.link == "bruxish"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "bruxish"),
                    },
                    {
                        image: allImages.find((element) => element.link == "drampa"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "drampa"),
                    },
                ],
            },
        ],
    },
    {
        title: "HOME 64",
        data: [
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "dhelmise"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "dhelmise"),
                    },
                    {
                        image: allImages.find((element) => element.link == "jangmoo"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "jangmoo"),
                    },
                    {
                        image: allImages.find((element) => element.link == "hakamoo"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "hakamoo"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "kommoo"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "kommoo"),
                    },
                    {
                        image: RegularLegendaryPokemonSprites.find((element) => element.link == "tapukoko"),
                    },
                    {
                        image: ShinyLegendaryPokemonSprites.find((element) => element.link == "tapukoko"),
                    },
                    {
                        image: RegularLegendaryPokemonSprites.find((element) => element.link == "tapulele"),
                    },
                    {
                        image: ShinyLegendaryPokemonSprites.find((element) => element.link == "tapulele"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: RegularLegendaryPokemonSprites.find((element) => element.link == "tapubulu"),
                    },
                    {
                        image: ShinyLegendaryPokemonSprites.find((element) => element.link == "tapubulu"),
                    },
                    {
                        image: RegularLegendaryPokemonSprites.find((element) => element.link == "tapufini"),
                    },
                    {
                        image: ShinyLegendaryPokemonSprites.find((element) => element.link == "tapufini"),
                    },
                    {
                        image: RegularLegendaryPokemonSprites.find((element) => element.link == "cosmog"),
                    },
                    {
                        image: ShinyLegendaryPokemonSprites.find((element) => element.link == "cosmog"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: RegularLegendaryPokemonSprites.find((element) => element.link == "cosmoem"),
                    },
                    {
                        image: ShinyLegendaryPokemonSprites.find((element) => element.link == "cosmoem"),
                    },
                    {
                        image: RegularLegendaryPokemonSprites.find((element) => element.link == "solgaleo"),
                    },
                    {
                        image: ShinyLegendaryPokemonSprites.find((element) => element.link == "solgaleo"),
                    },
                    {
                        image: RegularLegendaryPokemonSprites.find((element) => element.link == "lunala"),
                    },
                    {
                        image: ShinyLegendaryPokemonSprites.find((element) => element.link == "lunala"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: RegularLegendaryPokemonSprites.find((element) => element.link == "nihilego"),
                    },
                    {
                        image: ShinyLegendaryPokemonSprites.find((element) => element.link == "nihilego"),
                    },
                    {
                        image: RegularLegendaryPokemonSprites.find((element) => element.link == "buzzwole"),
                    },
                    {
                        image: ShinyLegendaryPokemonSprites.find((element) => element.link == "buzzwole"),
                    },
                    {
                        image: RegularLegendaryPokemonSprites.find((element) => element.link == "pheromosa"),
                    },
                    {
                        image: ShinyLegendaryPokemonSprites.find((element) => element.link == "pheromosa"),
                    },
                ],
            },
        ],
    },
    {
        title: "HOME 65",
        data: [
            {
                row: [
                    {
                        image: RegularLegendaryPokemonSprites.find((element) => element.link == "xurkitree"),
                    },
                    {
                        image: ShinyLegendaryPokemonSprites.find((element) => element.link == "xurkitree"),
                    },
                    {
                        image: RegularLegendaryPokemonSprites.find((element) => element.link == "celesteela"),
                    },
                    {
                        image: ShinyLegendaryPokemonSprites.find((element) => element.link == "celesteela"),
                    },
                    {
                        image: RegularLegendaryPokemonSprites.find((element) => element.link == "kartana"),
                    },
                    {
                        image: ShinyLegendaryPokemonSprites.find((element) => element.link == "kartana"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: RegularLegendaryPokemonSprites.find((element) => element.link == "guzzlord"),
                    },
                    {
                        image: ShinyLegendaryPokemonSprites.find((element) => element.link == "guzzlord"),
                    },
                    {
                        image: RegularLegendaryPokemonSprites.find((element) => element.link == "necrozma"),
                    },
                    {
                        image: ShinyLegendaryPokemonSprites.find((element) => element.link == "necrozma"),
                    },
                    {
                        image: RegularLegendaryPokemonSprites.find((element) => element.link == "magearna"),
                    },
                    {
                        image: ShinyLegendaryPokemonSprites.find((element) => element.link == "magearna"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: RegularLegendaryPokemonSprites.find((element) => element.link == "magearnaoriginal"),
                    },
                    {
                        image: ShinyLegendaryPokemonSprites.find((element) => element.link == "magearnaoriginal"),
                    },
                    {
                        image: RegularLegendaryPokemonSprites.find((element) => element.link == "marshadow"),
                    },
                    {
                        image: ShinyLegendaryPokemonSprites.find((element) => element.link == "marshadow"),
                    },
                    {
                        image: RegularLegendaryPokemonSprites.find((element) => element.link == "poipole"),
                    },
                    {
                        image: ShinyLegendaryPokemonSprites.find((element) => element.link == "poipole"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: RegularLegendaryPokemonSprites.find((element) => element.link == "naganadel"),
                    },
                    {
                        image: ShinyLegendaryPokemonSprites.find((element) => element.link == "naganadel"),
                    },
                    {
                        image: RegularLegendaryPokemonSprites.find((element) => element.link == "stakataka"),
                    },
                    {
                        image: ShinyLegendaryPokemonSprites.find((element) => element.link == "stakataka"),
                    },
                    {
                        image: RegularLegendaryPokemonSprites.find((element) => element.link == "blacephalon"),
                    },
                    {
                        image: ShinyLegendaryPokemonSprites.find((element) => element.link == "blacephalon"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: RegularLegendaryPokemonSprites.find((element) => element.link == "zeraora"),
                    },
                    {
                        image: ShinyLegendaryPokemonSprites.find((element) => element.link == "zeraora"),
                    },
                    {
                        image: RegularLegendaryPokemonSprites.find((element) => element.link == "meltan"),
                    },
                    {
                        image: ShinyLegendaryPokemonSprites.find((element) => element.link == "meltan"),
                    },
                    {
                        image: RegularLegendaryPokemonSprites.find((element) => element.link == "melmetal"),
                    },
                    {
                        image: ShinyLegendaryPokemonSprites.find((element) => element.link == "melmetal"),
                    },
                ],
            },
        ],
    },
    {
        title: "HOME 66",
        data: [
            {
                row: [
                    {
                        image: RegularGMaxPokemonSprites.find(
                            (element) => element.link == "melmetal-gmax"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "grookey"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "grookey"),
                    },
                    {
                        image: allImages.find((element) => element.link == "thwackey"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "thwackey"),
                    },
                    {
                        image: allImages.find((element) => element.link == "rillaboom"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "rillaboom"
                        ),
                    },
                    {
                        image: RegularGMaxPokemonSprites.find(
                            (element) => element.link == "rillaboom-gmax"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "scorbunny"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "scorbunny"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "raboot"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "raboot"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "cinderace"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "cinderace"
                        ),
                    },
                    {
                        image: RegularGMaxPokemonSprites.find(
                            (element) => element.link == "cinderace-gmax"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "sobble"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "sobble"),
                    },
                    {
                        image: allImages.find((element) => element.link == "drizzile"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allShinyImages.find((element) => element.link == "drizzile"),
                    },
                    {
                        image: allImages.find((element) => element.link == "inteleon"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "inteleon"),
                    },
                    {
                        image: RegularGMaxPokemonSprites.find(
                            (element) => element.link == "inteleon-gmax"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "skwovet"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "skwovet"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "greedent"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "greedent"),
                    },
                    {
                        image: allImages.find((element) => element.link == "rookidee"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "rookidee"),
                    },
                    {
                        image: allImages.find((element) => element.link == "corvisquire"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "corvisquire"
                        ),
                    },
                ],
            },
        ],
    },
    {
        title: "HOME 67",
        data: [
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "corviknight"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "corviknight"
                        ),
                    },
                    {
                        image: RegularGMaxPokemonSprites.find(
                            (element) => element.link == "corviknight-gmax"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "blipbug"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "blipbug"),
                    },
                    {
                        image: allImages.find((element) => element.link == "dottler"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allShinyImages.find((element) => element.link == "dottler"),
                    },
                    {
                        image: allImages.find((element) => element.link == "orbeetle"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "orbeetle"),
                    },
                    {
                        image: RegularGMaxPokemonSprites.find(
                            (element) => element.link == "orbeetle-gmax"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "nickit"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "nickit"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "thievul"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "thievul"),
                    },
                    {
                        image: allImages.find((element) => element.link == "gossifleur"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "gossifleur"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "eldegoss"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "eldegoss"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "wooloo"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "wooloo"),
                    },
                    {
                        image: allImages.find((element) => element.link == "dubwool"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "dubwool"),
                    },
                    {
                        image: allImages.find((element) => element.link == "chewtle"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "chewtle"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "drednaw"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "drednaw"),
                    },
                    {
                        image: RegularGMaxPokemonSprites.find(
                            (element) => element.link == "drednaw-gmax"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "yamper"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "yamper"),
                    },
                    {
                        image: allImages.find((element) => element.link == "boltund"),
                    },
                ],
            },
        ],
    },
    {
        title: "HOME 68",
        data: [
            {
                row: [
                    {
                        image: allShinyImages.find((element) => element.link == "boltund"),
                    },
                    {
                        image: allImages.find((element) => element.link == "rolycoly"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "rolycoly"),
                    },
                    {
                        image: allImages.find((element) => element.link == "carkol"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "carkol"),
                    },
                    {
                        image: allImages.find((element) => element.link == "coalossal"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "coalossal"
                        ),
                    },
                    {
                        image: RegularGMaxPokemonSprites.find(
                            (element) => element.link == "coalossal-gmax"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "applin"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "applin"),
                    },
                    {
                        image: allImages.find((element) => element.link == "flapple"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "flapple"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "appletun"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "appletun"),
                    },
                    {
                        image: RegularGMaxPokemonSprites.find(
                            (element) => element.link == "appletun-gmax"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "silicobra"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "silicobra"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "sandaconda"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "sandaconda"
                        ),
                    },
                    {
                        image: RegularGMaxPokemonSprites.find(
                            (element) => element.link == "sandaconda-gmax"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "cramorant"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "cramorant"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "arrokuda"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "arrokuda"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "barraskewda"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "barraskewda"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "toxel"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "toxel"),
                    },
                    {
                        image: allImages.find((element) => element.link == "toxtricity"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "toxtricity"
                        ),
                    },
                ],
            },
        ],
    },
    {
        title: "HOME 69",
        data: [
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "toxtricity"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "toxtricity"
                        ),
                    },
                    {
                        image: RegularGMaxPokemonSprites.find(
                            (element) => element.link == "toxtricity-gmax"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "sizzlipede"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "sizzlipede"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "centiskorch"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "centiskorch"
                        ),
                    },
                    {
                        image: RegularGMaxPokemonSprites.find(
                            (element) => element.link == "centiskorch-gmax"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "clobbopus"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "clobbopus"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "grapploct"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "grapploct"
                        ),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "sinistea"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "sinistea"),
                    },
                    {},
                    {
                        image: allImages.find((element) => element.link == "polteageist"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "polteageist"
                        ),
                    },
                    {},
                ],
            },
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "hatenna"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "hatenna"),
                    },
                    {
                        image: allImages.find((element) => element.link == "hattrem"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "hattrem"),
                    },
                    {
                        image: allImages.find((element) => element.link == "hatterene"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "hatterene"
                        ),
                    },
                ],
            },
            {
                row: [
                    {
                        image: RegularGMaxPokemonSprites.find(
                            (element) => element.link == "hatterene-gmax"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "impidimp"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "impidimp"),
                    },
                    {
                        image: allImages.find((element) => element.link == "morgrem"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "morgrem"),
                    },
                    {
                        image: allImages.find((element) => element.link == "grimmsnarl"),
                    },
                ],
            },
        ],
    },
    {
        title: "HOME 70",
        data: [
            {
                row: [
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "grimmsnarl"
                        ),
                    },
                    {
                        image: RegularGMaxPokemonSprites.find(
                            (element) => element.link == "grimmsnarl-gmax"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "obstagoon"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "obstagoon"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "perrserker"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "perrserker"
                        ),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "cursola"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "cursola"),
                    },
                    {
                        image: allImages.find((element) => element.link == "sirfetch'd"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "sirfetch'd"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "mrrime"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "mrrime"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "runerigus"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "runerigus"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "milcery"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "milcery"),
                    },
                    {},
                    {},
                ],
            },
            {
                row: [{}, {}, {}, {}, {}, {}],
            },
            {
                row: [{}, {}, {}, {}, {}, {}],
            },
        ],
    },
    {
        title: "HOME 71",
        data: [
            {
                row: [{}, {}, {}, {}, {}, {}],
            },
            {
                row: [{}, {}, {}, {}, {}, {}],
            },
            {
                row: [{}, {}, {}, {}, {}, {}],
            },
            {
                row: [{}, {}, {}, {}, {}, {}],
            },
            {
                row: [{}, {}, {}, {}, {}, {}],
            },
        ],
    },
    {
        title: "HOME 72",
        data: [
            {
                row: [{}, {}, {}, {}, {}, {}],
            },
            {
                row: [{}, {}, {}, {}, {}, {}],
            },
            {
                row: [{}, {}, {}, {}, {}, {}],
            },
            {
                row: [{}, {}, {}, {}, {}, {}],
            },
            {
                row: [{}, {}, {}, {}, {}, {}],
            },
        ],
    },
    {
        title: "HOME 73",
        data: [
            {
                row: [{}, {}, {}, {}, {}, {}],
            },
            {
                row: [{}, {}, {}, {}, {}, {}],
            },
            {
                row: [{}, {}, {}, {}, {}, {}],
            },
            {
                row: [{}, {}, {}, {}, {}, {}],
            },
            {
                row: [{}, {}, {}, {}, {}, {}],
            },
        ],
    },
    {
        title: "HOME 74",
        data: [
            {
                row: [{}, {}, {}, {}, {}, {}],
            },
            {
                row: [{}, {}, {}, {}, {}, {}],
            },
            {
                row: [{}, {}, {}, {}, {}, {}],
            },
            {
                row: [
                    {},
                    {},
                    {},
                    {},
                    {
                        image: RegularGMaxPokemonSprites.find(
                            (element) => element.link == "alcremie-gmax"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "falinks"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allShinyImages.find((element) => element.link == "falinks"),
                    },
                    {
                        image: allImages.find((element) => element.link == "pincurchin"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "pincurchin"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "snom"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "snom"),
                    },
                    {
                        image: allImages.find((element) => element.link == "frosmoth"),
                    },
                ],
            },
        ],
    },
    {
        title: "HOME 75",
        data: [
            {
                row: [
                    {
                        image: allShinyImages.find((element) => element.link == "frosmoth"),
                    },
                    {
                        image: allImages.find((element) => element.link == "stonjourner"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "stonjourner"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "eiscue"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "eiscue"),
                    },
                    {
                        image: allImages.find((element) => element.link == "indeedee"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allShinyImages.find((element) => element.link == "indeedee"),
                    },
                    {
                        image: allImages.find((element) => element.link == "indeedee"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "indeedee"),
                    },
                    {
                        image: allImages.find((element) => element.link == "morpeko"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "morpeko"),
                    },
                    {
                        image: allImages.find((element) => element.link == "cufant"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allShinyImages.find((element) => element.link == "cufant"),
                    },
                    {
                        image: allImages.find((element) => element.link == "copperajah"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "copperajah"
                        ),
                    },
                    {
                        image: RegularGMaxPokemonSprites.find(
                            (element) => element.link == "copperajah-gmax"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "dracozolt"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "dracozolt"
                        ),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "arctozolt"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "arctozolt"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "dracovish"),
                    },
                    {
                        image: allShinyImages.find(
                            (element) => element.link == "dracovish"
                        ),
                    },
                    {
                        image: allImages.find((element) => element.link == "arctovish"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "arctovish"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: allImages.find((element) => element.link == "duraludon"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "duraludon"),
                    },
                    {
                        image: RegularGMaxPokemonSprites.find((element) => element.link == "duraludon-gmax"),
                    },
                    {
                        image: allImages.find((element) => element.link == "dreepy"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "dreepy"),
                    },
                    {
                        image: allImages.find((element) => element.link == "drakloak"),
                    },
                ],
            },
        ],
    },
    {
        title: "HOME 76",
        data: [
            {
                row: [
                    {
                        image: allShinyImages.find((element) => element.link == "drakloak"),
                    },
                    {
                        image: allImages.find((element) => element.link == "dragapult"),
                    },
                    {
                        image: allShinyImages.find((element) => element.link == "dragapult"),
                    },
                    {
                        image: RegularLegendaryPokemonSprites.find((element) => element.link == "zacian"),
                    },
                    {
                        image: ShinyLegendaryPokemonSprites.find((element) => element.link == "zacian"),
                    },
                    {
                        image: RegularLegendaryPokemonSprites.find((element) => element.link == "zamazenta"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: ShinyLegendaryPokemonSprites.find((element) => element.link == "zamazenta"),
                    },
                    {
                        image: RegularLegendaryPokemonSprites.find((element) => element.link == "eternatus"),
                    },
                    {
                        image: ShinyLegendaryPokemonSprites.find((element) => element.link == "eternatus"),
                    },
                    {
                        image: RegularLegendaryPokemonSprites.find((element) => element.link == "kubfu"),
                    },
                    {
                        image: ShinyLegendaryPokemonSprites.find((element) => element.link == "kubfu"),
                    },
                    {
                        image: RegularLegendaryPokemonSprites.find((element) => element.link == "urshifu"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: ShinyLegendaryPokemonSprites.find((element) => element.link == "urshifu"),
                    },
                    {
                        image: RegularGMaxPokemonSprites.find((element) => element.link == "urshifu-gmax"),
                    },
                    {
                        image: RegularLegendaryPokemonSprites.find((element) => element.link == "urshifu"),
                    },
                    {
                        image: ShinyLegendaryPokemonSprites.find((element) => element.link == "urshifu"),
                    },
                    {
                        image: RegularGMaxPokemonSprites.find((element) => element.link == "urshifu-gmax"),
                    },
                    {
                        image: RegularLegendaryPokemonSprites.find((element) => element.link == "zarude"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: ShinyLegendaryPokemonSprites.find((element) => element.link == "zarude"),
                    },
                    {
                        image: RegularLegendaryPokemonSprites.find((element) => element.link == "zarudedada"),
                    },
                    {
                        image: ShinyLegendaryPokemonSprites.find((element) => element.link == "zarudedada"),
                    },
                    {
                        image: RegularLegendaryPokemonSprites.find((element) => element.link == "regieleki"),
                    },
                    {
                        image: ShinyLegendaryPokemonSprites.find((element) => element.link == "regieleki"),
                    },
                    {
                        image: RegularLegendaryPokemonSprites.find((element) => element.link == "regidrago"),
                    },
                ],
            },
            {
                row: [
                    {
                        image: ShinyLegendaryPokemonSprites.find((element) => element.link == "regidrago"),
                    },
                    {
                        image: RegularLegendaryPokemonSprites.find((element) => element.link == "glastrier"),
                    },
                    {
                        image: ShinyLegendaryPokemonSprites.find((element) => element.link == "glastrier"),
                    },
                    {
                        image: RegularLegendaryPokemonSprites.find((element) => element.link == "spectrier"),
                    },
                    {
                        image: ShinyLegendaryPokemonSprites.find((element) => element.link == "spectrier"),
                    },
                    {
                        image: RegularLegendaryPokemonSprites.find((element) => element.link == "calyrex"),
                    },
                ],
            },
        ],
    },
];