import React from 'react';
import { ScrollView, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const Home = () => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Encuentra tu Estancia Perfecta</Text>
            </View>

            <View style={styles.searchSection}>
                <TextInput
                    placeholder='Buscar hoteles, ciudades...'
                    style={styles.searchInput}
                />
                <TouchableOpacity style={styles.searchButton}>
                    <AntDesign name="search1" size={24} color="white" />
                </TouchableOpacity>
            </View>

            <View style={styles.featuredHotels}>
                <Text style={styles.featuredHeading}>Hoteles Destacados</Text>
            </View>

            <View style={styles.promotionContainer}>
                <Text style={styles.promotionHeading}>Ofertas Especiales</Text>
                <Text style={styles.promotionText}>
                    ¡Reserva ahora y obtén un descuento del 20% en tu próxima estancia!
                </Text>
            </View>
        </ScrollView>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        backgroundColor: '#009688',
        padding: 20,
        marginBottom: 10,
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
    },
    searchSection: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 20,
        marginBottom: 20,
    },
    searchInput: {
        flex: 1,
        paddingVertical: 10,
        paddingHorizontal: 15,
        backgroundColor: '#f0f0f0',
        borderRadius: 25,
        fontSize: 16,
    },
    searchButton: {
        backgroundColor: '#009688',
        borderRadius: 25,
        padding: 10,
        marginLeft: 10,
    },
    featuredHotels: {
        marginHorizontal: 20,
        marginBottom: 30,
    },
    featuredHeading: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    promotionContainer: {
        marginHorizontal: 20,
        marginBottom: 20,
    },
    promotionHeading: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    promotionText: {
        fontSize: 16,
    },
});
