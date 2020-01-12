import React, { useEffect, useState } from 'react';
import { Card, ProfileImage } from 'composable-dashboard';
import {
  Table, 
  TableData,
  TableHead,
  TableHeaders,
  DataRow,
  StudentCardContainer
} from './style';
import fetchCustomers from '../../utilities/fetchCustomers';
import { useHistory } from 'react-router-dom';

export default () => {
  const [customers, setCustomers] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const getCustomers = async () => {
      const customerResp = await fetchCustomers();
      setCustomers(customerResp);
    };

    getCustomers();
  }, []);

  const handleDoubleClick = customer => () => {
    history.push({ pathname: '/student', state: customer });
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
                <DataRow key={customer.id} onDoubleClick={handleDoubleClick(customer)}>
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
