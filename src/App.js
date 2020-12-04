import './App.css';
import Menucomponent from './component/Menucomponent'
import {Provider} from 'react-redux'
import store from './redux/Store'


function App() {
  return (
    <Provider store = {store}>
    <div className="App">
      <Menucomponent/>
    </div>
    </Provider>
  );
}

export default App;
