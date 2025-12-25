// HabitForm: add a habit with validations
// Responsible for collecting a new habit name from the user.

import { useState } from "react";

function HabitForm({ onAddhabit }) {
    const [name, setName] = useState("");

    function handleSubmit(event) {
        event.preventDefault();

        if (name.trim() === "") {
            return;
        }

        onAddhabit(name);
        setName("");
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                placeholder="Add a new habit"
                value={name}
                onChange={(event) => setName(event.target.value)}
            />
            <button type="submit">Add</button>
        </form>
    );
}

export default HabitForm;