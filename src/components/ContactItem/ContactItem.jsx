import {
  ItemLi,
  Name,
  Number,
  Btn,
} from 'components/ContactItem/ContactItem.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

export const Item = ({ contact: { name, id, number } }) => {
  const dispatch = useDispatch()
  return (
    <ItemLi>
      <Name>{name}</Name>
      <Number>{number}</Number>

      <Btn
        type="button"
        onClick={() => {
          dispatch(deleteContact(id));
        }}
      >
        Delete
      </Btn>
    </ItemLi>
  );
};

