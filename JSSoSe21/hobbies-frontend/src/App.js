import './App.css';
import List from './List';
import Container from '@material-ui/core/Container';
import { Card } from '@material-ui/core';

function App() {
  return (
    <Container maxWidth="lg">
      <Card variant="outlined">
        <List />
      </Card>
    </Container>
  );
}

export default App;
