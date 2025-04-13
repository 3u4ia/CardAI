import { useState } from "react";
import { DropzoneUploader } from "../components/DropzoneUploader";
import { FlashcardDisplay } from "../components/FlashcardDisplay";

export const HomePage = () => {
    const [files, setFiles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [flashcards, setFlashcards] = useState([]);

    const handleSubmit = async () => {
        if (files.length === 0) {
            alert("No files to submit!");
            return;
        } else {
            console.log(JSON.stringify(files));
            const response = await fetch('http://localhost:8080/something', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(files)
                
            })
            
            const status = response.status;
            const responseJson = await response.json();
            console.log('status', status);
            console.log('responsejson', responseJson)
            if(response.status === 200){
                setFlashcards((prevFlashcards) => [...prevFlashcards, ...responseJson.flashcards])
            }
        }

        //setup submit calling backend
    };

    return (
        <div style={{ padding: "20px" }}>
            <h1>Upload files below</h1>

            <DropzoneUploader files={files} setFiles={setFiles} />

            <button onClick={handleSubmit} style={{ marginTop: "20px" }}>
                Submit Files
            </button>

            {loading && <p style={{ marginTop: "20px" }}>Loading flashcards...</p>}

            {flashcards.length > 0 && <FlashcardDisplay flashcards={flashcards} />}
        </div>
    );
};