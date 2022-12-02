import { ScrollView, StyleSheet, Image, Text, View, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Favorites = () => {
    return (
        <ScrollView>
            <View>
                <Text>Hola</Text>

                <ScrollView>
            <View style={styles.Container}>

                <View>
                    <Text style={styles.TextBedrooms}>Habitaciones</Text>
                </View>

                <ScrollView horizontal={true}>
                    <View style={styles.Image}>
                        <Image
                            style={styles.Images1}
                            source={{
                                uri: "https://www.casacelsa.com/wp-content/uploads/2016/05/habitacion2.jpg"
                            }}
                        />

                        <View style={styles.Image}>
                            <Text style={styles.DescriptionBedrooms}>
                                Con una espectacular vista hacia la piscina,
                                además de ser las únicas habitaciones que
                                incorporan un exclusivo jacuzzi, ideal para
                            </Text>
                        </View>
                    </View>

                </ScrollView>

            </View>

        </ScrollView>
            </View>

        </ScrollView>
    )
}
export default Favorites;

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        width: '60%',


    },

    TextBedrooms: {
        fontSize: 25,
        fontStyle: 'italic',
        fontWeight: 'bold',
        textAlign: 'center',

    },
    Image: {
        width: '60%',
        margin: 5,
        paddingStart: 10,
        backgroundColor: 'green',
    },
    Images1: {
        width: '60%',
        margin: 13,
        height: 200,
    },
    DescriptionBedrooms: {
        fontSize: 18,
        textAlign: 'justify',
    }
   
})