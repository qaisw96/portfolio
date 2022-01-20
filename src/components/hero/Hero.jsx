import './Hero.css';
import { VscCode } from 'react-icons/vsc';
import { createArray } from '../../helpers/createArray';
import { SiFrontendmentor } from 'react-icons/si';

const Hero = () => {
  const times = createArray(50);
  return (
    <div className='hero-container'>
      <div className='hero section'>
        {times.map((item) => (
          <VscCode className='code-icon' />
        ))}
      </div>
      <div className='me-container'>
        <div className='line-1'></div>
        <div className='line-2'></div>
        <div className='me'>
          <h3 className='my-name'>Qais Ata</h3>
          <p className='position'>Frontend Developer</p>
          <SiFrontendmentor className='icon' />
        </div>
      </div>
    </div>
  );
};

export default Hero;
