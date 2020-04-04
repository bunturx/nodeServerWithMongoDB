const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/mydatabase');

const Students = mongoose.model('Students',
  { 
      name: String, 
      surname: String, 
      year: Number 
  }
);

// Student creation.
function createStudent(name, surname, year) {
  let std = { 
    name: name, surname: surname, year: year }
  const aToSave = new Students(std);
  console.log("Student Added");
  aToSave.save();
}

// Obtain all Students
function getAllStudents() {
    Students.find()
        .then((resultSet) => console.log(resultSet));
}

// Obtain one student
function getStudent(name) {
  Students.find({ name: name })
    .then((resultSet) => console.log(resultSet));
}

// Modify one student
function updateStudent(student, data) {
  Students.findOneAndUpdate(
    { name: student.name }, { surname: data }, { new: true }, function (err, resultSet) {
      console.log("Modified student");
      console.log(resultSet)
    });
}

// Delete one student
function deleteStudent(name) {
  Students.findOneAndDelete({ name: name }, function (err, resultSet) {
    console.log("Deleted Student");
    console.log(resultSet);
  })
}

// Try Comment & Uncomment this lines
createStudent("Claudio", "Rodriguez", 23);
createStudent("Daniel", "Perquer", 23);
createStudent("Franco", "Islodan", 23);
getStudent("Daniel");
// updateStudent({ name: "Daniel"}, "Perquerovich");
// getStudent("Daniel");
// deleteStudent("Claudio");
// getAllStudents();
