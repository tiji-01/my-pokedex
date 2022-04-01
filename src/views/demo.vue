<template>
  <div>
    <img alt="pokdex" src="../assets/pokedex.png" id="pokedex-logo">
    <!-- <p>{{ maVariable }}</p>
    <p>{{ compteur }}</p>
    <input type="text" v-model="firstName" /> -->
<!-- 
    <br />
    <span v-if="firstName != ''"> Bonjour {{ firstName }} </span>
    <span v-else> Merci de saisir votre blaze </span>
    <br />

    <button @click="direBonjour">Bonjour</button>

    <br /> -->
<div class="pokeContainer">
    <div class="pokemon-case" v-for="(obj, index) in pokemons" v-bind:key="index">
        <h1>
          <router-link v-bind:to="'/pokemons/' + obj.id">
          <img :src="obj.image" alt="">
      
        </router-link>
        </h1>
  <!--on accede aux type des pokemons -->
         <h2 v-for="(t, i) in obj.types" v-bind:key="i">
            
            {{ t }}
        </h2>
    </div>
</div>

    <!-- index est pour le tableau, on a besoin d'une boucle -->
  </div>
</template>

<style>
ul {
  text-decoration: none;
  list-style: none;
}

.pokeContainer{
  display: flex;
  flex-wrap: wrap;
    align-items: baseline;
        justify-content: center;
}

#pokedex-logo{
  width: 35rem;
  padding-bottom: 3%;
}

.pokemon-case{
  
}


.pokemon-case:hover{
  transform: scale(1.5);
}

</style>


<script>
import { PokemonService } from '../services/pokemonService.js';

export default {
  name: "demo",

  // Tout ce qui est dans data() est réactif, que des variables
  data() {
    return {
      maVariable: "Bonjour !",
      compteur: 0,
      firstName: "",
      pokemons: [],
      service: new PokemonService()
    };
  },

  // Que des fonctions dans methods
  methods: {
    direBonjour() {
      alert("Bonjour " + this.firstName);
    },
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