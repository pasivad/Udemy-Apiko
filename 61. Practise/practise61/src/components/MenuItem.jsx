import React from 'react';

export const MenuItem = ({ title, link }) => {
   return link !== null ? (
      <a onClick={() => console.log(title)} href={link} target="blank">
         {title}
      </a>
   ) : (
      <div onClick={() => alert('This page is under construction yet')}>{title}</div>
   );
};
