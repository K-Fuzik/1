module.exports.config = {
    name: "pay",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "Fuzik",
    description: "Chuyển tiền cho người khác.",
    commandCategory: "1",
    usages: "[tag]",
    cooldowns: 5,
     };

module.exports.run = async ({ event, api, Currencies, args }) => {
let { threadID, messageID, senderID } = event;
const mention = Object.keys(event.mentions)[0];
let name = event.mentions[mention].split(" ").length
if(!mention) return api.sendMessage('Vui lòng tag người muốn chuyển tiền cho!',threadID,messageID);
else {
	if(!isNaN(args[0+ name])) {
		const coins = parseInt(args[0+ name]);
		let balance = (await Currencies.getData(senderID)).money;
        if (coins <= 0) return api.sendMessage('Số tiền bạn muốn chuyển không hợp lệ',threadID,messageID);
		if (coins > balance) return api.sendMessage('Số tiền bạn muốn chuyển lớn hơn số tiền bạn hiện có!',threadID,messageID);
		else {
        return api.sendMessage({ body: 'Bạn đã chuyển cho ' + event.mentions[mention].replace(/@/g, "") + ` ${args[0+ name]}$`}, threadID, async () => {
            await Currencies.increaseMoney(mention, coins);
                  Currencies.decreaseMoney(senderID, coins)
            }, messageID);
		}
	} else return api.sendMessage('Vui lòng nhập số tiền muốn chuyển',threadID,messageID);
}
}
