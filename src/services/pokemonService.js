
import axios from 'axios';
// import { resolve } from 'core-js/library/es6/promise';
import { Pokemon } from '../models/pokemon';
//import { reject, resolve } from 'core-js/fn/promise';



export class PokemonService {





    constructor() {

    }

    getPokemon(id) {
        return new Promise((resolve, reject) => {
            axios.get('https://pokeapi.co/api/v2/pokemon/' + id)
                .then(response => {

                    console.log(response);

                    //pokemonData n'est pas un tableau mais un objet(json)
                    let pokemonType = response.data.types;
                    let pokemonMove = response.data.moves;
                    let typeTable = [];
                    let moveTable = [];

                    for (let t = 0; t < pokemonType.length; t++) {
                        typeTable.push(response.data.types[t].type.name);

                    }

                    for (let m = 0; m < pokemonMove.length; m++) {
                        moveTable.push(response.data.moves[m].move.name);
                    }

                    //Je crée un nouveau pokemon 
                    let result = new Pokemon(
                    )

                    pokemonType.forEach(t => {
                        console.log(t)
                        switch (t.type.name) {
                            case "bug":
                                result.imgType.push("https://www.pokebip.com/pokedex-images/types/insecte-v.png")
                                break;
                            case "fire":
                                result.imgType.push("https://www.pokebip.com/pokedex-images/types/feu-v.png")

                                break;
                            case "fighting":
                                result.imgType.push("https://www.pokebip.com/pokedex-images/types/combat-v.png")
                                break;
                            case "water":
                                result.imgType.push("https://www.pokebip.com/pokedex-images/types/eau-v.png")
                                break;
                            case "flying":
                                result.imgType.push("https://www.pokebip.com/pokedex-images/types/vol-v.png")
                                break;
                            case "ice":
                                result.imgType.push("https://www.pokebip.com/pokedex-images/types/glace-v.png")
                                break;
                            case "normal":
                                result.imgType.push("https://www.pokebip.com/pokedex-images/types/normal-v.png")
                                break;
                            case "fairy":
                                result.imgType.push("https://www.pokebip.com/pokedex-images/types/fee-v.png")
                                break;
                            case "electric":
                                result.imgType.push("https://www.pokebip.com/pokedex-images/types/electrik-v.png")
                                break;

                            case "steel":
                                result.imgType.push("https://www.pokebip.com/pokedex-images/types/acier-v.png")
                                break;

                            case "psychic":
                                result.imgType.push("https://www.pokebip.com/pokedex-images/types/psy-v.png")
                                break;

                            case "ground":
                                result.imgType.push("https://www.pokebip.com/pokedex-images/types/sol-v.png")
                                break;

                            case "dark":
                                result.imgType.push("https://www.pokebip.com/pokedex-images/types/tenebres-v.png")
                                break;

                            case "rock":
                                result.imgType.push("https://www.pokebip.com/pokedex-images/types/roche-v.png")
                                break;

                            case "dragon":
                                result.imgType.push("https://www.pokebip.com/pokedex-images/types/dragon-v.png")
                                break;

                            case "grass":
                                result.imgType.push("https://www.pokebip.com/pokedex-images/types/plante-v.png")
                                break;
                            case "ghost":
                                result.imgType.push("https://www.pokebip.com/pokedex-images/types/spectre-v.png")
                                break;

                            case "poison":
                                result.imgType.push("https://www.pokebip.com/pokedex-images/types/poison-v.png")
                                break;


                        }

                    });




                    //Je lui affecte toutes les propriétés envoyées par l'API
                    result.id = response.data.id
                    result.weight = response.data.weight
                    result.name = response.data.name
                    result.height = response.data.height
                    result.artwork = response.data.sprites.other['home'].front_default
                    result.hp = response.data.stats[0].base_stat

                    result.img = response.data.sprites.front_default
                    result.imgBack = response.data.sprites.back_default
                    result.animatedFront = response.data.sprites.versions['generation-v']['black-white'].animated.front_shiny
                    result.animatedBack = response.data.sprites.versions['generation-v']['black-white'].animated.back_shiny
                    result.shinyFront = response.data.sprites.front_shiny
                    result.sound = "https://www.pokebip.com/audio/cris-sl/" + id + ".mp3"

                    result.types = typeTable
                    result.move = moveTable






                    resolve(result)
                })

                .catch(reason => {
                    reject("Erreur lors de la récupération des pokémons" + reason)
                })

        })
    }



    //Cette méthode retourne un tableau de pokemon
    getPokemons() {

        return new Promise((resolve, reject) => {

            let pokemons = []

            axios.get('https://pokeapi.co/api/v2/pokemon?limit=1800')
                .then(response => {

                    console.log(response.data.results)
                    let result = response.data.results;
                    result.forEach(p => {


                        let substrings = p.url.split("/");
                        let id = substrings[substrings.length - 2];
                        p.image = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + id + ".png"

                        p.id = id
                        pokemons.push(p)

                    })
                    resolve(pokemons)
                })
                .catch(reason => {
                    reject("Erreur lors de la récupération des pokémons" + reason)
                })

        })





    }



}