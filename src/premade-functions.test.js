import { describe, expect, it, vi } from "vitest";
import {
  findLongestWord,
  charCount,
  mergeSortedArrays,
  flattenArray,
  groupBy,
  debounce,
} from "./premade-functions.js";

describe("findLongestWord", () => {
  it("should recieve a string and return the longest word", () => {
    expect(
      findLongestWord("The quick brown fox jumped over the lazy dog")
    ).toBe("jumped");
  });
});

describe("charCount", () => {
  it("should receive a string and return an object with character counts", () => {
    expect(charCount("wuddup homie")).toEqual({
      w: 1,
      u: 2,
      d: 2,
      p: 1,
      " ": 1,
      h: 1,
      o: 1,
      m: 1,
      i: 1,
      e: 1,
    });
  });
});

describe("mergeSortedArrays", () => {
  it("should receive two sorted arrays and return a single sorted array", () => {
    expect(mergeSortedArrays([1, 3, 5], [2, 4, 8])).toEqual([1, 2, 3, 4, 5, 8]);
  });
});

describe("flattenArray", () => {
  it("should receive a nested array and return a flat array", () => {
    expect(flattenArray([1, [2, [3, 4], 5], 8])).toEqual([1, 2, 3, 4, 5, 8]);
  });
});

// Doesnt work, can be fixed, but teacher said not to fix anything right now.
describe("groupBy", () => {
  it("should receive an array and a callback, and return an object grouped by the callback's return values", () => {
    // first we create an array of numbers
    const array = [6.1, 4.2, 6.3, 8.2, 4.4, 8.4];
    // then we define the property to group by
    const callback = Math.floor;
    // we call the groupBy function with the array and callback
    const result = groupBy(array, callback);
    // we expect the result to be an object grouped by the floored values
    expect(result).toEqual({
      4: [4.2, 4.4],
      6: [6.1, 6.3],
      8: [8.2, 8.4],
    });
  });
});

describe("debounce", () => {
  it("should debounce a function", async () => {
    // first we mock the timers
    vi.useFakeTimers();
    // then we create a mock function to debounce
    const func = vi.fn();
    // we create the debounced function with a long wait time
    const debouncedFunc = debounce(func, 10000000);
    // we call the debounced function
    debouncedFunc();
    // we fast-forward time and check that the original function has not been called yet
    expect(func).not.toHaveBeenCalled();
    // we advance the timers by the wait time
    vi.advanceTimersByTime(10000000);
    // now the original function should have been called after the time has advanced
    expect(func).toHaveBeenCalled();
  });
});
