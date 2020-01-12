import React from 'react';
import { CardShell, CardTitle, CardBody, ProfileDetails } from 'composable-dashboard';
import { EnrollmentStatus } from '../EnrollmentStatus';
import ProfileComments from '../ProfileComments/ProfileComments';

const PetProfile = ({ customer }) => {
  return (
    <>
      {customer &&
        <CardShell>
          <CardTitle>
              Pet Profile 
              <EnrollmentStatus enrollment={customer.enrollment}>
                {customer.enrollment}
              </EnrollmentStatus> 
          </CardTitle>
          <CardBody>
            <ProfileDetails customer={customer} imageSrc={customer.profileImage} />
            <ProfileComments comments={customer.comments} />
          </CardBody>
        </CardShell>
      }
    </>
  );
};

export default PetProfile;