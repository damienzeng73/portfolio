import React from 'react'
import { Container } from 'semantic-ui-react'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Body from './Body'
import './App.css'

class App extends React.Component {
    render() {
        return (
            <Container id='app-container' fluid>
                <Header />
                <Body />
                <Footer />
            </Container>
        )
    }
}


export default App
