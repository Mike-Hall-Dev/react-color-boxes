import React from "react"
import { render, fireEvent } from "@testing-library/react";
import BoxList from "./BoxList"

function addTestBox(boxList, height = "5", width = "5", color = "green") {
    const heightInput = boxList.getByLabelText("Height:")
    const widthInput = boxList.getByLabelText("Width:")
    const colorInput = boxList.getByLabelText("Background Color:")

    fireEvent.change(heightInput, { target: { value: height } })
    fireEvent.change(widthInput, { target: { value: width } })
    fireEvent.change(colorInput, { target: { value: color } })

    const button = boxList.getByText("Add new box")
    fireEvent.click(button)
}

it("renders without crashing", function () {
    render(<BoxList />);
});

it("matches the current stored snapshot", function () {
    const { asFragment } = render(<BoxList />);
    expect(asFragment()).toMatchSnapshot();
})

it("removes and adds box successfully", function () {
    const boxList = render(<BoxList />)
    const removeBtn = boxList.getByText("X")

    fireEvent.click(removeBtn)
    expect(removeBtn).not.toBeInTheDocument();

    addTestBox(boxList)
    const removeBtn2 = boxList.getByText("X")
    expect(removeBtn2).toBeInTheDocument();

})