import React, { useState } from "react";

export function Textbox() {
    const [lines, setLines] = useState('');
    const [text, setText] = useState('');

    function updateText(txt) {
        setText(txt);
    }

    function submitLines() {
        setLines({ text });
    }

    return(
        <div>
            <textarea name='displayLines' value={ lines } /><br/>
            <input type='text' name='line' onChange={ e => updateText(e.target.value) }/><br/>
            <input type='button' name='submitLine' onClick={ submitLines }/>
        </div>
    );
}

export default Textbox;