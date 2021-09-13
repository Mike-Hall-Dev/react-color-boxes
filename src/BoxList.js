import React, { useState } from "react";
import { v4 as uuid } from 'uuid';
import Box from "./Box";
import NewBoxForm from "./NewBoxForm"


function BoxList() {
    const starterId = uuid()
    const starterBox = {
        id: starterId,
        width: 4,
        height: 4,
        backgroundColor: "orange"
    }
    const [boxes, setBoxes] = useState([starterBox]);

    const addBox = newBox => {
        setBoxes(boxes => [...boxes, newBox])
    }
    const deleteBox = id => {
        setBoxes(boxes => boxes.filter(box => box.id !== id));
    }

    const boxComponents = boxes.map(box => (
        <Box
            key={box.id}
            id={box.id}
            width={box.width}
            height={box.height}
            backgroundColor={box.backgroundColor}
            handleDelete={deleteBox}
        />
    ));

    return (
        <>
            <NewBoxForm addBox={addBox} />
            {boxComponents}
        </>
    )
}

export default BoxList;