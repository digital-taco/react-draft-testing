import React from 'react';
import PropTypes from 'prop-types'

export function ComponentOne ({ propOne, propTwo = 2, propThree='Three', noPropTypeHere = 'missing prop types for this'}) {
  return (
    <div>
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

ComponentOne.propTypes = {
  propOne: PropTypes.string,
  propTwo: PropTypes.number,
  propThree: PropTypes.string,
}

export function ComponentTwo ({ propOne, propTwo = 2, propThree='Three', noPropTypeHere = 'missing prop types for this'}) {
  return (
    <div>
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

ComponentTwo.propTypes = {
  propOne: PropTypes.string,
  propTwo: PropTypes.number,
  propThree: PropTypes.string,
}