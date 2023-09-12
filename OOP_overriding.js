// superClass
class mailService {
	constructor(sender) {
		this.sender = sender;
		this.timeSend = new Date();
	}

	sendMessage(message, receiver) {
		console.log(`${this.sender} sent ${message} to ${receiver} in ${this.timeSend} via mail`);
	}
}

// subClass
class whatsAppService extends mailService {
	// overriding constructor -> menambahkan properti baru di subClass
	constructor(sender, timeSend, isBusiness) {
		super(sender, timeSend); // wajib saat overriding, memanggil method super() berisi properti superClass
		this.isBusiness = isBusiness; // property baru whatsAppService
	}

	checkIsBusiness() {
		console.log(`${this.sender} ${this.timeSend} is business account? ${this.isBusiness}`);
	}

	// overriding method -> mengubah implementasi method warisan dari superClass
	sendMessage(message, receiver) {
		console.log(`${this.sender} sent ${message} to ${receiver} in ${this.timeSend} via whatsapp`);
	}

	// sendMessage(message, receiver) { // method baru whatsAppService
	// 	super.sendMessage(message, receiver); // wajib saat overriding
	// 	console.log("via whatsapp");
	// }

	sendBroadcastMessage(message, receivers) {
		for (const receiver of receivers) {
			this.sendMessage(message, receiver);
		}
	}
}

const mail = new mailService('kise');
mail.sendMessage('pesan', 'xxsee'); // via mail

const whatsapp = new whatsAppService('rizki', null, true);
whatsapp.checkIsBusiness(); // cek constructor overriding

// cek method overriding
whatsapp.sendMessage('halo', 'seki'); 
whatsapp.sendBroadcastMessage('pengumuman', ['andra', 'daniel', 'putra']);