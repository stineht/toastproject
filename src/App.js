import React from 'react';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
// minified version is also included
// import 'react-toastify/dist/ReactToastify.min.css';

function App(){
  const notify = () => toast.warning("Denne toasten ville jeg ikke spist!");

  return (
    <div class="grid place-items-center h-screen">
      <button onClick={notify} class=" block border-yellow-500 border-2 rounded-full  focus:border-yellow-500 px-10 py-4 text-stone-900 hover:bg-yellow-400 hover:text-white text-lg ">
        Toast? &#127838;
      </button>
     
      <ToastContainer
        position="top-center"
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