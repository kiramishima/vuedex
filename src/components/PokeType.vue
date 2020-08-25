<template>
    <div class="grid grid-cols-2 w-full grid-flow-row gap-4 px-16">
        <div class="rounded-full bg-white w-auto text-lg text-center" v-for="(type, index) of Types" v-bind:key="index" :class="getColor(type.type.name)">{{ type.type.name }}</div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { IType } from '@/models/IType';

export const ColorTypes: {[s:string]: string} = {
    "fire": "bg-red-600",
    "flying": "bg-gray-400"
}

@Component
export default class PokeType extends Vue {
    @Prop() Types!:IType;

    getColor(type: string) {
        return ColorTypes[type];
    }
}


</script>