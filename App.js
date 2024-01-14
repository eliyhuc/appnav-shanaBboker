import react from "react";
import { NavigationContainer } from '@react-navigation/native';
import { Tabs } from './src/services/BottomTabs';
import colors from './src/services/appColors'
import { 
  MD3LightTheme as DefaultTheme,
  Provider as PaperProvider } from 'react-native-paper'

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    secondaryContainer: colors.lapis_lazuli
  }
}


const App = () => {
  return(
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Tabs />
      </NavigationContainer>
    </PaperProvider>
  )
}

export default App;