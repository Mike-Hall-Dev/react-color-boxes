import React, { useState } from "react";
import { v4 as uuid } from 'uuid';


function NewBoxForm({ addBox }) {
    const [formData, setFormData] = useState({
        width: "",
        height: "",
        backgroundColor: ""
    });

    const trackChange = e => {
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }));
    };

    const grabInput = e => {
        e.preventDefault();
        addBox({ ...formData, id: uuid() });
        setFormData({ width: "", height: "", backgroundColor: "" });
    }

    return (
        <div>
            <form onSubmit={grabInput}>
                <div>
                    <label htmlFor="width">Width: </label>
                    <input
                        onChange={trackChange}
                        type="text"
                        name="width"
                        value={formData.width}
                        id="width"
                    />
                </div>
                <div>
                    <label htmlFor="height">Height: </label>
                    <input
                        onChange={trackChange}
                        type="text"
                        name="height"
                        value={formData.height}
                        id="height"
                    />
                </div>
                <div>
                    <label htmlFor="backgroundColor">Background Color: </label>
                    <input
                        onChange={trackChange}
                        type="text"
                        name="backgroundColor"
                        value={formData.backgroundColor}
                        id="backgroundColor"
                    />
                </div>
                <button id="addBoxButton"> Add new box</button>
            </form>
        </div>
    )
}

export default NewBoxForm
