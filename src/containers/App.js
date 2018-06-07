import React from 'react'
import { Container } from 'semantic-ui-react'

import Header from '../components/Header'
import Footer from '../components/Footer'
import './App.css'

class App extends React.Component {
    render() {
        return (
            <Container id='app-container' fluid>
                <Header />
                <div className='test' name='test'>This is body section.</div>
                <Footer />
            </Container>
        )
    }
}


export default App
