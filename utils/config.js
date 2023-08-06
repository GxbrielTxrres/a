import { Color } from "three";

export const config = {
	model: {
		scale: 0.3,
		position: [0.5, -0.5, -2],
		rotation: [0, -Math.PI / 6, 0],
	},
	textureBackground: {
		scale: [12, 12, 1],
		position: [0, 6, -50],
		rotation: [0, Math.PI, 0],
		width: 5,
		height: 4,
		radius: 1,
	},
	env: {
		map: "/textures/textures/backgroundTexture.jpg",
		color: new Color(4, 4, 4),
	},
};
