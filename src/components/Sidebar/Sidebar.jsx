/* eslint-disable no-unused-vars */
import { MdOutlineMenu } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import { IoChatboxOutline } from "react-icons/io5";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { PiClockCounterClockwise } from "react-icons/pi";
import { MdOutlineSettings } from "react-icons/md";
import { useContext, useState } from "react";
import { Context } from "../../context/Context";

function Sidebar() {
  const [extended,setExtended] = useState(false);
  const [help,setHelp] = useState(false);
  const [activity,setActivity] = useState(false);
  const [settings,setSettings] = useState(false);
  const {onSent,prevPrompts,setRecentPrompt,newChat} = useContext(Context);
  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt)
    await onSent(prompt)
  }
  return (
    <div className="lg:min-h-screen min-h-[600px]  inline-flex flex-col justify-between bg-green-50 py-6 px-4 font-outfit">
        <div className="top">
            <MdOutlineMenu onClick={()=>setExtended(prev=>!prev)} className="text-2xl block ms-2.5 cursor-pointer"/>
            <div onClick={()=>newChat()} className="mt-[50px] inline-flex items-center gap-2.5 py-2.5 px-3.5 bg-green-100 rounded-[50px] text-xs text-gray-600 cursor-pointer">
                <IoMdAdd className="text-3xl"/>
                {extended ?<p>New Chat</p> : null}
            </div>
            {extended ? 
            <div className="flex flex-col">
                <p className="mt-7 mb-5">Recent</p>
                {prevPrompts.map((item,index)=> {
                    return (
                        <div onClick={()=>loadPrompt(item)} key={index} className="flex items-start gap-2.5 p-2.5 pe-9 rounded-[50px] text-[#282828] cursor-pointer hover:bg-[#e2e6eb]">
                            <IoChatboxOutline className="text-xl"/>
                            <p>{item.slice(0,15)}...</p>
                        </div>
                    )
                })}
                
            </div>
            : 
            null
        }
            
        </div>
        <div className="">
            <div className="flex items-start gap-2.5 p-2.5 pe-4 rounded-[50px] text-[#282828] cursor-pointer hover:bg-green-100">
                <IoMdHelpCircleOutline onClick={()=>setHelp(prev=>!prev)} className="text-xl"/>
                {help ? <p className="text-rose-400">null</p> :null}
                {extended ? <p>Help</p> : null}
            </div>
            <div className="flex items-start gap-2.5 p-2.5 pe-4 rounded-[50px] text-[#282828] cursor-pointer hover:bg-green-100">
                <PiClockCounterClockwise onClick={()=>setActivity(prev=>!prev)} className="text-xl"/>
                {activity ? <p className="text-rose-400">null</p> :null}
                {extended ? <p>Activity</p> : null}
            </div>
            <div className="flex items-start gap-2.5 p-2.5 pe-4 rounded-[50px] text-[#282828] cursor-pointer hover:bg-green-100">
                <MdOutlineSettings onClick={()=>setSettings(prev=>!prev)} className="text-xl"/>
                {settings ? <p className="text-rose-400">null</p> :null}
                {extended ? <p>Settings</p> : null}
            </div>
        </div>
    </div>
  )
}

export default Sidebar