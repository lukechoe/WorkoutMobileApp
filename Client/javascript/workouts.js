import React from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  StatusBar,
  View,
  Text,
  TouchableHighlight,
  FlatList,
  SectionList,
} from 'react-native';

import AtoZList from 'react-native-atoz-list';
var AlphabetListView = require('react-native-alphabetlistview');
import AlphabetSectionList from 'react-native-alphabet-sectionlist';



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

    constructor(props,context){
        super(props,context)
        this.pastStateParams = this.props.navigation.state.params;
        //JSON.stringify(navigation.getParam('state', 'unknown...'));
        this.state = {
              data: {
                'A': [{ name: 'A1' }, { name: 'A2' }, { name: 'A3' }],
                "E": [{ name: 'E1' }, { name: 'E2' }, { name: 'E3' }, { name: 'E4' }],
                'F': [{ name: 'F1' }, { name: 'F2' }, { name: 'F3' }],
                'H': [{ name: 'H1' }, { name: 'H2' }, { name: 'H3' }, { name: 'H5' }],
                'J': [{ name: 'J1' }, { name: 'J2' }, { name: 'J3' }, { name: 'J5' }],
                'K': [{ name: 'K1' }, { name: 'K2' }, { name: 'K3' }, { name: 'K5' }],
                'N': [{ name: 'N1' }, { name: 'N2' }, { name: 'N3' }, { name: 'N5' }],
                'Y': [{ name: 'Y1' }, { name: 'Y2' }, { name: 'Y3' }, { name: 'Y5' }, { name: 'Y6' }],
              },
            };
    }

    _onPressExercise(name, pastStateParams) {
         alert('You selected the exercise ' + name + '!' + pastStateParams.numOfExercises);
    }

    renderItem = ({ item }) => {
        return (
          <View style={{
            marginLeft: 10,
            paddingVertical: 10,
            borderBottomColor: 'lightgray',
            borderBottomWidth: 0.5
          }}>
          <TouchableHighlight onPress={() => this._onPressExercise(item.name, this.pastStateParams)} underlayColor="white">

            <Text>{item.name}</Text>
         </TouchableHighlight>
         </View>

        )
      }
      renderHeader = () => {
       return (
         <View>
           <Text>header1</Text>
           <Text>header2</Text>
         </View>
       )
     }

     renderSectionHeader = ({ section: { title } }) => {
       return (
         <View style={{
           paddingLeft: 10,
           backgroundColor: '#f1f2f3',
           paddingVertical: 5,
         }}>
           <Text style={{ color: 'blue' }}>{title}</Text>
         </View>
       )
     }

    render() {
        const {navigation} =this.props;

        return (
            <View style={{ flex: 1 }}>
            <Text>
            {JSON.stringify(navigation.getParam('state', 'unknown...'))}
            </Text>
                <AlphabetSectionList
                  data={this.state.data}
                  renderItem={this.renderItem}
                  renderHeader={this.renderHeader}
                  // custom section header
                  renderSectionHeader={this.renderSectionHeader}
                  // default section header styles
                  // sectionHeaderStyle={{ paddingVertical: 5 }}
                  // sectionHeaderTextStyle={{ fontSize: 16, color: 'blue' }}
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

export default Exercises ;
