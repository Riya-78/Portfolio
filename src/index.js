import React from 'react';
import {createRoot} from 'react-dom/client';
import Navbar from './Navbar';
import './index.css'
import Bg from './Bg'
import Skills from './Skills.js'
import Page from './Projectspage.js'

const root = createRoot(document.getElementById('root'));
root.render(
     <>
     <section className="main">
     <Navbar/>
     <Bg/>
     </section>

     <Skills/>

     <Page/>

     </>
)


