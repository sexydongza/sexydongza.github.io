(function () {
  initNavigation();
  initSnakeGame();
})();

function initNavigation() {
  const header = document.querySelector('.site-header');
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.site-nav');

  if (header && toggle) {
    toggle.addEventListener('click', () => {
      const isOpen = header.getAttribute('data-nav-open') === 'true';
      const nextOpen = !isOpen;
      header.setAttribute('data-nav-open', String(nextOpen));
      toggle.setAttribute('aria-expanded', String(nextOpen));
    });
  }

  if (header && toggle && nav) {
    nav.addEventListener('click', (event) => {
      const link = event.target.closest('a');
      if (!link || window.matchMedia('(min-width: 721px)').matches) {
        return;
      }

      header.removeAttribute('data-nav-open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  }

  document.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape' || !header || !toggle) {
      return;
    }

    if (header.getAttribute('data-nav-open') === 'true') {
      header.removeAttribute('data-nav-open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
}

function initSnakeGame() {
  const canvas = document.querySelector('#snake-board');
  if (!canvas) {
    return;
  }

  const context = canvas.getContext('2d');
  if (!context) {
    return;
  }

  const scoreValue = document.querySelector('#score-value');
  const modeValue = document.querySelector('#mode-value');
  const statusValue = document.querySelector('#game-status');
  const startButton = document.querySelector('#game-start');
  const pauseButton = document.querySelector('#game-pause');
  const restartButton = document.querySelector('#game-restart');
  const directionButtons = document.querySelectorAll('[data-dir]');

  const board = {
    cols: 20,
    rows: 20,
    cellSize: 20,
    tickMs: 120,
  };

  let state = createInitialState();

  function createInitialState() {
    return {
      running: false,
      paused: false,
      gameOver: false,
      score: 0,
      snake: [
        { x: 10, y: 10 },
        { x: 9, y: 10 },
        { x: 8, y: 10 },
      ],
      direction: { x: 1, y: 0 },
      queuedDirection: { x: 1, y: 0 },
      food: { x: 14, y: 10 },
      timerId: null,
      swipeStart: null,
    };
  }

  function sameCell(a, b) {
    return a.x === b.x && a.y === b.y;
  }

  function isOpposite(a, b) {
    return a.x + b.x === 0 && a.y + b.y === 0;
  }

  function updateHud() {
    if (scoreValue) {
      scoreValue.textContent = String(state.score);
    }

    if (modeValue) {
      if (state.gameOver) {
        modeValue.textContent = 'Game Over';
      } else if (state.running && state.paused) {
        modeValue.textContent = 'Paused';
      } else if (state.running) {
        modeValue.textContent = 'Running';
      } else {
        modeValue.textContent = 'Ready';
      }
    }

    if (pauseButton) {
      pauseButton.textContent = state.paused ? 'Resume' : 'Pause';
    }

    if (statusValue) {
      if (state.gameOver) {
        statusValue.textContent = 'Game over. Press Restart or Start to try again.';
      } else if (state.running && state.paused) {
        statusValue.textContent = 'Paused. Press Resume or Restart.';
      } else if (state.running) {
        statusValue.textContent = 'Collect food and avoid walls or your own body.';
      } else {
        statusValue.textContent = 'Press Start to begin. Use Arrow keys, WASD, swipe, or direction buttons.';
      }
    }
  }

  function startLoop() {
    if (state.timerId) {
      return;
    }

    state.timerId = window.setInterval(step, board.tickMs);
  }

  function stopLoop() {
    if (state.timerId) {
      clearInterval(state.timerId);
      state.timerId = null;
    }
  }

  function spawnFood() {
    let food = null;
    do {
      food = {
        x: Math.floor(Math.random() * board.cols),
        y: Math.floor(Math.random() * board.rows),
      };
    } while (state.snake.some((segment) => sameCell(segment, food)));

    return food;
  }

  function resetGame(options = {}) {
    stopLoop();
    state = createInitialState();
    state.food = spawnFood();
    render();
    updateHud();

    if (options.autoStart) {
      startGame();
    }
  }

  function startGame() {
    if (state.gameOver) {
      resetGame({ autoStart: true });
      return;
    }

    if (state.running && !state.paused) {
      return;
    }

    state.running = true;
    state.paused = false;
    updateHud();
    startLoop();
    canvas.focus();
  }

  function pauseGame() {
    if (!state.running || state.gameOver) {
      return;
    }

    state.paused = !state.paused;
    if (state.paused) {
      stopLoop();
    } else {
      startLoop();
    }

    updateHud();
    canvas.focus();
  }

  function restartGame() {
    resetGame({ autoStart: true });
    canvas.focus();
  }

  function queueDirection(nextDirection) {
    if (!state.running || state.paused || state.gameOver) {
      return;
    }

    if (isOpposite(nextDirection, state.direction) || isOpposite(nextDirection, state.queuedDirection)) {
      return;
    }

    state.queuedDirection = nextDirection;
  }

  function step() {
    if (!state.running || state.paused || state.gameOver) {
      return;
    }

    state.direction = state.queuedDirection;

    const nextHead = {
      x: state.snake[0].x + state.direction.x,
      y: state.snake[0].y + state.direction.y,
    };

    const outOfBounds =
      nextHead.x < 0 ||
      nextHead.x >= board.cols ||
      nextHead.y < 0 ||
      nextHead.y >= board.rows;

    const willGrow = sameCell(nextHead, state.food);
    const bodyToCheck = willGrow ? state.snake : state.snake.slice(0, -1);
    const hitSelf = bodyToCheck.some((segment) => sameCell(segment, nextHead));

    if (outOfBounds || hitSelf) {
      endGame();
      return;
    }

    state.snake.unshift(nextHead);

    if (willGrow) {
      state.score += 1;
      state.food = spawnFood();
    } else {
      state.snake.pop();
    }

    render();
    updateHud();
  }

  function endGame() {
    state.gameOver = true;
    state.running = false;
    state.paused = false;
    stopLoop();
    render();
    updateHud();
  }

  function clearBoard() {
    const size = board.cellSize * board.cols;
    context.fillStyle = '#0f1720';
    context.fillRect(0, 0, size, size);

    context.strokeStyle = 'rgba(255, 255, 255, 0.06)';
    context.lineWidth = 1;

    for (let i = 0; i <= board.cols; i += 1) {
      const offset = i * board.cellSize + 0.5;
      context.beginPath();
      context.moveTo(offset, 0);
      context.lineTo(offset, size);
      context.stroke();
    }

    for (let i = 0; i <= board.rows; i += 1) {
      const offset = i * board.cellSize + 0.5;
      context.beginPath();
      context.moveTo(0, offset);
      context.lineTo(size, offset);
      context.stroke();
    }
  }

  function drawCell(cell, color, inset = 2) {
    context.fillStyle = color;
    context.fillRect(
      cell.x * board.cellSize + inset,
      cell.y * board.cellSize + inset,
      board.cellSize - inset * 2,
      board.cellSize - inset * 2
    );
  }

  function render() {
    clearBoard();

    drawCell(state.food, '#ef4444', 3);

    state.snake.forEach((segment, index) => {
      drawCell(segment, index === 0 ? '#a3e635' : '#22c55e', 2);
    });

    if (state.gameOver) {
      context.fillStyle = 'rgba(15, 23, 32, 0.35)';
      context.fillRect(0, 0, board.cols * board.cellSize, board.rows * board.cellSize);
    }
  }

  function directionFromKey(key) {
    switch (key.toLowerCase()) {
      case 'arrowup':
      case 'w':
        return { x: 0, y: -1 };
      case 'arrowdown':
      case 's':
        return { x: 0, y: 1 };
      case 'arrowleft':
      case 'a':
        return { x: -1, y: 0 };
      case 'arrowright':
      case 'd':
        return { x: 1, y: 0 };
      default:
        return null;
    }
  }

  document.addEventListener('keydown', (event) => {
    if (event.key === ' ' || event.key === 'Enter') {
      event.preventDefault();
      if (event.key === ' ') {
        if (state.running) {
          pauseGame();
        } else {
          startGame();
        }
      } else if (state.gameOver) {
        restartGame();
      } else if (state.running) {
        pauseGame();
      } else {
        startGame();
      }
      return;
    }

    const nextDirection = directionFromKey(event.key);
    if (!nextDirection) {
      return;
    }

    event.preventDefault();
    queueDirection(nextDirection);
  });

  startButton?.addEventListener('click', startGame);
  pauseButton?.addEventListener('click', pauseGame);
  restartButton?.addEventListener('click', restartGame);

  directionButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const value = button.getAttribute('data-dir');
      const directionMap = {
        up: { x: 0, y: -1 },
        down: { x: 0, y: 1 },
        left: { x: -1, y: 0 },
        right: { x: 1, y: 0 },
      };
      const nextDirection = directionMap[value];
      if (!nextDirection) {
        return;
      }

      queueDirection(nextDirection);
      canvas.focus();
    });
  });

  canvas.addEventListener('pointerdown', (event) => {
    state.swipeStart = {
      x: event.clientX,
      y: event.clientY,
    };
  });

  canvas.addEventListener('pointerup', (event) => {
    if (!state.swipeStart) {
      return;
    }

    const deltaX = event.clientX - state.swipeStart.x;
    const deltaY = event.clientY - state.swipeStart.y;
    const threshold = 24;

    if (Math.abs(deltaX) > threshold || Math.abs(deltaY) > threshold) {
      if (Math.abs(deltaX) > Math.abs(deltaY)) {
        queueDirection(deltaX > 0 ? { x: 1, y: 0 } : { x: -1, y: 0 });
      } else {
        queueDirection(deltaY > 0 ? { x: 0, y: 1 } : { x: 0, y: -1 });
      }
    }

    state.swipeStart = null;
  });

  canvas.addEventListener('pointercancel', () => {
    state.swipeStart = null;
  });

  canvas.addEventListener('blur', () => {
    state.swipeStart = null;
  });

  resetGame();
}
