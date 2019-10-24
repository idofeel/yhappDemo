import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ChatList from './chat_list';
import Test from './tset';


interface State { }
interface Props {
    navigation: any
}

class HomeScreen extends React.Component<Props, State>{
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text onPress={() => this.props.navigation.navigate('Home')} >Home Screen</Text>
            </View>
        );
    }
}

const Page = {
    Home: {
        screen: ChatList,
    },
    Test: {
        screen: Test,
    },
    HomePage: {
        screen: HomeScreen,
    }
}

const PageConfig = {
    initialRouteName: 'HomePage',
}

const AppNavigator = createStackNavigator(Page, PageConfig);
const AppContainer = createAppContainer(AppNavigator);


class App extends React.Component<Props, State>{
    navigator: any
    render() {
        return (
            <AppContainer
                ref={nav => {
                    this.navigator = nav;
                }}
                onNavigationStateChange={() => {
                    console.log(...arguments)
                }}
            />
        );
    }
    componentDidMount() {
        console.log(this.navigator)
    }
}


export default App;