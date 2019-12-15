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
    workoutsContainer: {
        marginTop: 25,
        alignItems: 'flex-start'
    },
})

export default Exercises;
