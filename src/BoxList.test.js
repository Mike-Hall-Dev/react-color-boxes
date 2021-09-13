import React from "react"
import { render } from "@testing-library/react";
import BoxList from "./BoxList"


it("renders without crashing", function () {
    render(<BoxList />);
});

it("matches the current stored snapshot", function () {
    const { asFragment } = render(<BoxList />);
    expect(asFragment()).toMatchSnapshot();
})