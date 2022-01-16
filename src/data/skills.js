import { AiOutlineHtml5 } from 'react-icons/ai';
import {
  SiExpress,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiWebflow,
} from 'react-icons/si';
import { RiCss3Line } from 'react-icons/ri';
import { FaReact, FaWordpressSimple } from 'react-icons/fa';

export const skills = [
  {
    name: 'HTML',
    percent: 90,
    logo: <AiOutlineHtml5 className='skill-icon' />,
  },
  { name: 'CSS', percent: 80, logo: <RiCss3Line className='skill-icon' /> },
  {
    name: 'Java Script',
    percent: 90,
    logo: <SiJavascript className='skill-icon' />,
  },
  { name: 'React js', percent: 75, logo: <FaReact className='skill-icon' /> },
  {
    name: 'Express js',
    percent: 75,
    logo: <SiExpress className='skill-icon' />,
  },
  { name: 'Mongo DB', percent: 70, logo: <SiMongodb className='skill-icon' /> },
  {
    name: 'Postgress',
    percent: 70,
    logo: <SiPostgresql className='skill-icon' />,
  },
  {
    name: 'WordPress',
    percent: 70,
    logo: <FaWordpressSimple className='skill-icon' />,
  },
  { name: 'Webflow', percent: 80, logo: <SiWebflow className='skill-icon' /> },
];
