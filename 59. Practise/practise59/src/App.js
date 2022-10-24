import React from 'react';

import AppWrapper from './components/AppWrapper';
import AppItem from './components/AppItem';
import Image from './components/Image';

import './assets/scss/style.scss';

import turtles from './constants';
import getItemDescription from './utils';

const App = () => {
   return (
      <div className="container">
         <AppWrapper title="React Turtles">
            {turtles.map((el, index) => (
               <AppItem
                  key = {index}
                  name={el.name}
                  description={getItemDescription(el.nickName, el.weapon)}
                  image={<Image imgUrl={el.imgUrl} />}
               ></AppItem>
            ))}
         </AppWrapper>
      </div>
   );
}

export default App;
