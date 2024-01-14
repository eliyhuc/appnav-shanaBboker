import colors from './appColors';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Dashboard from "../screens/Dashboard/Dashboard";
import Catalog from '../screens/Catalog/Catalog';
import Support from '../screens/Support/Support';
import Profile from '../screens/Profile/Profile';

const AppTabs = createMaterialBottomTabNavigator();

export const Tabs = () => {
    return(
        <AppTabs.Navigator>


            <AppTabs.Screen 
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({color}) => (<MaterialCommunityIcons name='view-dashboard-outline' color={color} size={30} />)
                }}
                name='dashboard' 
                component={Dashboard} />



            <AppTabs.Screen 
                options={{
                    tabBarLabel: 'Store',
                    tabBarIcon: ({color}) => (<MaterialCommunityIcons name='store-outline' color={color} size={30} />)
                }}
                name='catalog' 
                component={Catalog} />



            <AppTabs.Screen 
                options={{
                    tabBarLabel: 'Support',
                    tabBarIcon: ({color}) => (<MaterialCommunityIcons name='chat-processing-outline' color={color} size={30} />)
                }}
                name='support' 
                component={Support} />



            <AppTabs.Screen 
                options={{
                    tabBarLabel: 'My Account',
                    tabBarIcon: ({color}) => (<MaterialCommunityIcons name='account-outline' color={color} size={30} />)
                }}
                name='profile' 
                component={Profile} />


        </AppTabs.Navigator>
    )
}
