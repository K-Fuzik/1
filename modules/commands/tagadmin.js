module.exports.config = {
name: "tagadmin",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Fuzik",
	description: "tagadmin",
	commandCategory: "1",
	usages: "tag nó chửi đấy",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
        var reply = ["đang game tag cc","kiếm nó làm chi?","nhớ nó àk"];
        var replyrand = reply[Math.floor(Math.random() * reply.length)];
        var mention = Object.keys(event.mentions)[0]
	if (mention == global.config.ADMINBOT) {
		var msg = {
				body: replyrand
			}
			return api.sendMessage(msg, event.threadID, event.messageID);
		}
	}
module.exports.run = function({ api, event, client }) {

}