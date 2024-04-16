import Experimental from './Components/Experimental';
import Experimental1 from './Components/Experimental1';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';


function App() {

  const { cartItems } = useSelector((state: any) => state.cart)
  const dispatch = useDispatch();
  return (
    <div>
        <Experimental></Experimental>
        <Experimental1></Experimental1>

    </div>
  );
}

export default App;
