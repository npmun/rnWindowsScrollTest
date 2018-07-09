import React from "react";
import {DrawerNavigator} from "react-navigation";
import {Button, Picker, ScrollView, StyleSheet, Text, View} from "react-native";

class MyHomeScreen extends React.Component {
static navigationOptions = {
    drawerLabel: 'Home',
};
state = {
    names: [
        {'name': 'Ben', 'id': 1},
        {'name': 'Susan', 'id': 2},
        {'name': 'Robert', 'id': 3},
        {'name': 'Mary', 'id': 4},
        {'name': 'Daniel', 'id': 5},
        {'name': 'Laura', 'id': 6},
        {'name': 'John', 'id': 7},
        {'name': 'Debra', 'id': 8},
        {'name': 'Aron', 'id': 9},
        {'name': 'Ann', 'id': 10},
        {'name': 'Steve', 'id': 11},
        {'name': 'Olivia', 'id': 12}
    ]
};
render() {
    return (
        <View style={{flex:1, zIndex: 1}}>
            <View style={{width:260}}>
                <Picker
                    style={{ height: 50, width: 100 }}
                    onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="JavaScript" value="js" />
                </Picker>
            </View>
            <ScrollView style={{zIndex: 2}}>
                {
                    this.state.names.map((item, index) => (
                        <View key = {item.id} style = {styles.item}>
                            <Text>{item.name}</Text>
                        </View>
                    ))
                }
            </ScrollView>
        </View>
    )
}
}

const styles = StyleSheet.create ({
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 40,
        margin: 2,
        borderColor: '#2a4944',
        borderWidth: 1,
        backgroundColor: '#d2f7f1'
    }
});

class MyNotificationsScreen extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Notifications',

    };

    render() {
        return (
            <Button
                onPress={() => this.props.navigation.goBack()}
                title="Go back home"
            />
        );
    }
}

export default MyApp = DrawerNavigator({
    Home: {
        screen: MyHomeScreen,
    },
    Notifications: {
        screen: MyNotificationsScreen,
    },
});