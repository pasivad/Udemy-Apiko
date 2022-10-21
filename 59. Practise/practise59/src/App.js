import React from 'react';
import AppWrapper from './components/AppWrapper';
import AppItem from './components/AppItem';
import Image from './components/Image';

import imgUrl from './assets/img.png';

import './assets/scss/style.scss';

function App() {
   return (
      <div className="container">
         <AppWrapper title="title props to AppWrapper"></AppWrapper>
         <AppItem name="AppItem Header" description="AppItem Description" Image={<Image imgUrl={imgUrl}></Image>}></AppItem>
      </div>
   );
}

export default App;
