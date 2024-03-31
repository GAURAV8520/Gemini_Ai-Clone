import React, { useContext } from 'react';
import { assets } from '../../assets/assets'
import '../Main/main.css'

import { Context } from '../../context/Context'

function Main() {
  
  const {onSent, recentPrompt, showResult, loading, resultData, setInput, input} = useContext(Context);


  return (
    <div className='h-lvh relative  w-full '>
      <div className="flex align-middle justify-between px-6 my-6">
        <p className='text-center text-2xl text-slate-100'>Gaurav_Ai</p>
        <img className='w-10 h-10 border-full rounded-full' src={assets.user_icon} alt="" />
      </div>

      {!showResult ?
        <>
          <div className="main w-auto mx-20 ">
            <div className="greet my-28 text-3xl font-bold w-70">
              <p className='text-6xl my-3 pl-3'><span >Hello ..</span></p>
              <p className='text-5xl my-2 pl-4 font-bold text-left text-slate-100'>How can i help you today...</p>
            </div>

            <div className="cards relative mt-20">
              <div className="card">
                <p>Suggest places to see on an upcoming road trip</p>
                <img src={assets.compass_icon} alt="" />
              </div>
              <div className="card">
                <p>Brifely summarize this concept: urban planning</p>
                <img src={assets.bulb_icon} alt="" />
              </div>
              <div className="card">
                <p>Brainstorm team bonding activities for our work retreat</p>
                <img src={assets.message_icon} alt="" />
              </div>
              <div className="card">
                <p>Improve the readability of the following code</p>
                <img src={assets.code_icon} alt="" />
              </div>
            </div>
          </div>
        </>
        :
        <>
          <div className=''>
            <div className="mx-20  flex items-centre px-10 py-3 mt-10">
              <img className='w-10 h-10 border-full rounded-full ' src={assets.user_icon} alt="" />
              <p className='pl-2 text-2xl text-slate-100'>{recentPrompt}</p>
            </div>
            <div className='scrollbar mx-20 flex items-centre px-10 py-2  overflow-y-scroll  h-96' >
              <img className='w-10 h-10 border-full rounded-full ' src={assets.gemini_icon} alt="" />
              {loading ?
                <div className='loader w-full flex flex-col gap-4 animate-pulse'>
                  <hr className="h-4 w-full bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full" />
                  <hr className="h-4 w-full bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full" />
                  <hr className="h-4 w-full bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full" />
                </div>
                :
                <p className='text-slate-100 text-1xl' dangerouslySetInnerHTML={{ __html: resultData }}></p>
              }
            </div>
          </div>
        </>
      }̥

      <footer className='absolute bottom-0 w-full'>
        <div className="mx-20 px-5 my-5 ">
          <div className="flex justify-between items-centre gap-5 bg-slate-200 py-3 px-5 rounded-full ">
            <input onChange={(e) => setInput(e.target.value)} value={input} className='flex-1 border-none outline-none bg-transparent  px-2 py-1 text-md' type="text" placeholder='Enter a prompt here' />
            <div className='flex justify-end items-center gap-2'>
              <img className='w-8 cursor-pointer' src={assets.gallery_icon} alt="" />
              <img className='w-8 cursor-pointer' src={assets.mic_icon} alt="" />
              <img onClick={() => onSent()} className='w-8 cursor-pointer' src={assets.send_icon} alt="" />
            </div>
          </div>

          <p className='mx-20 px-5 text-1xl text-center my-2 text-slate-100 '>Gemini ai may display false information kindly note that this</p>
        </div>
      </footer>
    </div>
  )
}

export default Main;
