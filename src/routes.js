import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Fotos from './pages/Fotos'
import Home from './pages/Home'

export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/fotos' component={Fotos} />
            </Switch>
        </BrowserRouter>
    )
}