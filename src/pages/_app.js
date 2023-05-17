import "@/styles/globals.css";
import { styles } from "@/styles/styles";
import { Canvas } from "@react-three/fiber";
import Experience from "../../components/Experience";
export default function App({ Component, pageProps }) {
	return (
		<>
			<Canvas
				gl={{ antialias: false, stencil: false }}
				camera={{ fov: 30 }}
				style={{ ...styles }}
			>
				<Experience />
			</Canvas>
			<Component {...pageProps} />
		</>
	);
}
