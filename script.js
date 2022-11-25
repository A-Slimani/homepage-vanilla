function gebi(e) {
	return document.getElementById(e);
}

function timeAndDate() {
	const now = new Date();

	const [hour, minute] = [
		now.getHours(),
		now.getMinutes()
	]

	const date = now.toLocaleDateString();
	gebi("time").innerHTML = hour + " : " + minute;
	gebi("date").innerHTML = date

	setInterval(time, 60000);
}

function main(){
	timeAndDate();
}

