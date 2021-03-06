import 'bootstrap/dist/css/bootstrap.min.css'
import  'font-awesome/css/font-awesome.min.css'
import './App.css'

import React from 'react'
import {HashRouter} from 'react-router-dom'

import Logo from '../templates/Logo'
import Nav from '../templates/Nav'
import Routes from './Routes'
import Footer from '../templates/Footer'

export default props =>
<HashRouter>
 <div className="app">
     <Logo />
     <Nav />
     <Routes />
     <Footer />
 </div>
</HashRouter>