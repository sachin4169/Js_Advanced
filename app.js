var table = `<table>
<tr>
    <td>Id</td>
    <td>Name</td>
    <td>Total Salary</td>
    <td>Action</td>
</tr>`;
var tfooter = "</table>";
var person = [];
class employe{

    personfun() {
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
        const myJSON = JSON.stringify(person);
        console.log(myJSON)
        
    }
    display(){
        var row =""
        person.forEach((element) => {
        row += `  <tr>
        <td>${element.Id}</td>
        <td>${element.Name}</td>
        <td>${element.Sal}</td>
        <td class="action">Delete</td>
        </tr>`;
        });
        document.getElementById("table").innerHTML = table +row+ tfooter;

        document.getElementById("id").value = "";
        document.getElementById("Name").value = "";
        document.getElementById("sal").value = "";
    }
}
let e1 = new employe();
console.log(e1)

function addperson(){
e1.personfun();
e1.display();
}
