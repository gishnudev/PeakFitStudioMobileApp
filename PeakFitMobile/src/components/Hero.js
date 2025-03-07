import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';

const { width, height } = Dimensions.get("window");

export default function Hero() {
    const slideAnimRight = useSharedValue(width);
    const fadeAnim = useSharedValue(0);

    useEffect(() => {
        slideAnimRight.value = withTiming(0, { duration: 500 });
        fadeAnim.value = withTiming(1, { duration: 500 });
    }, []);

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ translateX: slideAnimRight.value }],
        opacity: fadeAnim.value,
    }));

    return (
        <View style={styles.container}>
            {/* Text Content */}
            <View style={styles.textContainer}>
                <Text style={styles.mainText}>Achieve Your</Text>
                <Text style={styles.highlightText}>Fitness Goals</Text>
                <Text style={styles.mainText}>With PeakFit Studio</Text>
                <Text style={styles.description}>
                    Join the PeakFit Studio community and transform your fitness journey.
                    Our expert coaches and personalized programs are designed to help you achieve your goals
                    and exceed your expectations. Ready to make a change?
                </Text>
                <Text style={styles.callToAction}>Transform Your Fitness Journey Today!</Text>
            </View>

            {/* Right Image */}
            <Animated.View style={[styles.imageContainer, animatedStyle]}>
                <Image
                    source={require('../../assets/image 2.png')}
                    resizeMode="contain"  // ✅ Moved out of style
                    accessibilityLabel="Fitness motivation image"
                />
            </Animated.View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
        paddingVertical: 20,
    },
    textContainer: {
        width: '90%',
        alignItems: 'center',
        textAlign: 'center',
        paddingHorizontal: 20,
        marginBottom: 20,
    },
    imageContainer: {
        width: width * 0.9,
        height: height * 0.4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    mainText: {
        color: 'white',
        fontSize: 26,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    highlightText: {
        color: 'red',
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    description: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
        marginTop: 10,
        lineHeight: 24,
    },
    callToAction: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 15,
    }
});
