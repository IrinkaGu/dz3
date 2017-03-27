const ChatApp = require('./ChatApp');

let webinarChat =  new ChatApp('webinar');
let facebookChat = new ChatApp('=========facebook');
let vkChat =       new ChatApp('---------vk');

let chatOnMessage = (message) => {
  console.log(message);
};

const prepareAnswer = () => {
    console.log('Готовлюсь к ответу');
}

webinarChat.on('message', chatOnMessage);
facebookChat.on('message', chatOnMessage);
vkChat.on('message', chatOnMessage);

webinarChat.on('message', prepareAnswer);
vkChat.setMaxListeners(2);
vkChat.on('message', prepareAnswer);
vkChat.once('close', () => console.log('Чат вконтакте закрылся :('));
vkChat.close();


// Закрыть вконтакте
setTimeout( ()=> {
	console.log('Закрываю вконтакте...');
	vkChat.removeListener('message', chatOnMessage);
	vkChat.removeListener('message', prepareAnswer);
}, 10000 );

// Закрыть фейсбук
setTimeout( ()=> {
  console.log('Закрываю фейсбук, все внимание — вебинару!');
	facebookChat.removeListener('message', chatOnMessage);
}, 15000 );

setTimeout( ()=> {
  console.log('Закрываю вебинар, все внимание — никому!');
	webinarChat.removeListener('message', chatOnMessage);
	webinarChat.removeListener('message', prepareAnswer);
}, 30000 );