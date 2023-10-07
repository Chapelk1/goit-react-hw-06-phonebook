import { List } from 'components/ContactList/ContactList.styled'
import {Item} from 'components/ContactItem/ContactItem'
import { useSelector } from 'react-redux'


export const ContactList = () => {
  const stateOfContacts = useSelector(state => state.contacts.allContacts)
  const filtersValue = useSelector(state => state.filter)
  
  const getVisibleContact = () => {
    const normalizedFilter = filtersValue.toLowerCase();
    return stateOfContacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = getVisibleContact();

    return (
      <List>
        {visibleContacts.map(contact => {
          return <Item key={contact.id} contact={contact} />;
        })}
      </List> 
    );
}





