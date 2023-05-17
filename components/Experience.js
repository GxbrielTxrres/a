import { Box, OrbitControls, Sphere } from "@react-three/drei";

import Color from "./Color";
import { Perf } from "r3f-perf";
import { Skull } from "./Skull";
import Effects from "./Effects";

export default function Experience() {
	return (
		<>
			<Perf position="top-left" />
			<Box position={[0, 0, -2]} />
			<Skull position-x={2} />
			<Skull />
			<Effects />
			<Color />
			<OrbitControls />
		</>
	);
}
