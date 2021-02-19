//w skrypcie zastosowalem dwie klasy pierwszą Helper aby spełnić wymogi projektu, druga zas sluzy tylko do uzyskiwania
//ladnego opisu do wyswietlenia na stronie i używa Helper

var student1=
{
    "first_name": "Jan",
    "last_name": "Kowalski",
    "birth_date": "29 AUG 1993",
    "year_of_study": "2",
    "number_of_album": "001",
    "courses": {
        "2013": {
            "AlgorithmsI": {
                "grades": {
                    "exercices": [
                        2,
                        4
                    ],
                    "lecture": [
                        2,
                        5
                    ]
                }
            },
            "BasicPhysicsI": {
                "grades": {
                    "exercices": [
                        4
                    ],
                    "lecture": [
                        5
                    ]
                }
            },
            "ProgrammingI": {
                "grades": {
                    "exercices": [
                        4.5
                    ],
                    "lecture": [
                        2,
                        3.5
                    ]
                }
            }
        },
        "2014": {
            "ProgrammingII": {
                "grades": {
                    "exercices": [
                        5
                    ],
                    "lecture": [
                        5
                    ]
                }
            },
            "BasicPhysicsII": {
                "grades": {
                    "exercices": [
                        5
                    ],
                    "lecture": [
                        5
                    ]
                }
            },
            "AlgorithmsII": {
                "grades": {
                    "exercices": [
                        5
                    ],
                    "lecture": [
                        5
                    ]
                }
            }
        }
    }
};
var student2=
{
    "first_name": "Gal",
    "last_name": "Anonim",
    "birth_date": "29 AUG 1999",
    "year_of_study": "2",
    "number_of_album": "002",
    "courses": {
        "2013": {
            "AlgorithmsI": {
                "grades": {
                    "exercices": [
                        2,
                        4
                    ],
                    "lecture": [
                        2,
                        5
                    ]
                }
            },
            "BasicPhysicsI": {
                "grades": {
                    "exercices": [
                        4
                    ],
                    "lecture": [
                        3
                    ]
                }
            },
            "ProgrammingI": {
                "grades": {
                    "exercices": [
                        4.5
                    ],
                    "lecture": [
                        2,
                        3.5
                    ]
                }
            }
        },
        "2014": {
            "ProgrammingII": {
                "grades": {
                    "exercices": [
                        3
                    ],
                    "lecture": [
                        3
                    ]
                }
            },
            "BasicPhysicsII": {
                "grades": {
                    "exercices": [
                        3
                    ],
                    "lecture": [
                        3
                    ]
                }
            },
            "AlgorithmsII": {
                "grades": {
                    "exercices": [
                        3
                    ],
                    "lecture": [
                        3
                    ]
                }
            }
        }
    }
};
var student3=
{
    "first_name": "Wincenty",
    "last_name": "Kadłubek",
    "birth_date": "29 AUG 1996",
    "year_of_study": "2",
    "number_of_album": "003",
    "courses": {
        "2013": {
            "AlgorithmsI": {
                "grades": {
                    "exercices": [
                        5
                    ],
                    "lecture": [
                        5
                    ]
                }
            },
            "BasicPhysicsI": {
                "grades": {
                    "exercices": [
                        5
                    ],
                    "lecture": [
                        5
                    ]
                }
            },
            "ProgrammingI": {
                "grades": {
                    "exercices": [
                        5
                    ],
                    "lecture": [
                        2,
                        5
                    ]
                }
            }
        },
        "2014": {
            "ProgrammingII": {
                "grades": {
                    "exercices": [
                        5
                    ],
                    "lecture": [
                        5
                    ]
                }
            },
            "BasicPhysicsII": {
                "grades": {
                    "exercices": [
                        5
                    ],
                    "lecture": [
                        5
                    ]
                }
            },
            "AlgorithmsII": {
                "grades": {
                    "exercices": [
                        5
                    ],
                    "lecture": [
                        5
                    ]
                }
            }
        }
    }
};

var student4=
{
    "first_name": "Bolesław",
    "last_name": "Chrobry",
    "birth_date": "29 AUG 1996",
    "year_of_study": "2",
    "number_of_album": "003",
    "courses": {
        "2013": {
            "AlgorithmsI": {
                "grades": {
                    "exercices": [
                        5
                    ],
                    "lecture": [
                        5
                    ]
                }
            },
            "BasicPhysicsI": {
                "grades": {
                    "exercices": [
                        5
                    ],
                    "lecture": [
                        5
                    ]
                }
            },
            "ProgrammingI": {
                "grades": {
                    "exercices": [
                        5
                    ],
                    "lecture": [
                        2,
                        5
                    ]
                }
            }
        },

    }
};
var students=[student1, student2, student3, student4]

class Helper{


    writeStudentsNames(studentsListArg){
        var description ="";
        var numberOfStudents1 = studentsListArg.length;

        

        for(var x=0;x<numberOfStudents1;x++){
            description=description.concat(studentsListArg[x].first_name +" "+studentsListArg[x].last_name+ "<br />");

        }
        


        return description
    }




