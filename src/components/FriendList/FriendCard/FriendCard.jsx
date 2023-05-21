import React from 'react';
import PropTypes from 'prop-types';
import { FriendsCard } from './FriendCard.styled';
import { FriendDescription } from '../FriendDescription/FriendDescription';

export const FriendCard = ({friends}) => {
  return (
    < FriendsCard>
      {
        friends.map((friend) => (
          <FriendDescription 
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}/>
          )
          )
      }
   </ FriendsCard>
  )
}


FriendCard.propTypes = {
friends: PropTypes.arrayOf(PropTypes.shape({
  id: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
}).isRequired).isRequired

}

