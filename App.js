import {useState} from "react";
import {Button, FlatList, Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import {StatusBar} from "expo-status-bar";

export default function App() {
    const [goals, setGoals] = useState([]);
    const [modalIsVisible, setModalAsVisible] = useState(false);

    function addGoal(enteredGoalText) {
        setGoals((currentGoals => [
            ...currentGoals,
            {
                text: enteredGoalText,
                id: Math.random().toString()
            },
        ]));

        cancelAddingGoal();
    }

    function deleteGoal(id) {
        setGoals(currentGoals => {
            return currentGoals.filter((goal) => goal.id !== id);
        });
    }

    function initiateAddingGoal() {
        setModalAsVisible(true);
    }

    function cancelAddingGoal() {
        setModalAsVisible(false);
    }

    return (
        <>
            <StatusBar style="auto" />
            <View style={styles.appContainer}>
                <Button title="Add new goal" color="#fff" onPress={initiateAddingGoal}/>
                <GoalInput onAddGoal={addGoal} visible={modalIsVisible} onCancel={cancelAddingGoal}/>
                <View style={styles.goalContainer}>
                    <FlatList
                        data={goals}
                        alwaysBounceVertical={false}
                        renderItem={(goal) => {
                            return (
                                <GoalItem
                                    text={goal.item.text}
                                    id={goal.item.id}
                                    onDelete={deleteGoal}
                                />
                            );
                        }}
                        keyExtractor={(item, index) => {
                            return item.id;
                        }}
                    />
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 16,
        backgroundColor: '#3b1c94',
    },
    goalContainer: {
        flex: 5,
    },
});
