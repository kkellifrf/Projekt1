const http = require ("http");
const dateTimeET = require("./src/dateTimeET");


const pageHead = '<!DOCTYPE html>\n<html lang="et">\n<head>\n\t<meta charset="utf-8">\n\t<title>Kelli Rammi, veevbiprogrammeerimine</title>\n</head>\n<body>\n';
const pageBody = '\t<h1>Kelli Rammi, veebiprogrammeerimine</h1>\n\t <p>See leht on loodud veebiprogrammeerimise kursusel <a href="https://www.tlu.ee">Tallinna Ülikoolis</a> ning ei sislda tأµsiseltvأµetavat sisu!</p>\n\t<p>Esialgu tutvusime lihtsalt HTML keelega, peatselt programmeerime.</p>\n\t<hr>';
const pageFoot = '\n</body>\n</html>';

http.createServer(function(req, res){
	res.writeHead(200, {"Content-type": "text/html"});
	//res.write("Veebiserver käivitus!");
	res.write(pageHead);
	res.write(pageBody);
	res.write("<p>Nädalapäev: " + dateTimeET.week() + "</p>");
	res.write("<p>Kuupäev: " + dateTimeET.date(1) + "</p>");
	res.write("<p>Kellaaeg: " + dateTimeET.time() + "</p>");
	res.write(pageFoot);
	return res.end();
}).listen(5217);

