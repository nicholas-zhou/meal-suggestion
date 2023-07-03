import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import Colors from '../../utilities/Color';

export default function HomeScreen({navigation}) {
    const styles = getStyles();
    return(
        <View style={styles.pageContainer}>
            <Text
                onPress={() => alert('This is the "Home" screen.')}
                style={{ fontSize: 26, fontWeight: 'bold'}}>
                Home Screen
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