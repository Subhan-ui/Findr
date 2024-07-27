import Navigator from './src/navigation/Navigator';
import Provider from './src/store/StoreProvider';

const App = () => (
  <Provider>
    <Navigator />
  </Provider>
);

export default App;
