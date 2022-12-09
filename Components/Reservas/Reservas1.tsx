import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView,} from 'react-native';
import React from 'react'

export default function Reservas1() {
    return (


        <View>
            <Text style={styles.TextBathroom}>HABITACIONES</Text>
            <ScrollView horizontal={true}>

                <View style={styles.Container}>
                    <View>
                        <Text style={styles.Headertext}> Suite</Text>
                        <Image
                            style={styles.Imag}
                            source={{
                                uri: "https://www.casacelsa.com/wp-content/uploads/2016/05/habitacion2.jpg"
                            }}
                        />
                        <View style={styles.RoomDescription}>
                            <Text style={styles.TextDescription}>
                                Con una espectacular vista hacia la piscina,
                                además de ser las únicas habitaciones que
                                incorporan un exclusivo jacuzzi.
                                <View style={styles.RoomDescription}>
                                    <TouchableOpacity style={styles.ButtonReserv}
                                    >
                                        <Text style={styles.ButtonReserv}>RESERVAR</Text>
                                    </TouchableOpacity>
                                </View>
                            </Text>
                        </View>

                    </View>

                    <View>
                        <Text style={styles.Headertext}> Suite matrimonial</Text>
                        <Image
                            style={styles.Imag}
                            source={{
                                uri: "https://media-cdn.tripadvisor.com/media/photo-s/0d/eb/78/da/suite-matrimonial.jpg"
                            }}
                        />
                        <View style={styles.RoomDescription}>
                            <Text style={styles.TextDescription}>
                                Cama King, terraza privada con vista al jardín
                                o hacia los viñedos y jacuzzi. Cuenta con servicios
                                incluidos como: Aire acondicionado, wifi grattuito.
                                <View style={styles.RoomDescription}>
                                    <TouchableOpacity style={styles.ButtonReserv}>
                                        <Text style={styles.ButtonReserv}>RESERVAR</Text>
                                    </TouchableOpacity>
                                </View>
                            </Text>

                        </View>

                    </View>

                    <View>
                        <Text style={styles.Headertext}> Suite Master Matrimonial</Text>
                        <Image
                            style={styles.Imag}
                            source={{
                                uri: "https://www.hotelvinasqueirolo.com/v02/images/rooms/sup-matrimonial.jpg"
                            }}
                        />
                        <View style={styles.RoomDescription}>
                            <Text style={styles.TextDescription}>
                                Con vista al jardín o hacia los viñedos y jacuzzi.
                                Así como una terraza privada y amplios ventanales
                                para disfrutar de las vistas.
                                <View style={styles.RoomDescription}>
                                    <TouchableOpacity style={styles.ButtonReserv}>
                                        <Text style={styles.ButtonReserv}>RESERVAR</Text>
                                    </TouchableOpacity>
                                </View>
                            </Text>
                        </View>

                    </View>

                </View>
            </ScrollView>


        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        flexDirection: 'row',
        // backgroundColor: 'gray',
        margin: 10,
        justifyContent: 'space-around'
    },
    TextBathroom: {
        textAlign: 'center',
        fontSize: 20,
        margin: 5,
        fontWeight: 'bold',
    },
    Headertext: {
        fontSize: 15,
        textAlign: 'center',
        margin: 10,
        fontWeight: 'bold'
    },
    Imag: {
        width: 230,
        height: 145,
        margin: 5,
        borderRadius: 10
    },
    RoomDescription: {
        width: 230,
        height: 145,
        // backgroundColor: 'gray'
    },
    TextDescription: {
        textAlign: 'justify',
    },
    ButtonReserv: {
        fontSize: 20,
        textAlign: 'center',
        margin: 3,
        fontWeight: 'bold',
        backgroundColor: '#03a9f4',
        color: '#fff',
        borderRadius: 5,
    }

})