import { Environment, Lightformer, useTexture } from "@react-three/drei";
import { Color, Light } from "three";

const color = new Color(3, 3, 3);

export default function Env() {
	const [map] = useTexture(["/textures/textures/backgroundTexture.jpg"]);
	return (
		<Environment resolution={128}>
			<mesh scale={[30, 40, 1]} position={[0, 6, -19]}>
				<planeGeometry />
				<meshBasicMaterial map={map} />
			</mesh>
			<mesh
				scale={[30, 40, 1]}
				position={[20, 6, -10]}
				rotation-y={-Math.PI / 2}
			>
				<planeGeometry />
				<meshBasicMaterial map={map} />
			</mesh>
			<mesh
				scale={[30, 40, 1]}
				position={[-20, 6, -10]}
				rotation-y={Math.PI / 2}
			>
				<planeGeometry />
				<meshBasicMaterial map={map} />
			</mesh>

			<mesh
				scale={[30, 40, 1]}
				position={[0, 6, 20]}
				rotation-y={Math.PI}
			>
				<planeGeometry />
				<meshBasicMaterial map={map} />
			</mesh>
			<Lightformer
				toneMapped={false}
				position={[5, 1, -1]}
				target={[1, -0.25, 0]}
				color={color}
				intensity={3}
			/>
			<Lightformer
				toneMapped={false}
				position={[-1, 0.5, 0.5]}
				target={[-0.5, -2, 0]}
				color={color}
				intensity={10}
			/>

			<Lightformer
				toneMapped={false}
				position={[1, -0.5, -5]}
				target={[0, -0.75, 0]}
				color={color}
				scale={[2, 0.2]}
				intensity={5}
			/>
			{/* <Lightformer
				position={[4.5, 0.25, -8]}
				target={[0, 0, 0]}
				scale={[4, 0.5, 0]}
				intensity={14.5}
				color="white"
				form="ring"
			/> */}
			{/* 
			<Lightformer
				position={[0, 0.25, -7]}
				target={[0, 0, 0]}
				scale={[4, 1, 0]}
				intensity={14}
				color="white"
				form="circle"
			/> */}
			{/* 
			<Lightformer
				position={[-3.5, 0.5, -8]}
				target={[0, 0, 0]}
				scale={[4, 0.5, -20]}
				intensity={14.5}
				color="white"
				form="circle"
			/> */}
		</Environment>
	);
}
