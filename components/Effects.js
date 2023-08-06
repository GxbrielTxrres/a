import {
	EffectComposer,
	Autofocus,
	BrightnessContrast,
	Bloom,
	SMAA,
} from "@react-three/postprocessing";
import { useControls } from "leva";

export default function Effects() {
	const { autoFocus } = useControls("Effects", {
		autoFocus: true,
	});
	return (
		<EffectComposer disableNormalPass multisampling={0}>
			<Bloom mipmapBlur intensity={0.4} />
			<SMAA />

			{autoFocus && (
				<Autofocus
					focusRange={0.011}
					resolutionX={window.innerWidth < 700 ? 256 : 512}
					resolutionY={window.innerWidth < 700 ? 256 : 512}
					resolutionScale={window.innerWidth < 500 ? 0.7 : 1}
					bokehScale={5}
				/>
			)}

			<BrightnessContrast brightness={0.125} contrast={0.3} />
		</EffectComposer>
	);
}
