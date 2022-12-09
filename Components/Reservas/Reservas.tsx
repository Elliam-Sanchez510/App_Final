import React from 'react';
import { ScrollView, StyleSheet, View, } from 'react-native';
import Reservas1 from './Reservas1';
import Reservas2 from './Reservas2';
import Reservas3 from './Reservas3';


const Reservas = () => {
    return (
        <View>
            <Reservas1/>
            <Reservas2/>
            <Reservas3/>
        </View>
    )
}
export default Reservas;

const styles = StyleSheet.create({

});