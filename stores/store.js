import { Color } from "three";
import { create } from "zustand";

export const useCarStore = create((set) => ({
	bears: 0,
	increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
	removeAllBears: () => set({ bears: 0 }),

	brightLights: new Color(4, 4, 4),
	black: new Color(0, 0, 0),
}));
