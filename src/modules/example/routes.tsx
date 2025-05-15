import React from 'react';
import {RoutesList} from '@shared/types';
import {ExampleRoutesParamsList} from './types';
import ExampleScreen from './screens/ExampleScreen';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';

export type ExampleRoutesStack =
  NativeStackNavigationProp<ExampleRoutesParamsList>;

export const exampleRoutesList: RoutesList<ExampleRoutesParamsList>[] = [
  {
    name: 'ExampleScreen',
    component: ExampleScreen,
  },
];

const ExampleStack = createNativeStackNavigator<ExampleRoutesParamsList>();

const ExampleRoutes = () => {
  return (
    <ExampleStack.Navigator initialRouteName="ExampleScreen">
      {exampleRoutesList.map(ap => (
        <ExampleStack.Screen
          key={ap.name}
          name={ap.name}
          component={ap.component}
          options={{
            headerShown: false,
          }}
        />
      ))}
    </ExampleStack.Navigator>
  );
};

export default ExampleRoutes;
