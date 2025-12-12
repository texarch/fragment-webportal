import React from 'react';
import Page11 from './Page11';
import Page12 from './Page12';
import Page13 from './Page13';
import Page14 from './Page14';
import Page16 from './Page16';
import Page17 from './Page17';
import Page18 from './Page18';
import Page19 from './Page19';
import Page20 from './Page20';

const Individual = ({ setView }) => {
  return (
    <div>
      <Page11 setView={setView} />
      <Page12 />
      <Page13 />
      <Page14 />
      <Page16 />
      <Page17 />
      <Page18 />
      <Page19 />
      <Page20 />
    </div>
  );
};

export default Individual;


