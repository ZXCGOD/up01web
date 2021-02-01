var intervalPointer;

var handlers = {};

handlers['login']=login;
handlers['list']=list;
handlers['help']=help;

function router(state) {
var route = document.location.hash.replace('#', '');

 if ((typeof handlers[route]) === 'function') {
    handlers[route]();
  } else {
    handlers['login']();
  }
}

window.addEventListener('popstate', router);
window.addEventListener('load', router);



