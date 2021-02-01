var P1= new Promise(function(resolve,reject) {


	setTimeout(function(argument) {
		reject('3 seconds later...')
	}, 3000);
		setTimeout(function(argument) {
		resolve('5 seconds later...');
	}, 3000);
});


P1.then(function(result){

console.log('P1 is OK', result);

}).catch(function(error){

console.log('P1 is NOT OK', error);

})