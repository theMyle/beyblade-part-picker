import { Injectable } from "@nestjs/common";
import { IRatchet } from "../interfaces/ratchet.interface";

export interface IRatchetInput {
    name: string,
    weightHighEnd: number,
    weightLowEnd: number,
    imageUrl?: string,
}

@Injectable()
export class RatchetDb {
    private ratchets: IRatchet[] = [];
    private nextId = 1;

    register(ratchet: IRatchetInput) {
        const newRatchet: IRatchet = {
            id: this.nextId++,
            partType: "ratchet",
            name: ratchet.name,
            imageUrl: ratchet.imageUrl,
            weightHighEnd: ratchet.weightHighEnd,
            weightLowEnd: ratchet.weightLowEnd
        }

        this.ratchets.push(newRatchet);
        return newRatchet;
    }

    getAll() {
        return this.ratchets.slice();
    }
}

const SAMPLE_RATCHETS: IRatchetInput[] = [
    { name: "3-60", weightHighEnd: 6.4, weightLowEnd: 6.3, imageUrl: "https://lh3.googleusercontent.com/sitesv/AICyYdYNorwK8G5gjTGMQeTiu6AQxuZxo8XhPqGGBSqIuuWkRgXX33zJrzI5ErIPpQPn3HGlsYZJPoSAEOfqkhlZK1w2tJgDgX4Y9eaHYUP1hrGL5DAQ_8kQD5Cf_tIzXRSofPAA6TX-PMwDot-w_nesE_8x3CiPMGVI12Yjxu9MWPiWyyMdFNh597mP9-DE2-VStKXDcjNikaPcRHRi5wmu82zXRealfaatjb2I=w1280" },
    { name: "4-60", weightHighEnd: 6.4, weightLowEnd: 6.4, imageUrl: "https://lh3.googleusercontent.com/sitesv/AICyYdYgOfekHRJeVkrxIYekYD8QSTHqMxO6QZnLAhZvL-u3h_Ginko3Z0w0asEJFhKGWQSnVtj9mzrr6tylMZSkL5eI9Ioj4mw12KaxaeRRF7r53-72VzZUTWY759cjy4xq1X5z14YHJsupSAQU2-PRp4i-NLcgZlxyB0AKxQPtsX8XRvu1LR191SP67eFQZdWeCuZe1yz600xy6JshcxVLlGDAskCuOX5T96jN__k=w1280" },
    { name: "4-80", weightHighEnd: 7, weightLowEnd: 7, imageUrl: "https://lh3.googleusercontent.com/sitesv/AICyYdaFzPTRZ0SiZQ_dXV6MbE3NRIKBkIGlNzJvIUciYCNP0gQkzcD-O1_UtObcI7Lx32kqoB9_IE4AlF0g5kGbUGiAFFPcf5N7hwNUaMoHljzSQPx6zlRuMBIYih2pdV9BYS3MGYiMFj713sFq8kfWu8khm3qkorOhvm84pb1sYjxSG_2PdB_YWePNajFuwFUqHT4JhqGijTEZeYSz0RaUBzIHhJ-3egj4K6cT=w1280" },
    { name: "3-80", weightHighEnd: 7.1, weightLowEnd: 7.1, imageUrl: "https://lh3.googleusercontent.com/sitesv/AICyYdZXpOLcFflpg50MfDFwtxpub7KoootA8Jtdk2NFbgvVDxbZSzPnVou0AIg5RmVZY4KMmoKAXXbbkTL6ZhXCuzbE4CTr4q-gg4tUN3A8xzHaVDMIbv5RSYOGT8W3uVLvWEkYXsASADycaQl05QjmaBq9QIwkCToR_lisXCK9jCO5Q9tPFpdCWiVmBB5CNKabxhzPV9Ln8myoW2pWLAfBDsAtfmPKb5s1Wiza=w1280" },
    { name: "4-80", weightHighEnd: 7, weightLowEnd: 7, imageUrl: "https://lh3.googleusercontent.com/sitesv/AICyYdaDVtUGG89TM8erKtSOccpEJfBzQu5SB4vWFlmIt0jQWqds59zdI7ibtpI83RmzEGvxdsYcmLS0-1S732y_vPS5kt9vjjZnxGUA_LCaP_i_TlTORn9fY_xHTUiugSGOhQsn9_UstEjzEd4GuBRaaEP-6l0lVOacUrWH-d5t8Zkw7OrWYWJHiMczkOa-2DVPar88GybH9H8IqrK0--EH46bMDdqyEofVQV_VdHs=w1280" },

    // { name: "", weightHighEnd: , weightLowEnd: , imageUrl: "" },
];

export const MockRatchetDb = new RatchetDb();
SAMPLE_RATCHETS.forEach(entry => {
    MockRatchetDb.register(entry);
})