import {Pressable, StyleSheet, Text, View} from "react-native";

function GoalItem(props) {
    return (
        <View style={styles.goalItem}>
            <Pressable
                onPress={props.onDelete.bind(this, props.id)}
                android_ripple={{color: '#210644'}}
                style={({pressed}) => pressed && styles.pressedItem}
            >
                <Text style={styles.goalText}>{props.text}</Text>
            </Pressable>
        </View>
    )
}

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
    },
    pressedItem: {
        backgroundColor: '#3a0285',
        borderRadius: 6,
    },
    goalText: {
        padding: 8,
        color: '#fff'
    }
});