import { EffectComposer, Autofocus, Bloom } from "@react-three/postprocessing";
import { useControls } from "leva";
import { useEffect, useState } from "react";

export default function Effects() {
	const [isMobile] = useState(window.innerWidth);
	const { bokehScale, focusRange } = useControls({
		bokehScale: { value: 4, min: 0, max: 40, step: 1 },
		focusRange: { value: 0.005, min: 0, max: 1, step: 0.001 },
	});
	return (
		<EffectComposer>
			<Bloom mipmapBlur luminanceThreshold={0.3} />
			<Autofocus
				mouse
				resolutionScale={isMobile >= 1200 ? 0.5 : 1}
				focusRange={0.005}
				bokehScale={bokehScale}
			/>
		</EffectComposer>
	);
}
