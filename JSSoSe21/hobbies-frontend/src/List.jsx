import { useEffect, useState } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import Confirm from './Confirm';

const List = () => {
  const [open, setOpen] = useState(0);
  const [persons, setPersons] = useState([]);
  useEffect(() => {
    fetch('/person')
      .then((response) => response.json())
      .then((data) => {
        setPersons(data);
      });
  }, []);

  async function handleDelete(id) {
    const response = await fetch(`/person/${id}`, { method: 'DELETE' });
    if (response.ok) {
      setPersons((oldPersons) => {
        return oldPersons.filter((p) => p.id !== id);
      });
    }
  }

  return (
    <>
      <Confirm
        open={open}
        handleClose={(confirm) => {
          if (confirm) {
            handleDelete(open);
            setOpen(0);
          } else {
            setOpen(0);
          }
        }}
      />
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell align="left">Firstname</TableCell>
              <TableCell align="left">Lastname</TableCell>
              <TableCell align="left">Hobbies</TableCell>
              <TableCell align="left"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {persons.map((person) => (
              <TableRow key={person.id}>
                <TableCell component="td" scope="row">
                  {person.id}
                </TableCell>
                <TableCell component="td" scope="row">
                  {person.firstname}
                </TableCell>
                <TableCell component="td" scope="row">
                  {person.lastname}
                </TableCell>
                <TableCell component="td" scope="row">
                  {person.hobbies}
                </TableCell>
                <TableCell>
                  <Button onClick={() => setOpen(person.id)}>
                    <DeleteIcon />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default List;
