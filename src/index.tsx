import React from 'react';
import { View, Text, } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import ChatList from './chat_list';
import Test from './tset';
import Header from './components/Header';

interface State { }
interface Props {
    navigation: any
}

class HomeScreen extends React.Component<Props, State>{
    static navigationOptions = {
        title: '123123123'
    }
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text onPress={() => this.props.navigation.navigate('Home')} >Home Screen</Text>
            </View>
        );
    }
}

const HomeTab = {
    'Home': {
        screen: ChatList,
    },
    'Test': Test,
}

const BottomTabNavigatorConfig = {
    initialRouteName: 'Home',
    labelPosition: 'below-icon'
    // tabBarComponent: props => {
    //     // 底部导航
    //     return null
    // }
}

const Tab = createBottomTabNavigator(HomeTab, BottomTabNavigatorConfig)


const Page = {
    HomePage: {
        screen: Tab,
        navigationOptions: () => ({
            headerBackTitle: '返回首页',
            header: () => null, // 首页不展示tab
        })
    },
    Home: {
        screen: ChatList,

    },
    Test1: {
        screen: HomeScreen,
    },

}

const PageConfig = {
    initialRouteName: 'HomePage',
    headerShown: false,
    // defaultNavigationOptions: ({ navigation }) => NavigatorOptions(navigation),
}

const NavigatorOptions = (navigation) => {

    const header = (props) => <Header {...props} />;
    return {

        header,
    };
};



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
        // console.log(this.navigator)
    }
}


export default App;