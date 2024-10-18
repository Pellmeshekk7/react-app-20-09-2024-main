import { useState } from 'react';
import PropTypes from 'prop-types';

const Select = (props) => {
  const { list } = props;
  const [selectOption, setSelectOption] = useState('');
  const changeSelectOption = (event) => {
    setSelectOption(event.target.value)
  }
  const showOption = (elem) => (
    <option key={elem.value} value={elem.value}>
      {elem.label}
    </option>
  );
  return (
    <>
      <select value={selectOption} 
      onChange={changeSelectOption}>
        {list.map(showOption)}</select>
        {list.map(showOption)}
    </>
  );
};

Select.propTypes = {
  list: PropTypes.array,
};

export default Select;