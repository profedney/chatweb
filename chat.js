function sendMessage() {
	var message = document.getElementById("message").value;
	document.getElementById("chat").innerHTML += "<p>You: " + message + "</p>";
	document.getElementById("message").value = "";
}

var sendButton = document.getElementById("sendButton");
sendButton.addEventListener("click", sendMessage);
