<template>
    <div class="w-full flex pb-3">
        <p class="w-1/5 font-semibold text-white text-left uppercase">{{ getLabel(Stat.stat.name) }}</p>
        <div class="shadow w-4/5 bg-white rounded-full">
            <div class="text-xs leading-none py-1 text-center text-white h-full rounded-full" :class="getColor()" 
            v-bind:style="{width: `${getPorcentage(Stat.base_stat)}%`}">{{ Stat.base_stat }}</div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { IStat } from '@/models/IStat';

export const Labels: {[s:string]: string} = {
    "hp": "hp",
    "attack": "atk",
    "defense": "def",
    "special-attack": "satk",
    "special-defense": "sdef",
    "speed": "spd"
}


export const Colors: string[] = [
    "bg-red-700",
    "bg-blue-600",
    "bg-gray-600",
    "bg-green-600",
    "bg-yellow-600",
    "bg-purple-600"
]

@Component
export default class PokeStat extends Vue {
    MAX_LIMIT = 350;
    @Prop() Index!:number;
    @Prop() Stat!:IStat;

    getColor(index: number) {
        return Colors[this.Index];
    }

    getLabel(s: string) {
        return Labels[s];
    }

    getPorcentage(val: number) {
        const x = (val/350)*100;
        return Number(x.toFixed(2));
    }
}


</script>