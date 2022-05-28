import React from 'react';
import helmet from '../../images/route/thumb-php-500x500.jpg'

const NewProduct = () => {
    return (
        <div className="card w-auto my-4 bg-base-100 shadow-xl image-full">
      
  <figure><img src={helmet} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className=" text-center text-5xl ">New Products</h2>
    <h1 className='text-2xl text-center'>Classy Helmet</h1>
    <h6 className='text-xl text-justify'>About this item
</h6>
    
    <ul className='text-justify'>
      <li>High Impact ABS Material Shell with Aerodynamic design</li>
      <li>ISI Certified with IS no.: IS 4151:2015 and CM/L no.: 8300128208
</li>
      <li> Metallic Quick release silent buckle
</li>
      <li>Removable and washable lining, it is also odor resistant helping the helmet stay fresher, longer in between cleaning, removable nose guard, Collarbone safe profile.</li>
      <li>
Scratch resistant & UV resistant. Visor in optical polycarbonate, easy Visor mechanism, it is equipped with a second sun visor which is made from tinted polycarbonate.</li>
      <li> 1 Mouth vent, 2 side vents for air inlet, 4 back exhaust vents and it comes with new stylish peak
</li>
    </ul>

    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    );
};

export default NewProduct;