/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Alert,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import RNInsider from 'react-native-insider';
import InsiderCallbackType from 'react-native-insider/src/InsiderCallbackType';
import {INSIDER_PARTER_NAME, INSIDER_GROUP_BUNDLE_ID} from './config';

const App: () => React$Node = () => {
  React.useEffect(() => {
    RNInsider.init(
      INSIDER_PARTER_NAME,
      INSIDER_GROUP_BUNDLE_ID,
      (type, data) => {
        switch (type) {
          case InsiderCallbackType.NOTIFICATION_OPEN:
            console.log('[INSIDER][NOTIFICATION_OPEN]: ', data);
            Alert.alert('[INSIDER][NOTIFICATION_OPEN]:', JSON.stringify(data));
            break;
          case InsiderCallbackType.INAPP_BUTTON_CLICK:
            console.log('[INSIDER][INAPP_BUTTON_CLICK]: ', data);
            Alert.alert(
              '[INSIDER][INAPP_BUTTON_CLICK]: ',
              JSON.stringify(data),
            );
            break;
          case InsiderCallbackType.TEMP_STORE_PURCHASE:
            console.log('[INSIDER][TEMP_STORE_PURCHASE]: ', data);
            Alert.alert(
              '[INSIDER][TEMP_STORE_PURCHASE]: ',
              JSON.stringify(data),
            );
            break;
          case InsiderCallbackType.TEMP_STORE_ADDED_TO_CART:
            console.log('[INSIDER][TEMP_STORE_ADDED_TO_CART]: ', data);
            Alert.alert(
              '[INSIDER][TEMP_STORE_ADDED_TO_CART]: ',
              JSON.stringify(data),
            );
            break;
          case InsiderCallbackType.TEMP_STORE_CUSTOM_ACTION:
            console.log('[INSIDER][TEMP_STORE_CUSTOM_ACTION]: ', data);
            Alert.alert(
              '[INSIDER][TEMP_STORE_CUSTOM_ACTION]: ',
              JSON.stringify(data),
            );
            break;
        }
      },
    );
    RNInsider.registerWithQuietPermission(false);
  }, []);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Step One</Text>
              <Text style={styles.sectionDescription}>
                Edit <Text style={styles.highlight}>App.js</Text> to change this
                screen and then come back to see your edits.
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>See Your Changes</Text>
              <Text style={styles.sectionDescription}>
                <ReloadInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Debug</Text>
              <Text style={styles.sectionDescription}>
                <DebugInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Learn More</Text>
              <Text style={styles.sectionDescription}>
                Read the docs to discover what to do next:
              </Text>
            </View>
            <LearnMoreLinks />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
