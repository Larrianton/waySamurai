import React from 'react';
import s from './Header.module.css'



export const Header  = () => {
  return (
    <div className={s.header}>
     <img className={s.logo} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN5IdkZGOBECwRAqpYx6HH_Pr4Wy164El1Cg&usqp=CAU' alt="logo"/>

    </div>
  );
}

