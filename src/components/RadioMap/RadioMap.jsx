import { useState } from "react";
import PropTypes, { array } from 'prop-types'
const RadioMap = (props) => {
    const {list} = props;
    const [selectUser, setSelectUser] = useState('');
    const changeSelectUser = (event) => {
        console.log(event);
        setSelectUser(event.target.value)
        
    }
    const showRadio = (elem) => (
        <label key={elem.value} style={{ display: 'block' }}>
          <input
            type="radio"
            name={name}
            value={elem.value}
            checked={elem.value === selectUser}
            onChange={changeSelectUser}
          />
          {elem.label}
        </label>
      )
    return (
    <>
    {list.map(showRadio)}
    <p>Your choice: {selectUser}</p>
    </>
    );
    
}

RadioMap.propTypes = {
    list: PropTypes.array
}
export default RadioMap;
