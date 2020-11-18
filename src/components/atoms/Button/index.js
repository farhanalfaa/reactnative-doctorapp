import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const Button = ({type, title, onPress}) => {
    return (
        <TouchableOpacity style={styles.container(type)} onPress={onPress}>
            <Text style={styles.text(type)}>{title}</Text>
        </TouchableOpacity>
    );  
};

export default Button;

const styles = StyleSheet.create({
    container: type => ({
        backgroundColor: type === 'secondary' ? 'white' : '#00ADB5',
        paddingVertical: 10, 
        borderRadius: 10
    }),
    text: type => ({
        fontSize: 18, 
        fontWeight: '600', 
        textAlign: 'center',
        fontFamily: 'Nunito-SemiBold', 
        color: type === 'secondary' ? '#112340' : '#fff'
    }),
});
