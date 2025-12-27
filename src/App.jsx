// App.jsx
// Root component that owns habit state and coordinate child component

import { useLocalStorageState } from "./hooks/useLocalStorageState";
import { getTodayKey } from "./utils/dates";
import HabitForm from "./components/HabitForm";
import HabitList from "./components/HabitList";

function App() {
  const [habits, setHabits] = useLocalStorageState("habits", []);

  function addHabits(name) {
    const newHabit = {
      id: crypto.randomUUID(),
      name: name,
      createdAt: getTodayKey(),
      completions: [],
    };

    setHabits([...habits, newHabit]);
  }

  function deleteHabit(id) {
    setHabits(habits.filter((habit) => habit.id !== id));
  }

  const hasHabits = habits.length > 0;

  return (
    <main>
      <h1>Habit Tracker</h1>
      <HabitForm onAddHabit={addHabits} />
      {hasHabits ? (
        <HabitList habits={habits} onDeleteHabit={deleteHabit} />
      ) : (
        <p>No habits yet. Add your first habit above.</p>
      )}
    </main>
  );
}

export default App;
