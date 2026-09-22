const http = require ("http");
const dateTimeET = require("./src/dateTimeET");

const url = require("url");
//moodul failide haldamiseks
const path = require("path"); 
//const fs = require ("fs");
const fs = require ('fs').promises;
const pageHead = '<!DOCTYPE html>\n<html lang="et">\n<head>\n\t<meta charset="utf-8">\n\t<title>Kelli Rammi, veevbiprogrammeerimine</title>\n</head>\n<body>\n';
const pageBanner = '<img src="veebiprogrammeerimine_2026_ID.png" alt ="">\n';
const pageBody = '\t<h1>Kelli Rammi, veebiprogrammeerimine</h1>\n\t <p>See leht on loodud veebiprogrammeerimise kursusel <a href="https://www.tlu.ee">Tallinna Ülikoolis</a> ning ei sislda tأµsiseltvأµetavat sisu!</p>\n\t<p>Esialgu tutvusime lihtsalt HTML keelega, peatselt programmeerime.</p>\n\t<hr>';
const pageFoot = '\n</body>\n</html>';

http.createServer(async function(req, res){
	console.log("Päring: " + req.url);
	let currentURL = url.parse(req.url, true);
	console.log ("Parsituna: " + currentURL.pathname);
	//console.log ("Parsituna: " + currentURL.host);
	
	if(currentURL.pathname === "/"){
		res.writeHead(200, {"Content-type": "text/html"});
		//res.write("Veebiserver käivitus!");
		res.write(pageHead);
		res.write(pageBanner);
		res.write(pageBody);
		res.write("<p>Nädalapäev: " + dateTimeET.week() + "</p>");
		res.write("<p>Kuupäev: " + dateTimeET.date(1) + "</p>");
		res.write("<p>Kellaaeg: " + dateTimeET.time() + "</p>");
		res.write(pageFoot);
		return res.end();
	}
	
	else if(currentURL.pathname === "/vanasona"){
	res.writeHead(200, {"Content-type": "text/html"});
		//res.write("Veebiserver käivitus!");
		res.write(pageHead);
		rew.write(pageBanner);
	
        res.write("\t<h1>Tänane Eesti vanasõna</h1>n\t<p>Siin näed tänaseks päevaks loositud vanasõna.</p>\n\t<hr>");		
		res.write(pageFoot);
		return res.end();
	}
	
else if (currentURL.pathname === "/veebiprogrammeerimine_2026_ID.png"){
	//virtuaalne failitee
	let bannerPath = path.join (__dirname, "pic", currentURL.pathname );
	try {
	const data = await fs.readFile(bannerPath);	
	res.writeHead(200,{"Content-type": "image/png"});
		return res.end(data);
}  catch (err){
	res.writeHead(404, {"Content-type": "text/plain; charset0ut8"});
	return res.end ('Pilti ei leitud');
}
	
	
}).listen(5217);

