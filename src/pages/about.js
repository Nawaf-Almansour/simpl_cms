
import React from "react"
import aboutText from "../pages.json"
import Layout from "../components/layout"
import ReactMarkdown from "markdown-to-jsx";

const About = () => {
    return (
        <Layout>
            <h1 style={{textAlign: `center`, marginBottom: `40px`}}>This is the About Page.</h1>
            <div className="page-content">
                <ReactMarkdown children={aboutText[0].content}></ReactMarkdown>

            </div>
        </Layout>
    )
}

export default About