    _compare(a,b) {
        if (a.last_name < b.last_name)
          return -1;
        if (a.last_name > b.last_name)
          return 1;
        return 0;
      }

    getStudentList(studentList){
        return studentList.sort(this._compare)
    }






    getStudentListForCourse(studentList, year, course){
        var newList = []
        var mytxt =""
        for(var i=0;i<studentList.length;i++ ){

            for(var jsonYear in studentList[i].courses) {
                var value = studentList[i].courses[jsonYear];
                mytxt =mytxt.concat(value)
               if(jsonYear==year){
                    for(var subject in value){
                        if(subject==course){
                        var    studentObj={
                                first_name: studentList[i].first_name,
                                last_name: studentList[i].last_name,
                               index: studentList[i].index,
                            }
                            newList.push(studentObj)
                       // newList.push("KL")
                            break;
                        }

         
                     }

                }

    
    
            }

        }
        return this.getStudentList(newList)
        
    }




    getAvarageForStudentInYear(studentObj,year){
        var sum = 0.0;
        var nr = 0;
        for(var jsonYear in studentObj.courses) {
            var value = studentObj.courses[jsonYear];  
            if(jsonYear==year){
                for(var subject in value){
                    var value1 = value[subject];            
                    for(var studentGradesVariable in value1){
                        var value2 = value1[studentGradesVariable];            
                        for(var exerciseOrLecture in value2){
                            var value3 = value2[exerciseOrLecture];            
                            var len23 = value3.length;
                            for(var i=0; i<len23; i++){
                                sum += value3[i];
                                nr++;
                            }
                        }
                    }
                }
            }
        }
        
        return this._getAverage(sum,nr)

    }



    getAvarageForStudentAllYears(studentObj){
        var sum = 0.0;
        var nr = 0;
        for(var jsonYear in studentObj.courses) {
            var value = studentObj.courses[jsonYear];  
            
                for(var subject in value){
                    var value1 = value[subject];            
                    for(var studentGradesVariable in value1){
                        var value2 = value1[studentGradesVariable];            
                        for(var exerciseOrLecture in value2){
                            var value3 = value2[exerciseOrLecture];            
                            var len23 = value3.length;
                            for(var i=0; i<len23; i++){
                                sum += value3[i];
                                nr++;
                            }
                        }
                    }
                }
            
        }
        
        return this._getAverage(sum,nr)

    }

    _getAverage(sum,numberOfNumbers){
        return sum/numberOfNumbers
    }



    getAverageForCourse(studentList,year,course){
        var sum =0
        var nr =0
        
        
        for(var i=0;i<studentList.length;i++ ){

            for(var jsonYear in studentList[i].courses) {
                var value = studentList[i].courses[jsonYear];
               if(jsonYear==year){
                   
                    for(var subject in value){
                        var value1 = value[subject]; 
                              
                        if(subject==course){
                            for(var studentGradesVariable in value1){

                                var value2 = value1[studentGradesVariable];            
                                for(var exerciseOrLecture in value2){

                                    var value3 = value2[exerciseOrLecture];            
                                    var len23 = value3.length;
                                    for(var it=0; it<len23; it++){
                                        sum += value3[it];
                                        nr++;
                                    }
                                }
                            }

                        }

         
                     }

                }

    
    
            }

        }
        return this._getAverage(sum,nr)

    }

}

class writerSpecificDate{
    constructor(helperInst){
        this.helperInst=helperInst
    }

    getDescriptionUnsortedList(){

        return  "<b>Nieposortowana lista</b>  <br />"+this.helperInst.writeStudentsNames(students)+"Zaś obiekty zawierają następujące dane: " + Object.keys(students[0])

    }

    getDescriptionSortedList(){
       
        
        return "<b>Posortowana lista według nazwisk</b>  <br />"+ this.helperInst.writeStudentsNames(this.helperInst.getStudentList(students))+"Zaś obiekty zawierają następujące dane: " + Object.keys(students[0])
        
    }

    getDecriptionStudentListForCourse(){
        var myList =  this.helperInst.getStudentListForCourse(students,"2014","ProgrammingII")
        return "<b>Posortowana według nazwiska lista  tych którzy w 2014 uczęszczali na ProgramingII</b><br />"+this.helperInst.writeStudentsNames( myList) + "Zaś obiekty zawierają następujące dane: " + Object.keys(myList[0])
    }



    getDescriptionAvarageForStudentInYear(){
        return "<b>Srednia ocen</b> Wincentego Kadłubka <b>z 2014</b> roku wynosi: "+this.helperInst.getAvarageForStudentInYear(student3,"2014") +" zaś <b>z 2013</b> roku: "+this.helperInst.getAvarageForStudentInYear(student3,"2013")

    }

    getDescriptionAvarageForStudentAllYears(){
        return "<b>Srednia ocen</b> Wincentego Kadłubka <b>z wszystkich lat</b> wynosi: " + this.helperInst.getAvarageForStudentAllYears(student3) 

    }

    getDescriptionAverageForCourse(){
        return "<b>Średnia dla AlgorithmsII z roku 2014</b> wynosi: " + this.helperInst.getAverageForCourse(students,"2014","AlgorithmsII")
    }


}



