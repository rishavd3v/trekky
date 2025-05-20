import { create } from "zustand";
import slugify from "../utils/slugify";

const useTrekStore = create((set,get) => ({
  treks: [],
  setTreks: (treksData) => set({ treks: treksData }),

  getTrekBySlug: (slug) => {
    return get().treks.find(
      (trek) => {
        const newSlug = slugify(trek.name);
        return newSlug == slug;
      }
    );
  },
  
  getTrekByLocation: (query) => {
    return get().treks.filter((trek) => 
      `${trek.location.state}, ${trek.location.region}`
        .toLowerCase()
        .includes(query.toLowerCase())
    );
  },

  getUniqueLocations: () => {
    return Array.from(
      new Map(
        get().treks.map((item) => [
          `${item.location.state}, ${item.location.region}`,
          item.location,
        ])
      ).values()
    );
  },

}));

export default useTrekStore;
