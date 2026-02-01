import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ExampleScreen from '@modules/example/screens/ExampleScreen';
// Add more screens as needed

const Drawer = createDrawerNavigator();

const DrawerRoutes = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Example" component={ExampleScreen} />
      {/* Add more Drawer.Screen as needed */}
    </Drawer.Navigator>
  );
};

export default DrawerRoutes;
