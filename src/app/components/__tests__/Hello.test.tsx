import * as React from "react";
import Hello from "../Hello";
import * as ReactTestRenderer from "react-test-renderer";

it("renders correctly", () => {
  const tree = ReactTestRenderer.create(
    <Hello compiler="Typescript" framework="React" bundler="Webpack" />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
