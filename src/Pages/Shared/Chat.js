import React, { useState } from 'react';
import model from '../../images/socailIcon/modal_Icon.png'
import {  HiOutlineChatAlt2} from 'react-icons/hi';
import {  ImCross} from 'react-icons/im';
const Chat = () => {
   
    

    return (
        <div className=''>
{/* The button to open modal */}
<label htmlFor="my_modal_6" className="animate-pulse text-6xl"><img className='w-16 mb-2' src={model} alt="" /></label>

{/* Put this part before </body> tag */}
<input type="checkbox" id="my_modal_6" className="modal-toggle " />
<div className="modal ">
  <div className="modal-box w-40 ">
    <a href="http://" target="_blank" rel="noopener noreferrer">k</a>
    <div className="modal-action">
      <label htmlFor="my_modal_6" className="btn"><ImCross/></label>
    </div>
  </div>
</div>
        </div>
    );
};

export default Chat;
