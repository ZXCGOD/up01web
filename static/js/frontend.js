var intervalPointer;

function router(state) {
var route = document.location.hash.replace('#', '');
switch(route){
	case 'login':
	document.getElementById("app").innerHTML = 'Здесь будет форма логина';
	break;
	case 'list':
	document.getElementById("app").innerHTML = 'Здесь будет форма списка';
	break;
	default:
	document.getElementById("app").innerHTML = 'Здесь будет форма списка';
	break;
}
clearInterval(intervalPointer);
intervalPointer = setInterval(function() {
	var newRoute;
	if(route === 'login'){
		newRoute = 'list';
			}	else if(route === 'list')  {
				newRoute = 'login';
			} else {
				newRoute= 'list'
			}
			document.location.hash = `#${newRoute}`;
}, 1000);
}

window.addEventListener('popstate', router);
window.addEventListener('load', router);



