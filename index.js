const Discord = require('discord.js');
const bot = new Discord.Client();
const PREFIX = '!';
const {Attachment} = require('discord.js');

const cheerio = require ('cheerio');

const request = require('request');


const token = 'NjIyMzc1ODkxMzk3MjQ2OTc2.XXzvLw.JsjE63e8zKJbmFu8dv4K7KgV0bg';



var version = '1.3';



bot.once('ready', () => {
	console.log('Ready!');
	bot.user.setActivity('The Safari Inside ZooCord', { type: 'WATCHING' });

		
	});

	
	
	
	
	
	
	bot.on('message', message => {
 
		let args = message.content.substring(PREFIX.length).split(" ");
	 
		switch (args[0]) {
			case 'image':
			image(message);
	 
			break;
		}
	 
	});
	 
	function image(message){
	 
		var options = {
			url: "http://results.dogpile.com/serp?qc=images&q=" + "Gota.io",
			method: "GET",
			headers: {
				"Accept": "text/html",
				"User-Agent": "Chrome"
			}
		};
	 
	 
	 
	 
	 
		request(options, function(error, response, responseBody) {
			if (error) {
				return;
			}
	 
	 
			$ = cheerio.load(responseBody);
	 
	 
			var links = $(".image a.link");
	 
			var urls = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"));
		   
			console.log(urls);
	 
			if (!urls.length) {
			   
				return;
			}
	 
			// Send result
			message.channel.send( urls[Math.floor(Math.random() * urls.length)]);
		});
	 
	 
	 
	 
	 
	 
	 
	 
	}
	 
	bot.login(token);

bot.login(token);

