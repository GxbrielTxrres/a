import {
	CameraControls,
	ContactShadows,
	MeshReflectorMaterial,
	useTexture,
} from "@react-three/drei";
import { Model } from "./Corvette";
import { Color, RepeatWrapping, Vector3 } from "three";
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

	const color = new Color(3, 3, 3);

	const [map] = useTexture(["/textures/textures/backgroundTexture.jpg"]);
	return (
		<>
			{/* lighting + effects */}
			<Perf position="top-left" />
			<Env color={color} map={map} />
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
				<Model {...config.model} color={color} />
				<Floor />
				<ContactShadows position={[0, -0.499, 0]} frames={60} />
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
				resolution={1024}
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
	const { setDpr } = useThree();
	useLayoutEffect(() => {
		// camera.lookAt(-0.5, -0.1, -1);
		if (window.innerWidth > 700) {
			setDpr(window.devicePixelRatio * 0.7);
		}
		camera.fov = window.innerWidth < 1020 ? 50 : 30;
		camera.updateProjectionMatrix();
	}, [camera]);

	// useFrame((state, delta) => {
	// 	if (state.clock.elapsedTime > 1) {
	// 		easing.damp3(camera.position, new Vector3(0, 0, 5), 1.5, delta);
	// 	}
	// });

	useEffect(() => {}, []);
	return;
}
