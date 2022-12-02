import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';



const Reservas = () => {
    return (

        <View>
            <ScrollView horizontal={true}>
                <View style={styles.Container}>
                    <View>
                        <Text style={styles.Headertext}> SUITE</Text>
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
                        <Text style={styles.Headertext}> SUITE MATRIMONIAL</Text>
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
                        <Text style={styles.Headertext}> SUITE MASTER MATRIMONIAL</Text>
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
        </View>
    )
}
export default Reservas;

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        flexDirection: 'row',
        // backgroundColor: 'white',
        margin: 10,
        justifyContent: 'space-between'
    },
    Headertext: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        fontWeight: 'bold'
    },
    Imag: {
        width: 200,
        height: 140,
        margin: 5,
        borderRadius: 10
    },
    RoomDescription: {
        width: 200,
        height: 140,
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
        color: '#fff'

    }

})