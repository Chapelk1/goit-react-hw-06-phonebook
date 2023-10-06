import PropTypes from 'prop-types';
import { Label, Input } from 'components/Filter/Filter.styled';

export const Filter = ({ value, onChange }) => {
  return (
    <Label>
      Find contacts by name
      <Input type="text" onChange={onChange} value={value} />
    </Label>
  );
};


Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};