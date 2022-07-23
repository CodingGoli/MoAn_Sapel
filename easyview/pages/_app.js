//////////////////////////////////////////////////////////////////////////////
//// Importieren von material (Komponenten, wie Appbars, Buttons, etc.)  /////
//////////////////////////////////////////////////////////////////////////////

import React from 'react'
import { useState } from "react";


//import {material, octicons} from 'styled-icons'

//////////////////////////////////////////////////////////////////////////////
//////////////// importierte App-Komponenten (Header.js, etc.)  //////////////
//////////////////////////////////////////////////////////////////////////////

import CardStudium from '../components/CardStudium'
import Header from '../components/Header'


/////////////////////////////////////////////////////////////////////////////
////////// App-Gerüst, welches für die Index.html verwendet wird  ////////////
//////////////////////////////////////////////////////////////////////////////


//import persistent state
import { usePersistedState } from '../../../moban/easyview/components/pstate'

const App = () => {


    const [newScore, setScore] = useState("Score", 0);
    const [testArray, setTest] = useState("Grades", 0);

    console.log(testArray);
    
    /* Array für Modulausgabe */
    const [modulesState, setModules] = useState([{
        name: "BuAn",
        pruf: 0,
        ects: 5,
        text: "testbeschreibung",
        grade: 1,
        id: 0,
        sem: 2
    },
    {
        name: "Ecin",
        pruf: 1,
        ects: 10,
        text: "testbeschreibung 2",
        grade: 1.5,
        id: 1,
        sem: 2
    },
    {
        name: "Medienprojekt",
        pruf: 2,
        ects: 15,
        text: "testbeschreibung 3",
        grade: 2.3,
        id: 2,
        sem: 3
    }
        ]);



    const modules = [{
        name: "BuAn",
        pruf: 0,
        ects: 5,
        text: "testbeschreibung",
        grade: 1,
        id: 0,
        sem: 2
    },
    {
        name: "Ecin",
        pruf: 1,
        ects: 10,
        text: "testbeschreibung 2",
        grade: 1.5,
        id: 1,
        sem: 2
    },
    {
        name: "Medienprojekt",
        pruf: 2,
        ects: 15,
        text: "testbeschreibung 3",
        grade: 2.3,
        id: 2,
        sem: 3
    }
        ];


    //Note ändern
    const setGrade = (id, grade) => {

        console.log("call to change grade of id " + id + " to " + grade);

            const index = modulesState.findIndex(element => {
                if (element.id === id) {
                        
                    return true;
                }

                return false;
            });

            console.log("found index " + index + " of module id " + id);

            console.log("new operation on testArray " + testArray);

            if(Array.isArray(testArray) == false){
                console.log("testArray is not an array " + testArray);
                var newArray = new Array(modulesState.length);
                console.log("setting index " + index + " to " + grade);
                newArray[index] = grade;
                setTest(newArray);
            }
            else{

                    var tempArray;
                    tempArray = testArray;
                    tempArray[index] = grade;
                    console.log("temparray is " + tempArray);
                    console.log("setting index " + index + " to " + grade);
                        setTest("");
                        setTest(tempArray);

            }

            console.log("changed grade of entry " + id + " to " + grade);

            calcScore(0);

        }

   const UpdateIDs = () => {

    var UpdateArray = {};
    UpdateArray = modulesState;
    UpdateArray.forEach(function(entry, i){

        entry.id = i;
    });

   }


        //Notenschnittberechnung
    const calcScore = (sem) => {

            var sumects = 0;
            var sumgrade = 0;

            console.log(sem);

            function addModule(item) {

                sumects += item.ects;
                console.log("new sumects after " + item.name + " is " + sumects);
                sumgrade += item.ects * testArray[item.id];
                console.log("new sumgrade after " + item.name + " is " + sumgrade);


            }

            if (sem == 0) {

                modulesState.forEach(addModule);
            } else {

                var filteredModules = modulesState.filter(function(module) {
                    return module.sem === sem;
                });

                filteredModules.forEach(addModule);
            }

            console.log(sumects + " " + sumgrade);
            console.log("Schnitt : " + sumgrade / sumects);

            setScore(sumgrade / sumects);

            console.log({newScore});

        }
        //Anwenden auf neues Modul
    const newModule = (name, pruf, ects, text, sem) => {

        var newModule = {};
        newModule["name"] = name;
        newModule["pruf"] = pruf;
        newModule["ects"] = ects;
        newModule["text"] = text;
        newModule["id"] = 0;
        newModule["sem"] = sem;
        newModule["grade"] = 1;

        console.log("adding module to " + modulesState);

        if(Array.isArray(modulesState) == false){
            console.log("modulesState is not an array " + modulesState);
            console.log("setting first entry to " + newModule);
            setModules(newModule);
        }
        else{
                newModule["id"] = modulesState.length;

                var tempArray;
                tempArray = modulesState;
                tempArray.push(newModule);
                    setModules(tempArray);


        }

        calcScore(0);

    }

    //Modul löschen
    const deleteModule = (id) => {
        console.log("Attempting to delete module id " + id);
        var tempDelArray = {};
        tempDelArray = modulesState;
        tempDelArray.splice(id, 1);
        console.log("filtered deletion array is " + tempDelArray);
        setModules(tempDelArray);
        calcScore(0);
        console.log("State Module Array is " + modulesState);

        UpdateIDs();

    }

    console.log("App Logs");
    console.log("Old Modules Array");
    console.log(modules);
    console.log("New Modules Array with State");
    console.log(modulesState);
    console.log("Score");
    console.log({newScore});

    return ( 
        
    
        <>

        <Header />
      
        <div className='content' style={contentStyle}>


        <CardStudium modules={modulesState}
            delModule={deleteModule}
          calcGrade={calcScore}
          setGrade={setGrade}
          GradeArray={testArray}
          newModule={newModule}
          Score={newScore} />
        </div>
  
        </>
    )
} 




//////////////////////////////////////////////////////////////
//////////////// Styling für COntent /////////////////////////
//////////////////////////////////////////////////////////////

const contentStyle = {
    paddingTop: '120px',
    paddingLeft: '78px',
    alignContent: 'center',
}



export default App;