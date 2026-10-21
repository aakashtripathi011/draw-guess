# Draw & Guess

A real-time multiplayer drawing and guessing game. One player draws a secret word on a shared canvas while everyone else races to guess it in the chat.

## Features

- Real-time shared canvas powered by WebSockets
- Multiple players in the same room
- One player draws, the rest guess
- Live chat and guess checking
- Scoreboard and turn rotation

## Tech Stack

- **Frontend:** JavaScript, HTML5 Canvas
- **Backend:** Node.js, Socket.IO
- **Other:** CORS, dotenv

## Project Structure

```
draw-guess/
├── backend/     # Node.js + Socket.IO server
├── frontend/    # Client app (canvas + UI)
└── .gitignore
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm

### 1. Clone the repo

```bash
git clone https://github.com/aakashtripathi011/draw-guess.git
cd draw-guess
```

### 2. Run the backend

```bash
cd backend
npm install
```

Create a `.env` file inside `backend/`:

```env
PORT=5000
```

Start the server:

```bash
npm start
```

### 3. Run the frontend

Open a new terminal:

```bash
cd frontend
npm install
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173` or `http://localhost:3000`).

## How to Play

1. Open the game in two or more browser tabs (or share the link with friends on the same network).
2. Join the same room.
3. The drawer gets a secret word and draws it on the canvas.
4. Everyone else types their guesses in the chat.
5. First correct guess earns points. Then the roles rotate.

## Roadmap

- [ ] Room codes and private rooms
- [ ] Word categories and difficulty levels
- [ ] Round timer
- [ ] Brush sizes, colors and eraser
- [ ] Deployment

## Author

**Aakash** ([@aakashtripathi011](https://github.com/aakashtripathi011))

## License

MIT
