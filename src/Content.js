import React from 'react'

function Content(props) {
   
    
  return (
    <div>

<section className='project-sec' >
<h1>{props.Head}</h1>
<div className='todo' >
    <img className='image' src={props.image}width="50%" height="50%" ></img>
    <div className='para' >
 <a  className='to' href={props.todo}> <h4> {props.Heading}</h4></a> 
<p>{props.Paragraph}</p>
<div className='button' >
<button>Html</button>
<button>CSS</button>
<button>Javascript</button>
<button>React</button>

</div>
</div>
</div>

</section>
<h3 className='github' >  {props.github} </h3>
<section className='skills' >
<p className='skill' >{props.SKILLS}</p>


</section>


    </div>
  )
}

export default Content