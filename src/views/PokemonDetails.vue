<template>
  <div>
    <div></div>
     <h1>{{ pokemonId }}</h1>
    <h2 class="name">{{ onePokemon.name }}</h2>
    <div class="mid-container">
      <div class="container">
      <img :src="onePokemon.artwork" alt="" />
      <audio controls :src="onePokemon.sound"></audio></div>
      <div id="health">❤{{ onePokemon.hp }}</div>
      <div id="weight">{{ onePokemon.weight }} KG</div>
      <img v-for="t in onePokemon.imgType" :key="t" :src="t" />
    </div>
     
    <img :src="onePokemon.animatedFront" class="gif" alt="" />
    <img :src="onePokemon.animatedBack" class="gif" alt="" />
    <img :src="onePokemon.pokemonShinyFront" alt="" />
    <div class="moves-container">
      <div v-for="m in onePokemon.move" :key="m" class="moves">
      {{ m }}
    </div>
    </div>
  </div>
</template>




<style>
#health {
  font-size: 2rem;
  color: red;
}

.gif {
  width: 12vh;
}

.mid-container {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}

.mid-container p {
  font-weight: bolder;
  text-transform: uppercase;
}


.moves-container{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

}

.name{
  font-weight: lighter;
}

.moves {
  margin: 8px;
}


</style>

<script>
import { PokemonService } from "../services/pokemonService.js";
export default {
  name: "PokemonDetails",
  data() {
    return {
      pokemonId: 0,
      onePokemon: {},
      service: new PokemonService(),
    };
  },

  computed: {
    getColor() {
      if (this.onePokemon.types != undefined) {
        let colors = [];

        this.onePokemon.types.forEach((t) => {
          switch (t) {
            case "bug":
              colors.push("green");
              break;
            case "normal":
              colors.push("#A8A878");
              break;
            case "fire":
              colors.push("#F08030");
              break;
            case "fighting":
              colors.push("#C03028");
              break;
            case "water":
              colors.push("#C03028");
              break;
            case "flying":
              colors.push("#A890F0");
              break;
          }
        });

        return {
          color1: "background-color:" + colors[0],
          color2: "background-color:" + colors[1],
        };
      }

      return "";
    },
  },

  mounted() {
    let route = this.$route;
    this.pokemonId = route.params.id;

    this.service.getPokemon(this.pokemonId).then((result) => {
      this.onePokemon = result;
    });
  },
};
</script>
