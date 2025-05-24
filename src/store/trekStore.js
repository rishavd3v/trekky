import { create } from "zustand";
import slugify from "../utils/slugify";

const useTrekStore = create((set, get) => ({
  treks: [],
  setTreks: (treksData) => set({ treks: treksData }),

  getTrekBySlug: (slug) => {
    return get().treks.find((trek) => {
      const newSlug = slugify(trek.name);
      return newSlug == slug;
    });
  },

  getTrekByLocation: (query) => {
    return get().treks.filter((trek) =>
      `${trek.location.state}, ${trek.location.region}`
        .toLowerCase()
        .includes(query.toLowerCase())
    );
  },

  getTrekByDifficulty: (difficulty) => {
    return get().treks.filter((trek) => {
      trek.difficulty.toLowerCase() === difficulty.toLowerCase();
    });
  },

  getFilteredTreks: (filters) => {
    const seasonMonths = {
      summer: ["April", "May", "June"],
      monsoon: ["July", "August", "September"],
      winter: ["October", "November", "December", "January", "February"],
    };
    
    return get().treks.filter((trek) => {
      const byLocation = !filters.location || trek.location?.state?.toLowerCase() === filters.location.toLowerCase();
      const byDifficulty = !filters.difficulty || trek.difficulty.toLowerCase() === filters.difficulty;
      const bySeason =
      !filters.season || (Array.isArray(trek.months) &&
        trek.months.some((month) =>
          seasonMonths[filters.season.toLowerCase()]?.includes(month)
      ));

      return byLocation && byDifficulty && bySeason;
    });
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

  getStates: () => {
    const states = get().treks.map((item) => item.location.state);
    return Array.from(new Set(states));
  },
}));

export default useTrekStore;
