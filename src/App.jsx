import toast from 'react-hot-toast';

function notify () {
  toast.success('Here is your toast.');
}
     
 function App() {
 return (
    <div className='text-center'>

    <button onClick={notify}>Make me a toast</button>
    
    </div>
 )
 }

 export default App