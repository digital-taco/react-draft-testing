import React from 'react';
import PropTypes from 'prop-types'

function DoHickey ({ propOne, propTwo = 2, propThree='Three', noPropTypeHere = 'missing prop types for this'}) {
  return (
    <div style={{background: propOne, padding: 20}}>
      <h1>DoHickey</h1>
        <div>
          {propOne}
        </div>
        <div>
          {propTwo}
        </div>
        <div>
          {propThree}
        </div>
        <div>
          {noPropTypeHere}
        </div>
    </div>
  );
}

export default DoHickey;

DoHickey.propTypes = {
  propOne: PropTypes.string,
  propTwo: PropTypes.number,
  propThree: PropTypes.string,
}