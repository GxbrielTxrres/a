import { useThree } from "@react-three/fiber";
import { EffectComposer, Autofocus, Bloom } from "@react-three/postprocessing";
import { useEffect, useState } from "react";

export default function Effects() {
	const [isMobile] = useState(window.innerWidth);

	return (
		<EffectComposer>
			<Bloom mipmapBlur luminanceThreshold={0.3} />
			<Autofocus
				mouse
				debug={0.1}
				resolutionScale={isMobile >= 1200 ? 0.5 : 1}
				focusRange={0.005}
				bokehScale={4}
			/>
		</EffectComposer>
	);
}
