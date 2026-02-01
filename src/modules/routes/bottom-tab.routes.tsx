import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ExampleScreen from '@modules/example/screens/ExampleScreen';
// Add more screens as needed

const Tab = createBottomTabNavigator();

const BottomTabRoutes = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Example" component={ExampleScreen} />
      {/* Add more Tab.Screen as needed */}
    </Tab.Navigator>
  );
};

export default BottomTabRoutes;
