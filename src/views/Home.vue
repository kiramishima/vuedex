<template>
  <div class="grid grid-cols-2 px-2" v-if="pokemonItems">
    <PokeItem v-for="(item, index) of pokemonItems" v-bind:key="index" :Image="item.src" :Name="item.name" :Types="item.types" :Id="item.id" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import axios from "axios";
import PokeItem from "@/components/PokeItem.vue";
import { mapGetters } from 'vuex';
import { IPokemon } from "@/models/IPokemon";

@Component({
  name: "Home",
  components: {PokeItem},
  computed: mapGetters(["pokemonItems"])
})
export default class Home extends Vue {
  created() {
    this.$store.dispatch("getPokemonItems");
  }

  async mounted() {
    // this.dataList = await this.getData();
    // console.log((this as any).pokemonItems);
    /*window.onscroll(e => {

    })*/
  }
}
</script>
