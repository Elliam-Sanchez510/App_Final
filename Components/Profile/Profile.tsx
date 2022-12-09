import React, { useState } from 'react'
import { ScrollView, StyleSheet, Image, Text, View, TouchableOpacity, TextInput, } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Profile = () => {

    const [selectedImage, setSelectedImage] = useState(null)

    let openImagePickerAsync = async () => {
        let PermissionsResult = await ImagePicker.requestMediaLibraryPermissionsAsync()

        if (PermissionsResult.granted === false) {
            alert("permiso requerido");
            return;
        }
        const pickerResult = await ImagePicker.launchImageLibraryAsync()
        if (pickerResult.cancelled === true) {
            return;
        }
        setSelectedImage({ localUri: pickerResult.uri })
    };

    return (
        <ScrollView>

            <View style={styles.Container}>
                <Image
                    source={{
                        uri: selectedImage !== null
                            ? selectedImage.localUri
                            : "https://www.w3schools.com/howto/img_avatar.png"
                    }}
                    style={styles.Image}
                />

                <View style={styles.IconCamera}>
                    <TouchableOpacity
                        onPress={openImagePickerAsync}
                    >
                        <MaterialCommunityIcons
                            style={{ fontSize: 20, textAlign: 'center' }}
                            name="camera"
                        />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.Vista}>
                <TextInput
                    style={styles.Input}
                />
                <TextInput
                    placeholder='Correo electrónico'
                    style={styles.Input}
                />
                <TextInput
                    placeholder='Contraseña'
                    secureTextEntry={true}
                    style={styles.Input}
                />
            </View>
        </ScrollView>

    )
}
export default Profile;

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
        // backgroundColor: 'gray',
    },
    Image: {
        width: 100,
        height: 100,
        borderRadius: 50,
        margin: 5,
    },
    IconCamera: {
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        top: 25,
        right: 25
    },
    Vista: {
        height: 250,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: 'pink'
    },
    Input: {
        width: '90%',
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: '#fff',
        color: '#424242',
        borderWidth: 2,
        borderRadius: 10,
        marginTop: 15,
        borderColor: '#00bcd4',
        paddingStart: 20,
    },

})