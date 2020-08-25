<template>
    <nav v-if="isDefault" class="bg-red-700 w-full h-16 text-white py-5 pl-5 text-xl">
        Pokedex
    </nav>
    <nav v-else class="w-full h-13 text-white py-5 pl-5 text-xl" v-bind:style="{'background-color': getColor()}">
        <div class="flex justify-between">
            <a @click="back" class="flex items-center"><i class="material-icons">arrow_back</i> Pokedex</a>

            <span class="pr-5"># {{ pokemon.id }}</span>
        </div>
    </nav>
</template>

<script lang="ts">
import { Component, Prop, Watch, Vue } from "vue-property-decorator";
import axios from "axios";
import { mapGetters } from "vuex";
import { Colors } from "@/models/ColorTypes";

@Component({
  name: "Navbar",
  computed: mapGetters(["pokemon"])
})
export default class Navbar extends Vue {
    isDefault = true;

    back() {
        this.$router.back();
    }

    mounted() {
        const route = this.$route.name;
        if (route == "Home") {
            this.isDefault = true;
        } else if (route != "Home") {
            this.isDefault = false;
            // this.$store.dispatch("getPokemon", this.$route.params.id);
        }
    }

    getColor() {
        const index = ((this as any).pokemon.types as any[])[0].type.name as string;
        return (Colors as any)[index];
    }

    @Watch('$route')
    onPropertyChanged(to: any, from: any) {
        if (to.name == "Home") {
            this.isDefault = true;
        } else if (to.name != "Home") {
            this.isDefault = false;
            this.$store.dispatch("getPokemon", this.$route.params.id);
        }
    }
}
</script>