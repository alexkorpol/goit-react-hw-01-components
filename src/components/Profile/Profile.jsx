import { Avatar, Description, Name, ProfileDiv, SpanLabel, SpanQuantity, Stats, StatsList, TaskNumber, Text } from './Profile.styled'; 
import PropTypes from 'prop-types';
export const Profile = ({
    avatar,
    username,
    tag,
    location,
    stats,
    }) => {
  return (
      
  <ProfileDiv class="profile">
      <TaskNumber> Task 1  </TaskNumber>
    <Description class="description">
        <Avatar
        src={avatar}
        alt="User avatar"
        class="avatar"
       />
       <Name class="name">{username}</Name>
       <Text class="tag">{tag}</Text>
    <Text class="location">{location}</Text>
    </Description>

  <Stats class="stats">
    <StatsList>
      <SpanLabel class="label">Followers</SpanLabel>
      <SpanQuantity class="quantity">{stats.followers}</SpanQuantity>
    </StatsList>
    <StatsList>
      <SpanLabel class="label">Views</SpanLabel>
      <SpanQuantity class="quantity">{stats.views}</SpanQuantity>
    </StatsList>
    <StatsList>
      <SpanLabel class="label">Likes</SpanLabel>
      <SpanQuantity class="quantity">{stats.likes}</SpanQuantity>
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