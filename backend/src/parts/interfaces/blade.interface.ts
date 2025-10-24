import { IPart } from "./part.interface";

export interface IBlade extends IPart {
    weightLowEnd: number;
    weightHighEnd: number;
}