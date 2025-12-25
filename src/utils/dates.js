// utils/dates.js
// This file contains helper functions related to dates.

/**
 * Returns today's date in YYYY-MM-DD format (local time).
 */


export function getTodayKey() {
    const today = new Date();

    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
}
