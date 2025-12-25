// HabitList: 
// Responsible for displaying a list of habits.

function HabitList({ habits }) {
    return (
        <ul>
            {habits.map((habit) => (
                <li key={habit.id}>{habit.name}</li>
            ))}
        </ul>
    );
}

export default HabitList;