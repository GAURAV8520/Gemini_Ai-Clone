import React, { useCallback, useContext, useState } from 'react'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context';


function Sidebar() {

  const [extended_nav,Setextended_nav]=useState(false);
  const {newChat,onSent,prevPrompt,setRecentPrompt}=useContext(Context);

  const loadPrompt=async (prompt)=>{
    setRecentPrompt(prompt)
    await onSent(prompt)
  }

  return (
    <div className='h-lvh inline-flex flex-col justify-between bg-neutral-800 text-zinc-400 w-auto text-lg p-2'>
      
      <div className='m-2 '>
            <img onClick={()=>Setextended_nav(prev=>!prev)} className='w-10 h-10 m-2'src={assets.menu_icon } alt="" />
            <div onClick={()=>newChat()} className='mt-10 inline-flex justify-center items-center  border border-gray-500 rounded-3xl p-2 gap-1 px-5' >
                <img className='w-5 h-5 'src={assets.plus_icon} alt="" />
                {extended_nav?<p className='text-center '>New Chat</p>:null}
           </div>
          {extended_nav?
          <div className='mt-5 flex flex-col'>
            <p className='text-md mb-4'>Recent</p>
            {prevPrompt.map((item,index)=>{
                return(
                  <div onClick={()=>loadPrompt(item)} className=' inline-flex  justify-left  items-center p-1 transition ease-in duration-1000 hover:border hover:bg-gray-100 hover:text-black rounded-3xl px-3'>
                         <img className='w-8 h-8 p-1' src={assets.message_icon} alt="" />
                         <p className='text-left pl-2 text-sm'>{item.slice(0,18)}...</p>
                 </div>
                )
            })}
            
           </div>
          :null} 
      </div>

      <div className='m-2 bottom inline-flex flex-col  '>
          <div className='bottom-item inline-flex justify-center items-center transition ease-in duration-1000 hover:border hover:bg-gray-100 hover:text-black rounded-3xl my-2 p-1'>
            <img className='w-6 h-6' src={assets.question_icon} alt="" />
          {extended_nav?<p className='w-auto text-center pl-2'>Help</p>:null}
          </div>
          <div className='bottom-item inline-flex align-middle justify-center transition ease-in duration-500 hover:border  hover:bg-gray-100 hover:text-black rounded-3xl  my-2 p-1'>
            <img className=' w-6 h-6' src={assets.history_icon} alt="" />
            {extended_nav?<p className='w-auto text-center pl-2'>Activity</p>:null}
          </div>
          <div className='bottom-item inline-flex align-middle justify-center transition ease-in duration-1000 hover:border hover:bg-gray-100 hover:text-black rounded-3xl  my-2 p-1'>
            <img className='w-6 h-6' src={assets.setting_icon} alt="" />
            {extended_nav?<p className='w-auto text-center pl-2'> Settings</p>:null}
          </div>
      </div>
    </div>
  )
}

export default Sidebar
