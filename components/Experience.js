import {
	CameraControls,
	ContactShadows,
	MeshReflectorMaterial,
	useTexture,
} from "@react-three/drei";
import { Model } from "./Corvette";
import { RepeatWrapping, Vector3 } from "three";
import Env from "./Env";
import Effects from "./Effects";
import { Perf } from "r3f-perf";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useControls } from "leva";
import { easing } from "maath";
export default function Experience() {
	const config = {
		model: {
			scale: 0.3,
			position: [0.5, -0.5, -2],
			rotation: [0, -Math.PI / 6, 0],
		},
	};

	const [map] = useTexture(["/textures/textures/backgroundTexture.jpg"]);
	return (
		<>
			<Perf />
			{/* lighting + effects */}
			<Env />
			<Effects />
			<mesh
				scale={[70, 40, 1]}
				position={[0, 6, -50]}
				rotation={[0, 0, 0]}
			>
				<planeGeometry />
				<meshBasicMaterial map={map} />
			</mesh>

			{/* Scene */}
			<group>
				<Model {...config.model} />
				<Floor />
				<ContactShadows position={[0, -0.499, 0]} frames={120} />
			</group>
			<Camera />
			{/* <CameraControls /> */}
		</>
	);
}

function Floor() {
	return (
		<mesh position-y={-0.5} rotation-x={-Math.PI / 2} scale={[15, 10, 1]}>
			<planeGeometry />

			<MeshReflectorMaterial
				blur={[300, 100]}
				resolution={1028}
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
	const camera = useThree((state) => state.camera);

	useLayoutEffect(() => {
		camera.position.set(-0.575, -0.1, -0.7);
		// camera.lookAt(-0.5, -0.1, -1);

		camera.fov = window.innerWidth < 1020 ? 50 : 30;
		camera.updateProjectionMatrix();
	}, [camera]);

	useFrame((state, delta) => {
		easing.damp3(camera.position, new Vector3(0, 0, 5), 2, delta);
	});

	useEffect(() => {}, []);
	return;
}
