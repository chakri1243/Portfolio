import { useState } from "react";
import "./Contact.css";
import ResumeModal from "./ResumeModal";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaFilePdf
} from "react-icons/fa";

export default function Contact(){

const [open,setOpen]=useState(false);

return(


<section
id="contact"
className="contact"
>

<div className="section-title">

<p>

CONTACT

</p>

<h2>

Let's Build Something Amazing

</h2>

</div>

<div className="contact-container">

<div className="contact-info">

<p>

I'm actively looking for internships,
AI Engineer, ML Engineer and Full Stack opportunities.

</p>

<a
href="mailto:chakrapanigutha@gmail.com"
>

<FaEnvelope/>

chakrapanigutha@gmail.com

</a>

<a
href="https://github.com/chakri1243"
target="_blank"
>

<FaGithub/>

GitHub

</a>

<a
href="https://linkedin.com"
target="_blank"
>

<FaLinkedin/>

LinkedIn

</a>

<button
onClick={()=>setOpen(true)}
>

<FaFilePdf/>

Preview Resume

</button>

<a
href="/resume.pdf"
download
className="download-btn"
>

Download Resume

</a>

</div>

<form
className="contact-form"
>

<input
type="text"
placeholder="Your Name"
/>

<input
type="email"
placeholder="Email"
/>

<input
type="text"
placeholder="Subject"
/>

<textarea
rows="6"
placeholder="Message"
/>

<button>

Send Message

</button>

</form>

</div>

<ResumeModal

open={open}

onClose={()=>setOpen(false)}

/>

</section>


)

}