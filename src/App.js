import './App.css';
import { RouterProvider } from 'react-router-dom';
// import router from './Routes/Route';
import router from './Routes/Routes/Route';
import { Toaster } from 'react-hot-toast';


function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
