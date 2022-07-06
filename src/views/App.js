import logo from './logo.svg';
import './App.scss';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ListTodo from './Todo/ListTodo';
function App() {
  return (

    <div className="App-hoi-Phong">
      <header className="App-header">
        {/* <img src={logo} className="App-logo"></img> */}
        <ListTodo />
      </header>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>

  );
}

export default App;
