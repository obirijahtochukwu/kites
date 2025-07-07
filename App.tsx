import { StatusBar } from "expo-status-bar";
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import "./global.css";
import { Icons } from "./components/icons";
import { data } from "./mock-data";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  Manrope_300Light,
  Manrope_400Regular,
  Manrope_500Medium,
  Manrope_600SemiBold,
  Manrope_700Bold,
} from "@expo-google-fonts/manrope";
import { useFonts } from "expo-font";

// Import your screens
import OnboardingScreen from "./screens/onboarding/page";
import LoginScreen from "./screens/login/page";
import SignupScreen from "./screens/signup/page";
import OtpScreen from "./screens/otp/page";
import SelectCountryScreen from "./screens/select-country/page";
import HomeScreen from "./screens/home/page";
import TransactionScreen from "./screens/transactions/page";
import AnalyticScreen from "./screens/analytics/page";
import SelectCategoryScreen from "./screens/select-category/page";
import SetBudgetScreen from "./screens/set-budget/page";
import ProfileScreen from "./screens/profile/page";
import EditProfileScreen from "./screens/edit-profile/page";
import ExpenseIncomeScreen from "./screens/expense-income/page";
import Nav from "./components/nav";
import MainLayout from "./components/main-layout";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <MainLayout>
      <HomeScreen />
    </MainLayout>
  );
}

function TransactionsStack() {
  return (
    <MainLayout>
      <TransactionScreen />
    </MainLayout>
  );
}

function AnalyticsStack() {
  return (
    <MainLayout>
      <AnalyticScreen />
    </MainLayout>
  );
}

function ProfileStack() {
  return (
    <MainLayout>
      <ProfileScreen />
    </MainLayout>
  );
}

export default function App() {
  const [fontsLoaded] = useFonts({
    light: Manrope_300Light,
    normal: Manrope_400Regular,
    medium: Manrope_500Medium,
    semibold: Manrope_600SemiBold,
    bold: Manrope_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="OnboardingScreen"
        tabBar={(props) => <Nav {...props} />}
        screenOptions={{
          headerShown: false,
        }}
      >
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Transactions" component={TransactionsStack} />
        <Tab.Screen name="Analytics" component={AnalyticsStack} />
        <Tab.Screen name="Profile" component={ProfileStack} />
        <Tab.Screen name="EditProfile" component={EditProfileScreen} />
        <Tab.Screen
          name="ExpenseIncomeScreen"
          component={ExpenseIncomeScreen}
        />
        <Tab.Screen
          name="SelectCategoryScreen"
          component={SelectCategoryScreen}
        />
        <Tab.Screen name="OnboardingScreen" component={OnboardingScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
