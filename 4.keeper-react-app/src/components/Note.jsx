import React from 'react';

export function Note() {
    return (
        <>
            <div className='note'>
            <h1  contentEditable = "true"> Note Title 0</h1>
            <p  contentEditable = "true"> This is the content of the note. </p>
        </div>
        
        <div className='note'>
            <h1  contentEditable = "true"> Note Title 1</h1>
            <p  contentEditable = "true"> This is the content of the note. </p>
        </div>

        <div className='note'>
            <h1  contentEditable = "true"> Note Title 2</h1>
            <p  contentEditable = "true"> This is the content of the note. </p>
        </div>

        </>
        )
}