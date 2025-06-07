import { create } from "zustand";
import slugify from "../utils/slugify";
import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;

const useTrekStore = create((set, get) => ({
  treks: [],
  loading: false,
  error: false,

  setLoading: (state)=>set({loading:state}),

  setTreks: (treksData) => set({ treks: treksData }),

  fetchTreks: async () => {
    set({ loading: true });
    try {
      const response = await axios.get(API_URL);
      set({ treks: response.data });
      set({error:false});
    }
    catch (error) {
      set({ error: true });
      console.error("Failed to fetch treks", error);
    }
    finally {
      set({ loading: false });
    }
  },

  getTrekBySlug: (slug) => {
    return get().treks.find((trek) => {
      const newSlug = slugify(trek.name);
      return newSlug == slug;
    });
  },

  getTrekByLocation: (query) => {
    return get().treks.filter((trek) =>
      `${trek.state}, ${trek.region}`
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
      const byLocation = !filters.location || trek.state?.toLowerCase() === filters.location.toLowerCase();
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
          `${item.state}, ${item.region}`,
          item,
        ])
      ).values()
    );
  },

  getStates: () => {
    const states = get().treks.map((item) => item.state);
    return Array.from(new Set(states));
  },
}));

export default useTrekStore;
