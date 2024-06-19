import {React, useContext, useEffect} from 'react';
import Navbar from '../Navbar/Navbar';
import {Context} from '../../Context/context';
import Content from '../Content/Content'
import Sidebar from '../sidebar/Sidebar';

const Main = () => {

   
    const {input, setInput, onSent, recentPrompt, setRecentPrompt, prevPrompt, setPrevPrompt, response, loading, resultData} = useContext(Context);

    useEffect(() => {
        const handleKeyPress = (event) => {
            if (event.key === 'Enter' && input !== "") {
                onSent();
            }
        };

        window.addEventListener('keypress', handleKeyPress);

        return () => {
            window.removeEventListener('keypress', handleKeyPress);
        };
    }, [onSent]);


    return (
        <>
        <div className="flex h-screen w-screen overflow-hidden">
            <Sidebar />
            <div className="flex flex-col w-full">
                <Navbar />
                <div className="flex-grow relative overflow-y-auto">
                    <Content />
                    <div className='fixed bottom-0 left-0 right-0 bg-gradient-to-t from-white via-white to-transparent p-4 h-36 flex flex-col justify-center items-center'>
                        <div className="bg-side_bar_grey lg:w-6/12 w-9/12 h-16 p-4 px-8 mt-3 flex justify-between items-center rounded-full">
                            <input 
                                onChange={(e) => setInput(e.target.value)} 
                                value={input} 
                                className="font-noto w-11/12 text-black bg-side_bar_grey outline-none" 
                                type="text" 
                                placeholder="Enter a Prompt Here" 
                            />
                            <div className={`flex justify-between transition-all duration-300 ease-in-out ${input !== '' ? 'w-24' : 'w-16'}`}>
                                <div className="group relative flex items-center justify-center p-2">
                                    <div className="absolute flex items-center justify-center inset-0 rounded-full bg-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    <svg className="relative z-10" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368">
                                        <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h360v80H200v560h560v-360h80v360q0 33-23.5 56.5T760-120H200Zm480-480v-80h-80v-80h80v-80h80v80h80v80h-80v80h-80ZM240-280h480L570-480 450-320l-90-120-120 160Zm-40-480v560-560Z"/>
                                    </svg>
                                </div>
                                <div className="group relative flex items-center justify-center p-2">
                                    <div className="absolute flex items-center justify-center inset-0 rounded-full bg-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    <svg className="relative z-10" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368">
                                        <path d="M480-400q-50 0-85-35t-35-85v-240q0-50 35-85t85-35q50 0 85 35t35 85v240q0 50-35 85t-85 35Zm0-240Zm-40 520v-123q-104-14-172-93t-68-184h80q0 83 58.5 141.5T480-320q83 0 141.5-58.5T680-520h80q0 105-68 184t-172 93v123h-80Zm40-360q17 0 28.5-11.5T520-520v-240q0-17-11.5-28.5T480-800q-17 0-28.5 11.5T440-760v240q0 17 11.5 28.5T480-480Z"/>
                                    </svg>
                                </div>
                                {input !== '' && (
                                    <div className="group relative flex items-center justify-center p-2">
                                        <div className="absolute flex items-center justify-center inset-0 rounded-full bg-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        <svg onClick={()=>onSent()} className="relative z-10" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368">
                                            <path d="M120-160v-640l760 320-760 320Zm80-120 474-200-474-200v140l240 60-240 60v140Zm0 0v-400 400Z"/>
                                        </svg>
                                    </div>
                                )}
                            </div>
                        </div>
                        <p className='text-black font-noto text-sm'>
                            Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps
                        </p>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Main;
