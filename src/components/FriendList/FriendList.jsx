import { FriendListItem } from 'components/FriendListItem/FriendListItem';
import {FriendListStyle } from './FriendList.styled';
import PropTypes from 'prop-types';

export const FriendList = ({ friends }) =>{
  return (
<FriendListStyle >
        {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
</FriendListStyle>
  )
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};





