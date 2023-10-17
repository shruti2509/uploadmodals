import React from 'react'
import { Link } from 'react-router-dom'
import ring1 from './renders/ring1.png'
import ring2 from './renders/ring2.png'
import ring3 from './renders/ring.png'
import earing1 from './renders/earring1.png'
import earing2 from './renders/earring2.png'
import necklacesl from './renders/Necklace_sL_Gold.png'
import necklaces from './renders/Necklace_S_Gold.png'
import necklacel from './renders/Necklace_L_Gold.png'
import necklacexl from './renders/Necklace_XL_Gold.png'

function Card() {
  const totalClick = (click) =>
  {
    const totalClicks = document.getElementById('totalClicks');
    const sumvalue = parseInt(totalClicks.innerText) + click;
    console.log(sumvalue + click);
    totalClicks.innerText = sumvalue;
    // avoid negative
    if (sumvalue < 0){
      totalClicks.innerText = 0;
    }  
  }

  // second quantity
  const totalClick12 = (click) =>
  {
    const totalClicks = document.getElementById('second-quantity');
    const sumvalue = parseInt(totalClicks.innerText) + click;
    console.log(sumvalue + click);
    totalClicks.innerText = sumvalue;
    // avoid negative
    if (sumvalue < 0){
      totalClicks.innerText = 0;
    }  
  }

  // third

  const totalClick13 = (click) =>
  {
    const totalClicks = document.getElementById('totalClicks13');
    const sumvalue = parseInt(totalClicks.innerText) + click;
    console.log(sumvalue + click);
    totalClicks.innerText = sumvalue;
    // avoid negative
    if (sumvalue < 0){
      totalClicks.innerText = 0;
    }  
  }

  // fourth
  const totalClick14 = (click) =>
  {
    const totalClicks = document.getElementById('totalClicks14');
    const sumvalue = parseInt(totalClicks.innerText) + click;
    console.log(sumvalue + click);
    totalClicks.innerText = sumvalue;
    // avoid negative
    if (sumvalue < 0){
      totalClicks.innerText = 0;
    }  
  }

  // second row first

  const totalClick21 = (click) =>
  {
    const totalClicks = document.getElementById('totalClicks21');
    const sumvalue = parseInt(totalClicks.innerText) + click;
    console.log(sumvalue + click);
    totalClicks.innerText = sumvalue;
    // avoid negative
    if (sumvalue < 0){
      totalClicks.innerText = 0;
    }  
  }

  // second second

  const totalClick22 = (click) =>
  {
    const totalClicks = document.getElementById('totalClicks22');
    const sumvalue = parseInt(totalClicks.innerText) + click;
    console.log(sumvalue + click);
    totalClicks.innerText = sumvalue;
    // avoid negative
    if (sumvalue < 0){
      totalClicks.innerText = 0;
    }  
  }

  // second third

  const totalClick23 = (click) =>
  {
    const totalClicks = document.getElementById('totalClicks23');
    const sumvalue = parseInt(totalClicks.innerText) + click;
    console.log(sumvalue + click);
    totalClicks.innerText = sumvalue;
    // avoid negative
    if (sumvalue < 0){
      totalClicks.innerText = 0;
    }  
  }

  // second fourth

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

  // third 1
  const totalClick31 = (click) =>
  {
    const totalClicks = document.getElementById('totalClicks31');
    const sumvalue = parseInt(totalClicks.innerText) + click;
    console.log(sumvalue + click);
    totalClicks.innerText = sumvalue;
    // avoid negative
    if (sumvalue < 0){
      totalClicks.innerText = 0;
    }  
  }

  // third 2

  // const totalClick32 = (click) =>
  // {
  //   const totalClicks = document.getElementById('totalClicks32');
  //   const sumvalue = parseInt(totalClicks.innerText) + click;
  //   console.log(sumvalue + click);
  //   totalClicks.innerText = sumvalue;
  //   // avoid negative
  //   if (sumvalue < 0){
  //     totalClicks.innerText = 0;
  //   }  
  // }
  return (
<>
<body>
{/* header */}

<div className="head">
        <span ><b>Brand</b></span>
        {/* <input type="seach" placeholder="type here to search" style={{marginLeft: "10px"}}/> */}
        <nav>
            <ul className="navul">
                <li className="navli">wishlist</li>
                <li className="navli">cart</li>
                <li className="navli">Account</li>
                <li className="navli">Help & Support</li>
            </ul>
        </nav>
    </div>

    {/* navbar */}

    <div className="header">
<nav className="headnav">
    <ul className="headul">
        <li className="headli">All</li>
        <li className="headli">Men</li>
        <li className="headli">Women</li>
        <li className="headli">Beauty</li>
        <li className="headli">Watch</li>
        <li className="headli">Accessorie</li>
    </ul>
</nav>
</div>



<div style={ { display: "flex", marginLeft: "50px", justifyContent: 'space-between', marginRight: '50px' }}> 
    {/* <!-- first card --> */}
  <div  style={{ marginTop: '50px', display: 'flex', justifyContent: 'center', border: '5px', borderColor: 'black'}}>
    <div className="card">
    <div style={{paddingLeft: '50px', paddingRight: '50px'}}>
    <img src={ring1} className="card-img-top" height="200px" width="150px" alt="ring"/>
  </div>
    <div className="card-body">
      <h5 className="card-title">Elite Gold Ring</h5>
      <p className="fw-light">18KT Yellow Gold</p>
      <div style={{display: 'flex', alignItems: 'center',alignContent: 'center', flexDirection: 'left'}}>
        <div style={{width: '300px', display: 'flex'}}>
          <div style={{display:'flex'}}>
          <button className="button" onClick={()=> totalClick(1)} style={{borderRadius:'5px', height:'28px'}}><p className="plus">+</p></button>
          <span id="totalClicks" style={{marginLeft: '2px', marginRight: '2px'}}>0</span>
           <button className="button" onClick={()=> totalClick(-1)}  style={{borderRadius:'5px', height:'28px',width:'26px'}}><p className="minus">-</p></button>
     
       </div>
      <h5 style={{textAlign: 'right', marginLeft: '184px'}}>$7,349</h5>
  </div>
    </div>
      <br/>
      <div className="card-text" style={{backgroundColor: 'rgb(246, 240, 240)', borderRadius: '20px 0px'}}>
        <p style={{paddingTop: '20px', marginTop: '5px', paddingLeft: '20px'}}><strong>About</strong>
          <p style={{paddingLeft: '20px'}}>An alluring halo of diamonds embrace and accentuate the center gem of this brilliant antique-style ring. Diamond accents on the band add a truly dazzling effect.</p>
        </p>
      </div>
      <div style={{display: 'flex'}}>
      {/* <a href="./popupiframe.html" className="btn btn-primary">Add to cart</a> */}
      <Link to="/Demo" className='btn btn-primary'>Add to Cart</Link> 
      <Link to="/Card1" className="btn btn-primary" style={{marginLeft: '79px', width:'105px'}}>try it on </Link>
    </div>
    </div>
  </div>
</div>
{/* second card */}

<div  style={{ marginTop: '50px', display: 'flex', justifyContent: 'center', border: '5px', borderColor: 'black'}}>
    <div className="card">
    <div style={{paddingLeft: '50px', paddingRight: '50px'}}>
    <img src={ring2} className="card-img-top" height="200px" width="150px" alt="ring"/>
  </div>
    <div className="card-body">
      <h5 className="card-title">Elite Gold Ring</h5>
      <p className="fw-light">18KT Yellow Gold</p>
      <div style={{display: 'flex', alignItems: 'center',alignContent: 'center', flexDirection: 'left'}}>
        <div style={{width: '300px', display: 'flex'}}>
          <div style={{display:'flex'}}>
          <button className="button" onClick={()=> totalClick12(1)} style={{borderRadius:'5px', height:'28px'}}><p className="plus">+</p></button>
          <span id="second-quantity" style={{marginLeft: '2px', marginRight: '2px'}}>0</span>
           <button className="button"onClick={()=> totalClick12(-1)}  style={{borderRadius:'5px', height:'28px', width:'26px'}}><p className="minus">-</p></button>
       </div>
      <h5 style={{textAlign: 'right', marginLeft: '184px'}}>$7,349</h5>
  </div>
    </div>
      <br/>
      <div className="card-text" style={{backgroundColor: 'rgb(246, 240, 240)', borderRadius: '20px 0px'}}>
      <p style={{paddingTop: '20px', marginTop: '5px', paddingLeft: '20px'}}><strong>About</strong>
      <p style={{paddingLeft: '20px'}}>An alluring halo of diamonds embrace and accentuate the center gem of this brilliant antique-style ring. Diamond accents on the band add a truly dazzling effect.</p>
        </p>
      </div>
      <div style={{display: 'flex'}}>
      {/* <a href="./popupiframe.html" className="btn btn-primary">Add to cart</a> */}

      <Link to="/Card2" className='btn btn-primary'>Add to Cart</Link> 
      <Link to="/Card2" className="btn btn-primary" style={{marginLeft: '79px', width:'105px'}}>try it on </Link>
    </div>
    </div>
  </div>
</div>
{/* third card */}

<div  style={{ marginTop: '50px', display: 'flex', justifyContent: 'center', border: '5px', borderColor: 'black'}}>
    <div className="card">
    <div style={{paddingLeft: '50px', paddingRight: '50px'}}>
    <img src={ring3} className="card-img-top" height="200px" width="150px" alt="ring"/>
  </div>
    <div className="card-body">
      <h5 className="card-title">Elite Gold Ring</h5>
      <p className="fw-light">18KT Yellow Gold</p>
      <div style={{display: 'flex', alignItems: 'center',alignContent: 'center', flexDirection: 'left'}}>
        <div style={{width: '300px', display: 'flex'}}>
          <div style={{display:'flex'}}>
          <button className="button" onClick={()=> totalClick13(1)} style={{borderRadius:'5px', height:'28px'}}><p className="plus">+</p></button>
          <span id="totalClicks13" style={{marginLeft: '2px', marginRight: '2px'}}>0</span>
           <button className="button" onClick={()=> totalClick13(-1)}  style={{borderRadius:'5px', height:'28px', width:'26px'}}><p className="minus">-</p></button>
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
      <Link to="/Card3" className='btn btn-primary'>Add to Cart</Link> 
      <Link to="/Card3" className="btn btn-primary" style={{marginLeft: '79px', width:'105px'}}>try it on </Link>
    </div>
    </div>
  </div>
</div>

{/* fourth card */}

<div  style={{ marginTop: '50px', display: 'flex', justifyContent: 'center', border: '5px', borderColor: 'black'}}>
    <div className="card">
    <div style={{paddingLeft: '50px', paddingRight: '50px'}}>
    <img src={earing1} className="card-img-top" height="200px" width="150px" alt="ring"/>
  </div>
    <div className="card-body">
      <h5 className="card-title">Silver Earing</h5>
      <p className="fw-light">Silver</p>
      <div style={{display: 'flex', alignItems: 'center',alignContent: 'center', flexDirection: 'left'}}>
        <div style={{width: '300px', display: 'flex'}}>
          <div style={{display:'flex'}}>
          <button className="button" onClick={()=> totalClick14(1)} style={{borderRadius:'5px', height:'28px'}}><p className="plus">+</p></button>
          <span id="totalClicks14" style={{marginLeft: '2px', marginRight: '2px'}}>0</span>
           <button className="button" onClick={()=> totalClick14(-1)}  style={{borderRadius:'5px', height:'28px', width:'26px'}}><p className="minus">-</p></button>
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
      <Link to="/Card4" className='btn btn-primary'>Add to Cart</Link> 
      <Link to="/Card4" className="btn btn-primary" style={{marginLeft: '79px', width:'105px'}}>try it on </Link>
    </div>
    </div>
  </div>
</div>
</div>

{/* second row */}

<div style={ { display: "flex", marginLeft: "50px", justifyContent: 'space-between', marginRight: '50px' }}> 
    {/* <!-- first card --> */}
  <div  style={{ marginTop: '50px', display: 'flex', justifyContent: 'center', border: '5px', borderColor: 'black'}}>
    <div className="card">
    <div style={{paddingLeft: '50px', paddingRight: '50px'}}>
    <img src={earing2} className="card-img-top" height="200px" width="150px" alt="ring"/>
  </div>
    <div className="card-body">
      <h5 className="card-title">Earing</h5>
      <p className="fw-light">Classic Style</p>
      <div style={{display: 'flex', alignItems: 'center',alignContent: 'center', flexDirection: 'left'}}>
        <div style={{width: '300px', display: 'flex'}}>
          <div style={{display:'flex'}}>
          <button className="button" onClick={()=> totalClick21(1)} style={{borderRadius:'5px', height:'28px'}}><p className="plus">+</p></button>
          <span id="totalClicks21" style={{marginLeft: '2px', marginRight: '2px'}}>0</span>
           <button className="button" onClick={()=> totalClick21(-1)}  style={{borderRadius:'5px', height:'28px', width:'26px'}}><p className="minus">-</p></button>
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
      <Link to="/Card5" className='btn btn-primary'>Add to Cart</Link> 
      <Link to="/Card5" className="btn btn-primary" style={{marginLeft: '79px', width:'105px'}}>try it on </Link>
    </div>
    </div>
  </div>
</div>
{/* second card */}

<div  style={{ marginTop: '50px', display: 'flex', justifyContent: 'center', border: '5px', borderColor: 'black'}}>
    <div className="card">
    <div style={{paddingLeft: '50px', paddingRight: '50px'}}>
    <img src={necklacesl} className="card-img-top" height="200px" width="150px" alt="ring"/>
  </div>
    <div className="card-body">
      <h5 className="card-title">Gold Necklace</h5>
      <p className="fw-light">22KT Yellow Gold</p>
      <div style={{display: 'flex', alignItems: 'center',alignContent: 'center', flexDirection: 'left'}}>
        <div style={{width: '300px', display: 'flex'}}>
          <div style={{display:'flex'}}>
          <button className="button" onClick={()=> totalClick22(1)} style={{borderRadius:'5px', height:'28px'}}><p className="plus">+</p></button>
          <span id="totalClicks22" style={{marginLeft: '2px', marginRight: '2px'}}>0</span>
           <button className="button" onClick={()=> totalClick22(-1)}  style={{borderRadius:'5px', height:'28px', width:'26px'}}><p className="minus">-</p></button>
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
      <Link to="/Card6" className='btn btn-primary'>Add to Cart</Link> 
      <Link to="/Card6" className="btn btn-primary" style={{marginLeft: '79px', width:'105px'}}>try it on </Link>
    </div>
    </div>
  </div>
</div>
{/* third card */}

<div  style={{ marginTop: '50px', display: 'flex', justifyContent: 'center', border: '5px', borderColor: 'black'}}>
    <div className="card">
    <div style={{paddingLeft: '50px', paddingRight: '50px'}}>
    <img src={necklaces} className="card-img-top" height="200px" width="150px" alt="ring"/>
  </div>
    <div className="card-body">
      <h5 className="card-title">Gold Necklace</h5>
      <p className="fw-light">22KT Yellow Gold</p>
      <div style={{display: 'flex', alignItems: 'center',alignContent: 'center', flexDirection: 'left'}}>
        <div style={{width: '300px', display: 'flex'}}>
          <div style={{display:'flex'}}>
          <button className="button" onClick={()=> totalClick23(1)} style={{borderRadius:'5px', height:'28px'}}><p className="plus">+</p></button>
          <span id="totalClicks23" style={{marginLeft: '2px', marginRight: '2px'}}>0</span>
           <button className="button" onClick={()=> totalClick23(-1)}  style={{borderRadius:'5px', height:'28px', width:'26px'}}><p className="minus">-</p></button>
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
      <Link to="/Card7" className='btn btn-primary'>Add to Cart</Link> 
      <Link to="/Card7" className="btn btn-primary" style={{marginLeft: '79px', width:'105px'}}>try it on </Link>
    </div>
    </div>
  </div>
</div>

{/* fourth card */}

<div  style={{ marginTop: '50px', display: 'flex', justifyContent: 'center', border: '5px', borderColor: 'black'}}>
    <div className="card">
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
           <button className="button" onClick={()=> totalClick24(-1)}  style={{borderRadius:'5px', height:'28px', width:'26px'}}><p className="minus">-</p></button>
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
      <Link to="/Card8" className="btn btn-primary" style={{marginLeft: '79px', width:'105px'}}>try it on </Link>
    </div>
    </div>
  </div>
</div>
</div>

{/* third row */}

<div style={ { display: "flex", marginLeft: "50px", justifyContent: 'space-between', marginRight: '50px' }}> 
    {/* <!-- first card --> */}
  <div  style={{ marginTop: '50px', display: 'flex', justifyContent: 'center', border: '5px', borderColor: 'black'}}>
    <div className="card">
    <div style={{paddingLeft: '50px', paddingRight: '50px'}}>
    <img src={necklacexl} className="card-img-top" height="200px" width="150px" alt="ring"/>
  </div>
    <div className="card-body">
      <h5 className="card-title">Gold Necklace</h5>
      <p className="fw-light">22KT Yellow Gold</p>
      <div style={{display: 'flex', alignItems: 'center',alignContent: 'center', flexDirection: 'left'}}>
        <div style={{width: '300px', display: 'flex'}}>
          <div style={{display:'flex'}}>
          <button className="button" onClick={()=> totalClick31(1)} style={{borderRadius:'5px', height:'28px'}}><p className="plus">+</p></button>
          <span id="totalClicks31" style={{marginLeft: '2px', marginRight: '2px'}}>0</span>
           <button className="button" onClick={()=> totalClick31(-1)}  style={{borderRadius:'5px', height:'28px', width:'26px'}}><p className="minus">-</p></button>
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
      <Link to="/Card9" className='btn btn-primary'>Add to Cart</Link> 
      <Link to="/Card9" className="btn btn-primary" style={{marginLeft: '79px', width:'105px'}}>try it on </Link>
    </div>
    </div>
  </div>
</div>

</div>
</body>

</>
     )
}

export default Card
