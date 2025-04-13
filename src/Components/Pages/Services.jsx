import React from 'react'

function Services() {
  return (
    <>
   <h1 className="text-center">Services</h1>
<div className="container mt-5">
    <div className="row">
  {/* Card First */}
  <div className="col-sm-6 col-lg-3">
     <img src="./images/Services.png" className="card-img-top" alt="card visual" />
        <div className="card-body">
          <h5 className="card-title">Web Development</h5>
          <p className="card-text">“We don’t just build websites—we craft meaningful digital experiences that captivate your audience, reflect your brand’s identity, and help your business grow. Our design process combines creative vision with strategic thinking to deliver stunning, high-performance web solutions.”</p>
        </div>
      </div>


    {/* Card Second */}
    <div className="col-sm-6 col-lg-3">
      
        <img src="./images/services3.png" className="card-img-top" alt="card visual" />
        <div className="card-body">
          <h5 className="card-title">Software development</h5>
          <p className="card-text">"At LunarDev, we craft secure, scalable, and high-performance software tailored to your business needs. Our mission is to deliver reliable digital solutions that empower growth and protect your users every step of the way."

</p>
        </div>
      </div>
    
{/* Card Third */}
<div className="col-sm-6 col-lg-3">
     
        <img src="./images/service2.png" className="card-img-top" alt="card visual" />
        <div className="card-body">
          <h5 className="card-title">We make Secure Software</h5>
          <p className="card-text"> "We specialize in crafting secure, scalable, and high-performing software solutions — because your business deserves nothing less than reliable digital innovation."</p>
        </div>
      </div>
    </div>

</div>
    </>
  )
}

export default Services
