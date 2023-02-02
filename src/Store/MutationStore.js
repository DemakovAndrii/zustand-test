import produce from "immer";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

export const useCountStore = create()(
	immer((set) => ({
		arr: [
			{ id: 1, text: "text" },
			{ id: 2, text: "text" },
			{ id: 3, text: "text" },
		],
		add: (text) =>
			set((state) => {
				state.arr.push({ text });
			}),
		del: (index) => {
			set(
				produce((state) => {
					const indexOfCount = state.arr.findIndex((el) => el.id === index);
					state.arr.splice(indexOfCount, 1);
				})
			);
		},
	}))
);
