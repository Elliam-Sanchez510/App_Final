import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native';
import React from 'react'

export default function Reservas3() {
    return (
        <View>
            <ScrollView horizontal={true}>
                <View style={styles.Container}>
                    <View>
                        <Text style={styles.Headertext}> Junior</Text>
                        <Image
                            style={styles.Imag}
                            source={{
                                uri: "https://hotelplazavizcaya.com/wp-content/uploads/2021/04/JR-SUITE-1-CAMA-03.jpg"
                            }}
                        />
                        <View style={styles.RoomDescription}>
                            <Text style={styles.TextDescription}>
                                Con una espectacular vista hacia la piscina,
                                además de ser las únicas habitaciones que
                                incorporan un exclusivo jacuzzi.
                                <View style={styles.RoomDescription}>
                                    <TouchableOpacity style={styles.ButtonReserv}>
                                        <Text style={styles.ButtonReserv}>RESERVAR</Text>
                                    </TouchableOpacity>
                                </View>
                            </Text>
                        </View>

                    </View>

                    <View>
                        <Text style={styles.Headertext}> Junior class matrimonial</Text>
                        <Image
                            style={styles.Imag}
                            source={{
                                uri: "https://www.awaresort.com.py/assets/images/habitaciones/bg-junior-suite@2x.jpg"
                            }}
                        />
                        <View style={styles.RoomDescription}>
                            <Text style={styles.TextDescription}>
                                Disfruta de la exclusividad de tus habitaciones
                                y siente la magia de la tierra del sol eterno en
                                un lugar inolvidable.
                                <View style={styles.RoomDescription}>
                                    <TouchableOpacity style={styles.ButtonReserv}>
                                        <Text style={styles.ButtonReserv}>RESERVAR</Text>
                                    </TouchableOpacity>
                                </View>
                            </Text>

                        </View>

                    </View>

                    <View>
                        <Text style={styles.Headertext}> Junior class Doble</Text>
                        <Image
                            style={styles.Imag}
                            source={{
                                uri: "https://www.ahgz.de/news/media/4/So-sie-aus-Ein-der-neu-Zim-im-Lind-Gol-Res-Port-No-34076.jpeg"
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
                        <Text style={styles.Headertext}> Junior pluss matrimonial</Text>
                        <Image
                            style={styles.Imag}
                            source={{
                                uri: "https://www.hotelvinasqueirolo.com/v02/images/rooms/junior-plus-matrimonial.jpg"
                            }}
                        />
                        <View style={styles.RoomDescription}>
                            <Text style={styles.TextDescription}>
                                Disfruta de la exclusividad de tus habitaciones
                                y siente la magia de la tierra del sol eterno en
                                un lugar inolvidable.
                                <View style={styles.RoomDescription}>
                                    <TouchableOpacity style={styles.ButtonReserv}>
                                        <Text style={styles.ButtonReserv}>RESERVAR</Text>
                                    </TouchableOpacity>
                                </View>
                            </Text>
                        </View>

                    </View>

                    <View>
                        <Text style={styles.Headertext}> Junior pluss doble</Text>
                        <Image
                            style={styles.Imag}
                            source={{
                                uri: "https://www.hotelvinasqueirolo.com/v02/images/rooms/jp-doble.jpg"
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


                    <View>
                        <Text style={styles.Headertext}> Junior triple</Text>
                        <Image
                            style={styles.Imag}
                            source={{
                                uri: "https://www.hotelvinasqueirolo.com/v02/images/rooms/j-triple.jpg"
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
                        <Text style={styles.Headertext}> Junior cuadruple</Text>
                        <Image
                            style={styles.Imag}
                            source={{
                                uri: "https://www.hotelvinasqueirolo.com/v02/images/rooms/j-cuadruple.jpg"
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


                    <View>
                        <Text style={styles.Headertext}> Junior familiar</Text>
                        <Image
                            style={styles.Imag}
                            source={{
                                uri: "https://www.hotelvinasqueirolo.com/v02/images/rooms/junior-familiar.jpg"
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