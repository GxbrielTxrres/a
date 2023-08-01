import {
	EffectComposer,
	Autofocus,
	Bloom,
	SMAA,
} from "@react-three/postprocessing";
import { useControls } from "leva";
import { EdgeDetectionMode } from "postprocessing";
import { useMemo } from "react";

export default function Effects() {
	const { autoFocus } = useControls("Effects", {
		autoFocus: true,
	});
	return (
		<EffectComposer disableNormalPass multisampling={0}>
			<Bloom mipmapBlur intensity={0.8} />
			<SMAA />

			{autoFocus && (
				<Autofocus
					focusRange={0.007}
					resolutionX={window.innerWidth < 700 ? 256 : 512}
					resolutionY={window.innerWidth < 700 ? 256 : 512}
					resolutionScale={window.innerWidth < 500 ? 0.7 : 1}
					bokehScale={5}
				/>
			)}

			{/* <BrightnessContrast brightness={0.2} contrast={0.01} /> */}
			{/* {enabled && <SSR {...props} />} */}
			{/* <BrightnessContrast brightness={0.1} contrast={0.01} /> */}
		</EffectComposer>
	);
}
