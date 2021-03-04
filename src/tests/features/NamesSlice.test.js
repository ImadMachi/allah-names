import NamesReducer, { FindNameSelector } from "./../../features/NamesSlice";
import fixtures from "./../../features/fixtures";

// testing names reducer
test("Should return state", () => {
  expect(NamesReducer(undefined, "@@INIT")).toEqual(fixtures);
});

// testing finName selector
test("Should return a elemnt by Id", () => {
  expect(FindNameSelector({ names: fixtures }, fixtures[0].id)).toEqual(
    fixtures[0]
  );
});
