function start() {

  ////CONFIG////

  var link = "https://holyubofficial.net/uv/service/hvtrs8%2F-wuw%2C4ahcn%2Copg-/"; // link to app webpage
  var id = "4chan-CW-IFrame"; // a UNIQUE id to identify the frame for your app
  var title = "4chan"; // title shown in navbar
  var uninstallId = "https://redstone-nw.netlify.app/clockwork-app/4chan.js"; // set this to the url location of your script
  
  ////SCRIPT////
  
  var ExampleLink = document.createElement("a");
  var ExampleIFrame = document.createElement("iframe");
  
  ExampleIFrame.style = "display: none;";
  ExampleIFrame.className = "app "+id;
  ExampleIFrame.id = id;
  ExampleIFrame.src = "about:blank";
  
  ExampleLink.href = "javascript:openapp('"+ ExampleIFrame.id +"','" + link + "');" ;
  ExampleLink.innerHTML = title; 
  ExampleLink.uninstallId = uninstallId;
  ExampleLink.className = id; 
  ExampleLink.addEventListener('dblclick', (e) => {
    uninstallApp(ExampleLink.uninstallId, ExampleLink.className);
  });
  
  document.getElementById("navbar").appendChild(ExampleLink);
  document.getElementById("main").appendChild(ExampleIFrame);
}

start();