console.log("Vue", Vue);

Vue.config.devtools = true;

const root = new Vue({
	el: "#root",
	data: {
		user,
		contacts,
		currentIndex: 0,
		newMessage: {
			date: "ora",
			message: "",
			status: "sent",
		},
		newMessageText: "",
	},
	methods: {
		isActive(index) {
			return this.currentIndex === index ? "active" : "";
		},
		setCurrentIndex(index) {
			this.currentIndex = index;
		},
		sendMessage() {
			console.log(this.newMessage.message);
			this.newMessage.message = this.newMessageText;
			this.contacts[this.currentIndex].messages.push(this.newMessage);
			this.newMessageText = "";
			this.newMessage = {
				date: "ora",
				message: "",
				status: "sent",
			};
		},
	},
});
