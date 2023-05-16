import { Environment } from "@react-three/drei";

export default function Color() {
	return (
		<>
			<Environment preset="night" />
			<color attach="background" args={["black"]} />
		</>
	);
}
