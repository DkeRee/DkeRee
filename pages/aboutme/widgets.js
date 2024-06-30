const widgets = document.getElementsByClassName("socials-widget");
const links = [
    "https://www.youtube.com/channel/UCMSxqPXVnR4ogZLEtFefnZQ",
    "https://www.instagram.com/dakkerware/",
    "https://github.com/DkeRee"
];

for (var i = 0; i < widgets.length; i++) {
    const link = links[i];
    widgets[i].addEventListener("mousedown", () => {
        window.open(link, "_blank");
    });
}