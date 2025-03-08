//modules
import { motion } from 'framer-motion';

//routers and loaders
import { useLoaderData } from 'react-router-dom';

//components
import PageTitle from '../components/PageTitle';
import UserPrompt from '../components/UserPrompt';
import AiResponse from '../components/AiResponse';

const Conversation = () => {
  const {
    conversation: { title, chats },
  } = useLoaderData() || {};
  return (
    <>
      {/* Meta title */}

      <PageTitle title={`${title} | Synchat`} />

      <motion.div className=''>
        {chats.map((chat) => (
          <>
            <div key={chat.$id}>
                {/* user prompt */}
                <UserPrompt text={chat.user_prompt}/>

            
                {/* ai response */}

                <AiResponse aiResponse={chat.ai_response}/>
            </div>
          </>
        ))}
      </motion.div>
    </>
  );
};

export default Conversation;
