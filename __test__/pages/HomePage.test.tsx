import React from 'react';
import { render } from '@testing-library/react';
import ReactQuill from 'react-quill';
import expect from "expect";
import {describe} from "@jest/globals";

const { getByRole } = render(
    <ReactQuill theme="snow"
                value={"test"}
                onChange={() => {}}
                modules={{
                    toolbar: {
                        container: []
                    }
                }}
    />
);



describe("This is a test",()=>{
    const editor = getByRole('textbox');
    console.log(editor)
    expect(editor)
    const videoData = {
        "videos": [
            {
                "id": "video1",
                "description": "This is the first video."
            },
            {
                "id": "video2",
                "description": "A video demonstrating advanced techniques."
            },
            {
                "id": "video3",
                "description": "Introduction to our video series."
            }
        ]
    }
})