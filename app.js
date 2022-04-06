var table = `<table>
<tr>
    <td>Product Id</td>
    <td>Product Name</td>
    <td>Product Price</td>
</tr>`;
var tfooter = "</table>";
var person = [];
function addproduct() {
var id = document.getElementById("id").value;
var name = document.getElementById("Name").value;
var sal = document.getElementById("sal").value;

var data = {
Id: `${id}`,
Name: `${name}`,
Sal: `${sal}`,
};
person.push(data);
console.log(person);
display();
}

function display(){
var row =""
person.forEach((element) => {
row += `  <tr>
    <td>${element.Id}</td>
    <td>${element.Name}</td>
    <td>${element.Sal}</td>
</tr>`;
});
document.getElementById("table").innerHTML = table +row+ tfooter;

document.getElementById("id").value = "";
document.getElementById("Name").value = "";
document.getElementById("sal").value = "";
}


