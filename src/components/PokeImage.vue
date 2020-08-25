<template>
    <div class="w-full m-o p-0" style="border-radius: 0px 0px 60px 60px" v-bind:style="{'background-color': getColor()}">
        <img :src="ImageURL" :alt="ImageURL" />
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Colors } from "@/models/ColorTypes";
import { mapGetters } from "vuex";

@Component({
  components: {},
  computed: mapGetters(["pokemon"])
})
export default class PkeImage extends Vue {
    @Prop() ImageURL!:string;

    getColor() {
        const index = (this as any).pokemon.types[0].type.name as string;
        return (Colors as any)[index];
    }
}
</script>