
//////////////////////////////////////////////////////////////////////////////
///////////Importieren von MUI Komponenten ///////////////////////////////////
//////////////////////////////////////////////////////////////////////////////

import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Divider from '@mui/material/Divider'
import Button from '@mui/material/Button'

///////////////////////////////////////////////////////////////////////////////////////
///////////////////// Komponentenbeginn ///////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////

export default function Cardstudium ({ modules, calcGrade, setGrade, Score, GradeArray, newModule, delModule}) {

    //loop durch die Props und Datenoutput
    console.log("CardStudium Logs");
    console.log(modules);
    console.log(Score);
    return (
        /* Umschließen des Outputs in einem Empty-JSX Fragment */
        <>

        {
            modules.map((module, mapIndex) => (

                <Card className ="Card" style ={cardMain}>
                    <div className="CardHeader" style = {cardHeader}>
                    <Accordion>
                        <AccordionSummary
                         expandIcon={<ExpandMoreIcon style={{color: "white"}}/>} aria-controls="panel1a-content" id="panel1a-header" style = {cardHeader}>
                            
                                <h4 key={module.id}> {module.name} </h4>

                            
                        </AccordionSummary>
                       
                        <AccordionDetails style ={cardBody}>
                            <Card> 
                                Modultyp  {module.pruf == 0 &&
                                    <CardContent style ={cardBody}><h4> Klausur </h4></CardContent>}
                                        {module.pruf == 1 &&
                                    <CardContent style ={cardBody}><h4> Hausarbeit </h4></CardContent> }
                                        {module.pruf == 2 &&
                                    <CardContent style ={cardBody}><h4> Projekt </h4></CardContent>}
                                    <Divider />
                                <h3> Modul - ECTS </h3>
                                    <CardContent style ={cardBody}><h4 key={module.name}> {module.ects} </h4> </CardContent>
                                    <Divider />
                                <h3> Modulbeschreibung </h3>
                                    <CardContent style={cardBody}><h4 key={module.id}> {module.text} </h4></CardContent>
                                    <Divider />
                                <h3> Modulnote </h3>
                                            
                                        <input style = {textfield} type="number" placeholder={GradeArray && GradeArray[mapIndex]} onChange = {
                                        () => setGrade(module.id, event.target.value)} />
                                     <div>
                                        <br></br>

                                     <Button variant = "outlined" style = {ButtonDelete} onClick = {() => delModule(module.id)}>Delete</Button>
                                     </div>
                                    </Card>
                        </AccordionDetails>

        </Accordion>
        </div>

                    </Card>
            ))
        }
        
        <Card style = {cardForm}>

        <h5>GesamtNote: </h5><h5 key={Score}>{Score}</h5>
        </Card>

        <Card>
            <h2>Neues Modul anlegen</h2>
        <div style ={formContainer}>
        <input type="text" placeholder="Modulname" id="modulname" required/>
        <input type="number" placeholder="Prüfungsform" id="modulpruf" required/>
        <input type="number" placeholder="ECTS" id="modulects" required/>
        <input type="text" placeholder="Beschreibung" id="modultext" required/>
        <input type="number" placeholder="Semester" id="modulsem" required/>
        <button onClick = {() => newModule(document.getElementById('modulname').value, document.getElementById('modulpruf').value, document.getElementById('modulects').value, document.getElementById('modultext').value, document.getElementById('modulsem').value)}>Neues Modul</button>
        </div>
        </Card>





        </>

    )


///////////////////////////////////////////////////////////////////////////////
/////////////// Style als Objekte  ////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

}

const ButtonDelete = {
    backgroundColor: 'hsl(1, 90%, 20%)',
    color: 'hsl(1, 90%, 50%)',
}

const cardBody = {

    backgroundColor: 'hsl(184, 31%, 95%)',
     color:'hsl(184, 31%, 20%)',
     borderRadius: '6px',
     textAlign: 'center',
     margin: '10px',
     fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif'

     
}
const cardHeader = {

     backgroundColor: 'hsl(184, 31%, 20%)',
     color: 'hsl(184, 31%, 96%)',
     borderRadius: '4px',
     textAlign: 'center',
     fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',

}
const cardMain = {

    backgroundColor: 'hsl(184, 31%, 20%)',
    color: 'hsl(184, 31%, 96%)',
    borderRadius: '4px',
    textAlign: 'center',
    margin: '5px',
    maxWidth: '80%',
    fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',


}

const textfield = {
    justifyContent: 'center',
    margin: '4px',
    maxWidth: '45%',
    fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',

}

const formContainer = {

    backgroundColor: 'hsl(184, 31%, 20%)',
    width: '80%',
    itemAlign: 'center',
    margin: '25px',
}

const cardForm = {
    backgroundColor: 'hsl(184, 31%, 20%)',
    color: 'hsl(184, 31%, 96%)',
    borderRadius: '4px',
    textAlign: 'center',
    fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
    maxWidth: '80%'
}