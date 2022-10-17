import React from 'react'
import CardsBody from './CardsBody'
import { languages } from '../data/data'

function Cards() {
  return (
    <div className="container">
        <div className="row justify-content-center my-5 ">
            <div className="col-7 ">
                <div className="card card-container" >
                    <div className="card-body" >
                        <div className='stripe h-100 w-20'></div>
                        <h3 className='text-light'>Languages</h3>
                        <div className="container main">
                            <div className="row d-flex">
                                    {languages.map((card) => {
                                    return <><div className="col-6">
                                           <CardsBody language={card}/> 
                                           </div></>
                                    })}
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    </div>
        
  )
}

export default Cards