import React from 'react';
import PropTypes from 'prop-types';
import { FriendItem, Status, Image, Name } from './FriendDescription.styled';

export const FriendDescription = ( { avatar, name, isOnline }) => {
  return (
    <FriendItem>
      <Status isOnline={isOnline}></Status>
      <Image src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </FriendItem>
  )
}

FriendDescription.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}