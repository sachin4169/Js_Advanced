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

    constructor(id,name,salary){
        this.id =id;
        this.name = name;
        this.salary = salary;
    }

    // personfun() {
    //     var id = document.getElementById("id").value;
    //     var name = document.getElementById("Name").value;
    //     var sal = document.getElementById("sal").value;

    //     var data = {
    //     Id: `${id}`,
    //     Name: `${name}`,
    //     Sal: `${sal}`,
    //     };
    //     person.push(data); 
    //     console.log(person);
    //     JSON.stringify(person);
    //     // console.log(myJSON)
        
    // }
    display(){
        // var data = JSON.parse(person)
        // console.log(typeof(data))
        // console.log(data)
        // console.log(typeof(person));
        var row =""
        // person.forEach((element) => {
        row += `  <tr>
        <td>${this.id}</td>
        <td>${this.name}</td>
        <td>${this.salary}</td>
        <td class="action">Delete</td>
        </tr>`;
        // });
        document.getElementById("table").innerHTML = table +row+ tfooter;

        document.getElementById("id").value = "";
        document.getElementById("Name").value = "";
        document.getElementById("sal").value = "";
    }
}


function addperson(){
    var id = document.getElementById("id").value;
    var name = document.getElementById("Name").value;
    var sal = document.getElementById("sal").value;
    // e1.personfun();
    let e1 = new employe(id,name, sal);
    console.log(e1)
    e1.display();
}
