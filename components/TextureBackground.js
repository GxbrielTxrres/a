export default function TextureBackground({ map, ...props }) {
	return (
		<mesh {...props}>
			<planeGeometry />
			<meshBasicMaterial map={map} />
		</mesh>
	);
}
