import {
	CameraControls,
	ContactShadows,
	MeshReflectorMaterial,
	Text,
	useTexture,
} from "@react-three/drei";
import { Model } from "./Corvette";
import { Color, RepeatWrapping, Vector3 } from "three";
import Env from "./Env";
import Effects from "./Effects";
import { Perf } from "r3f-perf";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import TextureBackground from "./TextureBackground";
import { useCarStore } from "../stores/store";
export default function Experience() {
	const config = {
		model: {
			scale: 0.3,
			position: [0.5, -0.5, -2],
			rotation: [0, -Math.PI / 6, 0],
		},
		textureBackground: {
			scale: [12, 12, 1],
			position: [0, 6, -50],
			rotation: [0, Math.PI, 0],
			width: 5,
			height: 4,
			radius: 1,
		},
	};

	const color = new Color(3, 3, 3);
	const [map] = useTexture(["/textures/textures/backgroundTexture.jpg"]);

	return (
		<>
			{/* lighting + effects */}
			<Perf />
			<Env color={color} map={map} />
			<Effects />
			<Txt />
			{/* Scene */}
			<group>
				<Model {...config.model} color={color} />
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
	const cam = useRef();
	const { setDpr } = useThree();
	useLayoutEffect(() => {
		const camera = cam.current._camera;
		camera.fov = window.innerWidth < 1020 ? 50 : 30;
		camera.updateProjectionMatrix();

		if (window.innerWidth > 700) {
			setDpr(window.devicePixelRatio * 0.9);
		}
	}, []);

	return <CameraControls ref={cam} />;
}

function Txt() {
	const { openTrunk, openHood } = useCarStore();
	return (
		<group position={[0, -0.45, 1]} scale={0.075}>
			<Text
				position-x={-7}
				onClick={() => {
					useCarStore.setState({
						color: { r: Math.random(), g: Math.random(), b: 0 },
					});
				}}
			>
				Random Color
			</Text>
			<Text
				onClick={() => {
					useCarStore.setState({ openTrunk: !openTrunk });
				}}
			>
				{openTrunk ? "Close Trunk" : "Open Trunk"}
			</Text>
			<Text
				position-x={6.5}
				onClick={() => {
					useCarStore.setState({ openHood: !openHood });
				}}
			>
				{openHood ? "Close Hood" : "Open Hood"}
			</Text>
		</group>
	);
}
