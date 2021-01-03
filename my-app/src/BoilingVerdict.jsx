import React from 'react';



const BoilingVerdict = (props) => {
    if (props.celsius >= 100) {
      return <p>Water boils</p>
    }
    return <p>Water doesn't boil</p>
  }

export default BoilingVerdict