import React from 'react';

import { MenuItem } from './MenuItem';

const menuList = [
   {
      title: 'Get Start!',
      link: 'https://reactjs.org/docs/hello-world.html',
   },
   {
      title: 'What is that JSX at all?',
      link: 'https://reactjs.org/docs/introducing-jsx.html',
   },
   {
      title: 'Render or do not render is the question...',
      link: 'https://reactjs.org/docs/rendering-elements.html',
   },
   {
      title: 'New big feature for React',
      link: null,
   },
];

export const Menu = () => {
   return (
      <div className="navigation">
         {menuList.map((el, index) => (
            <MenuItem title={el.title} link={el.link} key={index} />
         ))}
      </div>
   );
};
