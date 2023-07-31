import { Environment, Lightformer, useTexture } from "@react-three/drei";
import { useMemo } from "react";
import { Color, Light } from "three";
import { useControls } from "leva";

export default function Env({ color }) {
	const [map] = useTexture(["/textures/textures/backgroundTexture.jpg"]);
	const envMemo = useMemo(() => {
		return (
			<Environment resolution={128} frames={1}>
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
			</Environment>
		);
	}, []);

	return <>{envMemo}</>;
}
