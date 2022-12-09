import React from 'react';
import { ScrollView, StyleSheet, View, } from 'react-native';
import Reservas1 from './Reservas1';
import Reservas2 from './Reservas2';
import Reservas3 from './Reservas3';

const Reservas = () => {
    return (
        <ScrollView>
            <View><Reservas1/></View>
            <View><Reservas2/></View>
            <View><Reservas3/></View>
        </ScrollView>
    )
}
export default Reservas;

const styles = StyleSheet.create({
  
})