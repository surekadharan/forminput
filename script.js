var selectedRow = null

function onFormSubmit(e) {
        var formData = readFormData();
        if (selectedRow == null){
            insertNewRecord(formData);
		}
        else{
            updateRecord(formData);
		}
        resetForm();    
}


function readFormData() {
    var formData = {};
    formData["firstname"] = document.getElementById("firstname").value;
    formData["lastname"] = document.getElementById("lastname").value;
    formData["address"] = document.getElementById("address").value;
    formData["pincode"] = document.getElementById("pincode").value;
    formData["gender"] = document.getElementById("gender").value;
    formData["food"] = document.getElementById("food").value;
    formData["state"] = document.getElementById("state").value;
    formData["country"] = document.getElementById("country").value;
    return formData;
}


function insertNewRecord(data) {
    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
		cell1.innerHTML = data.firstname;
    cell2 = newRow.insertCell(1);
		cell2.innerHTML = data.lastname;
    cell3 = newRow.insertCell(2);
		cell3.innerHTML = data.address;
    cell4 = newRow.insertCell(3);
		cell4.innerHTML = data.pincode;
        cell5 = newRow.insertCell(4);
		cell5.innerHTML = data.gender;
        cell6 = newRow.insertCell(5);
		cell6.innerHTML = data.food;
        cell7 = newRow.insertCell(6);
		cell7.innerHTML = data.state;
        cell8 = newRow.insertCell(7);
		cell8.innerHTML = data.country;
}