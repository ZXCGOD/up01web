async function login(){
	try {
		document.getElementById("app").innerHTML = await new Promise(function(resolve){
			fetch(`/views/view-login.html`).then(function(response){
				if(response.ok){
					response.text().then(function(data){
						resolve(data);
					});
				} else {
					resolve('ERROR DETECTED');
				}
			}).catch(function(error){
				resolve('ERROR DETECTED ' + error);
			});
		});
	} catch(e){
		//
	}
}

async function list() {
		try {
		document.getElementById("app").innerHTML = await new Promise(function(resolve){
			fetch(`/views/view-list.html`).then(function(response){
				if(response.ok){
					response.text().then(function(data){
						resolve(data);
					});
				} else {
					resolve('ERROR DETECTED');
				}
			}).catch(function(error){
				resolve('ERROR DETECTED ' + error);
			});
		});
	} catch(e){
		//
	}
downloadDataFromServer();
}

async function help() {
	try {
		document.getElementById("app").innerHTML = await new Promise(function(resolve){
			fetch(`/views/view-help.html`).then(function(response){
				if(response.ok){
					response.text().then(function(data){
						resolve(data);
					});
				} else {
					resolve('ERROR DETECTED');
				}
			}).catch(function(error){
				resolve('ERROR DETECTED ' + error);
			});
		});
	} catch(e){
		//
	}
}


function refresh(inputData){
	var listTableBody = document.getElementById('list-table-body');
	listTableBody.innerHTML = '';

	inputData.forEach(function(oneElement){
		listTableBody.innerHTML += `<tr>
				<td class="c1"><input type="checkbox" name="chb-${oneElement.id}" title="выберите для действия"></td>
				<td>${oneElement.title}</td>
				<td class="c3"><button>Скачать</button></td>
			</tr>`;
	});
}

function downloadDataFromServer(){
	var listTableBody = document.getElementById('list-table-body');
	listTableBody.innerHTML = `<tr><td colspan=3>Please wait... Loading....</td></tr>`;
	fetch(`/api/get-list`).then(function(response){
		if(response.ok){
			response.json().then(function(data){
				refresh(data);
			});
		} else {
			var notOkResponse = `${response.status}  ${response.statusText}`
			console.log("Ошибка: ",notOkResponse);
			listTableBody.innerHTML = `<tr><td colspan=3><div class="error">${notOkResponse}</div></td></tr>`;
		}
	}).catch(function(error){
			listTableBody.innerHTML = `<tr><td colspan=3><div class="error">${notOkResponse}</div></td></tr>`;
	});
}

