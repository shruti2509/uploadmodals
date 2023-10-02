import React from 'react'
import ReactModal from 'react-modal';
import { useState } from 'react';
import necklacel from './renders/Necklace_L_Gold.png'

function Card8() {
  const [isOpen, setIsOpen] = useState(false);
    const totalClick24 = (click) =>
  {
    const totalClicks = document.getElementById('totalClicks24');
    const sumvalue = parseInt(totalClicks.innerText) + click;
    console.log(sumvalue + click);
    totalClicks.innerText = sumvalue;
    // avoid negative
    if (sumvalue < 0){
      totalClicks.innerText = 0;
    }  
  }

  // close

  const closeWin =()=>{
    var someIframe = window.parent.document.getElementById('popup');
    someIframe.parentNode.removeChild(someIframe);
    setIsOpen(false)
  }
  return (
    <>
    <div  style={{ marginTop: '50px', display: 'flex', justifyContent: 'center', border: '5px', borderColor: 'black'}}>
    <div className="card" style={{width: '100rem', height: '44rem', marginTop: '-48px'}}>
    <div style={{paddingLeft: '50px', paddingRight: '50px'}}>
    <img src={necklacel} className="card-img-top" height="200px" width="150px" alt="ring"/>
  </div>
    <div className="card-body">
      <h5 className="card-title">Gold Necklace</h5>
      <p className="fw-light">22KT Yellow Gold</p>
      <div style={{display: 'flex', alignItems: 'center',alignContent: 'center', flexDirection: 'left'}}>
        <div style={{width: '300px', display: 'flex'}}>
          <div style={{display:'flex'}}>
          <button className="button" onClick={()=> totalClick24(1)} style={{borderRadius:'5px', height:'28px'}}><p className="plus">+</p></button>
          <span id="totalClicks24" style={{marginLeft: '2px', marginRight: '2px'}}>0</span>
           <button className="button" onClick={()=> totalClick24(-1)}  style={{borderRadius:'5px', height:'28px',width:'26px'}}><p className="minus">-</p></button>
       </div>
      <h5 style={{textAlign: 'right', marginLeft: '184px'}}>$7,349</h5>
  </div>
    </div>
      <br/>
      <div className="card-text" style={{backgroundColor: 'rgb(246, 240, 240)', borderRadius: '20px 0px'}}>
        <p style={{paddingTop: '20px', marginTop: '5px', paddingLeft: '20px'}}><strong>About</strong>
          <p style={{paddingLeft: '20px'}} >An alluring halo of diamonds embrace and accentuate the center gem of this brilliant antique-style ring. Diamond accents on the band add a truly dazzling effect.</p>
        </p>
      </div>
      <div style={{display: 'flex'}}>
      {/* <a href="./popupiframe.html" className="btn btn-primary">Add to cart</a> */}
      <Link to="/Card8" className='btn btn-primary'>Add to Cart</Link> 
      <a href="popupiframe.html" className="btn btn-primary" target="webcam" style={{marginLeft: '100px', width:'105px'}}>try it on </a>
    </div>
    </div>
  </div>
</div>
<ReactModal
        style={{width:'701px', marginLeft: '734px'}}
        isOpen={isOpen}
        contentLabel="Example Modal"
        onRequestClose={() => setIsOpen(false)}
      >
        <button id="close-but" onClick={()=> closeWin()} style={{borderRadius: '5px', backgroundColor: 'white', color: 'black', float: 'right', borderColor: 'white'}}>x</button>
        <h4>webcam</h4>
        </ReactModal>
    </>
  )
}

export default Card8
