import PropTypes from 'prop-types';
import {useState} from 'react';
import { Form, Label, Wrap, Input, Btn, } from 'components/ContactForm/ContactForm.styled';

export function ContactForm({onSubmit}) {
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')

  const formValue = { name, number }
  
  const inputValueHandler = e => {
    const { name, value } = e.currentTarget;
    
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(formValue);
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Wrap>
        <Label>
          Name
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={inputValueHandler}
          />
        </Label>
        <Label>
          Number
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={inputValueHandler}
          />
        </Label>
      </Wrap>
      <Btn type="submit">Add contact</Btn>
    </Form>
  );
}


// ===============================================

// export class OldContactForm extends Component {
//   state = {
//     name: '',
//     number: '',
//   };

//   inputValueHandler = e => {
//     const {name, value} = e.currentTarget
//     this.setState({
//       [name]: value,
//     });
//   };

//   handleSubmit = e => {
//     e.preventDefault();
//     this.props.onSubmit(this.state);
//     this.setState({ name: '', number: '' });
//   };

//   render() {
//     return (
//       <Form onSubmit={this.handleSubmit}>
//         <Wrap>
//           <Label>
//             Name
//             <Input
//               type="text"
//               name="name"
//               pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//               title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//               required
//               value={this.state.name}
//               onChange={this.inputValueHandler}
//             />
//           </Label>
//           <Label>
//             Number
//             <Input
//               type="tel"
//               name="number"
//               pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
//               title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//               required
//               value={this.state.number}
//               onChange={this.inputValueHandler}
//             />
//           </Label>
//         </Wrap>
//         <Btn type="submit">Add contact</Btn>
//       </Form>
//     );
//   }
// }



ContactForm.propTypes = {
  onSubmit: PropTypes.func,
  contacts: PropTypes.object,
}