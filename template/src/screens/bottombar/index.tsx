import { useNavigation } from '@react-navigation/core';
import { COLORS } from 'config';
import React from 'react';
import {
  Alert,
  Animated,
  StatusBar,
  TouchableOpacity,
  View,
} from 'react-native';
import { CurvedBottomBar } from 'react-native-curved-bottom-bar';
import { scale } from 'react-native-utils-scale';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from 'screens/home';
import SettingScreen from 'screens/setting';
import { styles } from './styles';

export interface Props {}

const defaultProps = {
  appName: 'Wellcome hooks',
};

StatusBar.setBarStyle('dark-content');
const MainScreen: React.FC<Props> = _props => {
  const { navigate } = useNavigation();

  const _renderIcon = (routeName: string, selectTab: string) => {
    let icon = '';

    switch (routeName) {
      case 'title1':
        icon = 'ios-home-outline';
        break;
      case 'title2':
        icon = 'settings-outline';
        break;
    }

    return (
      <Ionicons
        name={icon}
        size={scale(25)}
        color={routeName === selectTab ? COLORS.PRIMARY : 'gray'}
      />
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <CurvedBottomBar.Navigator
        style={{ backgroundColor: '#F5F5F5' }}
        strokeWidth={0.5}
        height={scale(55)}
        circleWidth={scale(55)}
        bgColor="white"
        initialRouteName="title1"
        swipeEnabled
        renderCircle={() => (
          <Animated.View style={styles.btnCircle}>
            <TouchableOpacity
              style={{
                flex: 1,
                justifyContent: 'center',
              }}
              onPress={() => Alert.alert('Click Action')}>
              <Ionicons name={'apps'} size={scale(25)} />
            </TouchableOpacity>
          </Animated.View>
        )}
        tabBar={({ routeName, selectTab, navigation }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation(routeName)}
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              {_renderIcon(routeName, selectTab)}
            </TouchableOpacity>
          );
        }}>
        <CurvedBottomBar.Screen
          name="title1"
          position="left"
          component={() => <HomeScreen />}
        />
        <CurvedBottomBar.Screen
          name="title2"
          component={() => <SettingScreen />}
          position="right"
        />
      </CurvedBottomBar.Navigator>
    </View>
  );
};

MainScreen.defaultProps = defaultProps;

export default MainScreen;
