import "./Education.css";

import Timeline from "./Timeline";

import CertificationCard from "./CertificationCard";
import { motion } from "framer-motion";

import {

education,

certifications

} from "./educationData";


export default function Education(){

return(


<section

id="education"

className="education"

>

<div className="section-title">

<p>

MY JOURNEY

</p>

<h2>

Education & Certifications

</h2>

</div>

<Timeline education={education}/>

<h2 className="cert-title">

Professional Certifications

</h2>

<div className="certificate-grid">

{

certifications.map((cert)=>(

<CertificationCard

key={cert.title}

cert={cert}

/>

))

}

</div>

</section>


)

}