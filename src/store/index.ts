import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import { IPokemonFull as IPokemon } from '@/models/IPokemonFull';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    pokemonItems: [],
    pokemon: {},
    defaultRoute: true
  },
  mutations: {
    UPDATE_POKEMON_ITEMS(state, payload) {
      state.pokemonItems = payload;
    },
    UPDATE_POKEMON_ITEM(state, payload) {
      state.pokemon = payload;
    },
    UPDATE_NAVBAR(state, payload) {
      state.defaultRoute = payload;
    }
  },
  actions: {
    async getPokemonItems ({ commit }) {
      const response = await axios.get("https://pokeapi.co/api/v2/pokemon");
      const response2 = response.data.results.map(async (item: any) => {
        const r = await axios.get(item.url);
        const {name, id, order, types} = r.data;
        return {name, id, order, types};
      });
      // console.log(response2);
      Promise.all(response2).then(item => {
        // console.log("item", item);
        commit("UPDATE_POKEMON_ITEMS", item.map((item: any, index: number) => Object.assign(item, {src: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${item.id}.png`})));
      });
    },
    async getPokemon ({ commit }, pokeId) {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeId}`);
      commit("UPDATE_POKEMON_ITEM", response.data);
    },
  },
  getters: {
    pokemonItems: state => state.pokemonItems,
    pokemon: state => state.pokemon,
    isDefaultRoute: state => state.defaultRoute
  },
  modules: {}
});
