////CONFIG////

var link = "https://web.libretro.com/"; // link to app webpage
var id = "Retroarch2-CW-IFrame"; // a UNIQUE id to identify the frame for your app
var title = "RetroArch2"; // title shown in navbar
var uninstallId = "https://redstone-nw.netlify.app/clockwork-app/notepad.js"; // set this to the url location of your script

////SCRIPT////

var ExampleLink = document.createElement("a");
var ExampleIFrame = document.createElement("iframe");

ExampleIFrame.style = "display: none;";
ExampleIFrame.className = "app";
ExampleIFrame.class = id; 
ExampleIFrame.src = "about:blank";

ExampleLink.href = "javascript:openapp('"+ ExampleIFrame.id +"','" + link + "');" ;
ExampleLink.innerHTML = title; 
ExampleLink.uninstallId = uninstallId;
ExampleIFrame.class = id; 
ExampleLink.addEventListener('dblclick', (e) => {
  uninstallApp(uninstallId, id);
});

document.getElementById("navbar").appendChild(ExampleLink);
document.getElementById("main").appendChild(ExampleIFrame);