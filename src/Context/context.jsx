import React, { createContext, useState } from "react";
import run  from '../config/gemini'; 

const Context = createContext();

const ContextProvider = (props) => {
    
    const [input, setInput] = useState('');
    const [recentPrompt, setRecentPrompt] = useState('');
    const [prevPrompts, setPrevPrompts] = useState([]);
    const [response, setResponse] = useState(false);
    const [loading, setLoading] = useState(false);
    const [resultData, setResultData] = useState('');

    const newChat = () =>{
        setLoading(false);
        setResponse (false);

    }

    const delayPara = (index, nextWord) =>{
        setTimeout(function(){
            setResultData(prev => prev+ nextWord);
        }, 75*index)
    }


    const onSent = async (prompt) => {
        setResultData('');
        setLoading(true);
        setResponse(true);
        let result;
        if(prompt !== undefined){
            result = await run(prompt);
            setRecentPrompt(prompt)
        } else {
            setRecentPrompt(input);
            setPrevPrompts(prev=>[...prev, input])
            result = await run(input);
        }

        
        let responseArray = result.split("**");
        let newRes = "";
        for(let i = 0; i < responseArray.length; i++){
            if(i === 0 || i % 2 !== 1){
                newRes += responseArray[i]
            } else {
                newRes += "<b>" + responseArray[i] + "</b>";
            }
        }
        let resTwo = newRes.split("*").join("<br/>");

        let resThree = resTwo.split(" ");

        for (let i = 0; i < resThree.length; i++){
            const nextWord = resThree[i];
            delayPara(i, nextWord+" ")
        }
        setLoading(false);
        setInput('');
    };


    const contextValue = {
        onSent,
        input,
        setInput,
        recentPrompt,
        setRecentPrompt,
        prevPrompts,
        setPrevPrompts,
        response,
        setResponse,
        loading,
        setLoading,
        resultData,
        setResultData,
        newChat
    };

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    );
};

export { Context };
export default ContextProvider;
