import React from "react";
import ReactDOM from "react-dom";
import Card from "./../Card";

import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";

const testcoin = { name: "test", price_change_percentage_24h: 1.0 };

afterEach(cleanup);
it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Card coin={testcoin}></Card>, div);
});
