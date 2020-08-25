<template>
  <div class="w-full flex flex-col">
    <PokeImage v-if="pokemon.sprites" :ImageURL="pokemon.sprites.other['official-artwork'].front_default" />
    <p class="py-2 text-center text-2xl text-gray-100 capitalize font-semibold">{{ pokemon.name }}</p>
    <PokeType v-if="pokemon.types" :Types="pokemon.types"/>
    <div class="grid grid-cols-2 w-full grid-flow-row gap-4 px-16 mt-5">
        <p class="text-white text-center text-xl font-semibold">{{ pokemon.weight/10 }} KG</p>
        <p class="text-white text-center text-xl font-semibold">{{ pokemon.height/10 }} M</p>
        <p class="text-gray-500 text-sm text-center font-semibold">Weight</p>
        <p class="text-gray-500 text-sm text-center font-semibold">Height</p>
    </div>
    <p class="py-2 text-center text-xl text-gray-100 capitalize font-semibold">Base Stats</p>
    <div class="flex flex-wrap grid-flow-row pt-3 px-5">
        <PokeStat v-for="(stat, index) of pokemon.stats" v-bind:key="index" :Index="index" :Stat="stat"/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import PokeImage from "@/components/PokeImage.vue";
import PokeType from "@/components/PokeType.vue";
import PokeStat from "@/components/PokeStat.vue";
import axios from "axios";
import { mapGetters } from 'vuex';
import { IPokemonFull as IPokemon } from '@/models/IPokemonFull';

@Component({
  components: {
    PokeImage,
    PokeType,
    PokeStat
  },
  computed: mapGetters(['pokemon'])
})
export default class Detail extends Vue {
    pokeId = 0;
    data: IPokemon|null = null;
    // pokemon!:IPokemon;
    async created() {
      this.$store.dispatch("getPokemon", this.$route.params.id);
      console.log('1', this.$route.params);
    }
    async mounted() {
        // console.log(this.$route.params);
        // this.pokeId = +this.$route.params.id;
        console.log((this as any).pokemon);
        // this.data = await this.getData();
    }

    async getData() {
        const resp = await axios.get(`https://pokeapi.co/api/v2/pokemon/${this.pokeId}`);
        // console.log(resp.data);
        return resp.data as IPokemon ;
    }
}
</script>