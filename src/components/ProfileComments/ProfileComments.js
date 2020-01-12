import React from 'react';
import ProfileComment from './ProfileComment';
import { H3 } from './style';

export default ({ comments }) => {
  
  return (
    <>
      <H3>Pet Comments</H3>
      {comments.map(comment => <ProfileComment>{comment}</ProfileComment>)}
    </>
  );
};