import './Social.css';

import {
  AiOutlineLinkedin,
  AiOutlineFacebook,
  AiFillGithub,
} from 'react-icons/ai';

const Social = () => {
  return (
    <div className='section'>
      <div className='icons'>
        <a href='https://www.linkedin.com/in/qais-ata-079880168/'>
          <AiOutlineLinkedin className='icon' />
        </a>
        <a href='https://www.facebook.com/qais.wa.96'>
          <AiOutlineFacebook className='icon' />
        </a>
        <a href='https://github.com/qaisw96'>
          <AiFillGithub className='icon' />
        </a>
      </div>
    </div>
  );
};

export default Social;
