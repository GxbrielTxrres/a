import { Box, OrbitControls, Sphere } from "@react-three/drei";

import Color from "./Color";
import { Perf } from "r3f-perf";
import Effects from "./Effects";
import { Spaceship } from "./Spaceship";

export default function Experience() {
	return (
		<>
			<Perf position="top-left" />
			{/* <Box position={[0, 0, -2]} /> */}
			{/* <Skull position-x={2} /> */}
			<Spaceship />
			<Effects />
			<Color />
			<OrbitControls />
		</>
	);
}
