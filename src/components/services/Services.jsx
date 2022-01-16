import './Services.css';
import CategoryTitle from '../categoryTitle/CategoryTitle';
import { GrBusinessService } from 'react-icons/gr';
import { services } from '../../data/services';

const Services = () => {
  return (
    <div className='services section'>
      <CategoryTitle
        title='Services'
        icon={<GrBusinessService className='icon' />}
      />
      <div className='cards'>
        {services.map((service) => (
          <div className='card'>
            {service.icon}
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
