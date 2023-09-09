import React,{useState} from 'react'

function INFO(){
    const [formstate,setformstate]=useState({
name:"",
email:"",
text:""
    })

    function submitfunc(event){
        event.preventDefault()
        const config ={
            Username:"armiyau.17@gmail.com",
            Password:"2CAFA46DDC5D8D4FDFCC5FB077831CC8A55D",
            Host:"smtp.elasticemail.com",
            Port:"2525",
            To:"armiyau.17@gmail.com",
            From:formstate.email,
            Subject:"This is my contact form",
            Body:`${formstate.name} connected to you over mail`,
        };
        if(window.Email){
            window.Email.send(config).then(() => alert("sent success"))
        }
    }
    function changehandle(e){
        setformstate({
...formstate, [e.target.name]:e.target.value
        })
    }
  return (
    <div id='contact'  className='contact' >
        <div className='c-header' >
<h1>Contact me</h1>
<u><h4>Get in touch</h4></u>
</div>
<div className='head1' >
<h5 className='head2' >Get in Touch</h5>
<p>Do you have any questions? or work? Reach out to me with  my contact info .
    I  would be happy to answer all of your questions, kindly reach out to me through my email below. </p>
    <h5>Name</h5>
    <p>AbdulHamid Armiyau</p>
   <h5>Address</h5>
   <p>Kwara State Nigeria</p>
   <h5>Email</h5>
   <p>yauarmi688@gmail.com</p>
   </div>
   <form className='form' onSubmit={submitfunc} >
    <input type='text' name='name' value={formstate.name}
     onChange={changehandle} placeholder='name' ></input>
    <input type='email' name='email' value={formstate.email}
     onChange={changehandle} placeholder='email' ></input>
    <textarea type="text" name="text" value={formstate.text}
     onChange={changehandle} placeholder='message' ></textarea>
    <button type='submit' value="submit" >Send Message</button>
   </form>
   <footer> &copy; Built with <strong>React</strong>  and coded in visual studio code by yours truly. The code is made available in my github. </footer>

    </div>
  )
}

export default INFO