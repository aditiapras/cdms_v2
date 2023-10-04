import { create } from "zustand";

export const machinePhase = create((set) => ({
  default: "Phase 1",
  phase1: () => set((state) => ({ default: (state.default = "Phase 1") })),
  phase2: () => set((state) => ({ default: (state.default = "Phase 2") })),
}));

export const drumPhase = create((set) => ({
  default: "Phase 1",
  phase1: () => set((state) => ({ default: (state.default = "Phase 1") })),
  phase2: () => set((state) => ({ default: (state.default = "Phase 2") })),
}));

export const inputPhase = create((set) => ({
  default: "Phase 1",
  phase1: () => set((state) => ({ default: (state.default = "Phase 1") })),
  phase2: () => set((state) => ({ default: (state.default = "Phase 2") })),
}));

export const globalHistory = create((set) => ({
  history: "Change",
  change: () => set((state) => ({ history: (state.history = "Change") })),
  cleaning: () =>
    set((state) => ({
      history: (state.history = "Cleaning"),
    })),
}));
