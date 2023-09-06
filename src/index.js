import React from "react"
import ReactDOM from "react-dom"
import Navbar from "./Navbar"
import INFO from "./INFO"

import Content from "./Content"
function App(){
    const imagesrc="todo.jpg"
    const image=`${imagesrc}`

    const todolink="https://armiyau1.github.io/My-to-do-list-app/"
    const todo=`${todolink}`
    
    return(
<div>
    
    <Navbar />
    <Content 
    Head="Projects"
    image={image}
    todo={todo}
    Heading="Built A  To-Do List App: CHEACK ➜  "
    Paragraph="I have created a handy  todo list app that helps you stay organized and on top of your tasks
    . it is designed for simplicity and efficiency, making it easier than ever to manage your daily agenda. "
    
    /> <Content 
    image="Portfolio.jpg"
    todo="https://armiyau1.github.io/Portfolio_/"
    Heading="Built A  Personal website:  CHEACK ➜"
    Paragraph="I have  recently launched my personal my personal website, which serves as an online hub
    for sharing my passions, achievements,and interests. its a website where you can learn about my background and connect
    projects and connect with me "
    SKILLS={[<h2  className="st" >Experience</h2>,
    <h5>I have experience working with <strong>html</strong>,<strong>css</strong>
    ,<strong>Javascript</strong>,<strong>React </strong>and <strong>Git&Github</strong> i have created multiple projects with
    my set of my skills. </h5>,
   
   <h5> I was also in the alx software engineering programme where i learnt most of my skills. I have built multiple project with my skills while also in the programme </h5>,
   <h3>Tools</h3>,
   <div className="tools" >

    <h5> linux Shell</h5>,
    <h5>Vscode</h5>,
    <h5>sublime text</h5>
    </div>]}
    github="Most of my projects are in my github account "

    />
    <INFO />
</div>
    )

}
ReactDOM.render( <App />,document.getElementById("root"))