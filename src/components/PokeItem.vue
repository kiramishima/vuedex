<template>
    <div class="rounded-lg p-2 m-2" v-bind:style="{'background-color': getColor()}" @click="goToDetail">
        <img :src="Image" :alt="Name" />
        <p class="font-semibold text-xl capitalize text-center">{{ Name }}</p>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { IType } from '@/models/IType';
import { Colors } from '@/models/ColorTypes';

@Component
export default class PokeItem extends Vue {
    @Prop() Id!:number;
    @Prop() Image!:string;
    @Prop() Name!:string;
    @Prop() Types!:IType[];

    goToDetail() {
        this.$router.push(`/pokemon/${this.Id}`);
    }

    getColor() {
        const index = this.Types[0].type.name as string;
        return (Colors as any)[index];
    }
}
</script>