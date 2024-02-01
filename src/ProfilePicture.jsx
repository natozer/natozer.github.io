import React, { forwardRef } from 'react';

const ProfilePicture = forwardRef(({ imageUrl, altText }, ref) => {
  return <img src={imageUrl} alt={altText} className="profile-picture" ref={ref} />;
});

export default ProfilePicture;