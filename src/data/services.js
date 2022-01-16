import { CgWebsite } from 'react-icons/cg';
import { MdOutlineDesignServices } from 'react-icons/md';
import { SiWebflow } from 'react-icons/si';

export const services = [
  {
    title: 'Web Development',
    icon: <CgWebsite className='service-icon' />,
    description:
      'I will create your website by modern technologies to provide your clients with fast and amazing experience',
  },
  {
    title: 'UI Design',
    icon: <MdOutlineDesignServices className='service-icon' />,
    description:
      'A good User interface gives your visitors amazing journey on your site',
  },
  {
    title: 'CMS',
    icon: <SiWebflow className='service-icon' />,
    description:
      'Provide you with fully management website by modern technologies such as Webflow, so you can start publish and update your content easily ',
  },
];
