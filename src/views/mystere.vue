<template>
  <div>
    <h1>Who's that Pokemon ?</h1>
    <div v-for="(obj, index) in pokemons" v-bind:key="index" id="black">
        <h1>
          <img :src="obj.image" alt="">
        </h1>



    </div>
  </div>
</template>


<style>
#black{
  filter: brightness(0%); 
}
</style>


<script>
import { PokemonService } from '../services/pokemonService.js';

export default {
  name: "demo",

  // Tout ce qui est dans data() est réactif, que des variables
  data() {
    return {
      pokemons: [],
      service: new PokemonService()
    };
  },

  // Cette fonction sera appelée lorsuqe le composant est prêt à l'emploi
  mounted() {
    setInterval(() => {
      this.compteur++;
    }, 1000);


    this.service.getPokemons()
    .then(pokemons =>{
      this.pokemons = pokemons
    })

    this.service.getPokemon(this.pokemonId)
    .then(result => {
      this.onePokemon = result;
    })

  }
}
</script>
