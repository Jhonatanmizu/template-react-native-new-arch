import { ParamListBase } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { JSX } from 'react';
export type RoutesList<T> = {
  name: keyof T;
  component: (props: any) => JSX.Element;
  statusBarStyle?: 'light-content' | 'dark-content';
  animationType?: 'fade' | 'slide';
};

export type ScreenRouteProp<
  ParamList extends ParamListBase,
  ScreenName extends keyof ParamList,
  NavigatorID extends string | undefined = undefined,
> = NativeStackScreenProps<ParamList, ScreenName, NavigatorID>;
