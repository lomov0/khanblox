<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>KhanBlox v1.4.1 — Game Platform</title>
<meta name="description" content="KhanBlox v1.4.1 - Create and play games online. Build your own gaming experiences and share them with the community.">
<meta name="keywords" content="KhanBlox, online games, game creation, play games, create games, gaming platform, v1.4.1">
<meta name="author" content="lomov0">
<meta name="robots" content="index, follow">
<link rel="canonical" href="https://lomov0.github.io/khanblox/README.md">
<!-- Open Graph -->
<meta property="og:title" content="KhanBlox v1.4.1 — Game Platform">
<meta property="og:description" content="Create and play games online with KhanBlox v1.4.1">
<meta property="og:type" content="website">
<meta property="og:url" content="https://lomov0.github.io/khanblox/README.md">
<meta property="og:image" content="https://lomov0.github.io/khanblox/og-image.svg">
<meta property="og:site_name" content="KhanBlox">
<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="KhanBlox v1.4.1 — Game Platform">
<meta name="twitter:description" content="Create and play games online with KhanBlox v1.4.1">
<meta name="twitter:image" content="https://lomov0.github.io/khanblox/og-image.svg">
<style>
  * { box-sizing: border-box; }
  body {
    margin: 0;
    font-family: "Segoe UI", system-ui, sans-serif;
    background: #121212;
    color: #ffffff;
  }
  header {
    background: #181818;
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .brand {
    display: inline-flex;
    align-items: center;
    gap: 12px;
  }
  .brand span {
    font-weight: 800;
    letter-spacing: 0.4px;
    font-size: 18px;
  }
  nav a {
    color: #cccccc;
    margin-left: 20px;
    text-decoration: none;
    font-weight: 600;
  }
  nav a:hover { color: #ffffff; }
  .hero {
    background: #1a1a1a;
    padding: 40px 20px;
    text-align: center;
  }
  .hero h2 {
    font-size: 36px;
    margin: 0 0 8px;
  }
  .hero p {
    margin: 0;
    color: #aaaaaa;
    font-size: 18px;

  }
  .games {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 14px;
    padding: 20px;
    max-width: 1100px;
    margin: 0 auto;
  }
  .game-card {
    background: #1f1f1f;
    width: 240px;
    border-radius: 10px;
    overflow: hidden;
    transition: transform 0.18s ease, box-shadow 0.18s ease;
    box-shadow: 0 0 0 rgba(0,0,0,0);
  }
  .game-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 24px rgba(0,0,0,0.28);
  }
  .thumb {
    width: 100%;
    height: 140px;
    display: grid;
    place-items: center;
    background: linear-gradient(180deg, #3a3a3a, #2b2b2b);
  }
  .info {
    padding: 12px;
  }
  .info h3 {
    margin: 0 0 10px;
    font-size: 18px;
  }
  .actions {
    display: flex;
    justify-content: center;
    padding: 0 12px 14px;
  }
  .btn {
    background: #00b06b;
    color: #fff;
    border: 0;
    padding: 9px 14px;
    border-radius: 6px;
    font-weight: 700;
    cursor: pointer;
  }
  .btn:hover { background: #00c97d; }
  footer {
    background: #232527;
    text-align: center;
    padding: 20px;
    font-size: 14px;
    color: #888888;
    margin-top: 20px;
  }
  @media (max-width: 560px) {
    .hero h2 { font-size: 28px; }
    .games { padding: 14px; }
    .game-card { width: 92%; max-width: 420px; }
  }
    .sidebar {
      position: fixed;
      top: 0;
      left: 0;
      width: 60px;
      height: 100vh;
      background: #181818;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-top: 20px;
      z-index: 1000;
    }
    .sidebar .icon {
      background: none;
      border: none;
      color: #ccc;
      font-size: 24px;
      margin: 20px 0;
      cursor: pointer;
    }
    .sidebar .icon:hover {
      color: #00c97d;
    }
    .chat-panel {
      position: fixed;
      top: 0;
      left: 60px;
      width: 240px;
      height: 100vh;
      background: #1f1f1f;
      padding: 20px;
      box-shadow: 2px 0 8px rgba(0,0,0,0.3);
      display: none;
      flex-direction: column;
      z-index: 999;
    }
    .chat-panel h3 {
      margin-top: 0;
      font-size: 18px;
    }
    .chat-log {
      flex: 1;
      overflow-y: auto;
      margin-bottom: 10px;
      background: #2a2a2a;
      padding: 10px;
      border-radius: 6px;
    }
    .chat-panel input {
      width: 100%;
      padding: 8px;
      border-radius: 6px;
      border: none;
      background: #333;
      color: #fff;
    }
    header, .hero, .games, .wallet, .currency-actions, .social, .chat-box, footer {
      margin-left: 60px;
    }
    header {
      background: #181818;
      padding: 10px 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .brand {
      display: inline-flex;
      align-items: center;
      gap: 12px;
    }
    .brand span {
      font-weight: 800;
      letter-spacing: 0.4px;
      font-size: 18px;
    }
    nav a {
      color: #cccccc;
      margin-left: 20px;
      text-decoration: none;
      font-weight: 600;
    }
    nav a:hover { color: #ffffff; }

    .hero {
      background: #1a1a1a;
      padding: 40px 20px;
      text-align: center;
    }
    .hero h2 {
      font-size: 36px;
      margin: 0 0 8px;
    }
    .hero p {
      margin: 0;
      color: #aaaaaa;
      font-size: 18px;
    }

    .games {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 14px;
      padding: 20px;
      max-width: 1100px;
      margin: 0 auto;
    }
    .game-card {
      background: #1f1f1f;
      width: 240px;
      border-radius: 10px;
      overflow: hidden;
      transition: transform 0.18s ease, box-shadow 0.18s ease;
      box-shadow: 0 0 0 rgba(0,0,0,0);
    }
    .game-card:hover {
      transform: translateY(-3px);
      box-shadow: 0 10px 24px rgba(0,0,0,0.28);
    }
    .thumb {
      width: 100%;
      height: 140px;
      display: grid;
      place-items: center;
      background: linear-gradient(180deg, #3a3a3a, #2b2b2b);
    }
    .info {
      padding: 12px;
    }
    .info h3 {
      margin: 0 0 10px;
      font-size: 18px;
    }
    .actions {
      display: flex;
      justify-content: center;
      padding: 0 12px 14px;
    }
   .btn {
  background: #007bff;
  color: #fff;
  border: 0;
  padding: 9px 14px;
  border-radius: 6px;
  font-weight: 700;
  cursor: pointer;
}

.btn:hover { 
  background: #0056b3;
}

    .wallet, .currency-actions, .social, .chat-box {
      background: #1f1f1f;
      padding: 20px;
      margin: 20px auto;
      max-width: 500px;
      border-radius: 10px;
    }
    .currency-actions button {
      background: #00b06b;
      color: white;
      border: none;
      padding: 10px 16px;
      margin: 5px;
      border-radius: 6px;
      font-weight: bold;
      cursor: pointer;
    }
    .currency-actions button:hover {
      background: #00c97d;
    }
    .friend-list {
      list-style: none;
      padding: 0;
    }
    .friend-list li {
      margin: 8px 0;
      font-weight: 600;
    }
    .status {
      display: inline-block;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      margin-right: 8px;
    }
    .status.online { background: #00c97d; }
    .status.offline { background: #888; }

    footer {
      background: #232527;
      text-align: center;
      padding: 20px;
      font-size: 14px;
      color: #888888;
      margin-top: 20px;
    }
    .header-right {
  display: flex;
  align-items: center;
  gap: 20px;
}

.khanbux-display {
  display: flex;
  align-items: center;
  gap: 6px;
  font-weight: bold;
  color: #00b06b;
}
.kb-amount {
  font-weight: bold;
  font-size: 14px;
  color: #00b06b;
}
#loading-screen {
  position: fixed;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background: #111;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  transition: opacity 1s ease; /* fade-out effect */
}

.loading-dots {
  display: flex;
  gap: 8px;
  margin-top: 20px;
}

.loading-dots span {
  width: 12px;
  height: 12px;
  background: #ffffff;
  border-radius: 50%;
  display: inline-block;
  animation: bounce 0.6s infinite alternate;
  filter: blur(2px);
}

.loading-dots span:nth-child(2) { animation-delay: 0.2s; }
.loading-dots span:nth-child(3) { animation-delay: 0.4s; }

@keyframes bounce {
  from { transform: translateY(0); }
  to   { transform: translateY(-10px); }
}

.hidden {
  opacity: 0;
  pointer-events: none;
}

.logo-rotate {
  margin-bottom: 20px;
  transform: translateY(-30px);
  animation: spin 4s linear infinite;
  filter: blur(2px);
}

@keyframes spin {
  from { transform: translateY(-30px) rotate(0deg); }
  to   { transform: translateY(-30px) rotate(360deg); }
}

@keyframes fadeOut {
  to {
    opacity: 0;
    visibility: hidden;
  }
  html, body {
  height: 100%;
  margin: 0;
  padding: 0;
}
}
.icon-btn:hover {
  animation: pulse 0.6s infinite;
}
.dark-mode {
  background-color: #F2F3F3;
  color: #F2F3F3;
}














</style>
<button onclick="toggleTheme()">🌓   ddddToggle Theme</button>

<script>
  function toggleTheme() {
    document.body.classList.toggle('dark-mode');
  }
</script>

<style>
  .dark-mode {
    background-color: #F2F3F3;
    color: #F2F3F3;
  }
</style>



</head>


<div id="loading-screen">
  <div class="logo-rotate">
    <!-- Tilted Khanblox square K logo -->
    <svg width="120" height="120" viewBox="0 0 100 100">
      <rect x="15" y="15" width="70" height="70" rx="8" ry="8"
            transform="rotate(12 50 50)" fill="#000000"/>
      <text x="50" y="65" text-anchor="middle" font-size="50"
            font-family="Arial Black, sans-serif" fill="#ffffff"
            transform="rotate(12 50 50)">K</text>
    </svg>
  </div>

  <!-- Bouncing dots -->
  <div class="loading-dots">
    <span></span>
    <span></span>
    <span></span>
  </div>
</div>

<script>
  window.addEventListener("load", function() {
    setTimeout(function() {
      document.getElementById("loading-screen").classList.add("hidden");
    }, 4000); // 4 seconds
  });
</script>


<body>

<div id="greeting"></div>

<script>
var hour = new Date().getHours();
var greeting = "👋 Welcome!";
if (hour < 12) greeting = "iiiiiiiiiijkkGood morning!🌅";
else if (hour < 18) greeting = "iiiiiiiiiijkkGood afternoon!☀️";
else greeting = "iiiiiiiiiijkkGood evening!🌇";
document.getElementById("greeting").textContent = greeting;
</script>


<div class="sidebar">

<!-- Create -->
<a href="canva.com" target="_blank" title="Create your own game">
  <button class="icon-btn">
    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">

      <!-- Circle -->
      <circle cx="12" cy="12" r="8"
              fill="none"
              stroke="#ccc"
              stroke-width="1.8"/>

      <!-- Plus -->
      <path d="M12 8v8M8 12h8"
            stroke="#ccc"
            stroke-width="1.8"
            stroke-linecap="round"/>

    </svg>
  </button>
</a>
<!-- Games -->
<a href="https://www.khanacademy.org/computer-programming/khanblox-v141/6642431498502144"
   target="_blank"
   title="Games">
  <button class="icon-btn">
    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">

      <!-- Container -->
      <rect x="3.5" y="4.5" width="17" height="15" rx="3"
            fill="none"
            stroke="#aaa"
            stroke-width="1.5"/>

      <!-- Play icon -->
      <path d="M10 9l5 3-5 3z"
            fill="none"
            stroke="#ccc"
            stroke-width="1.5"
            stroke-linejoin="round"/>

    </svg>
  </button>
</a>
<!-- Chat -->
<a href="https://www.canva.com/design/DAGycvpO8Zw/_JZYg2I4B7NZ8Cxs-GVDQQ/edit?utm_content=DAGycvpO8Zw&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" target="_blank" title="Chat[...]">
  <button class="icon-btn">
    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      
      <!-- Chat bubble -->
      <path d="M5 4.5
               h14
               a2 2 0 0 1 2 2
               v8
               a2 2 0 0 1 -2 2
               H9
               l-4 3
               v-3
               H5
               a2 2 0 0 1 -2 -2
               v-8
               a2 2 0 0 1 2 -2z"
            fill="none"
            stroke="#aaa"
            stroke-width="1.5"
            stroke-linejoin="round"/>
      <line x1="7" y1="8" x2="17" y2="8"
            stroke="#ccc"
            stroke-width="1.5"
            stroke-linecap="round"/>
      <line x1="7" y1="11" x2="17" y2="11"
            stroke="#ccc"
            stroke-width="1.5"
            stroke-linecap="round"/>
      <line x1="7" y1="14" x2="13" y2="14"
            stroke="#ccc"
            stroke-width="1.5"
            stroke-linecap="round"/>
    </svg>
  </button>
</a>
  <!-- Profile -->
<a href="canva.com" target="_blank" title="Profile">
  <button class="icon-btn">
    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">

      <!-- Head -->
      <circle cx="12" cy="8" r="4"
              fill="none"
              stroke="#aaa"
              stroke-width="1.5"/>

      <!-- Body / shoulders -->
      <path d="M4 20
               c0-4 4-6 8-6
               s8 2 8 6"
            fill="none"
            stroke="#ccc"
            stroke-width="1.5"
            stroke-linecap="round"/>

    </svg>
  </button>
</a>
<!-- Updates & Community Standards -->
<a href="https://www.canva.com/design/DAG6-zp9kqM/XPTwG8gQ3QmZkfcQyZmZWA/edit?utm_content=DAG6-zp9kqM&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
   target="_blank"
   title="Updates & Community Standards">
  <button class="icon-btn" style="margin-top:8px; margin-bottom:8px;">
    <svg width="29" height="29" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style="padding:4px;">

      <!-- Document outline -->
      <path d="M6 3
               h8
               l4 4
               v13
               a1.5 1.5 0 0 1 -1.5 1.5
               H6
               A1.5 1.5 0 0 1 4.5 20
               V4.5
               A1.5 1.5 0 0 1 6 3z"
            fill="none"
            stroke="#aaa"
            stroke-width="1.5"
            stroke-linejoin="round"/>

      <!-- Folded corner -->
      <path d="M14 3v4h4"
            fill="none"
            stroke="#aaa"
            stroke-width="1.5"
            stroke-linejoin="round"/>

      <!-- Content lines -->
      <line x1="8" y1="10" x2="16" y2="10"
            stroke="#ccc"
            stroke-width="1.5"
            stroke-linecap="round"/>
      <line x1="8" y1="13" x2="16" y2="13"
            stroke="#ccc"
            stroke-width="1.5"
            stroke-linecap="round"/>
      <line x1="8" y1="16" x2="14" y2="16"
            stroke="#ccc"
            stroke-width="1.5"
            stroke-linecap="round"/>

    </svg>
  </button>
</a>
  <!-- More -->
  <a href="https://1drv.ms/u/c/19f35a43e4c860be/IQB01fwF4533RZYG2tyqctiyASuj11PRG5-b3M35Oa6n3Mk?e=oWdZMf" target="_blank" title="More">
    <button class="icon-btn">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="#ccc" xmlns="http://www.w3.org/2000/svg">
        <circle cx="5" cy="12" r="2"/>
        <circle cx="12" cy="12" r="2"/>
        <circle cx="19" cy="12" r="2"/>
      </svg>
    </button>
  </a>
</div>


<header>
  <div class="brand">
    <!-- Khanblox square K logo with a gentle tilt -->
    <svg width="40" height="40" viewBox="0 0 100 100">
      <!-- Black square background with a slightly stronger tilt -->
      <rect x="15" y="15" width="70" height="70" rx="8" ry="8"
            transform="rotate(12 50 50)" fill="#000000"/>
      <!-- White K centered inside, tilted together -->
      <text x="50" y="65" text-anchor="middle" font-size="40"
            font-family="Arial Black, sans-serif" fill="#ffffff"
            transform="rotate(12 50 50)">K</text>
    </svg>
    <span>KhanBlox</span>
  </div>
  <nav>
 
  </nav>
</header>

<section class="hero">
  <h2>Welcome to KhanBlox</h2>
  <p>Explore a virtual universe where you can create, play with friends, and bring your imagination to life.
  </p>
  <!-- Short notice linking to NOTICE and TRADEMARKS.md -->
  <p style="text-align:center; color:#aaaaaa; margin-top:12px; font-size:14px;">
    See our <a href="NOTICE" style="color:#00b06b; text-decoration:none; font-weight:700;">NOTICE</a> and <a href="TRADEMARKS.md" style="color:#00b06b; text-decoration:none; font-weight:700;">Trademark Policy</a> for licensing and branding details.
  </p>
</section>

<main class="games">
  <article class="game-card">
  <div class="thumb">
    <svg width="200" height="120" viewBox="0 0 200 120">
  <!-- Background Gradient -->
  <defs>
    <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#2c3e50"/>
      <stop offset="100%" stop-color="#1e1e1e"/>
    </linearGradient>
  </defs>
  <rect width="200" height="120" fill="url(#sky)"/>

  <!-- Stars -->
  <circle cx="20" cy="20" r="1" fill="#ffffff"/>
  <circle cx="180" cy="10" r="1.5" fill="#ffffff"/>
  <circle cx="100" cy="25" r="1" fill="#ffffff"/>

  <!-- Platforms -->
  <rect x="30" y="90" width="40" height="10" rx="2" fill="#3498db"/>
  <polygon points="30,90 35,85 40,90" fill="#2980b9"/> <!-- Spike -->
  <rect x="80" y="70" width="40" height="10" rx="2" fill="#e67e22"/>
  <circle cx="100" cy="75" r="4" fill="#f1c40f"/> <!-- Bounce pad -->
  <rect x="130" y="50" width="40" height="10" rx="2" fill="#2ecc71"/>
  <polygon points="135,50 140,45 145,50" fill="#27ae60"/> <!-- Spike -->

  <!-- Hazard Zone -->
  <rect y="110" width="200" height="10" fill="#e74c3c"/>
  <text x="100" y="118" font-size="8" text-anchor="middle" fill="#ffffff">DANGER</text>

  <!-- Player Character -->
  <circle cx="100" cy="40" r="12" fill="#f4d03f"/> <!-- Head -->
  <circle cx="96" cy="38" r="2" fill="#333"/>
  <circle cx="104" cy="38" r="2" fill="#333"/>
  <path d="M96 42 Q100 45 104 42" stroke="#333" stroke-width="1" fill="none"/> <!-- Mouth -->
  <rect x="94" y="52" width="12" height="20" rx="3" fill="#1e90ff"/> <!-- Body -->
  <rect x="90" y="72" width="6" height="16" fill="#2ecc71"/> <!-- Left leg -->
  <rect x="104" y="72" width="6" height="16" fill="#2ecc71"/> <!-- Right leg -->
  <rect x="88" y="54" width="4" height="10" fill="#e67e22"/> <!-- Left arm -->
  <rect x="108" y="54" width="4" height="10" fill="#e67e22"/> <!-- Right arm -->

  <!-- Shadow -->
  <ellipse cx="100" cy="100" rx="10" ry="4" fill="rgba(0,0,0,0.3)"/>

  <!-- Motion Arc -->
  <path d="M90 60 Q100 30 110 60" stroke="#ffffff" stroke-width="1" stroke-dasharray="3" fill="none"/>

  <!-- Title -->
  <text x="100" y="10" font-size="14" text-anchor="middle" fill="#ffffff" font-weight="bold">Obby Rush</text>
</svg>

  </div>
  <div class="info">
    <h3>Obby Rush</h3>
    <div class="rating">
      <span class="star">★</span><span class="star">★</span>
      <span class="star">★</span><span class="star">★</span>
      <span class="star">★👤 3.3K playing</span>
    </div>
  </div>
  <div class="actions">
    <a href="https://www.canva.com/design/DAGyWNNmBn0/dsvVIseRhjRmBYbRz8jqqQ/edit?utm_content=DAGyWNNmBn0&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" target="_blank">
      <button class="btn">▶ Play</button>
    </a>
  </div>
</article>

<!-- rest of README unchanged -->
</main>
</body>
</html>