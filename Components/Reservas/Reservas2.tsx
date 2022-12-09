import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react'

export default function Reservas2() {
    return (
        <View>
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
                                Despierta y enamórate de los viñedos,
                                desde una vista privilegiada, en un ambiente
                                que combina la majestuosidad del estilo
                                republicano con elegantes acabados.
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
                                Disfruta de la exclusividad de tus habitaciones
                                y siente la magia de la tierra del sol eterno en
                                un lugar inolvidable. Incluye terraza privada y
                                una expectacular piscina.
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
                                uri: "https://media-cdn.tripadvisor.com/media/photo-s/0e/89/cc/e6/apart-hotel-ref.jpg"
                            }}
                        />
                        <View style={styles.RoomDescription}>
                            <Text style={styles.TextDescription}>
                                2 camas twin, terraza privada, con vista a
                                la piscina de descanso o hacia los viñedos.
                                Además, tenemos a tu disposición habitaciones familiares.
                                para pasar momentos relajados.
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