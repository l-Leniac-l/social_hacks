const APPID = 806213829513840;

const CONTAINER = "container";

const PAGEURL = "https://www.facebook.com/ZuarOPalmeirasNaoTemPreco/";

const PAGENAME = "Zuar o Palmeiras, não tem preço";

const HIDECOVER = false;

const SMALLHEADER = true;

(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/pt_BR/sdk.js#xfbml=1&version=v2.3&appId="+APPID;
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

(function(d,win) {

  var container = d.getElementById(CONTAINER);

  var container_width = container.offsetWidth;

  var data = '<div class="fb-page" ' +
  'data-href="'+PAGEURL+'"' +
  ' data-width="' + container_width +
  '" data-tabs="timeline" data-small-header="'+SMALLHEADER+'"'+
  ' data-adapt-container-width="true" data-hide-cover="'+HIDECOVER+'" '+
  ' data-show-facepile="true"><div class="fb-xfbml-parse-ignore">'+
  '<blockquote cite="'+PAGEURL+'"'+
  ' class="fb-xfbml-parse-ignore">'+
  '<a href="'+PAGEURL+'">'+
  PAGENAME+'</a></blockquote></div></div>';

  var writeData = function(){
    container.innerHTML = data;
    FB.XFBML.parse( );
  }

  var events = function(){
    win.addEventListener("load",writeData);
    win.addEventListener("resize",writeData);
  }

  win.interval = interval = setInterval(events,100);

}(document,window));
