import React from "react";
import {
  CardShell,
  CardBody,
  ProfileDetails,
  CardTitle
} from "composable-dashboard";
import { EnrollmentStatus } from "../EnrollmentStatus";
import StudentDetails from "../student-details/StudentDetails";
import ProfileComments from "../ProfileComments/ProfileComments";

export default ({ customer }) => {
  return (
    <CardShell>
      <CardTitle>
        Student's Profile
        <EnrollmentStatus enrollment={customer.enrollment}>
          {customer.enrollment}
        </EnrollmentStatus>
      </CardTitle>
      <CardBody>
        <StudentDetails customer={customer} />
        <ProfileComments
          initComments={customer.comments}
          initArchivedComments={customer.archivedComments}
        />
      </CardBody>
    </CardShell>
  );
};
