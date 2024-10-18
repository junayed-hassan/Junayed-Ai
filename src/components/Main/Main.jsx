import { assets } from '../../assets/assets';
import { IoMicOutline } from "react-icons/io5";
import { BiSend } from "react-icons/bi";
import { useContext, useState} from 'react';
import { MdQuestionMark } from "react-icons/md";
import { DiAsterisk } from "react-icons/di";
import { Context } from '../../context/Context';
import './Main.css';


function Main() {

  const {onSent,recentPrompt,showResult,loading,resultData,setInput,input} = useContext(Context);
  const [micOutline,setMicOutline] =  useState(false);
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      setInput(onSent()).join(''); 
    }
  };

  return (
    <div className="flex-1 pb-15vh relative">
      <div className="flex items-center justify-between text-base	py-3 px-5 text-[#585858]">
        <p className='text-xl font-medium'><i>Junayed Hasan Ai</i></p>
        <img className='w-10 h-10 rounded-[50%] border-4 border-green-100' src={assets.user_icon} alt="#" />
      </div>
      <div className="max-w-[900px] m-auto">
        {
          !showResult
          ? <>
        <div className="m-6 text-5xl font-medium p-3 text-[#c4c7c5] ">
          <p>What can I help with?</p>
        </div>
        <div className="max-w-[420px] mt-[12%] my-cart">
          <div className=" p-4 bg-green-50 rounded-lg relative cursor-pointer hover:bg-green-100 mx-[5%]">
            <p className='text-sm	text-[#585858]'>As a web developer, I showcase my expertise through innovative projects on <span className='text-xl font-medium underline text-red-300'><a target='_blank' href="https://github.com/junayed-hassan">GitHub</a></span> and professional insights on <span className='text-xl font-medium underline text-red-300 '><a target='_blank' href="https://www.linkedin.com/in/junayed-hassan/">LinkedIn</a></span>. Visit my profiles to explore the latest in web development and connect for collaboration.</p>
          </div>

        </div>
          </>
          : <div className='result'>
              <div className='flex items-center'>
                <DiAsterisk className='text-2xl me-2'/>
                <p>{recentPrompt}</p>
                <MdQuestionMark />
              </div>
              <div className='flex mt-3 mb-5'>
                <img className='w-5 h-5 rounded-3xl me-3' src={assets.user_icon1} alt="#" />

                {loading
                 ? <div className='loader'>
                  <hr />
                  <hr />
                  <hr />
                  <hr />
                  <hr />
                  <hr />
                 </div> 
                : <p className='text-sm font-light leading-7' dangerouslySetInnerHTML={{__html:resultData}}></p>
                }

              </div>
            </div>
        }
        <div className='absolute bottom-0 w-full max-w-[900px] px-5 m-auto mb-5'>
          <div className='flex items-center justify-between gap-5 py-2.5 px-5 rounded-[50px] bg-green-50'>
            <input onKeyDown={handleKeyPress} onChange={(e)=>setInput(e.target.value)} value={input} className='flex-1 bg-transparent border-none outline-none p-2 text-sm' type="text" placeholder='Enter a prompt here' />
            <div className='flex gap-3 items-center'>
              <IoMicOutline onClick={()=>setMicOutline(prev=>!prev)} className='text-2xl cursor-pointer' />
                {micOutline ? <p className="text-rose-400">null</p> :null}
              {input?<BiSend onClick={()=>onSent()} className='text-2xl cursor-pointer' />:null}
            </div>
          </div>
          <p className='my-3 mx-auto text-center text-xs font-light mt-5'>Using Google Gemini API with React JS.   Junayed Ai is developed it is an Ai web, like Google Gemini or ChatGPT.</p>
        </div>
      </div>
    </div>
  )
}

export default Main



       