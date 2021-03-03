import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {fetch} from 'react-native-ssl-pinning';

const testSSLPinning = () => {
    // fetch('https://reactnative.dev/docs/button', {//incorrect
    fetch('https://www.google.co.il/?hl=iw', {//correct
        method: 'GET',
        pkPinning: true,
        sslPinning: {
            certs: ['sha256/47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU='],//possible to find this using
        },
    })
        .then((text) => {
            alert(JSON.stringify(text));
        })
        .catch((error) => {
            alert(JSON.stringify(error));
        });
};

const localCertPinning = () => {
    // fetch('https://reactnative.dev/docs/button', {//incorrect
    fetch('https://www.google.co.il/?hl=iw', {//correct
        method: 'GET',
        timeoutInterval: 2000,
        sslPinning: {
            certs: ['googleil.cer'], // your certificates name (without extension), for example cert1.cer, cert2.cer
        },
    })
        .then(response => {
            alert(JSON.stringify(response));
        })
        .catch(err => {
            alert(JSON.stringify(err));
        });
};


export default function App() {
    return (
        <View style={styles.container}>
            <Text>ssl pinning</Text>
            <TouchableOpacity
                onPress={() => testSSLPinning()}
                style={styles.button}>
                <Text style={{color: 'black'}}>testSSLPinning </Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => localCertPinning()}
                style={styles.button}>
                <Text style={{color: 'black'}}>localCertPinning </Text>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        marginTop: 8,
        backgroundColor: '#ffa',
        width: 300,
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

