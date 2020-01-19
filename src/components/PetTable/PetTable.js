import React from 'react';
import { Card, ProfileImage } from 'composable-dashboard';
import {
  Table, 
  TableData,
  TableHead,
  TableHeaders,
  DataRow,
  StudentCardContainer
} from './style';
import { useHistory } from 'react-router-dom';
import { useCustomers } from '../../hooks/useCustomers/useCustomers';

export default () => {
  const { customers } = useCustomers();
  const history = useHistory();

  const handleDoubleClick = customerId => () => {
    history.push({ pathname: '/student', state: { customerId }});
  };

  return (
    <StudentCardContainer>
      <Card title="Students">
        <Table>
          <thead>
            <TableHeaders>
              <TableHead noBorder/>
              <TableHead>Name</TableHead>
              <TableHead>Sex</TableHead>
              <TableHead>Age</TableHead>
              <TableHead>Owner</TableHead>
            </TableHeaders>
          </thead>
          <tbody>
            {customers && customers.map(customer => (
                <DataRow key={customer.id} onDoubleClick={handleDoubleClick(customer.id)}>
                  <TableData textAlign="center">
                    <ProfileImage src={customer.profileImage} />
                  </TableData>
                  <TableData>{customer.name}</TableData>
                  <TableData>{customer.sex}</TableData>
                  <TableData>{customer.age}</TableData>
                  <TableData>{customer.owner}</TableData>
                </DataRow>
            ))}
          </tbody>
        </Table>  
      </Card>
    </StudentCardContainer>
  );
};
