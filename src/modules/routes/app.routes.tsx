import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
// Types
import { RoutesList } from '@shared/types';
import ExampleRoutes from '@modules/example/routes';
import BottomTabRoutes from './bottom-tab.routes';
import DrawerRoutes from './drawer.routes';

export type IAppStackParamsList = {
  exampleRoutes: undefined;
  tabRoutes: undefined;
  drawerRoutes: undefined;
};

export type IAppStack = NativeStackNavigationProp<IAppStackParamsList>;

export const appRoutesList: RoutesList<IAppStackParamsList>[] = [
  {
    name: 'exampleRoutes',
    component: ExampleRoutes,
  },
  {
    name: 'tabRoutes',
    component: BottomTabRoutes,
  },
  {
    name: 'drawerRoutes',
    component: DrawerRoutes,
  },
];

const AppStack = createNativeStackNavigator<IAppStackParamsList>();

const AppRoutes = () => {
  return (
    <AppStack.Navigator
      initialRouteName="exampleRoutes"
      screenOptions={() => ({
        headerShown: false,
      })}
    >
      {appRoutesList.map(ap => (
        <AppStack.Screen
          key={ap.name}
          name={ap.name}
          component={ap.component}
        />
      ))}
    </AppStack.Navigator>
  );
};

export default AppRoutes;
