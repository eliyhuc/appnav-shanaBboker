import react from "react";
import { NavigationContainer } from '@react-navigation/native';
import { Tabs } from './src/services/BottomTabs';

const App = () => {
  return(
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  )
}

export default App;