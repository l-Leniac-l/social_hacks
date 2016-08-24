(function(d, win){
  
  var doResize = function (){
    var iframes = d.querySelectorAll('iframe[src*="embed.spotify.com"]');
    for(var i = 0; i < iframes.length; i++){
    var wid = iframes[i].parentNode.offsetWidth;
      iframes[i].style.width = wid+'px';
    }
  }
  
  var events = function(){
    win.addEventListener('load',doResize);
   win.addEventListener('resize',doResize);
  }
  
  win.interval = interval = setInterval(events,100);
}(document, window))
