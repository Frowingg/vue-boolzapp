var root = new Vue({
    el: '#root',
    data: {
		myClass: '',
		letterToSearch: '',
		newMessageText: '',
		currentElement: 0,
		contacts: [
			{
				name: 'Michele',
				avatar: '_1',
				visible: true,
				messages: [
					{
						date: '10/01/2020 15:30:55',
						text: 'Hai portato a spasso il cane?',
						status: 'sent'
					},
					{
						date: '10/01/2020 15:50:00',
						text: 'Ricordati di dargli da mangiare',
						status: 'sent'
					},
					{
						date: '10/01/2020 16:15:22',
						text: 'Tutto fatto!',
						status: 'received'
					}
				],
			},
			{
				name: 'Fabio',
				avatar: '_2',
				visible: true,
				messages: [
					{
						date: '20/03/2020 16:30:00',
						text: 'Ciao come stai?',
						status: 'sent'
					},
					{
						date: '20/03/2020 16:30:55',
						text: 'Bene grazie! Stasera ci vediamo?',
						status: 'received'
					},
					{
						date: '20/03/2020 16:35:00',
						text: 'Mi piacerebbe ma devo andare a fare la spesa.',
						status: 'sent'
					}
				],
			},
			{
				name: 'Samuele',
				avatar: '_3',
				visible: true,
				messages: [
					{
						date: '28/03/2020 10:10:40',
						text: 'La Marianna va in campagna',
						status: 'received'
					},
					{
						date: '28/03/2020 10:20:10',
						text: 'Sicuro di non aver sbagliato chat?',
						status: 'sent'
					},
					{
						date: '28/03/2020 16:15:22',
						text: 'Ah scusa!',
						status: 'received'
					}
				],
			},
			{
				name: 'Luisa',
				avatar: '_4',
				visible: true,
				messages: [
					{
						date: '10/01/2020 15:30:55',
						text: 'Lo sai che ha aperto una nuova pizzeria?',
						status: 'sent'
					},
					{
						date: '10/01/2020 15:50:00',
						text: 'Si, ma preferirei andare al cinema',
						status: 'received'
					}
				],
			},
		]
		
        },
		methods: {
			selectThisChat(index) {
				this.currentElement = index;
				this.myClass2 = 'selected-contact';
			},
			sendMessage(text, index) {
				newDate = dayjs().format('DD/MM/YYYY HH:mm:ss');
				newMessage = {
					date: newDate,
					text: text,
					status: 'sent'
				};
				this.contacts[index].messages.push(newMessage);
				this.newMessageText = '';
				setTimeout(() => {
					this.answareBack(index);
				  }, 1000);
			},
			answareBack(index) {
				newDate = dayjs().format('DD/MM/YYYY HH:mm:ss');
				newMessage = {
					date: newDate,
					text: 'ok',
					status: 'received'
				}
				this.contacts[index].messages.push(newMessage);
			},
			searchContacts() {
				const letterToSearchLower = this.letterToSearch.toLowerCase();
				this.contacts.forEach((element) => {
					const contactNameLower = element.name.toLowerCase();
					if(contactNameLower.includes(letterToSearchLower)) {
						element.visible = true;
					} else {
						element.visible = false;
					};
			});
            },
			showOptions() {
				this.myClass = 'show'
			},
			hideOptions() {
				this.myClass = ''
			},
			deledeThisMessage(index, currentElement) {
				this.contacts[currentElement].messages.splice(index, 1);
			}
		}
});