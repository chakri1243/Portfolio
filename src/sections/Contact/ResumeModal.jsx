export default function ResumeModal({

open,

onClose

}){

if(!open)return null;

return(

<div

className="resume-overlay"

onClick={onClose}

>

<div

className="resume-modal"

onClick={(e)=>e.stopPropagation()}

>

<button

className="close-btn"

onClick={onClose}

>

✕

</button>

<iframe

src="/resume.pdf"

title="Resume"

width="100%"

height="700"

/>

</div>

</div>

)

}