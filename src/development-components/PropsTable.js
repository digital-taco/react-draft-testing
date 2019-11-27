import React from 'react';
import PropTypes from 'prop-types'

import styles from './PropsTable.module.css'

function PropValue({ propName, propValue, propType }) {
  return (
    <>
      <div data-prop-type>{propType}</div>{' '}
      <div data-prop-name><i>{propName}</i></div>{' '}
      <div data-prop-value>{propValue}</div>
    </>
  )
}

function PropsTable({
  name = 'Draft',
  cookies = 1000,
  noPropTypeHere,
  isOpen,
  infoObject,
  doThang,
  selectedEnum,
  things,
  thingsOftype,
}) {
  return (
    <div className={styles.propsTable}>
      <PropValue propType="string" propName="name" propValue={name} />
      <PropValue propType="number" propName="cookies" propValue={cookies} />
      <PropValue propType="boolean" propName="isOpen" propValue={isOpen ? 'true' : 'false'} />
      <PropValue propType="string" propName="noPropTypeHere" propValue={noPropTypeHere} />
      <PropValue propType="oneOf" propName="selectedEnum" propValue={JSON.stringify(selectedEnum)} />
      <PropValue propType="object" propName="infoObject" propValue={JSON.stringify(infoObject)} />
      <PropValue propType="func" propName="doThang" propValue={JSON.stringify(doThang)} />
      <PropValue propType="array" propName="things" propValue={JSON.stringify(things)} />
      <PropValue propType="arrayOf" propName="thingsOftype" propValue={JSON.stringify(thingsOftype)} />
    </div>
  );
}

PropsTable.propTypes = {
  cookies: PropTypes.number,
  doThang: PropTypes.func,
  infoObject: PropTypes.object,
  isOpen: PropTypes.bool,
  selectedEnum: PropTypes.oneOf(['choiceOne', 'choiceTwo', 'choiceThree']),
  name: PropTypes.string,
  things: PropTypes.array,
  thingsOftype: PropTypes.arrayOf
}

export default PropsTable;