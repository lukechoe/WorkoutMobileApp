

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

import Exercises from './javascript/workouts';
var AlphabetListView = require('react-native-alphabetlistview');


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
                title="Start a custom workout!!"
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
            listOfExercises: [],
          };
          if (this.props.navigation && this.props.navigation.state && this.props.navigation.state.params){
              console.log('in if statement')
              this.pastStateParams = this.props.navigation.state.params;
              if (this.pastStateParams.listOfExercises == undefined){
                  this.state.listOfExercises = [{key: 'shouldnt get here'}];
              }
              else{
                  console.log(this.state.listOfExercises);
                  this.state.listOfExercises = this.pastStateParams.listOfExercises;
              }
          }
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
        if (this.props.navigation.state.params){
            console.log("ok")

            return (
                <View style={styles.container}>
                    <Text>
                        "Num of Exercises : " + {this.state.numOfExercises};
                    </Text>
                    <Button
                      title="Add an exercise."
                      onPress={() => {
                          this.state.numOfExercises += 1;
                          navigate('Exercises', {
                              state: this.state,
                              numOfExercises: this.state.numOfExercises,
                          });
                      }}
                    />
                    <FlatList
                      data={this.props.navigation.state.params.listOfExercises}
                      //data={this.state.listOfExercises}
                      renderItem={({item}) =>
                      <Text style={styles.item}>
                        {item.key}
                        Other stuff HERE
                      </Text>}
                    />
                </View>
            );
        }
        else{
            //first time rendered... from welcome page
            console.log("first?")
            return (
                <View style={styles.container}>
                    <Text>
                        "Num of Exercises : " + {this.state.numOfExercises};
                    </Text>
                    <Button
                      title="Add an exercise."
                      onPress={() => {
                          this.state.numOfExercises += 1;
                          navigate('Exercises', {
                              state: this.state,
                              numOfExercises: this.state.numOfExercises,
                          });
                      }}
                    />
                </View>
            );
        }
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
