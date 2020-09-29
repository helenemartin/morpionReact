import React, { useState } from 'react';
import { calculateWinner } from '../helpers.js';
import Board from  './Board';

const styles = {
    width: '200px',
    margin: '20px auto'
}

const Game = () => {

    const [board, setBoard] = useState(Array(0).fill(null));
    const [xIsNext, setXisNext] = useState(true);
    const winner = calculateWinner(board);

    const handleClick = () => {
        const boardCopy = [...board];
        // If user click an occupied square or if game is won, return
        if (winner || boardCopy[i]) return;
        // Put an X or an O in the clicked square
        boardCopy[i] = xIsNext ? 'X' : 'O';
        setBoard(boardCopy);
        setXisNext(!xIsNext);
    }
    const jumpTo = () => {

    }
    const renderMoves = () => {

    }

    return (
        <>
        <Board squares={board} onClick={handleClick} />
            <div style={styles}>
                <p>{winner ? 'Winner: ' + winner : 'Next Player: ' + (xIsNext ? 'X' : 'O')}</p>
            </div>
        </>
    )
}

export default Game;