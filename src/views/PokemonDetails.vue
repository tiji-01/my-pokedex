<template>
  <div>
    <div></div>
    <div class="mid-container">
      <img :src="onePokemon.artwork" alt="" />
      <div id="health">{{ onePokemon.hp }}</div>
      <img v-for="t in onePokemon.imgType" :key="t" :src="t" />
    </div>
    <h1>ID du Pokemon : {{ pokemonId }}</h1>
    <h2>{{ onePokemon.name }}</h2>
    <img :src="onePokemon.animatedFront" class="gif" alt="" />
    <img :src="onePokemon.animatedBack" class="gif" alt="" />
    <img :src="onePokemon.pokemonShinyFront" alt="" />
    <div v-for="m in onePokemon.move" :key="m" class="moves-container">
      {{ m }}
    </div>
    <audio controls :src="onePokemon.sound"></audio>
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
