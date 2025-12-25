// App.jsx
// Root component that owns habit state and coordinate child component

import { useLocalStorageState } from "./hooks/useLocalStorageState";
import { getTodayKey } from "./utils/dates";
import HabitForm from "./components/HabitForm";

function App() {
  const [habits, setHabits] = useLocalStorageState("habits", []);

  function addHabits(name) {
    const newHabit = {
      id: crypto.randomUUID(),
      name: name,
      createdAt: getTodayKey(),
      completions: [],
    };

    setHabits([...habits, newHabits]);
  }

  return (
    <main>
      <h1>Habit Tracker</h1>
      <HabitForm onAddhabit={addHabits} />
    </main>
  );
}

export default App;