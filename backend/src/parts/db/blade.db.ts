import { Injectable } from "@nestjs/common";
import { IBlade } from "../interfaces/blade.interface";

export interface IBladeInput {
  name: string,
  weightLowEnd: number,
  weightHighEnd: number,
  imageUrl?: string,
}

@Injectable()
export class BladeDb {
  private blades: IBlade[] = [];
  private nextId = 1;

  register(blade: IBladeInput) {
    const newBlade: IBlade = {
      id: this.nextId++,
      partType: "blade",
      name: blade.name,
      weightHighEnd: blade.weightHighEnd,
      weightLowEnd: blade.weightLowEnd,
      imageUrl: blade.imageUrl,
    }
    this.blades.push(newBlade);
    return newBlade;
  }

  getAll() {
    return this.blades.slice();
  }
}

const SAMPLE_BLADES: IBladeInput[] = [
  { name: "Dran Sword", weightHighEnd: 35.3, weightLowEnd: 34.5, imageUrl: "https://lh3.googleusercontent.com/sitesv/AICyYdYpakwbPeYbmMfJZkVJqS3iZ53nE2Rv0AxLWM2DnULcXgYkB6JTE8pzOARVjxkX6kuHVTCwWmhBfP6RkqFYMpZKpxweXmb9wxpX86NXSnSuLqkXEUKGVpJpltRWhksrxiPg8-GQyyxjnbZGJwzf-lXxpnPr18Wllc_Vsn9bLFOaT2pr2dqyXnwLkQErX5qLIcHpZszsqlBB1iZU33YyJCZYcCtWzQ2PP42P=w1280" },

  { name: "Hells Scythe", weightHighEnd: 32.9, weightLowEnd: 32.7, imageUrl: "https://lh3.googleusercontent.com/sitesv/AICyYday-R5HWne4fbQlUjxG_c4EfCY5ykwgNWSI21FRVSa_rlSEhuq5n06FeKQ--AOAylvhB1ea0gODc8q0YTKYTE6XlXcaelN35AsCyKjpKljXPGCPKRa_fN7SICBKitBnZVsawbXeF_4-3HsMpLnxK2foDkmSuhClRUXw0NDpW4i7PilMt1kuwzlmjbKenITHa_tK-9sVTYFJJARE5rdxYRIYE5A1xwFKVKM2EL8=w1280" },

  { name: "Wizard Arrow", weightHighEnd: 32, weightLowEnd: 31, imageUrl: "https://lh3.googleusercontent.com/sitesv/AICyYdaxD8p2N5hMgbkWfaZ6TARNjTCDJkLhQpR5Q5-0M1iPStQKJYOfHdQS3m6brtvcP3TlREcT08LcSWRhkGgwLXCTt7x1phusNVCe-Uof35JhpkZkwYL1llH2qtQjjZLE-6sRg7D6QtqAMFbHc3q12HKQM-DVYtqVqKATJh_ksL-PZZ67eeic5vDpEY_Z2UCAmKoSevy76GLLifDBKlW-mjmYCqeBb4LnXgFtvfk=w1280" },

  { name: "Knight Shield", weightHighEnd: 32.6, weightLowEnd: 32, imageUrl: "https://lh3.googleusercontent.com/sitesv/AICyYdYF2_VEtn1GMi3fqWbMFftED3rAGTI5_GdtZhmzEnGnEawy3zh5pTVoAoB0ecNcWS1jfIKMR70E1RxPYm9NEts125Pdoe1VThaJsj83jlBpUWi3jAmPNu643ne_-7-IbPtWp4Yt1bOehgZaAydN4m8ypoYRhAkz4Typlhkbe_3xC9HdqDT6Ic3lQAAFO1r8qKMFl569Gs0yd41DEOWaV0UHNs5e7nncZGhI=w1280" },

  { name: "Wizard Arrow", weightHighEnd: 32, weightLowEnd: 31, imageUrl: "https://lh3.googleusercontent.com/sitesv/AICyYdZoBecy21o4ufw1YvXyrPFIBosxwv_-Mm9JLJ-htW2hnOAmp5_lC3G1Qvmaha_PcNSo9XoBmjhKZs28uJXDCofmvEdYH98xZ7xtlwXK66bDcJCf9LELH6G4f71ACd339Hbt2Jf_hmHeSEV6H7kYtCzs3_IZxbEVuNdPZiKwAlgs0izFTheVUg6EypZFIdDFRUWcbuH0FvYR1f_5Q6EV9jFE5lRYFeI8ClZA=w1280" },

  // { name: "", weightHighEnd: , weightLowEnd: , imageUrl: "" },
];

export const MockBladeDb = new BladeDb();
SAMPLE_BLADES.forEach(entry => {
  MockBladeDb.register(entry);
})
