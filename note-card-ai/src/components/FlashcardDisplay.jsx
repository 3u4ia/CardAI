import { useState } from "react";

export const FlashcardDisplay = ({ flashcards }) => {
    const [currentCard, setCurrentCard] = useState(0);
    const [flipped, setFlipped] = useState(false);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const handleNext = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);

        if (currentCard < flashcards.length - 1) {
            setFlipped(false);
            setTimeout(() => {
                setCurrentCard((prev) => (prev + 1) % flashcards.length);
                setIsTransitioning(false);
            }, 200);
        }
    };

    const handlePrevious = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);

        if (currentCard > 0) {
            setFlipped(false);
            setTimeout(() => {
                setCurrentCard((prev) => (prev - 1) % flashcards.length);
                setIsTransitioning(false);
            }, 300);
        }
    };

    const toggleFlip = () => setFlipped((prev) => !prev);

    return (
        <div style={{marginTop: "30px", textAlign: "center" }}>
            <h2>Flashcard {currentCard + 1} of {flashcards.length}</h2>

            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "15px" }}>
                <Flashcard
                    question={flashcards[currentCard].question}
                    answer={flashcards[currentCard].answer}
                    flipped={flipped}
                    onCardClick={toggleFlip}
                />
            </div>

            <div style={{ marginTop: "15px", display: "flex", justifyContent: "center", gap: "15px" }}>
                <button onClick={handlePrevious} disabled={currentCard === 0}>
                    Previous
                </button>
                <button onClick={handleNext} disabled={currentCard === flashcards.length - 1}>
                    Next
                </button>
            </div>
        </div>
    );
};

const Flashcard = ({ question, answer, flipped, onCardClick }) => {
    return (
        <div
            onClick={onCardClick}
            style={{
                perspective: "1000px",
                width: "220px",
                height: "160px",
                margin: "30px"
            }}
        >
            <div
                style={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                    textAlign: "center",
                    transition: "transform 0.6s",
                    transformStyle: "preserve-3d",
                    transformOrigin: "center center",
                    transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
                    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                    borderRadius: "8px",
                    cursor: "pointer",
                }}
            >
                {/* Front */}
                <div style={cardFaceStyles(false)}>
                    <p><strong>Question:</strong></p>
                    <p>{question}</p>
                    <p style={{ fontSize: "0.8em", color: "#888", marginTop: "10px"}}>
                        (Click to reveal answer)
                    </p>
                </div>

                {/* Back */}
                <div style={cardFaceStyles(true)}>
                    <p><strong>Answer:</strong></p>
                    <p>{answer}</p>
                </div>
            </div>
        </div>
    );
};

const cardFaceStyles = (isBack) => ({
    position: "absolute",
    width: "100%",
    height: "100%",
    backfaceVisibility: "hidden",
    backgroundColor: "#fffefc",
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "15px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    transform: isBack ? "rotateY(180deg)" : "none",
})