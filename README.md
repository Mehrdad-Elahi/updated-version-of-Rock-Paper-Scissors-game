# Updated Rock Paper Scissors 🪨📄✂️
A browser-based Rock Paper Scissors game built with vanilla HTML, CSS, and JavaScript, built as a beginner practice project to learn JS fundamentals and DOM manipulation.

🔗 **[Live Demo]( https://mehrdad-elahi.github.io/updated-version-of-Rock-Paper-Scissors-game/)**

## About
This project recreates the classic Rock Paper Scissors game in the browser. The player picks a move by clicking an icon, using keyboard shortcuts, or letting an auto-play mode run the game on its own, and the result (win/lose/tie) is displayed instantly along with a running score — built as a hands-on project to practice JavaScript, DOM manipulation, and event listeners.

## Features
- Click a rock, paper, or scissors icon to play against the computer
- Keyboard shortcuts — press `r`, `p`, or `s` to instantly play rock, paper, or scissors
- Auto-play button — lets the computer play both sides automatically, non-stop
- Computer's move is picked randomly
- Instant result feedback (win / lose / tie) with both players' chosen icons shown on screen
- Running score tracker (wins / loses / ties)
- Score persistence via `localStorage` — refreshing the page keeps your score instead of resetting it to zero
- Reset button to clear the score back to 0-0-0

## Built With
- HTML5
- CSS3
- JavaScript (DOM manipulation, event listeners, `localStorage`)

## What I Learned
- DOM manipulation and event handling (`onclick`, `querySelector`, `innerHTML`)
- Using `addEventListener` to handle keyboard input (`keydown`) for shortcut-based gameplay
- Using `setInterval`/`clearInterval` to build a toggleable auto-play loop
- Working with conditional logic to determine game outcomes
- Persisting data across page reloads using the browser's `localStorage`

## Author
Built by [Mehrdad-Elahi](https://github.com/Mehrdad-Elahi) as a beginner JavaScript project.
