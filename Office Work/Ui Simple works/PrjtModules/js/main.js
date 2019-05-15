function addRow() {
   /* var rows = "";*/
    var firstname =document.getElementById("fname").value;
    var lastname =document.getElementById("lname").value;
    var age =document.getElementById("age").value;
    var table = document.getElementsByTagName("table")[0];

    var newRow = table.insertRow(1);

    var cel1 = newRow.insertCell(0);
    var cel2 = newRow.insertCell(1);
    var cel3 = newRow.insertCell(2);

    cel1.innerHTML= firstname;
    cel2.innerHTML=lastname;
    cel3.innerHTML=age;

    /*rows += "<tr><td>" + firstname + "</td><td>" + lastname + "</td><td>" + age + "</td><td>";
    $(rows).appendTo("#tab tbody");*/
}