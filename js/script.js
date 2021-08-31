console.log("Vue", Vue);

Vue.config.devtools = true;

const root = new Vue({
	el: "#root",
	data: {
		user,
		contacts,
		currentIndex: 0,
		newMessage: {
			date: dayjs().format("DD/MM/YYYY HH:mm:ss"),
			message: "",
			status: "sent",
		},
		newMessageText: "",
		searchTerm: "",
	},
	methods: {
		isActive(index) {
			return this.currentIndex === index ? "active" : "";
		},
		setCurrentIndex(index) {
			this.currentIndex = index;
		},
		sendMessage() {
			if (this.newMessageText !== "") {
				this.newMessage.message = this.newMessageText;
				this.contacts[this.currentIndex].messages.push(this.newMessage);
				this.newMessageText = "";
				this.newMessage = {
					date: "ora",
					date: dayjs().format("DD/MM/YYYY HH:mm:ss"),
					status: "sent",
				};
			}
			setTimeout(() => {
				const answerMessage = {
					status: "received",
					message: "ok",
					date: dayjs().format("DD/MM/YYYY HH:mm:ss"),
				};
				this.contacts[this.currentIndex].messages.push(answerMessage);
			}, 1000);
		},
		getLastSeen() {
			const messages = this.contacts[this.currentIndex].messages;
			const lastMessage = messages[messages.length - 1];
			return lastMessage.date;
		},
		getLastText(index) {
			const messages = this.contacts[index].messages;
			const lastMessage = messages[messages.length - 1];
			return lastMessage.message;
		},
		getLastSeenConv(index) {
			const messages = this.contacts[index].messages;
			const lastMessage = messages[messages.length - 1];
			return lastMessage.date;
		},
		displayContact(contact) {
			console.log(contact);
			if (!this.searchTerm.trim()) return true;
			const filter = this.searchTerm.trim().toLowerCase();
			contact = contact.toLowerCase();
			return contact.includes(filter);
		},
		deleteMessage(index) {
			console.log(index);
			this.contacts[this.currentIndex].messages.splice(index, 1);
		},
	},
});
