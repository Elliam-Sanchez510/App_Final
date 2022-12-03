import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const Reservas = () => {
    return (
        <ScrollView>

            <View>
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
                                    incorporan un exclusivo jacuzzi, ideal para
                                    pasar un momento de relajo junto a tu pareja.
                                    <View style={styles.RoomDescription}>
                                        <TouchableOpacity style={styles.ButtonReserv}>
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
                                    Con una espectacular vista hacia la piscina,
                                    además de ser las únicas habitaciones que
                                    incorporan un exclusivo jacuzzi, ideal para
                                    pasar un momento de relajo junto a tu pareja.
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
                                    Con una espectacular vista hacia la piscina,
                                    además de ser las únicas habitaciones que
                                    incorporan un exclusivo jacuzzi, ideal para
                                    pasar un momento de relajo junto a tu pareja.
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


                <ScrollView horizontal={true}>
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
                                    Con una espectacular vista hacia la piscina,
                                    además de ser las únicas habitaciones que
                                    incorporan un exclusivo jacuzzi, ideal para
                                    pasar un momento de relajo junto a tu pareja.
                                    <View style={styles.RoomDescription}>
                                        <TouchableOpacity style={styles.ButtonReserv}>
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
                                    Con una espectacular vista hacia la piscina,
                                    además de ser las únicas habitaciones que
                                    incorporan un exclusivo jacuzzi, ideal para
                                    pasar un momento de relajo junto a tu pareja.
                                    <View style={styles.RoomDescription}>
                                        <TouchableOpacity style={styles.ButtonReserv}>
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
                                    uri: "https://sunway.es/images/bloques/1/habitaciones/B7/galeria/800/1-habitacion-doble-superior-vistas-mar.jpg"
                                }}
                            />
                            <View style={styles.RoomDescription}>
                                <Text style={styles.TextDescription}>
                                    Con una espectacular vista hacia la piscina,
                                    además de ser las únicas habitaciones que
                                    incorporan un exclusivo jacuzzi, ideal para
                                    pasar un momento de relajo junto a tu pareja.
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
                                    incorporan un exclusivo jacuzzi, ideal para
                                    pasar un momento de relajo junto a tu pareja.
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
                                    Con una espectacular vista hacia la piscina,
                                    además de ser las únicas habitaciones que
                                    incorporan un exclusivo jacuzzi, ideal para
                                    pasar un momento de relajo junto a tu pareja.
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
                                    Con una espectacular vista hacia la piscina,
                                    además de ser las únicas habitaciones que
                                    incorporan un exclusivo jacuzzi, ideal para
                                    pasar un momento de relajo junto a tu pareja.
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