const content = document.getElementById("content");
const buttons = document.getElementsByClassName("selector-button");
const sublinks = ["aboutme/aboutme", "pitchle/pitchle", "wanshot/wanshot", "trinket/trinket", "vongle/vongle", "snerkle/snerkle", "arcadia/arcadia", "boxgle/boxgle", "corcle/corcle"];

//initialize page content to default to About Me
$(content).load("pages/aboutme/aboutme.html");


for (var i = 0; i < buttons.length; i++) {
	const link = sublinks[i];

	buttons[i].addEventListener("mousedown", () => {
		$(content).load(`pages/${link}.html`);
	});
}
