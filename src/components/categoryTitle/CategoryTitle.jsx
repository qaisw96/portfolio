import './CategoryTitle.css';

const CategoryTitle = ({ title, icon }) => {
  return (
    <div className='category'>
      {icon}
      <p className='title'>{title}</p>
    </div>
  );
};

export default CategoryTitle;
