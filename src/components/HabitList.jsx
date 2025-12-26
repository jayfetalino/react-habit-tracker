// HabitList: 
// Responsible for displaying a list of habits.

import HabitItem from "./HabitItem";

function HabitList({ habits, onDeleteHabit }) {
    return (
        <ul>
            {habits.map((habit) => (
                <HabitItem
                key={habit.id}
                habit={habit}
                onDeleteHabit={onDeleteHabit}
                />
            ))}
        </ul>
    );
}

export default HabitList;
