import React, {useState, useRef, useEffect} from 'react'
import './Accordeon.css'
import chevron from '../image/chevron.png'

export default function Accordeon() {


const [toggle, setToggle] = useState(false);
const [heihtEl, setHeihtEl] = useState();

const toggleState = ()=> {
    setToggle(!toggle);
}

const refHeight = useRef();

useEffect(() =>{

    setHeihtEl(`${refHeight.current.scroolHeight}px`)

},[])







  return (
    <div  className="accord">
        <div
        onClick={toggleState}
        className='accord-visible'>
            <h2 >la formule vainqueur </h2>
            <img className='chevron' src={chevron} />
         
        </div>

        <div ref={refHeight} 
        className={toggle ? 'accord-toggle animated' : 'accord-toggle'}
        style={{height: toggle ? `${heihtEl}`:"0px"}}
        >
            <p aria-hidden={toggle ? "true" : "false"}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque magni distinctio perspiciatis quaerat tempora exercitationem necessitatibus obcaecati blanditiis, itaque, laboriosam est nostrum nulla quae reiciendis cum. Eos odit error sequi.</p>
        </div>
    </div>


  )
}
