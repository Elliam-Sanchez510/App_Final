import React from 'react';
import { ScrollView, StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const Home = () => {
    return (
        <ScrollView style={styles.Container}>

            <View style={styles.Container}>
                <View style={styles.searchSection}>
                    <TextInput
                        placeholder='Buscar'
                        style={styles.Search}
                    />
                    <View style={styles.IconSearch}>
                        <TouchableOpacity>
                            <AntDesign name="search1" size={30} color="black" />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.Image}>
                    <Image
                        style={styles.Images1}
                        source={{
                            uri: "https://megaricos.com/wp-content/uploads/2019/07/shutterstock_184155629.jpg"
                        }}
                    />
                </View>

                <View style={styles.Text}>
                    <Text style={styles.Text1}>
                        Cosecha experiencias en tu estancia en nuestro Hotel. Vivirás momentos
                        agradables que quedarán en tu memoria.
                    </Text>
                </View>

                <Text style={styles.TextServicios}>Servicios</Text>


                <View style={styles.Icons}>

                    <View style={styles.IconsServicios}>
                        <MaterialCommunityIcons
                            name="car-settings"
                            style={styles.Icons1}
                        />
                        <Text>Parqueo privado</Text>
                    </View>

                    <View style={styles.IconsServicios}>
                        <MaterialCommunityIcons
                            name="wifi-arrow-left-right"
                            style={styles.Icons1}
                        />
                        <Text>Wifi</Text>
                    </View>

                    <View style={styles.IconsServicios}>
                        <MaterialCommunityIcons
                            name="car-child-seat"
                            style={styles.Icons1}
                        />
                        <Text>Juegos para niños</Text>
                    </View>

                    <View style={styles.IconsServicios}>
                        <MaterialCommunityIcons
                            name="bathtub"
                            style={styles.Icons1}
                        />
                        <Text>Piscinas</Text>
                    </View>

                    <View style={styles.IconsServicios}>
                        <MaterialIcons
                            name="sports-tennis"
                            style={styles.Icons1}
                        />
                        <Text>Cancha de tennis</Text>
                    </View>

                </View>

            </View>

        </ScrollView>
    )
}
export default Home;

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: 'gray',

    },
    searchSection: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        // backgroundColor: '#fff',
        paddingStart: 30,
        // width: '100%'

    },
    Search: {
        flex: 1,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        backgroundColor: '#fff',
        color: '#424242',
        borderWidth: 2,
        borderRadius: 10,
        paddingLeft: 10,
        marginTop: 15,
        borderColor: '#009688',
        paddingStart: 20,
        // width: '100%'
    },
    IconSearch: {
        top: 8,
        right: 35,
        fontSize: 10,
        borderRadius: 10

    },
    Image: {
        width: '90%',
        margin: 5,
        // backgroundColor: 'green'
        paddingStart: 10,
    },
    Images1: {
        margin: 13,
        width: '100%',
        height: 200,
        borderRadius: 8,
    },
    Text: {
        flex: 1,
        width: '90%',
        alignItems: 'center',
        paddingStart: 30,
        // backgroundColor: 'gray',
    },
    Text1: {
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'justify',
        paddingStart: 10,
    },

    TextServicios: {
        textAlign: 'center',
        fontSize: 20,
        margin: 5,
        fontWeight: 'bold',
    },
    Icons: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row',
        // backgroundColor: 'pink',
        paddingStart: 30
    },
    IconsServicios: {
        color: 'gray',
        width: '20%',
        margin: 4,
    },
    Icons1: {
        fontSize: 30,
        color: 'gray',
        margin: 8
    },
})