import { SiExpress, SiMongodb, SiPostgresql, SiWebflow } from 'react-icons/si';
import { FaReact, FaWordpressSimple } from 'react-icons/fa';
import { SiNextdotjs } from 'react-icons/si';

export const skills = [
  { name: 'React js', percent: 80, logo: <FaReact className='skill-icon' /> },
  {
    name: 'Next js',
    percent: 70,
    logo: <SiNextdotjs className='skill-icon' />,
  },
  {
    name: 'Express js',
    percent: 75,
    logo: <SiExpress className='skill-icon' />,
  },
  { name: 'Mongo DB', percent: 75, logo: <SiMongodb className='skill-icon' /> },
  {
    name: 'PostgreSQL',
    percent: 65,
    logo: <SiPostgresql className='skill-icon' />,
  },
  { name: 'Webflow', percent: 80, logo: <SiWebflow className='skill-icon' /> },
  {
    name: 'WordPress',
    percent: 70,
    logo: <FaWordpressSimple className='skill-icon' />,
  },
];
