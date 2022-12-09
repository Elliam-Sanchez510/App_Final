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

            <View style={styles.TextName}>
                <Text style={styles.TextName1}>Elliam Sánchez</Text>
                <Text style={styles.TextName1}>elliamsanchez510@gmail.com</Text>
            </View>

            <View style={styles.TextName}>
                <Text style={styles.TextName1}>Inicio de sesion vinculado</Text>

                <View style={styles.Sesion}>
                    <TouchableOpacity>
                        <Text style={{ fontSize: 20, margin: 10, backgroundColor: '#abb8c3', }}>Facebook</Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Text style={{ fontSize: 20, margin: 10, backgroundColor: '#abb8c3' }}>Google</Text>
                    </TouchableOpacity>
                </View>

            </View>

            {/* <View style={styles.Vista}>
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
            </View> */}
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
    TextName: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 15,
    },
    TextName1: {
        fontSize: 20,
        fontWeight: 'bold',
        alignItems: 'center',
    },
    Sesion: {
        flexDirection: 'row',
    }

})