import { useState } from "react";
import { DropzoneUploader } from "../components/DropzoneUploader";
import { FlashcardDisplay } from "../components/FlashcardDisplay";

const sampleFlashcards = [
    { question: "What is the capital of France?", answer: "Paris" },
    { question: "What is 2 + 2?", answer: "4" },
    { question: "What color is the sky?", answer: "Blue" },
];

export const HomePage = () => {
    const [files, setFiles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [flashcards, setFlashcards] = useState([]);

    const handleSubmit = async () => {
        if (files.length === 0) {
            alert("No files to submit!");
            return;
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
            <FlashcardDisplay flashcards={sampleFlashcards} />
        </div>
    );
};