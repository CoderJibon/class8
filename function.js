//Create a complete fifth class students array and object data structure and find their result with gpa, grade, cgpa and final result



//psc result Function
let pscResult = (name, roll, studentClass, subject) => {
    
    //gpaCal function
    const gpaCall = (mark) => {
        let GPA = 0;
    
        if (mark >= 0 && mark <= 32) { 
            GPA = 0 ;
        } else if (mark >= 33 && mark <= 39) {
            GPA = 1.0;
        } else if (mark >= 40 && mark <= 49) {
            GPA = 2.0;
        } else if (mark >= 50 && mark <= 59) {
            GPA = 3.0;
        } else if (mark >= 60 && mark <= 69) {
            GPA = 3.5;
        } else if (mark >= 70 && mark <= 79) {
            GPA = 4;
        } else if (mark >= 80 && mark <= 100) {
            GPA = 5;
        } else {
            GPA = "invalid result";
        }

    return GPA;
    }

    //gradeCal function
    function gradeCal(mark) {

    let GRADE = '';

            if (mark >= 0 && mark <= 32) { 
                GRADE = 'F' ;
            } else if (mark >= 33 && mark <= 39) {
                GRADE = "D";
            } else if (mark >= 40 && mark <= 49) {
                GRADE = "c";
            } else if (mark >= 50 && mark <= 59) {
                GRADE = "B";
            } else if (mark >= 60 && mark <= 69) {
                GRADE = "A-";
            } else if (mark >= 70 && mark <= 79) {
                GRADE = "A";
            } else if (mark >= 80 && mark <= 100) {
                GRADE = "A+";
            } else {
                GRADE = "invalid result"; 
            }

    return GRADE;
    
    }

    // get Result and CGPA
    
    let result = '';
    let CGPA = 0;

    if (gpaCall(subject.bn) == 0 || gpaCall(subject.Eng) == 0 || gpaCall(subject.Math) == 0 || gpaCall(subject.ElSci) == 0 || gpaCall(subject.Islam) == 0) {

        result  = "Fail";
        CGPA    = 0.0;

    } else {

        let point = gpaCall(subject.bn) + gpaCall(subject.Eng) + gpaCall(subject.Math) + gpaCall(subject.ElSci) + gpaCall(subject.Islam);

        result = "pass";
        CGPA = point / 5;
    }
    

    //psc
    console.log(`
        Student Name : ${name}
        Student Roll : ${roll}
        student Class : ${studentClass}
        ===========================================
        subject             Marks -> GPA -> GRADE
        Bangla -----------> ${subject.bn} ----> ${gpaCall(subject.bn)} ----> ${gradeCal(subject.bn)}
        English ----------> ${subject.Eng} ----> ${gpaCall(subject.Eng)} ----> ${gradeCal(subject.Eng)}
        Mathematics ------> ${subject.Math} ----> ${gpaCall(subject.Math)} ----> ${gradeCal(subject.Math)}
        ElementaryScience-> ${subject.ElSci} ----> ${gpaCall(subject.ElSci)} ----> ${gradeCal(subject.ElSci)}
        Islam ------------> ${subject.Islam} ----> ${gpaCall(subject.Islam)} ----> ${gradeCal(subject.Islam)}
        --------------------------------------------
                                        CGPA    : ${CGPA}
                                        Result  : ${result}
     `);
}



// student loop
studentData.map((data) => {
    pscResult(data.studentName,data.roll,data.class,data.subject);
});





