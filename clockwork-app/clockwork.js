var theme = localStorage.getItem("theme");
if (theme != null) {
  addTheme(theme);
}

var apps = JSON.parse(localStorage.getItem("apps"));
console.log(apps);
if (apps == null) {
  localStorage.setItem("apps", JSON.stringify(new Array()));
  var apps = new Array();
}
console.log(apps);
var arrayLength = apps.length;
for (var i = 0; i < arrayLength; i++) {
  addApp(apps[i]);
}

function scrollbarVisible(element) {
  return element.scrollHeight > element.clientHeight;
}

function uninstallApp(unid, del) {
  var apps = JSON.parse(localStorage.getItem("apps"));
  if (confirm("Are you sure you want to delete this app? You'll lose all your saved data!") == true) {
    var filtered = apps.filter(function(value, index, arr){ 
      return value != unid;
    });
    localStorage.setItem("apps", JSON.stringify(filtered));
    var apps = filtered;

    var arrayLength = del.length;
    for (var i = 0; i < arrayLength; i++) {
      del[i].remove();
    }
  }
}

function openapp(appname, appurl) {
  var welcome = document.getElementById('welcome');
  if (welcome != null) {
    welcome.remove();
  } 
  var main = document.getElementById('main');
  for (const child of main.children) {
    child.style = "display: none;";
  }
  var appname = document.getElementById(appname);
  if (appname != null) {
    if (appname.nodeName == "IFRAME") {
      if (appname.src == "about:blank") {
        appname.src = appurl;
      }
    } 
    if (appname.id == "flashgame") {
      appname.remove();
      var appname = document.createElement("embed");
      appname.id = "flashgame";
      appname.class = "app";
      appname.src = appurl;
      document.getElementById("main").appendChild(appname);
    }

    appname.style = "display: block;";
  } else {
    alert("// ERROR \nApp of name does not exist");
  }
}
//https://sub64.netlify.app/clockwork-beta/clock2.css

function addApp(scr) {
  var scriptelem = document.createElement("script");
  scriptelem.src = scr;
  document.body.appendChild(scriptelem);
}

function installApp(appscript) {
  if (appscript == null) {
    var appscript = prompt("Enter the URL of your custom script.");
  }
  if (apps.includes(appscript) == true) {
    alert("App is already installed!");
  } else {
    apps.push(appscript);
    addApp(appscript);
    localStorage.setItem("apps", JSON.stringify(apps));
    console.log(apps);
  }
}

function addTheme(ss) {
  if (ss == null) {
    var ss = prompt("Enter the link to the stylesheet.css file.");
  }
  var head = document.head;
  var link = document.createElement("link");

  link.type = "text/css";
  link.rel = "stylesheet";
  link.href = ss;

  head.appendChild(link);
  
  var theme = ss;
  localStorage.setItem("theme", theme);
}

function startLoop() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('extra').innerHTML =  h + ":" + m + ":" + s;
  
  setTimeout(startLoop, 500);
}

function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}

function unhide() {
  document.body.style = "display:block;";
  document.getElementById("loadingtxt").remove();
}

function factoryReset() {
  if (confirm("Are you ABSOLUTELY SURE you want to factory reset Clockwork?\nAll your themes and apps (and some data) will be gone!")) {
    localStorage.setItem("theme", null);
    localStorage.setItem("apps", null);
    document.location.reload();
  }
}

setTimeout(unhide, 1500);