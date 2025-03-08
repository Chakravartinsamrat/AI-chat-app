import PropTypes from "prop-types";
import { iconlogo } from "../assets/assets";
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const AiResponse = ({aiResponse, children}) => {
  return(
    <div className="">
        <figure className="">
            <img src={iconlogo} width={32} height={32} alt=""  />
        </figure>
        {children}
        <div className="markdown-content">
        <Markdown remarkPlugins={[remarkGfm]}>
                {typeof aiResponse === 'string' ? aiResponse : ''}
        </Markdown>
        </div>
    </div>
  );
}

AiResponse.propTypes ={
    aiResponse: PropTypes.string,
    children:PropTypes.any,
};

export default AiResponse;