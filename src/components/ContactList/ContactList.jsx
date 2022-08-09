import { Box } from 'components/Box';
import { List, Text, Item } from './ContactList.styled';
import PropTypes from 'prop-types';
import { FiTrash2 } from 'react-icons/fi';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <Box display="flex" justifyContent="center">
      <List>
        {contacts.map(({ id, name, number }) => {
          return (
            <Item key={id}>
              <Text>{name}:</Text>
              <Text>
                {number}
                <FiTrash2 onClick={() => onDeleteContact(id)} />
              </Text>
            </Item>
          );
        })}
      </List>
    </Box>
  );
};

ContactList.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
  contacts: PropTypes.array.isRequired,
};
