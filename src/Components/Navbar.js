import React, {useState,useEffect, useCallback}from 'react'
import '../Components/Navbar.css'

export default function Navbar() {
  
  const [toggleMenu, setToggleMenu] = useState(false);
  const [largeur, setLargeur] = useState(window.innerWidth);
 
  const toggleNav = () =>{
    setToggleMenu(!toggleMenu)
  }

  const changeWith = () => { 
    setLargeur(window.innerWidth);
  }


  useEffect(() => {
    window.addEventListener('resize', changeWith);

    return () =>{
        window.removeEventListener('resize',changeWith);
    }

   

    
  },[])




  
    return (
    
    
    
    <nav>
        {(toggleMenu || largeur > 500) &&(   
            <ul className='liste'>
                <li className="item">acceuil</li>
                <li className="item">services</li>
                <li className="item">contact</li>

            </ul>
        )}

        <button onClick={toggleNav} className='btn'>btn</button>
    </nav>
  );
}
