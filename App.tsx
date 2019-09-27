/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import ChatList from './src/chat_list';
import Test from './src/tset';
const App = () => {
  return (
    <>
      <StatusBar barStyle="default" />
      <SafeAreaView>
        <ScrollView>
          <ChatList />
          {/* <Test /> */}
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default App;
