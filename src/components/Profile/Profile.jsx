import { Avatar, Description, Name, ProfileDiv, SpanLabel, SpanQuantity, Stats, StatsList, Text } from './Profile.styled';
import PropTypes from 'prop-types';

export const Profile = ({
    avatar,
    username,
    tag,
    location,
    stats,
    }) => {
  return (

  <ProfileDiv >
    <Description >
        <Avatar
        src={avatar}
        alt="User avatar"
       />
       <Name >{username}</Name>
       <Text >{tag}</Text>
    <Text >{location}</Text>
    </Description>

  <Stats >
    <StatsList>
      <SpanLabel >Followers</SpanLabel>
      <SpanQuantity >{stats.followers}</SpanQuantity>
    </StatsList>
    <StatsList>
      <SpanLabel >Views</SpanLabel>
      <SpanQuantity >{stats.views}</SpanQuantity>
    </StatsList>
    <StatsList>
      <SpanLabel >Likes</SpanLabel>
      <SpanQuantity >{stats.likes}</SpanQuantity>
    </StatsList>
  </Stats>
</ProfileDiv>)
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
