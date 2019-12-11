/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
  SectionList,
} from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome To Workout Twerkout',
    headerStyle: {
      backgroundColor: 'lightblue',
    },
    headerTitleStyle: {
        textAlign: 'center',
        flexGrow:1,
        alignSelf:'center',
    },
  };

  render() {
    const {navigate} = this.props.navigation;
    return (
        <View style={styles.container}>
              <Button
                title="Start a custom workout!"
                onPress={() => navigate('WorkoutInstance')}
              />
        </View>
    );
  }
}

class WorkoutInstance extends React.Component {

    constructor(props) {
          super(props);

          this.state = {
            numOfExercises: 0,
          };

          //this._onPressGet = this._onPressGet.bind(this);
    }

    static navigationOptions = {
      title: 'Let\'s Go',
      headerStyle: {
        backgroundColor: 'lightblue',
      },
      headerTitleStyle: {
          //textAlign: 'center',
          flexGrow:1,
          alignSelf:'center',
      },
    };
    render() {
        const {navigate} =this.props.navigation;
        //setState
        return (
            <View style={styles.container}>
                <Button
                  title="Add an exercise."
                  onPress={() => {
                      this.state.numOfExercises += 1;
                      navigate('Exercises', this.state)
                  }}
                />


            </View>
        );
    }
}

class Exercises extends React.Component {
    static navigationOptions = {
      title: 'Choose Exercise',
      headerStyle: {
        backgroundColor: 'lightblue',
      },
      headerTitleStyle: {
          //textAlign: 'center',
          flexGrow:1,
          alignSelf:'center',
      },
    };

    render() {
        const {navigation} =this.props;

        return (
            <View style={styles.workoutsContainer}>
            <Text>  thing: {JSON.stringify(navigation.getParam('numOfExercises', -1))} </Text>
            <FlatList
              data={[
                {key: 'Bench Press'},
                {key: 'Dumbbell Press'},
                {key: 'Barbell Squats'},
                {key: 'Barbell Deadlift'},
                {key: 'Incline Benchpress'},
                {key: 'Leg Press'},
                {key: 'Barbell Clean'},
                {key: 'Situps'},
                {key: 'Rows'},
                {key: 'Lat Pull Downs'},
                {key: '1Bench Press'},
                {key: '1Dumbbell Press'},
                {key: '1Barbell Squats'},
                {key: '1Barbell Deadlift'},
                {key: '1Incline Benchpress'},
                {key: '1Leg Press'},
                {key: '1Barbell Clean'},
                {key: '1Situps'},
                {key: '1Rows'},
                {key: '1Lat Pull Downs'},
              ]}
              renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
              />
              <Button
                title="Done."
                onPress={() => this.props.navigation.navigate('WorkoutInstance')}
              />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        marginTop: 75,
        alignItems: 'center'
    },
    workoutsContainer: {
        marginTop: 25,
        alignItems: 'flex-start'
    },
    item: {
        flex : 1,
        flexDirection: 'column',
        alignItems: 'stretch',
        padding: 10,
        fontSize: 22,
        height: 44,
    },
    image: {
        width: 107,
        height: 165,
        margin: 10,
        backgroundColor:'blue'
    },
    description: {
        margin: 30,
        fontSize: 15,
        color: '#656565',
        backgroundColor:'red'
    },
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

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  WorkoutInstance: {screen: WorkoutInstance},
  Exercises: {screen: Exercises},
});

const App = createAppContainer(MainNavigator);

export default App;

/*
const App: () => React$Node = () => {
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
*/


//export default App;
