import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity, Alert, Vibration} from 'react-native';

const Reservas = () => {
    return (
        <ScrollView>

            <View>
                <Text style={styles.TextBathroom}>HABITACIONES</Text>
                <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                >

                    <View style={styles.Container}>
                        <View>
                            <Text style={styles.Headertext}> Suite</Text>
                            <Image
                                style={styles.Imag}
                                source={{
                                    uri: "https://www.hotelvinasqueirolo.com/v02/images/rooms/p-suite.jpg"
                                }}
                            />
                            <View style={styles.RoomDescription}>
                                <Text style={styles.TextDescription}>
                                    Con una espectacular vista hacia la piscina,
                                    además de ser las únicas habitaciones que
                                    incorporan un exclusivo jacuzzi.
                                    <View style={styles.RoomDescription}>
                                        <TouchableOpacity style={styles.ButtonReserv}
                                        onPress={() => Vibration.vibrate(1)}
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
                                        <TouchableOpacity style={styles.ButtonReserv}
                                        onPress={() => Vibration.vibrate(1)}
                                        >
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
                                        <TouchableOpacity style={styles.ButtonReserv}
                                        onPress={() => Vibration.vibrate(1)}
                                        >
                                            <Text style={styles.ButtonReserv}>RESERVAR</Text>
                                        </TouchableOpacity>
                                    </View>
                                </Text>
                            </View>

                        </View>

                    </View>
                </ScrollView>


                <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                >
                    <View style={styles.Container}>
                        <View>
                            <Text style={styles.Headertext}> Superior</Text>
                            <Image
                                style={styles.Imag}
                                source={{
                                    uri: "https://www.granhotelmonterrey.com/uploads/9/8/2/4/98249186/superior2_13_orig.jpg"
                                }}
                            />
                            <View style={styles.RoomDescription}>
                                <Text style={styles.TextDescription}>
                                    Despierta y enamórate de los viñedos,
                                    desde una vista privilegiada, en un ambiente
                                    que combina la majestuosidad del estilo
                                    republicano
                                    <View style={styles.RoomDescription}>
                                        <TouchableOpacity style={styles.ButtonReserv}
                                        onPress={() => Vibration.vibrate(1)}
                                        >
                                            <Text style={styles.ButtonReserv}>RESERVAR</Text>
                                        </TouchableOpacity>
                                    </View>
                                </Text>
                            </View>

                        </View>

                        <View>
                            <Text style={styles.Headertext}> Superior matrimonial</Text>
                            <Image
                                style={styles.Imag}
                                source={{
                                    uri: "https://www.hotelmayucusco.com/wp-content/uploads/habitacion-matrimonial-2.jpg"
                                }}
                            />
                            <View style={styles.RoomDescription}>
                                <Text style={styles.TextDescription}>
                                    Disfruta de la exclusividad de tus habitaciones
                                    y siente la magia de la tierra del sol eterno en
                                    un lugar inolvidable.
                                    <View style={styles.RoomDescription}>
                                        <TouchableOpacity style={styles.ButtonReserv}
                                        onPress={() => Vibration.vibrate(1)}
                                        >
                                            <Text style={styles.ButtonReserv}>RESERVAR</Text>
                                        </TouchableOpacity>
                                    </View>
                                </Text>

                            </View>

                        </View>

                        <View>
                            <Text style={styles.Headertext}> Superior Doble</Text>
                            <Image
                                style={styles.Imag}
                                source={{
                                    uri: "https://media-cdn.tripadvisor.com/media/photo-s/0e/89/cc/e6/apart-hotel-ref.jpg"
                                }}
                            />
                            <View style={styles.RoomDescription}>
                                <Text style={styles.TextDescription}>
                                    2 camas twin, terraza privada, con vista a
                                    la piscina de descanso o hacia los viñedos.
                                    Además, tenemos a tu disposición habitaciones familiares.
                                    <View style={styles.RoomDescription}>
                                        <TouchableOpacity style={styles.ButtonReserv}
                                        onPress={() => Vibration.vibrate(1)}
                                        >
                                            <Text style={styles.ButtonReserv}>RESERVAR</Text>
                                        </TouchableOpacity>
                                    </View>
                                </Text>
                            </View>

                        </View>

                    </View>

                </ScrollView>

                <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                >
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
                                        <TouchableOpacity style={styles.ButtonReserv}
                                        onPress={() => Vibration.vibrate(1)}
                                        >
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
                                        <TouchableOpacity style={styles.ButtonReserv}
                                        onPress={() => Vibration.vibrate(1)}
                                        >
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
                                        <TouchableOpacity style={styles.ButtonReserv}
                                        onPress={() => Vibration.vibrate(1)}
                                        >
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
                                        <TouchableOpacity style={styles.ButtonReserv}
                                        onPress={() => Vibration.vibrate(1)}
                                        >
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
                                        <TouchableOpacity style={styles.ButtonReserv}
                                        onPress={() => Vibration.vibrate(1)}
                                        >
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
                                        <TouchableOpacity style={styles.ButtonReserv}
                                        onPress={() => Vibration.vibrate(1)}
                                        >
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
                                        <TouchableOpacity style={styles.ButtonReserv}
                                        onPress={() => Vibration.vibrate(1)}
                                        >
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
                                        <TouchableOpacity style={styles.ButtonReserv}
                                        onPress={() => Vibration.vibrate(1)}
                                        >
                                            <Text style={styles.ButtonReserv}>RESERVAR</Text>
                                        </TouchableOpacity>
                                    </View>
                                </Text>
                            </View>

                        </View>

                    </View>

                </ScrollView>
            </View>
        </ScrollView>
    )
}
export default Reservas;

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