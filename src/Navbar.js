import React,{useState} from 'react'

function Navbar() {
  

  
  const EmailAddresss="yauarmi688@gmail.com";
  const mailtoLink=`mailto:${EmailAddresss}`
  const twitter1="https://twitter.com/armi_yau?t=QRdsKYqr02rcfj4c8zFIXA&s=09"
  const twitter=`${twitter1}`
  const Github1="https://github.com/armiyau1"
  const Github=`${Github1}`
  return (
    <div>
      <header className='Head' >
        <h1 className='logo' >AbdulHamid Armiyau</h1>
        <h3>Web developer</h3>
<p>Dedicated,Motivated and aspiring web developer with a passion for Front-end development. </p>
 <button className='button' ><a href={mailtoLink}>Hire Me</a></button>       
     <button className='button'><a href={twitter}>Twitter</a></button> 
     <button className='button'><a href={Github}>Github</a></button> 
</header>
<section className='About-sec' >
<h3 className='About' > About </h3>
    <p>I am a dedicated web developer with a fervor for <strong>frontend development </strong> and a 
        commitment to staying at the <strong>forefront</strong> of technology trends. I am not just a web developer; I am a tech enthusiast.
         I make it my mission to keep pace with the <strong> latest advancements </strong> in frontend development
         ,ensuring that every project i undertake reflects the cutting edge of web technology</p>
         <br></br>
         <p> When i am not on my computer, studying other people code or reading</p>
        
</section>




    </div>
  )
}

export default Navbar