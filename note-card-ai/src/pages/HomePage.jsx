import { useState } from "react";
import { DropzoneUploader } from "../components/DropzoneUploader";
import { FlashcardDisplay } from "../components/FlashcardDisplay";

// const sampleFlashcards = [
//     { question: "What is the capital of France?", answer: "Paris" },
//     { question: "What is 2 + 2?", answer: "4" },
//     { question: "What color is the sky?", answer: "Blue" },
// ];

export const HomePage = () => {
    const [files, setFiles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [flashcards, setFlashcards] = useState([]);

    const handleSubmit = async () => {
        if (files.length === 0) {
            alert("No files to submit!");
            return;
        }

        const formData = new FormData();
        files.forEach((file) => {
            formData.append("files", file);
        });

        try {
            setLoading(true);
            const response = await fetch("http://localhost:8080/upload", {
                method: "POST",
                body: formData,
            });

            const status = response.status;
            const responseJson = await response.json();

            console.log("status", status);
            console.log("responsejson", responseJson);

            setLoading(false);

            if (status === 200) {
                setFlashcards((prevFlashcards) => [...prevFlashcards, ...responseJson.flashcards]);
            }
        } catch (error) {
            console.error("upload failed", error);
        }
    }

    return (
        <div style={{ 
            minHeight: "100vh",
            background: "linear-gradient(to right, #ffe4e1, #e0ffe4",
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            padding: "40px 20px" 
        }}>
            <div
                style={{
                    maxWidth: "800px",
                    margin: "0 auto",
                    background: "white",
                    borderRadius: "16px",
                    padding: "40px",
                    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)",
                }}
            >

                <h1
                    style={{
                        fontSize: "2.5rem",
                        marginBottom: "20px",
                        color: "#008060",
                        textAlign: "center",
                    }}
                >
                    Welcome to <span style={{ color: "#ff4fa2" }}>Crammr</span>
                </h1>

                <p style={{ textAlign: "center", marginBottom: "30px", fontSize: "1.1rem" }}>
                    Upload an image of your handwritten or typed notes and instantly generate helpful flashcards.
                </p>

                <DropzoneUploader files={files} setFiles={setFiles} />

                <div style={{ display: "flex", justifyContent: "center", marginTop: "30px" }}>
                    <button
                        onClick={handleSubmit}
                        style={{
                            backgroundColor: "#ff4fa2",
                            color: "white",
                            padding: "12px 24px",
                            borderRadius: "12px",
                            border: "none",
                            fontSize: "1rem",
                            cursor: "pointer",
                            boxShadow: "0 40px 10px rgba(0, 0, 0, 0.15)",
                            transition: "background-color 0.3s",

                        }}
                        disabled={loading}
                        onMouseOver={(e) => (e.target.style.backgroundColor = "#e04394")}
                        onMouseOut={(e) => (e.target.style.backgroundColor = "#ff4fa2")}
                    >
                        {loading ? "Generating..." : "Generate Flashcards"}
                    </button>
                </div>

                {flashcards.length > 0 && <FlashcardDisplay flashcards={flashcards} />}
                {/* <FlashcardDisplay flashcards={sampleFlashcards} /> */}
            </div>
        </div>
    );
};