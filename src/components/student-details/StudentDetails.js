import React, { useState } from 'react';
import { ProfileImage, Button } from 'composable-dashboard';
import StudentTextDetails from './StudentTextDetails';
import EditStudentDetails from './EditStudentDetails';
import { StudentDetailContainer, ButtonContainer, ImageTextContainer } from './style';

export default ({ customer }) => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <StudentDetailContainer>
      <ImageTextContainer>
        <ProfileImage src={customer.profileImage} />
        {isEditing 
          ? <EditStudentDetails customer={customer} /> 
          : <StudentTextDetails customer={customer} />
        }
      </ImageTextContainer>
      <ButtonContainer>
        <Button onClick={() => setIsEditing(!isEditing)}>
          {isEditing ? "Save" : "Edit"}
        </Button>
      </ButtonContainer>
    </StudentDetailContainer>
  );
}