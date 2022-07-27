module.exports = {
	mode: "jit",

	content: ["./src/**/*.{html,js,tsx}"],
	theme: {
		extend: {},
	},
	plugins: [require("daisyui")],

	daisyui: {
		theme: ["light", "dark", "night"],
		darkTheme: "night",
	},
};
