module.exports.config = {
	name: "restart",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "Fuzik",
	description: "Khởi Động Lại Bot.",
	commandCategory: "1",
	cooldowns: 0
        };
module.exports.run = ({event, api}) =>api.sendMessage("Chờ tao chút chíu để khởi động lại...",event.threadID, () =>process.exit(1))
