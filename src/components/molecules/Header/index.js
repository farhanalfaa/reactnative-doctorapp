import React from 'react';
import {Text, View, StyleSheet} from 'react-native';        
import { colors, fonts } from '../../../utils';
import { Button, Gap } from '../../atoms';

const Header = ({title, onPress}) => {
    return (
        <View style={styles.container}>
            <Button type="icon-only" icon='back-dark' onPress={onPress}/>
            <Text style={styles.text}>{title}</Text>
            <Gap width={24} />
        </View>
    );  
};

export default Header;

const styles = StyleSheet.create({
    container: {paddingHorizontal: 16, paddingVertical:30, flexDirection: 'row', alignItems: 'center', backgroundColor: colors.white},
    text: {textAlign: 'center', flex: 1, fontSize: 20, fontFamily: fonts.primary[600], color: colors.text.primary}
})
