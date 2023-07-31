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
	const { autoFocus } = useControls("Effects", { autoFocus: true });
	const effectsMemo = useMemo(() => {
		return (
			<EffectComposer disableNormalPass multisampling={0}>
				<Bloom mipmapBlur intensity={0.8} />
				<SMAA edgeDetectionMode={EdgeDetectionMode.LUMA} />

				{autoFocus && (
					<Autofocus
						focusRange={0.015}
						// width={512}
						// height={512}
						resolutionX={512}
						resolutionY={512}
						resolutionScale={window.innerWidth < 500 ? 0.7 : 1}
						bokehScale={5}
					/>
				)}

				{/* <BrightnessContrast brightness={0.2} contrast={0.01} /> */}
				{/* {enabled && <SSR {...props} />} */}
				{/* <BrightnessContrast brightness={0.1} contrast={0.01} /> */}
			</EffectComposer>
		);
	}, [autoFocus]);

	return <>{effectsMemo}</>;
}
