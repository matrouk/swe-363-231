let turn = "X";
let gameEnded = false;

function cellClicked(cell) {
    if (cell.innerText === "" && !gameEnded) {
        cell.innerText = turn;
        cell.classList.add(turn);
        if (checkWinner()) {
            document.getElementById('turn').innerText = turn + " Wins!";
            gameEnded = true;
        } else if ([...document.querySelectorAll('.cell')].every(c => c.innerText !== "")) {
            document.getElementById('turn').innerText = "Draw";
            gameEnded = true;
        } else {
            turn = turn === "X" ? "O" : "X";
            document.querySelector("#turn span").innerText = turn;
        }
    }
}

function checkWinner() {
    const rows = [...document.querySelectorAll('.row')];
    for (let row of rows) {
        const cells = [...row.querySelectorAll('.cell')];
        if (cells.every(c => c.innerText === turn)) return true;
    }
    for (let i = 0; i < 3; i++) {
        if (rows.every(r => r.querySelectorAll('.cell')[i].innerText === turn)) return true;
    }
    if (rows[0].querySelectorAll('.cell')[0].innerText === turn && rows[1].querySelectorAll('.cell')[1].innerText === turn && rows[2].querySelectorAll('.cell')[2].innerText === turn) return true;
    if (rows[0].querySelectorAll('.cell')[2].innerText === turn && rows[1].querySelectorAll('.cell')[1].innerText === turn && rows[2].querySelectorAll('.cell')[0].innerText === turn) return true;
    return false;
}

function resetGame() {
    gameEnded = false;
    turn = "X";
    document.getElementById('turn').innerText = "Now it's " + turn + " turn";
    document.querySelectorAll('.cell').forEach(cell => {
        cell.innerText = "";
        cell.className = "cell";
    });
}
