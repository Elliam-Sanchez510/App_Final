import React, { useState } from 'react'
import { ScrollView, StyleSheet, Image, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const Profile = () => {
    return (

        <ScrollView>

            <View style={styles.Container}>

                <TouchableOpacity style={styles.CreateProfile1}>
                    <MaterialCommunityIcons
                        name="account-circle-outline"
                        size={50}
                        color="black" />
                    <Text style={styles.CreateProfile}>
                        Crear Perfil
                    </Text>
                </TouchableOpacity>

                <View style={styles.Image}>

                </View>

            </View>

        </ScrollView>
    )
}
export default Profile;

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        margin: 15,
        padding: '15%',
        borderRadius: 15,
    },
    CreateProfile: {
        fontFamily: 'arial',
        fontWeight: 'bold',
        fontSize: 20,
        padding: 10,
    },
    CreateProfile1: {
        flexDirection: 'row',
        height: 50,
        left: -30,
        top: -50,
    },
    Image: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10,

    },
})