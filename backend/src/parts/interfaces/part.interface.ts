import { IBit } from "./bit.interface";
import { IBlade } from "./blade.interface";
import { IRatchet } from "./ratchet.interface";

export type PartType = "blade" | "ratchet" | "bit";

export interface IPart {
    id: number;
    name: string;
    partType: PartType;
    imageUrl?: string;
}
