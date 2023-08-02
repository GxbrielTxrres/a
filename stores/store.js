import { Color } from "three";
import { create } from "zustand";

export const useCarStore = create((set) => ({
	bears: 0,
	increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
	removeAllBears: () => set({ bears: 0 }),

	color: { r: 0, g: 0, b: 0 },
	openTrunk: false,
	openHood: false,
}));
