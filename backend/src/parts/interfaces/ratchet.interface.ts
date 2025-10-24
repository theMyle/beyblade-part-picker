import { IPart } from "./part.interface";

export interface IRatchet extends IPart {
    weightLowEnd: number;
    weightHighEnd: number;
}