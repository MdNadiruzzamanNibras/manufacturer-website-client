import React from 'react';

const Protfolion = () => {
    return (
        <div className="card w-auto bg-base-100 my-6 bg-gray-400 shadow-xl">
        <div className="card-body items-center text-center">
            <h1 className='text-center text-6xl font-extrabold text-blue-800'>MD. Nadiruzzaman Nibras</h1>
            <h4 className='text-center text-2xl font-bold text-blue-800'>nadiruzzamannibras@gmail</h4>
            <div className='my-8'>
            <h2 className='text-center text-5xl font-bold text-white'>Education</h2>
             <h5 className='text-center  text-xl font-bold text-white'>MBA(Management)</h5>
             <h4 className='text-center  text-2xl font-bold text-white'>Carmichael College(National University)</h4>
            </div>
             <div className='my-8'>
             <h2 className='text-center text-5xl font-bold text-white'>Web Development Skill</h2>
             <div className='flex align-middle justify-around'>
                 <div>
                 <h4 className='text-center  text-3xl font-bold text-white'>Frontend </h4>
                 <ul>
                     <li className='text-center  text-lg font-bold text-white'>HTML5</li>
                     <li className='text-center  text-lg font-bold text-white'>CSS3</li>
                     <li className='text-center  text-lg font-bold text-white'>JavaScript</li>
                     <li className='text-center  text-lg font-bold text-white'>Bootstrap</li>
                     <li className='text-center  text-lg font-bold text-white'>Tailwind</li>
                     <li className='text-center  text-lg font-bold text-white'>DaisyUI</li>
                     <li className='text-center  text-lg font-bold text-white'>React JS</li>
                    
                 </ul>
                 </div>
                 <div>
                 <h4 className='text-center  text-3xl font-bold text-white'>Backend</h4>
                 <ul>
                     <li className='text-center  text-lg font-bold text-white'>Mongodb</li>
                     <li className='text-center  text-lg font-bold text-white'>Express js</li>
                     <li className='text-center  text-lg font-bold text-white'>Node js</li>
                     <li className='text-center  text-lg font-bold text-white'></li>
                     <li className='text-center  text-lg font-bold text-white'></li>
                 </ul>
                 </div>
             </div>

             </div>
            <div>
                <h4 className='text-2xl font-bold'>Live Website Link</h4>
            <a class="link link-primary" href="https://the-traveler-e161e.web.app/">The Traveler</a><br />
            <a class="link link-primary" href="https://iconic-laptop-mn.netlify.app/">Iconic Laptop</a><br />
            <a class="link link-primary" href="https://six-season-convention-center.netlify.app/">SixSeason Convention Center</a>

        </div>
        </div>
        </div>
    );
};

export default Protfolion;