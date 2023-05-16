import { Box, OrbitControls } from "@react-three/drei";
import {
	Autofocus,
	Bloom,
	ChromaticAberration,
	EffectComposer,
	Glitch,
	Noise,
} from "@react-three/postprocessing";
import Color from "./Color";
import { Perf } from "r3f-perf";
import { Skull } from "./Skull";
import { MarysHug } from "./MarysHug";

export default function Experience() {
	return (
		<>
			<Perf position="top-left" />
			<Box />
			<Box position={[0, 0, -2]} />
			<Skull position-x={2} />
			<MarysHug scale={2} />
			<Color />
			<OrbitControls />

			<EffectComposer>
				{/* <Bloom mipmapBlur luminanceThreshold={0.3} /> */}
				<Autofocus debug={0.1} focusRange={0.005} bokehScale={4} />
			</EffectComposer>
		</>
	);
}
