import {useState} from 'react'


function CardsBody({isClicked, language}) {
    const [hovered, setHovered] = useState(false);
    const [clicked, setClicked] = useState(false)
    if(!clicked){
        return (
    <div onMouseOver={() => setHovered(true)} 
         onMouseOut={() =>setHovered(false)}
         onClick={() => setClicked(true)} 
         className='card d-flex flex-column align-items-center justify-content-center my-3 rounded lang-card' style={{height: "200px"}}>
        <img src={language.img} alt="" style={{height:!hovered?"50%":"70%"}} className="lang-img"/>
        <p>{language.name}</p>
    </div>
            )
    } else {
       return(<div onClick={() => setClicked(false)} 
       className='card d-flex flex-column align-items-center justify-content-center my-3 rounded lang-card' style={{height: "200px"}}>
            <ul className='text-start'>
                <li>{language.options[0]}</li>
                <li>{language.options[1]}</li>
                <li>{language.options[2]}</li>
            </ul>
        </div>
    ) 
  }

  
}

export default CardsBody