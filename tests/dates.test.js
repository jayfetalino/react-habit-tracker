// tests/dates.test.js
// Test for date utility functions

import { describe, it, expect } from "vitest";
import { getTodayKey } from "../src/utils/dates";

describe('getTodayKey', () => {
  it("returns a date string in YYYY-MM-DD format", () => {
    const result = getTodayKey();

    expect(result).toMatch(/^\d{4}-\d{2}-\d{2}$/);
  });
});
