export const FlashcardDisplay = ({ flashcards }) => {
    return (
        <div style={{marginTop: "30px"}}>
            <h2>Generated Flashcards:</h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "15px" }}>
                {flashcards.map((card, index) => (
                    <div
                        key={index}
                        style={{
                            border: "1px solid #ccc",
                            borderRadius: "8px",
                            padding: "10px",
                            width: "200px",
                            backgroundColor: "#f9f9f9",
                        }}
                    >
                        <p>
                            <strong>Q:</strong> {card.question}
                        </p>
                        <p>
                            <strong>A:</strong> {card.answer}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};