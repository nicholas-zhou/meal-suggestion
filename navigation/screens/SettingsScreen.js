import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import Colors from '../../utilities/Color';

export default function SettingsScreen({navigation}) {
    const styles = getStyles();
    return(
        <View style={styles.pageContainer}>
            <Text
                onPress={() => navigation.navigate('Home')}
                style={{ fontSize: 26, fontWeight: 'bold'}}>
                Settings Screen
            </Text>
        </View>
    )
}

const getStyles = () => StyleSheet.create({
    pageContainer: {
        backgroundColor: Colors.light.PRIMARY,
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center',
    }
});