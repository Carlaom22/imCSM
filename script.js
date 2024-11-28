// PRELOADER
window.addEventListener('load', () => {
    document.getElementById('preloader').style.display = 'none';
  });
  
  // MATRIX EFFECT
  const matrix = document.querySelector('.matrix');
  
  function createMatrixChar() {
    const span = document.createElement('span');
    span.textContent = String.fromCharCode(0x30A0 + Math.random() * 96);
    span.style.left = `${Math.random() * window.innerWidth}px`;
    span.style.animationDelay = `${Math.random() * -4}s`;
    span.style.setProperty('--speed', Math.random());
    matrix.appendChild(span);
  
    setTimeout(() => {
      span.remove();
    }, 4000);
  }
  
  setInterval(createMatrixChar, 50);
  
  // CONSOLE COMMANDS
  const commands = {
    help: () => '> Available commands: help, info, clear, theme',
    info: () => '> Name: Carlos Soares\n   Role: Web Developer / Designer\n   Email: cmmsoares@sapo.pt',
    theme: () => {
      document.body.classList.toggle('dark');
      return '> Theme toggled!';
    },
    clear: () => {
      document.querySelector('.console-output').innerHTML = '';
      return '';
    },
    unknown: () => '> 404: Command not found - are you sure you\'re hacking properly?'
  };
  
  document.getElementById('console-input').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const input = e.target.value.trim();
      const output = document.querySelector('.console-output');
      const newLine = document.createElement('p');
      newLine.textContent = `> ${input}`;
      output.appendChild(newLine);
  
      const result = commands[input] ? commands[input]() : commands.unknown();
      if (result) {
        const response = document.createElement('p');
        response.textContent = result;
        output.appendChild(response);
      }
  
      e.target.value = '';
    }
  });
  
  // TOGGLE CONSOLE VISIBILITY
  document.addEventListener('keydown', (e) => {
    if (e.key === '`') {
      const consoleBox = document.getElementById('console');
      consoleBox.style.display = consoleBox.style.display === 'none' ? 'block' : 'none';
    }
  });
  
  