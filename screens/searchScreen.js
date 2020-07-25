import * as React from 'react';
import {Text, View, StyleSheet, TextInput, TouchableOpacity,Image,Alert} from 'react-native';
import { Header } from 'react-native-elements';


export default class SearchScreen extends React.Component{
    render(){
        return(
            <View style={{flex : 1, justifyContent :'center' ,alignItems:'center'}}>
                <Text style={{flex : 1, justifyContent :'center' ,alignItems:'center'}}>Search</Text>
            </View>
        )
    }
}