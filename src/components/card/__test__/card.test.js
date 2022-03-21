import React from "react";
import ReactDOM from "react-dom";
import Card from "./../Card";
import { isTSAnyKeyword } from "@babel/types";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";

const testcoin = { name: "test", price_change_percentage_24h: 1.0 };

afterEach(cleanup);
it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Card coin={testcoin}></Card>, div);
});

// it("renders button correctly", () => {
//   const { getByTestId } = render(<Button label="save"></Button>);
//   expect(getByTestId("button")).toHaveTextContent("save");
// });

// it("matches snapshot 1", () => {
//   const tree = renderer.create(<Button label="save"></Button>).toJSON();
//   expect(tree).toMatchSnapshot();
// });

// it("matches snapshot 2", () => {
//   const tree = renderer
//     .create(<Button label="click me please"></Button>)
//     .toJSON();
//   expect(tree).toMatchSnapshot();
// });
