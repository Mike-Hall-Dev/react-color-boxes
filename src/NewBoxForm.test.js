import React from "react"
import { render } from "@testing-library/react";
import NewBoxForm from "./NewBoxForm"

it("renders without crashing", function () {
    render(<NewBoxForm />);
});

it("matches the current stored snapshot", function () {
    const { asFragment } = render(<NewBoxForm />);
    expect(asFragment()).toMatchSnapshot();
})