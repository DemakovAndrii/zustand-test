import React, { useState } from "react";
import { useBearStore } from "./Store/ImutationStore";
import { useCountStore } from "./Store/MutationStore";

export default function App() {
	const bears = useBearStore((state) => state.bears);
	const increasePopulation = useBearStore((state) => state.increasePopulation);
	const removeAllBears = useBearStore((state) => state.removeAllBears);

	const state = useCountStore((state) => state.arr);
	const add = useCountStore((state) => state.add);
	const del = useCountStore((state) => state.del);

	const [text, setText] = useState("");
	const submit = (e) => {
		e.preventDefault();
		add(text);
		setText("");
	};

	return (
		<>
			<div>
				<h1>{bears} around here ...</h1>
				<button onClick={increasePopulation}>one up</button>
				<button onClick={removeAllBears}>removeAllBears</button>
			</div>
			<h1>-----------</h1>
			<form onSubmit={submit}>
				<input value={text} onChange={(e) => setText(e.target.value)} />
				<button>add</button>
				<div>
					{state.map(({ text, id }, index) => {
						return (
							<div key={index}>
								{index}. {text}, {id}
								<button
									type="button"
									onClick={() => {
										del(id);
									}}
								>
									del
								</button>
							</div>
						);
					})}
				</div>
			</form>
		</>
	);
}
