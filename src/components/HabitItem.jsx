// HabitItems: What will be my habit items
// Display a single habit and allows it to be deleted

function HabitItem({ habit, onDeleteHabit }) {
    function handleDelete() {
        onDeleteHabit(habit.id);
    }

    return (
        <li>
            {habit.name}
            <button onClick={handleDelete}>Delete</button>
        </li>
    );
}

export default HabitItem;

