import './App.css';
import Form from './Form';
import PersonList from './PersonList';

// NICHT SO MACHEN (IS ALT):
// class App extends React.Component {
//   render() {

//   }
// }

function App() {
  return (
    <>
      <div>Hallo Welt</div>
      <PersonList />
      <Form />
    </>
  );
}

export default App;
