import React, { useState } from 'react';
import { calculateWinner } from '../helpers.js';
import Board from  './Board';

const styles = {
    width: '200px',
    margin: '20px auto'
}

const Game = () => {

    const [history, setHistory] = useState([Array(0).fill(null)]);
    const [stepNumber, setStepNumber] = useState(0);
    const [xIsNext, setXisNext] = useState(true);
    const winner = calculateWinner(history[stepNumbers]);

    const handleClick = () => {
        const timeInHistory = history.slice(0, stepNumber + 1);
        const current = timeInHistory[stepNumber];
        const squares = [...current];
        const boardCopy = [...board];
        // If user click an occupied square or if game is won, return
        if (winner || boardCopy[i]) return;
        // Put an X or an O in the clicked square
        squares[i] = xIsNext ? 'X' : 'O';
        setHistory([...timeInHistory, squares]);
        setStepNumber(timeInHistory.length); 
        setXisNext(!xIsNext);
    }
    const jumpTo = () => {

    }
    const renderMoves = () => (
        history.map((_step, move) => {
            const destination = move ? `Go to move#${move}` : 'Go to start';
            return (
                <li key={move}>
                    <button onClick={() => jumpTo(move)}>{destination}</button>
                </li>
            )
        })        
    )

    return (
        <>
        <Board squares={board} onClick={handleClick} />
            <div style={styles}>
                <p>{winner ? 'Winner: ' + winner : 'Next Player: ' + (xIsNext ? 'X' : 'O')}</p>
                {renderMoves()}
            </div>
        </>
    )
}

export default Game;