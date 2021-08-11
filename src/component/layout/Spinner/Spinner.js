import React from 'react';
import spinner from './spinner.gif';

const Spinner = () => {
  return (
    <React.Fragment>
      <img
        src={spinner}
        style={{ width: '400px', marginTop:"15%", margin: 'auto', display: 'block' }}
        alt='loading...'
      />
    </React.Fragment>
  );
};

export default Spinner;
