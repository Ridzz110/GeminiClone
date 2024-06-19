import React, { useState, useContext } from 'react';
import {Context} from '../../Context/context'

const Sidebar = () => {
    const [isExtended, setIsExtended] = useState(false);
    const {onSent, prevPrompts, setRecentPrompt, newChat} = useContext( Context );

    const loadPrompt =(prompt) => {
        setRecentPrompt(prompt)
        onSent(prompt)
    }

    const handleEvent = () => {
        setIsExtended(!isExtended);
    };

    return (
        <div className={`fixed z-20 left-0 bg-side_bar_grey h-dvh flex flex-col justify-between px-8 py-5 font-noto font-medium ${isExtended ? ' w-64 items-start pl-4' : 'w-14 items-center pl-8'} transition-all duration-300`}>
            <div className={`flex flex-col ${isExtended ? 'items-start' : 'items-center'}`}>
                <div onClick={handleEvent} className="cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </div>
                <div onClick={()=>newChat()} className={`bg-sidebar_circle_grey hover:bg-hovered_grey h-10 w-10 rounded-full flex items-center ${isExtended ? 'w-32 justify-between px-4 mt-14' : 'w-10 justify-center mt-14'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#1f1f1f" className="size-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                    {isExtended && <p className="text-md text-black text-sm ml-2">New Chat</p>}
                </div>
                {isExtended && (
                    <div className="flex flex-col items-start mt-5 h-56 overflow-y-auto">
                        <p className='text-sm'>Recent</p>
                        {prevPrompts.map((item, index)=>{
                            return (
                                <div className=" w-54 flex justify-start items-center mt-5 hover:bg-sidebar_circle_grey p-2 px-4 rounded-full" 
                                onClick={()=> loadPrompt(item) }>
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368">
                                    <path d="M880-80 720-240H160q-33 0-56.5-23.5T80-320v-480q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v720ZM160-320h594l46 45v-525H160v480Zm0 0v-480 480Z"/>
                                </svg>
                                <p className='text-sm ml-4'>{item.slice(0,18)} ...</p>
                            </div>
                            )
                        })}
                    </div>
                )}
            </div>
            <div className="h-24 flex flex-col items-start justify-between">
                <div className='flex items-start'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                </svg>
                {isExtended ? <p className='pl-4 text-black text-sm'>Help</p> : null}
                </div>
                <div className='flex items-start'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                {isExtended ? <p className='pl-4 text-black text-sm'>Activity</p> : null}
                </div>
                <div className='flex items-start'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
                {isExtended ? <p className='pl-4 text-black text-sm'>Settings</p> : null}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;

