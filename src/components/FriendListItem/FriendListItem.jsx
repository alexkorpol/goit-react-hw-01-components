import PropTypes from 'prop-types';
import { FriendAvatar, FriendListItemStyle, FriendName, FriendStatus } from "./FriendListItem.styled"

export const FriendListItem = ({avatar, name, isOnline}) => {
  return (
<FriendListItemStyle >
  <FriendStatus  status={isOnline}></FriendStatus>
  <FriendAvatar  src={avatar} alt={name} width="48" />
      <FriendName >{name}</FriendName>
</FriendListItemStyle>
  )
}


FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
