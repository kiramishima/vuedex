import { IType } from "./IType";
import { IAbility } from "./IAbility";
import { IStat } from "./IStat";

export interface IPokemonFull {
    abilities: IAbility[];
    base_experience: number;
    forms: {name: string; url: string;};
    game_indices: any[];
    height: number;
    held_items: any;
    id: number;
    is_default: boolean;
    location_area_encounters: string;
    moves: any[];
    name: string;
    order: number;
    species: {name: string; url: string;};
    sprites: any,//{other: {"official-artwork": {front_default: string;}; }} | null;
    stats: IStat[];
    types: IType[];
    weight: number;
}