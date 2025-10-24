import { IBit } from "./bit.interface";
import { IBlade } from "./blade.interface";
import { IRatchet } from "./ratchet.interface";

export interface IBeyBlade {
    name: string;
    blade: IBlade;
    ratchet: IRatchet;
    bit: IBit;
    weight: number;
}