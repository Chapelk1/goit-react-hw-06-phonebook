import PropTypes from 'prop-types'
import {
  ItemLi,
  Name,
  Number,
  Btn,
} from 'components/ContactItem/ContactItem.styled';



export const Item = ({ contact: { name, id, number }, onDelete }) => {
  return (
    <ItemLi>
      <Name>{name}</Name>
      <Number>{number}</Number>

      <Btn
        type="button"
        onClick={() => {
        onDelete(id);
        }}
      >
        Delete
      </Btn>
    </ItemLi>
  );
};

Item.propTypes = {
  contact: PropTypes.object,
  onDelete: PropTypes.func,
}