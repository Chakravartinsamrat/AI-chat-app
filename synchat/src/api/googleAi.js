import model from "../lib/googleAi";
// Add this near the top of your code to debug

const getConversationTitle= async(userPrompt) =>{
    try{
        const result = await model.generateContent(
            `Given a user Prompt, generate a concise and informative title that accurately describes the conversation. Consider keywords, topics, and overall intent of the prompt, Response in plain Text format, no Markdown.'

            Prompt:${userPrompt}`,
        );
        return result.response.text();
    }
    catch(err){
        console.log(`Error generating conversation title:${err.message}`);
        console.log("All env vars:", import.meta.env);
    
    }
};


const getAiResponse = async (userPrompt,chats=[]) =>{
    try{
        model.generateCofig = {temperature: 1.5};
        const chat = model.startChat({history:chats });
        const result = await chat.sendMessage(userPrompt);

        return result.response.text();

    }catch(err){
        console.log(`Error generating AI response: ${err.message}`);
    }
};





export {getConversationTitle, getAiResponse}