import {Image, Modal, Pressable, StyleSheet, Text, TextInput, View} from "react-native";
import {useState} from "react";

function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState('');

    function typeGoal(input) {
        if (input !== '') {
            setEnteredGoalText(input)
        }
    }

    function addGoal() {
        if (enteredGoalText !== '') {
            props.onAddGoal(enteredGoalText)
            setEnteredGoalText('');
        }
    }

    function hideModal() {

    }

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <Image style={styles.image} source={require('../assets/images/goal.png')} />
                <TextInput
                    style={styles.textInput}
                    placeholder="Type your goal..."
                    placeholderTextColor="#fff"
                    onChangeText={typeGoal}
                    value={enteredGoalText}
                />

                <View style={styles.buttonContainer}>
                    <Pressable style={styles.addButton} onPress={addGoal}>
                        <Text style={styles.addButtonText}>Add</Text>
                    </Pressable>
                    <Pressable style={styles.cancelButton} onPress={props.onCancel}>
                        <Text style={styles.cancelButtonText}>Cancel</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
    );
}

export default GoalInput;


const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#311b6b',
    },
    textInput: {
        width: "80%",
        borderWidth: 1,
        borderColor: "#ccc",
        marginRight: 8,
        padding: 10,
        marginBottom: 20,
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "80%",
        marginTop: 16,
    },
    addButton: {
        flex: 1,
        backgroundColor: "red",
        padding: 8,
        width: "40%",
        alignItems: "center",
        marginHorizontal: 8,
    },
    cancelButton: {
        flex: 1,
        width: "40%",
        marginHorizontal: 8,
        backgroundColor: "#fff",
        padding: 8,
        alignItems: "center",
    },
    addButtonText: {
        color: "#fff",
        fontWeight: 600,
    },
    cancelButtonText: {
        color: "#311b6b",
        fontWeight: 600,
    },
    image: {
        width: 100,
        height: 100,
        margin: 20,
    }
});
