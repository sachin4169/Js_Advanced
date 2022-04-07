var table = `<table>
<tr>
    <td>Id</td>
    <td>Name</td>
    <td>Total Salary</td>
    <td>Updated Salary</td>
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
        // JSON.stringify(person);
        // console.log(myJSON)
        
    }
    display(){
      
        try {
            var row =""
            person.forEach((element) => {
            var val =element.Sal*1.10
            row += `  <tr>
            <td>${element.Id}</td>
            <td>${element.Name}</td>
            <td>${element.Sal}</td>
            <td>${val}</td>
            </tr>`;
            });
            document.getElementById("table").innerHTML = table +row+ tfooter;

            document.getElementById("id").value = "";
            document.getElementById("Name").value = "";
            document.getElementById("sal").value = "";
        } catch (error) {
            console.log(error);
        }
       
    }
}


function addperson(){
    let e1 = new employe();
    console.log(e1)
    e1.personfun();
    e1.display();
}
