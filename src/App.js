import './App.css';
import { Router, RouterProvider } from 'react-router-dom';
// import router from './Routes/Route';
import router from './Routes/Routes/Route';


function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
