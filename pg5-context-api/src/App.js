
import UserContextProvider from './Context/UserContextProvider';
import Login from './Components/Login';  // Corrected component name
import Profile from './Components/Profile';

function App() {
  return (
    <div className='items-center flex flex-col flex-center justify-center  bg-orange-100 h-full w-full h-screen'>
      <UserContextProvider>
        <h1 className='text-4xl m-5'>Handle-Context-Api</h1>
        <Login/>   {/* Corrected component name */}
        <Profile/>
      </UserContextProvider>
    </div>
  );
}

export default App;
