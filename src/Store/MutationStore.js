import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { persist } from "zustand/middleware";

export const useCountStore = create()(
	persist(
		immer((set) => ({
			arr: [
				{ id: 1, text: "text" },
				{ id: 2, text: "text" },
				{ id: 3, text: "text" },
				{ id: 4, text: "text" },
				{ id: 5, text: "text" },
			],
			add: (text) =>
				set((state) => {
					state.arr.push({ id: Date.now(), text });
				}),
			del: (id) => {
				set((state) => {
					const indexOfCount = state.arr.findIndex((el) => el.id === id);
					state.arr.splice(indexOfCount, 1);
				});
			},
		})),
		{ name: "testStore", vertion: 1 }
	)
);
