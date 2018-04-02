// Empty JSON
var estudiantes = []

// Function to create new registration
function Student(code, name, note) {
  this.code = code;
  this.name = name;
  this.note = note;
}

// Function to add the new registration to JSON and then to the table
function addStudent() {
  // Assing values captured in form
  var code = document.getElementById("code").value;
  var name = document.getElementById("name").value;
  var note = parseInt(document.getElementById("note").value);
  // Validate note is a number
  if (isNaN(note)){
    alert("La nota debe ser un número");
    return;
  }
  else {
    // Here is where the data goes into the JSON
    var newStudent = new Student(code, name, note);
    if(jsonObj(newStudent)==false){
      return;
    }

    // Retreive table
    var table = document.getElementById("table");
    // Assgn rows
    var lastRow = table.rows.length;
    var newRow = table.insertRow(lastRow);
    // Add cells
    var cell0 = newRow.insertCell(0);
    var cell1 = newRow.insertCell(1);
    var cell2 = newRow.insertCell(2);
    // Add values to cells
    cell0.innerHTML = newStudent.code;
    cell1.innerHTML = newStudent.name;
    cell2.innerHTML = newStudent.note;
    // Clear values in form
    document.getElementById("code").value = "";
    document.getElementById("name").value = "";
    document.getElementById("note").value = "";
  }
}

// Validate JSON data after input from form
function jsonObj(json){
  for (var i=0; i<estudiantes.length; i++){
    if (estudiantes[i].code == json.code){
      alert("No puede haber dos estudiantes con el mismo código");
      return false;
    }
  }
  estudiantes[estudiantes.length] = json;
  return true;
}

// Function to calculate average from note inputs
function btn2() {
  var nmbrs = 0;
  for(var i=0;i<estudiantes.length;i++){
    nmbrs += Number(estudiantes[i].note);
  }
  alert("El promedio de notas es: " + (nmbrs / estudiantes.length));
}

// Function to retreive highest note from inputs
function btn3() {
  var max = 0;
  for(var i=0;i<estudiantes.length;i++){
    var nmbr = Number(estudiantes[i].note);
    if(nmbr > max){
      max = nmbr;
    }
  }
  alert("La nota más alta es: " + max);
}

// Function to retreive lowest note from inputs
function btn4() {
  var min = Infinity;
  for(var i=0;i<estudiantes.length;i++){
    var nmbr = Number(estudiantes[i].note);
    if(nmbr < min){
      min = nmbr;
    }
  }
  alert("La nota más baja es: " + min);
}


// Event listeners assigned to buttons in HTML
document.getElementById("button1").addEventListener("click", addStudent);
document.getElementById("button2").addEventListener("click", btn2);
document.getElementById("button3").addEventListener("click", btn3);
document.getElementById("button4").addEventListener("click", btn4);
