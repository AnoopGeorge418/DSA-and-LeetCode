// This is the datastructure
const studentsDatabase = ["Luffy", "Zoro", "Sanji", "Ussop", "Jimbei", "Brook"]

// This is the algorithm
const findStudent = (allStudents, studentName) => {
    for (let i = 0; i < allStudents.length; i ++) {
        if (allStudents[i] === studentName) {
            console.log(`Found the student named - ${studentName}!`)
        }
    }
}

findStudent(studentsDatabase, "Jimbei")
