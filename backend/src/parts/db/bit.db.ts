import { Injectable } from "@nestjs/common";
import { IBit } from "../interfaces/bit.interface";

export interface IBitInput {
    name: string,
    weight: number,
    imageUrl?: string,
}

@Injectable()
export class BitDb {
    private bits: IBit[] = [];
    private nextId = 1;

    register(bit: IBitInput) {
        const newBit: IBit = {
            id: this.nextId++,
            partType: "bit",
            name: bit.name,
            weight: bit.weight,
            imageUrl: bit.imageUrl,
        }

        this.bits.push(newBit);
        return newBit;
    }

    getAll(): IBit[] {
        return this.bits.slice();
    }
}

// Mock DATA
const SAMPLE_BITS: IBitInput[] = [
    {
        name: "flat", weight: 2.3,
        imageUrl: "https://lh3.googleusercontent.com/sitesv/AICyYdY2tlb07jLxx2t6vIkygA6LvpaaaYBvGEnNBemOGkA4v29Nk6CrAHd6cLxJeUUy1fxSxlzv3d0DZNdoD26cO69HsnK-p8kMT0zsd6VI1AHKcbQg3GlpGoTH3rtK2pKTgA_VpWljkHc00H1nCSG-DqgaBN7PTuAO0tSgPj1PLULXINbbpaCnont_G7_d17qu5S0lFWO4s2YFQzHSLufp-FmG59fQvOD8qSYF=w1280"
    },
    {
        name: "taper", weight: 2.3,
        imageUrl: "https://lh3.googleusercontent.com/sitesv/AICyYdajTIbIPOHR-T7rZKPzXfPXSFGC5EEQ3EvveZHiVSJDO8iq4ql4faW-ibLGBWcDAPMxKmY7WJmIRv2lxSjs6vy0og8CLK4Mtr78xJJw_cwULZGw8dl87FbvZTs3zXSrrzYq8nbk8RNwitxN4fpXwfmFVRw4KR3IJzF6yiB3QH4Po0j1MLAq43LpWqpaNak8I0uTTsfnLA3W201jmG4pHDRe8ktRB2QXk4a7qDs=w1280"
    },

    {
        name: "ball", weight: 2.1, imageUrl:
            "https://lh3.googleusercontent.com/sitesv/AICyYdYrgAqX5CZJ7sgUTmFj_4sYo5lQT4-U_MtyEGexKMv1v8z_atMH-BbuVX2AdBDHtF1LGLH6kcV_p66U4UzGahEiYLgft4B1MTMZSzbNrvpymiwQaqAKuuf7a9n9QnRtIB5BkZO47O1tUHsN99jTRykeZHXlIWdJfnKZ_BDQnix1NWTzYNKQ9i4UYAOEA345Yw7gbi692beMWeq-6H9KNW7fFKpqBS7dSdtZHrA=w1280"
    },

    {
        name: "needle", weight: 2, imageUrl:
            "https://lh3.googleusercontent.com/sitesv/AICyYdZiwOZBraNcgZK6It5trvHD-Cpn1Rr0uDkaiRUEeY8HYlezyE8Oa1UIaPjox_9_xxhqGxm9WNPUXq5NJA-kmnu_uZUacJQeRE2_9lcteSTRmXxqsKaq-SXfLy1xwmbJwaYXIzBv8g0aFutgWAkXnYjll3EGRu5sraBO2mQfxrROOkkVklI0lDEGwW5MQ7TdUTJJsrsReUYcRjmANQ8I_0leUnlMIpRvHry2SK0=w1280"

    }
];

export const MockBitsDb = new BitDb();
SAMPLE_BITS.forEach(entry => {
    MockBitsDb.register(entry);
})
