import React from 'react'
import { Link } from "gatsby"

import Layout from '../components/layout'
import Head from '../components/head'

const About = () => {
    return (
        <Layout>
            <Head title="About"/>
            <h1>About</h1>
            <p>I am a technical solutionist fascinated by beautiful ux and ui.</p>
            <p>Reach out <Link to="/contact">Contact me.</Link></p>
        </Layout>
    )
}

export default About