
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Board from "./Board";

describe("Render Board ", () => {
  describe("Get board and win state", () => {
    it("renders without crashing", () => {
      render(<Board />);
    });

    it("matches snapshot for full board", () => {
      const { asFragment } = render(<Board chanceLightStartsOn={1} />);
      expect(asFragment()).toMatchSnapshot();
    });

    it("shows win state when lights are out", () => {
      const { getByText } = render(<Board chanceLightStartsOn={0} />);
      expect(getByText("You Win!")).toBeInTheDocument();
    });
  });

});