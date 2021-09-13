import React from "react"
import { render } from "@testing-library/react";
import Box from "./Box"

it("renders without crashing", function () {
    render(<Box />);
});

it("matches the current stored snapshot", function () {
    const { asFragment } = render(<Box />);
    expect(asFragment()).toMatchSnapshot();
})