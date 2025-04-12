import { useState } from "react"

export const Page = () => {  
    const [file, setFile] = useState(null);

    const handleFile = (event) => {
        const selectedFile = event.target;
        setFile(() => selectedFile)
        console.log('The File: ', selectedFile);
    }
    
    return(
        <div>
            <h1>Note-Card-AI</h1>
            <input id="fileupload" type="file" name="fileupload" onChange={handle}/>
            <button onClick={handleFile}>Upload Image</button>
            
        </div>
    )
}