import { motion } from "framer-motion";

export default function Timeline({ education }) {
  return (

<div className="timeline">

{

education.map((item,index)=>(

<motion.div

className="timeline-item"

key={index}

initial={{opacity:0,x:-40}}

whileInView={{opacity:1,x:0}}

transition={{delay:index*.2}}

viewport={{once:true}}

>

<div className="timeline-dot"></div>

<div className="timeline-content">

<span>{item.year}</span>

<h3>{item.title}</h3>

<h4>{item.subtitle}</h4>

<p>{item.institute}</p>

<strong>{item.grade}</strong>

</div>

</motion.div>

))

}

</div>

  );
}