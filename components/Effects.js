import {
	EffectComposer,
	Autofocus,
	BrightnessContrast,
	Bloom,
	SMAA,
} from "@react-three/postprocessing";
import { useControls } from "leva";

export default function Effects() {
	const { blur, blurAmount } = useControls("Effects", {
		blur: true,
		blurAmount: { value: 5, min: 1, max: 20, step: 1 },
	});
	return (
		<EffectComposer disableNormalPass multisampling={0}>
			<Bloom mipmapBlur intensity={0.4} />
			<SMAA />

			{blur && (
				<Autofocus
					focusRange={0.02}
					resolutionX={window.innerWidth < 700 ? 256 : 512}
					resolutionY={window.innerWidth < 700 ? 256 : 512}
					bokehScale={blurAmount}
				/>
			)}

			<BrightnessContrast brightness={0.125} contrast={0.3} />
		</EffectComposer>
	);
}
