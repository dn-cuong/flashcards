import { useState } from "react";
import "./App.css";
import { data } from "./data.js";

function App() {
    const [currentCardIndex, setCurrentCardIndex] = useState(0);
    const [flipped, setFlipped] = useState(false);

    // Handle flipping of the current card
    const handleFlip = () => {
        setFlipped(!flipped);
    };

    // Handle moving to the next card
    const handleNextCard = () => {
        setFlipped(false); // Reset flip on card change
        setCurrentCardIndex((prevIndex) => (prevIndex + 1) % data.length); // Cycle through cards
    };

    // Get the current card difficulty
    const currentCardDifficulty = data[currentCardIndex].difficulty;

    return (
        <>
            <h2>The Ultimate Plant Parent!</h2>
            <h4>How good of a plant parent are you? Test all of your planty knowledge here!</h4>
            <h5>Number of cards: {data.length}</h5>
            <div className={`card ${flipped ? "flipped" : ""} ${currentCardDifficulty}`} onClick={handleFlip}>
                <div className="front">{data[currentCardIndex].front}</div>
                <div className="back">{data[currentCardIndex].back}</div>
            </div>
            <button className="nextButton" onClick={handleNextCard}>
                ⭢
            </button>
        </>
    );
}

export default App;
