import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Button, FormControl } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
// import ReactHTMLTableToExcel from 'react-html-table-to-excel';

const ViewGsheet = () => {
  const [clients, setClients] = useState([]);
  const [filteredClients, setFilteredClients] = useState([]);
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    console.log('hello');
    fetchClients();
  }, []);

  const fetchClients = async () => {
    try {
      const response = await axios.get('http://192.168.2.11:5050/freo/data');
      setClients(response.data);
      setFilteredClients(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleSearch = () => {
    const filtered = clients.filter(client =>
      (client.username && client.username.toLowerCase().includes(searchInput.toLowerCase())) ||
      (client.referenceId && client.referenceId.toLowerCase().includes(searchInput.toLowerCase())) ||
      (client.freoEmail && client.freoEmail.toLowerCase().includes(searchInput.toLowerCase())) ||
      (client.date && client.date.includes(searchInput))
    );
    setFilteredClients(filtered);
  };
  
  

  return (
    <div style={{ marginLeft: '60px' }}>
      <h2>Call List</h2>
      <div style={{ marginBottom: '10px' ,display:'flex',justifyContent:"space-between" }}>
        <div style={{display:'flex', gap:'8px'}}>

        <FormControl
          type="text"
          style={{ border: '.5px solid gray', borderRadius: '5px' }}
          placeholder="Search by Name or Status"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          />
        <Button className='SearchModelButton' style={{marginLeft: '20px' }} onClick={handleSearch}>Search</Button>
          </div>
          <div>

        {/*<ReactHTMLTableToExcel
          id="test-table-xls-button"
          className="download-table-xls-button"
          table="clients-table"
          filename="Freo_Report"
          sheet="clients"
          // buttonText={<FontAwesomeIcon icon={faDownload} />}
          buttonText="Download Excel"
          // buttonText={<FontAwesomeIcon icon="fa-solid fa-arrow-down" />}
          
        />*/}
        </div>
      </div>
      <Table striped bordered hover id="clients-table">
        <thead>
          <tr>
          <th>Date</th>
            <th>Username</th>
            <th>Name</th>
            <th>Email</th>
            <th>Reference Id</th>
            <th>Dispossition</th>
            <th>Remark 2</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {filteredClients.map(client => (
            <tr key={client.id}>
              <td>{client.date}</td>
              <td>{client.username}</td>
              <td>{client.name}</td>
              <td>{client.freoEmail}</td>
              <td>{client.referenceId}</td>
              <td>{client.remark}</td>
              <td>{client.remark2}</td>
              <td>{client.time}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ViewGsheet;
