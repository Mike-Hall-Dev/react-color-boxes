import React from "react";

function Box({
    id,
    width = 7,
    height = 7,
    backgroundColor = "green",
    handleDelete
}) {
    const deleteBox = () => handleDelete(id)
    return (
        <>
            <div style={{
                width: `${width}rem`,
                height: `${height}rem`,
                backgroundColor
            }}>
                <button onClick={deleteBox}>X</button>
            </div>
        </>
    )
}

export default Box