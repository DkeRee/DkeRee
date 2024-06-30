const content = document.getElementById("content");
const buttons = document.getElementsByClassName("selector-button");
const sublinks = ["aboutme/aboutme", "wanshot/wanshot", "trinket/trinket"];

//initialize page content to default to About Me
$(content).load("pages/aboutme/aboutme.html");


for (var i = 0; i < 3; i++) {
	const link = sublinks[i];

	buttons[i].addEventListener("mousedown", () => {
		$(content).load(`pages/${link}.html`);
	});
}
