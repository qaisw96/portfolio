import './Skills.css';
import { skills } from '../../data/skills';
import { GrTechnology } from 'react-icons/gr';
import CategoryTitle from '../categoryTitle/CategoryTitle';

const Skills = () => {
  return (
    <div className='skills section'>
      <CategoryTitle
        title='Technologies'
        icon={<GrTechnology className='icon' />}
      />
      {skills.map((skill, ind) => (
        <div className='skill'>
          <p className='skill-name'>{skill.name}</p>
          <div className='skill-progress'>
            <div
              className='skill-percent'
              data-content={`${skill.percent}%`}
              style={{ width: `${skill.percent}%` }}
            ></div>
          </div>
          {skill?.logo && skill?.logo}
        </div>
      ))}
    </div>
  );
};

export default Skills;
