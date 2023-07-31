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
	// const {
	// 	enabled,
	// 	denoiseIterations,
	// 	denoiseKernel,
	// 	denoiseDiffuse,
	// 	denoiseSpecular,
	// 	roughnessPhi,
	// 	depthPhi,
	// 	steps,
	// 	refineSteps,
	// 	resolutionScale,
	// 	spp,
	// 	blend,
	// 	maxRoughness,
	// 	envBlur,
	// 	distance,
	// 	autoThickness,
	// 	thickness,
	// } = useControls();

	const [isMobile] = useState(window.innerWidth);

	const { enabled, autoFocus, ...props } = useControls({
		enabled: true,
		autoFocus: true,
		// temporalResolve: true,
		// STRETCH_MISSED_RAYS: true,
		// USE_MRT: true,
		// USE_NORMALMAP: true,
		// USE_ROUGHNESSMAP: true,
		// ENABLE_JITTERING: true,
		// ENABLE_BLUR: true,
		// temporalResolveMix: { value: 0.9, min: 0, max: 1 },
		// temporalResolveCorrectionMix: { value: 0.4, min: 0, max: 1 },
		// maxSamples: { value: 0, min: 0, max: 1 },
		// resolutionScale: { value: 1, min: 0, max: 1 },
		// blurMix: { value: 0.2, min: 0, max: 1 },
		// blurExponent: { value: 10, min: 0, max: 20 },
		// blurKernelSize: { value: 1, min: 0, max: 10 },
		// rayStep: { value: 0.5, min: 0, max: 1 },
		// intensity: { value: 1, min: 0, max: 5 },
		// maxRoughness: { value: 1, min: 0, max: 1 },
		// jitter: { value: 0.3, min: 0, max: 5 },
		// jitterSpread: { value: 0.25, min: 0, max: 1 },
		// jitterRough: { value: 0.1, min: 0, max: 1 },
		// roughnessFadeOut: { value: 1, min: 0, max: 1 },
		// rayFadeOut: { value: 0, min: 0, max: 1 },
		// MAX_STEPS: { value: 20, min: 0, max: 20 },
		// NUM_BINARY_SEARCH_STEPS: { value: 6, min: 0, max: 10 },
		// maxDepthDifference: { value: 10, min: 0, max: 10 },
		// maxDepth: { value: 1, min: 0, max: 1 },
		// thickness: { value: 10, min: 0, max: 10 },
		// ior: { value: 1.45, min: 0, max: 2 },
	});

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
