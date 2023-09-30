import React, { useState } from 'react';
import { ScrollView, StyleSheet, Image, Text, View, TouchableOpacity, TextInput } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Profile = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [name, setName] = useState('Elliam Sánchez');
    const [email, setEmail] = useState('elliamsanchez510@gmail.com');

    const openImagePickerAsync = async () => {
        let permissionsResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (permissionsResult.granted === false) {
            alert('Permiso requerido para acceder a la galería de imágenes.');
            return;
        }

        const pickerResult = await ImagePicker.launchImageLibraryAsync();
        if (!pickerResult.cancelled) {
            setSelectedImage({ localUri: pickerResult.uri });
        }
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.profileContainer}>
                <Image
                    source={{
                        uri: selectedImage ? selectedImage.localUri : 'https://www.w3schools.com/howto/img_avatar.png',
                    }}
                    style={styles.profileImage}
                />
                <View style={styles.cameraIcon}>
                    <TouchableOpacity onPress={openImagePickerAsync}>
                        <MaterialCommunityIcons name="camera" size={24} color="black" />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.email}>{email}</Text>
            </View>
            <View style={styles.loginMethods}>
                <TouchableOpacity style={styles.loginButton}>
                    <Text style={styles.buttonText}>Iniciar sesión con Facebook</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.loginButton}>
                    <Text style={styles.buttonText}>Iniciar sesión con Google</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
    },
    profileContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20,
    },
    profileImage: {
        width: 120,
        height: 120,
        borderRadius: 60,
        marginEnd: 20,
    },
    cameraIcon: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        backgroundColor: '#ffffff',
        borderRadius: 20,
        padding: 8,
    },
    textContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    email: {
        fontSize: 18,
        color: '#666666',
    },
    loginMethods: {
        margin: 20,
    },
    loginButton: {
        backgroundColor: '#4285f4',
        padding: 15,
        borderRadius: 10,
        marginVertical: 10,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default Profile;
