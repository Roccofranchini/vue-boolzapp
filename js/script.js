console.log("Vue", Vue);

Vue.config.devtools = true;

const root = new Vue({
	el: "#root",
	data: {
		user,
		contacts,
	},
	methods: {},
});
