const links = [
  ["https://insert-comment-about-daniel.glitch.me/home.html","insert-comment-about-daniel"],
  ["https://sneaky-catkin-abrosaurus.glitch.me/home.html","sneaky-catkin-abrosaurus"]
];
function run(cus,cont) {
  var rand = links[Math.floor(Math.random()*links.length)];
  var ttl = rand[1];
  var rand = rand[0];
  if (cus == true) {
    var rand = cont;
  }
  var html = "<iframe id='frame' src='" + rand + "' width='100%' frameborder='0' style='height:calc(100% - 11px); top:0; left:0; bottom:0; right:0; margin:0; width:100%; border:none; padding:0; overflow:hidden; z-index:999999;'> Your browser doesn't support iframes. Stop using IE you grandma.</iframe><br><span style='font-size:11px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;'><a href='javascript:var script = document.createElement(`script`);script.onload = function () {    run();};script.src = `https://redstone-nw.netlify.app/assets/proxy.js`;document.head.appendChild(script);'>New Instance</a> - <a href='javascript:cins()'>Custom Instance</a> - Currently on "+ ttl +" - <a href='https://gitlab.com/lukasexists/redstone-nw.netlify.app/-/issues/new'>Problems?</a></span><script src='/hub/script.js'></script>";
  if (cont == true) {
    document.body.style = "background-color: black; color:#888;";
    document.body.innerHTML = html;
    document.getElementById('frame').height = "800"
  } else {
    var myWindow = window.open("",Math.random.toString(),"width=400,height=400");
    myWindow.document.body.style = "background-color: black; color:#888;";
    myWindow.document.body.innerHTML = html;
  }
}

function cins() {
  var rand = prompt("Type the url of your custom instance. (URL DOES NOT SAVE BETWEEN SESSIONS)")
  run(true,[rand,rand])
}