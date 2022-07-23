import AppBar from '@mui/material/AppBar'
import PropTypes from 'prop-types'
import CssBaseline from '@mui/material/CssBaseline'

// Arrow-Funktion für Header

export default function Header({ title }) {
    return ( 
        <>

        < CssBaseline />
        < AppBar style = { headingStyle }>
        <h1> { title } </h1>  
        </AppBar > 

        </>

    )
}

///////////////////////////////////////////////////////////////////
//  Header-Prop; Diese legen fest, welchen Datentyp zulässig ist //
///////////////////////////////////////////////////////////////////

Header.defaultProps = {
    title: 'EasyView',

}

Header.propTypes = {
    title: PropTypes.string.isRequired
}


const headingStyle = {
    backgroundColor: 'hsl(184, 31%, 20%)',
    color: 'hsl(184, 60%, 60%)',
    textAlign: 'center',
    position: 'fixed',
    top: '0',
    bottom: 'auto',
}