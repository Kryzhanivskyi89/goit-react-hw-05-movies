import { useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import style from './BackButton.module.css';


const BackButton= () => {
  const location = useLocation();
  const valueRef = useRef(location);

  return (
    <Link to={valueRef.current.state ?? '/'} className={style.button}>
      Back
    </Link>
  );
};

export default BackButton;