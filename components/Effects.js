import {
	EffectComposer,
	Autofocus,
	Bloom,
	SSR,
	BrightnessContrast,
	ToneMapping,
	N8AO,
	SMAA,
	DepthOfField,
} from "@react-three/postprocessing";
import { useControls } from "leva";
import { useState } from "react";

export default function Effects() {
	const { autoFocus } = useControls("Effects", { autoFocus: true });

	return (
		<EffectComposer disableNormalPass multisampling={0}>
			{/* <N8AO intensity={10} aoRadius={2} /> */}
			<Bloom
				mipmapBlur
				// luminanceThreshold={1}
				intensity={0.8}
				// levels={1}
			/>
			<SMAA />

			{autoFocus && (
				<Autofocus
					focusRange={0.015}
					width={512}
					height={512}
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

// const { scene, camera } = useThree();
// const velocityDepthNormalPass = new VelocityDepthNormalPass(scene, camera);
// const SSGi = new SSGIEffect(scene, camera, velocityDepthNormalPass, {
// 	denoiseIterations: 5,
// 	denoiseKernel: 1,
// 	denoiseDiffuse: 50,
// 	denoiseSpecular: 50,
// 	roughnessPhi: 1,
// 	steps: 1,
// 	refineSteps: 2,
// 	depthPhi: 1,
// 	resolutionScale: 1,
// 	spp: 15,
// 	blend: 0.5,
// 	maxRoughness: 0.85,
// 	envBlur: 0,
// 	distance: 5,
// 	autoThickness: 1,
// 	thickness: 2,
// });
