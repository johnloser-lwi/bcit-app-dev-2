import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import OnboardingAlphaScreen from '../screens/OnboardingAlphaScreen';
import OnboardingBetaScreen from '../screens/OnboardingBetaScreen';
import OnboardingGammaScreen from '../screens/OnboardingGammaScreen';

const OnboardingTab = createMaterialTopTabNavigator();

export default function OnboardingNavigation({ navigation }) {

    return (
        <OnboardingTab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                tabBarShowIcon: false,
                tabBarStyle: {
                    maxHeight: 0
                },
                tabBarIndicatorStyle: {
                    height: 10,
                    backgroundColor: '#872cba',
                    borderRadius: 5
                },
                tabBarIndicatorContainerStyle: {
                    height: 10,
                }

            }}
        >
            <OnboardingTab.Screen
                name="OnboardingAlpha"
                component={OnboardingAlphaScreen}
            />
            <OnboardingTab.Screen
                name="OnboardingBeta"
                component={OnboardingBetaScreen}
            />
            <OnboardingTab.Screen
                name="OnboardingGamma"
                component={OnboardingGammaScreen}
            />

        </OnboardingTab.Navigator>
    );
}
