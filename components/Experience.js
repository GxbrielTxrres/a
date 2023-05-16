import { Box, OrbitControls } from "@react-three/drei";

import Color from "./Color";
import { Perf } from "r3f-perf";
import { Skull } from "./Skull";
import Effects from "./Effects";

export default function Experience() {
	return (
		<>
			<Perf position="top-left" />
			<Box />
			<Box position={[0, 0, -2]} />
			<Skull position-x={2} />

			<Effects />
			<Color />
			<OrbitControls />
		</>
	);
}
