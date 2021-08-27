console.log("Vue", Vue);

Vue.config.devtools = true;

const root = new Vue({
	el: "#root",
	data: {
		user,
		contacts,
		currentIndex: 0,
	},
	methods: {
		isActive(index) {
			return this.currentIndex === index ? "active" : "";
		},
		setCurrentIndex(index) {
			this.currentIndex = index;
		},
	},
});
