import {
	ContactShadows,
	MeshReflectorMaterial,
	useTexture,
} from "@react-three/drei";
import { Model } from "./Corvette";
import Env from "./Env";
import Effects from "./Effects";
import { Perf } from "r3f-perf";
import { useLayoutEffect } from "react";
import { useThree } from "@react-three/fiber";
import TextureBackground from "./TextureBackground";
import { config } from "../utils/config";
export default function Experience() {
	const [map] = useTexture([config.env.map]);
	return (
		<>
			<Perf position={"top-left"} />
			{/* lighting + effects */}
			<Env map={map} color={config.env.color} />
			<Effects />
			{/* Scene */}
			<ambientLight intensity={0.9} />
			<group>
				<Model {...config.model} map={map} />
				<TextureBackground {...config.textureBackground} map={map} />
				<Floor />
				<ContactShadows position={[0, -0.499, 0]} frames={20} />
			</group>
			<Camera />
		</>
	);
}

function Floor() {
	return (
		<mesh position-y={-0.5} rotation-x={-Math.PI / 2} scale={[15, 10, 1]}>
			<planeGeometry />

			<MeshReflectorMaterial
				blur={[300, 100]}
				resolution={window.innerWidth < 700 ? 1024 : 768}
				mixBlur={1}
				mixStrength={40}
				roughness={0.5}
				depthScale={0.5}
				minDepthThreshold={0.2}
				maxDepthThreshold={1.4}
				reflectorOffset={0.025}
				color="#3f3f3f"
				metalness={1}
			/>
		</mesh>
	);
}

function Camera() {
	const { setDpr, camera } = useThree();
	useLayoutEffect(() => {
		camera.fov = window.innerWidth < 1020 ? 50 : 30;
		camera.updateProjectionMatrix();

		if (window.innerWidth > 700) {
			setDpr(window.devicePixelRatio * 0.8);
		}
	}, [window.innerWidth]);

	return;
}
