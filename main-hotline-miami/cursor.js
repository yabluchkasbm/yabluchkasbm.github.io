const cursor = document.getElementById('custom-cursor');

// Рух курсора
document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});

// Звук пострілу
function playShotSound() {
  const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  const bufferSize = audioCtx.sampleRate * 0.15; 
  const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
  const data = buffer.getChannelData(0);
  
  for (let i = 0; i < bufferSize; i++) {
    data[i] = Math.random() * 2 - 1;
  }
  
  const noise = audioCtx.createBufferSource();
  noise.buffer = buffer;
  
  const filter = audioCtx.createBiquadFilter();
  filter.type = 'lowpass';
  filter.frequency.setValueAtTime(800, audioCtx.currentTime);
  filter.frequency.exponentialRampToValueAtTime(50, audioCtx.currentTime + 0.12);
  
  const gainNode = audioCtx.createGain();
  gainNode.gain.setValueAtTime(0.2, audioCtx.currentTime); // Трішки тихіше
  gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.14);
  
  noise.connect(filter);
  filter.connect(gainNode);
  gainNode.connect(audioCtx.destination);
  
  noise.start();
}

// Постріл та виліт гільзи
document.addEventListener('mousedown', (e) => {
  playShotSound();

  const startX = e.clientX;
  const startY = e.clientY;

  // Спалах точно під прицілом
  const flash = document.createElement('div');
  flash.className = 'hlm-flash';
  flash.style.left = startX + 'px';
  flash.style.top = startY + 'px';
  document.body.appendChild(flash);
  
  setTimeout(() => flash.remove(), 100);

  // Гільза точно під прицілом
  const casing = document.createElement('div');
  casing.className = 'hlm-casing';
  
  let cx = startX;
  let cy = startY;
  
  casing.style.transform = `translate(${cx}px, ${cy}px)`;
  document.body.appendChild(casing);

  // Математика польоту (вилітає вправо-вгору і падає вниз)
  let angle = (Math.random() * 40 - 20) * Math.PI / 180; 
  let speed = 4 + Math.random() * 3;
  let vx = Math.cos(angle) * speed; 
  let vy = - (4 + Math.random() * 4); 
  let gravity = 0.4; 
  let rotation = 0;
  let rotSpeed = Math.random() * 20 + 10;

  function updateCasing() {
    vy += gravity;
    cx += vx;
    cy += vy;
    rotation += rotSpeed;

    // Оновлюємо позицію через transform (це працює найшвидше в браузерах)
    casing.style.transform = `translate(${cx}px, ${cy}px) rotate(${rotation}deg)`;

    if (cy < window.innerHeight + 50) {
      requestAnimationFrame(updateCasing);
    } else {
      casing.remove();
    }
  }
  
  requestAnimationFrame(updateCasing);
});