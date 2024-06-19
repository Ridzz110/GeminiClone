import React from 'react';
import { Context } from '../../Context/context';
import userIcon from '../../assets/Tao Saotome.jfif';
import geminiIcon from '../../assets/gemini_icon.png';

const Content = () => {
    const { recentPrompt, response, resultData,loading } = React.useContext(Context);

    return (
        <div className="z-0 flex flex-col items-center justify-center w-full h-full overflow-y-auto pt-4">
            {!response ? (
                <>
                    <div className="font-noto lg:text-6xl text-4xl lg:text-start text-center font-medium mt-14">
                        <p className="bg-gradient-to-r from-gradientBlue via-gradientPurple to-gradientPink inline-block text-transparent bg-clip-text ">
                            Hello, Pookie
                        </p>
                        <p className="text-textGrey">How can I help you today?</p>
                    </div>
                    <div className=" w-7/12 flex justify-center mt-8">
                        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 rounded-xl font-noto font-light text-md h-52">
                            {/* Example cards */}
                            <div className="bg-side_bar_grey hover:bg-hovered_grey rounded-xl p-4 text-start flex flex-col justify-between">
                                <p>Ideas to surprise a friend on their birthday</p>
                                <div className="self-end bg-white p-2 rounded-full flex justify-center items-center w-auto">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368">
                                        <path d="m260-260 300-140 140-300-300 140-140 300Zm220-180q-17 0-28.5-11.5T440-480q0-17 11.5-28.5T480-520q17 0 28.5 11.5T520-480q0 17-11.5 28.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
                                    </svg>
                                </div>
                            </div>
                            <div className="bg-side_bar_grey hover:bg-hovered_grey rounded-xl p-4 text-start flex flex-col justify-between">
                                <p>Help design a database for a business</p>
                                <div className="self-end bg-white p-2 rounded-full flex justify-center items-center w-auto">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368">
                                        <path d="M320-240 80-480l240-240 57 57-184 184 183 183-56 56Zm320 0-57-57 184-184-183-183 56-56 240 240-240 240Z"/>
                                    </svg>
                                </div>
                            </div>
                            <div className="bg-side_bar_grey hover:bg-hovered_grey rounded-xl p-4 text-start flex flex-col justify-between">
                                <p>Come up with a recipe for an upcoming event</p>
                                <div className="self-end bg-white p-2 rounded-full flex justify-center items-center w-auto">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368">
                                        <path d="M160-120v-170l527-526q12-12 27-18t30-6q16 0 30.5 6t25.5 18l56 56q12 11 18 25.5t6 30.5q0 15-6 30t-18 27L330-120H160Zm80-80h56l393-392-28-29-29-28-392 393v56Zm560-503-57-57 57 57Zm-139 82-29-28 57 57-28-29ZM560-120q74 0 137-37t63-103q0-36-19-62t-51-45l-59 59q23 10 36 22t13 26q0 23-36.5 41.5T560-200q-17 0-28.5 11.5T520-160q0 17 11.5 28.5T560-120ZM183-426l60-60q-20-8-31.5-16.5T200-520q0-12 18-24t76-37q88-38 117-69t29-70q0-55-44-87.5T280-840q-45 0-80.5 16T145-785q-11 13-9 29t15 26q13 11 29 9t27-13q14-14 31-20t42-6q41 0 60.5 12t19.5 28q0 14-17.5 25.5T262-654q-80 35-111 63.5T120-520q0 32 17 54.5t46 39.5Z"/>
                                    </svg>
                                </div>
                            </div>
                            <div className="bg-side_bar_grey hover:bg-hovered_grey rounded-xl p-4 text-start flex flex-col justify-between">
                                <p>Brainstorm a tagline for my online business</p>
                                <div className="self-end bg-white p-2 rounded-full flex justify-center items-center w-auto">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368">
                                        <path d="M160-120v-170l527-526q12-12 27-18t30-6q16 0 30.5 6t25.5 18l56 56q12 11 18 25.5t6 30.5q0 15-6 30t-18 27L330-120H160Zm80-80h56l393-392-28-29-29-28-392 393v56Zm560-503-57-57 57 57Zm-139 82-29-28 57 57-28-29ZM560-120q74 0 137-37t63-103q0-36-19-62t-51-45l-59 59q23 10 36 22t13 26q0 23-36.5 41.5T560-200q-17 0-28.5 11.5T520-160q0 17 11.5 28.5T560-120ZM183-426l60-60q-20-8-31.5-16.5T200-520q0-12 18-24t76-37q88-38 117-69t29-70q0-55-44-87.5T280-840q-45 0-80.5 16T145-785q-11 13-9 29t15 26q13 11 29 9t27-13q14-14 31-20t42-6q41 0 60.5 12t19.5 28q0 14-17.5 25.5T262-654q-80 35-111 63.5T120-520q0 32 17 54.5t46 39.5Z"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <div className="flex flex-col items-center justify-start w-full h-full p-2">
                    <div className='flex flex-row justify-start items-center w-2/3 mt-16 text-end p-4 text-md font-noto'>
                        <img src={userIcon} alt="user" className="h-8 rounded-full mr-4" />
                        <p>{recentPrompt}</p>
                    </div>
                    <div className='w-3/5 h-auto flex flex-row justify-start items-start pb-40'>
                        <img src={geminiIcon} alt="gemini" className="h-8 rounded-full" />
                        {loading ? (
                             <div className='flex flex-col w-full justify-start animate-pulse'>
                                <div className={`h-4 ml-4 w-full bg-loading-size bg-gradient-to-r from-white via-loadBlue to-white animate-loading-combined`}></div>
                                <div className={`h-4 ml-4 w-full bg-loading-size bg-gradient-to-r from-white via-loadBlue to-white animate-loading-combined mt-2`}></div>
                                <div className={`h-4 ml-4 w-2/3 bg-loading-size bg-gradient-to-r from-white via-loadBlue to-white animate-loading-combined mt-2`}></div>
                         </div>
                        ) : (
                            <p dangerouslySetInnerHTML={{ __html: resultData }} className='text-md text-left font-noto'></p>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Content;
