import { View, } from 'react-native';

import { Text, Image, Button, } from '@rneui/themed';

import { onbStyles } from '../themes/onboardingStyles';

export default function OnboardingBetaScreen({ navigation }) {

    return (
        <View style={onbStyles.container}>
            <View style={onbStyles.imageSection}>
                <Image
                    source={require('../assets/lab-assets/beach-resort-07.png')}
                    style={onbStyles.featImage}
                />
            </View>
            <View style={onbStyles.copySection}>
                <Text h2 style={onbStyles.heading}>Onboarding Beta</Text>
                <Text>Mauris ultrices felis magna, sed posuere velit dapibus quis. Fusce quis purus ornare mi posuere blandit in eu neque. Proin rhoncus libero sit amet erat mattis dapibus. Nulla imperdiet sollicitudin sollicitudin.</Text>
            </View>
            <View style={onbStyles.uiSection}>
                <View style={onbStyles.buttonContainer}>
                    <Button
                        title="Previous"
                        icon={{
                            name: 'arrow-back-outline',
                            type: 'ionicon',
                            size: 25,
                        }}
                        iconPosition='left'
                        raised={true}
                        onPress={() => navigation.navigate('OnboardingAlpha')}
                    />
                </View>
                <View style={onbStyles.buttonContainer}>
                    <Button
                        title="Next"
                        icon={{
                            name: 'arrow-forward-outline',
                            type: 'ionicon',
                            size: 25,
                        }}
                        iconPosition='right'
                        raised={true}
                        onPress={() => navigation.navigate('OnboardingGamma')}
                    />
                </View>
            </View>
        </View>
    )

}

