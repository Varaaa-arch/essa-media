const toggleBtn = document.getElementById("darkToggle");
const body = document.body;
const timeElement = document.getElementById("user-time");

// Default = dark mode aktif
body.classList.add("dark-mode");

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
});

// Update waktu real-time
function updateTime() {
  const now = new Date();
  timeElement.textContent = now.toLocaleTimeString("id-ID", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  });
}
setInterval(updateTime, 1000);
updateTime();


const app = document.getElementById('app');

// Data Video
const videos = [
  {
    id: 1,
    judul: 'lorem',
    pembuat: 'lorem',
    divisi: 'lorem',
    deskripsi: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    file: 'video/dummy.mp4',
    thumbnail: 'image/thumbnail/thumb1.jpeg'
  },
  {
    id: 2,
    judul: 'ipsum',
    pembuat: 'lorem',
    divisi: 'lorem',
    deskripsi: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    file: 'video/dummy.mp4',
    thumbnail: 'image/thumbnail/thumb1.jpeg'
  },
  {
    id: 3,
    judul: 'sit amet',
    pembuat: 'lorem',
    divisi: 'lorem',
    deskripsi: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    file: 'video/dummy.mp4',
    thumbnail: 'image/thumbnail/thumb1.jpeg'
  },
  {
    id: 4,
    judul: 'dolor',
    pembuat: 'lorem',
    divisi: 'lorem',
    deskripsi: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    file: 'video/dummy.mp4',
    thumbnail: 'image/thumbnail/thumb1.jpeg'
  },
  {
    id: 5,
    judul: 'consectetur',
    pembuat: 'lorem',
    divisi: 'lorem',
    deskripsi: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    file: 'video/dummy.mp4',
    thumbnail: 'image/thumbnail/thumb1.jpeg'
  },
  {
    id: 6,
    judul: 'adipiscing',
    pembuat: 'lorem',
    divisi: 'lorem',
    deskripsi: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    file: 'video/dummy.mp4',
    thumbnail: 'image/thumbnail/thumb1.jpeg'
  },
];

// Render Halaman Home + Search
function renderHome(filter = '') {
  app.innerHTML = `
    <div class="search-bar">
      <input type="text" id="searchInput" placeholder="Cari video..." value="${filter}">
    </div>
    <div class="video-list" id="videoList"></div>
  `;

  const searchInput = document.getElementById('searchInput');
  const videoList = document.getElementById('videoList');

  // Function untuk update video list
  function updateVideoList() {
    const value = searchInput.value.toLowerCase();
    const filteredVideos = videos.filter(video =>
      video.judul.toLowerCase().includes(value) ||
      video.divisi.toLowerCase().includes(value)
    );

    if (filteredVideos.length === 0) {
      videoList.innerHTML = '<p>Tidak ada video ditemukan.</p>';
    } else {
      videoList.innerHTML = filteredVideos.map(video => `
        <div class="video-card" onclick="location.hash='video-${video.id}'">
          <img src="${video.thumbnail}" alt="${video.judul}">
          <h3>${video.judul}</h3>
          <p>${video.pembuat} - ${video.divisi}</p>
        </div>
      `).join('');
    }
  }

  // Event listener input
  searchInput.addEventListener('input', updateVideoList);

  // Render awal
  updateVideoList();
}

// Render Halaman Video
function renderVideo(id) {
  const video = videos.find(v => v.id == id);
  if (!video) {
    app.innerHTML = '<p>Video tidak ditemukan</p>';
    return;
  }

  app.innerHTML = `
    <section class="video-detail">
      <h1>${video.judul}</h1>
      <video src="${video.file}" controls autoplay></video>
      <div class="video-info">
        <p><strong>Pembuat:</strong> ${video.pembuat}</p>
        <p><strong>Divisi:</strong> ${video.divisi}</p>
        <p>${video.deskripsi}</p>
      </div>
      <button class="back-btn" onclick="location.hash='home'">Kembali ke Home</button>
    </section>
  `;

}

// Render Halaman Tentang & Kontak
function renderStatic(page) {
  if(page === 'tentang'){
    app.innerHTML = `
      <section class="about-page">

        <!-- Sejarah -->
        <div class="about-section">
          <h2>Sejarah</h2>
          <p>
            lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>

        <!-- Visi & Misi -->
        <div class="about-section">
          <h2>Visi & Misi</h2>
          <div class="vision-mission">
            <div class="card">
              <h3>Visi</h3>
              <p>Menjadi platform kreatif terkemuka yang menginspirasi generasi muda melalui konten inovatif dan berkualitas.</p>
            </div>
            <div class="card">
              <h3>Misi</h3>
              <p>Menyediakan konten edukatif dan hiburan yang berkualitas, mendukung kreator lokal, dan mengembangkan teknologi produksi multimedia.</p>
            </div>
          </div>
        </div>

        <!-- Divisi -->
        <div class="about-section">
          <h2>Divisi Kami</h2>
          <div class="about-cards">
            <div class="about-card">
              <h3>Operator</h3>
              <p>Mengabadikan momen terbaik dengan kualitas profesional.</p>
            </div>
            <div class="about-card">
              <h3>Desain Grafis</h3>
              <p>Membuat animasi kreatif yang menghibur dan edukatif.</p>
            </div>
            <div class="about-card">
              <h3>Editor</h3>
              <p>Menciptakan desain visual yang menarik dan estetik.</p>
            </div>
            <div class="about-card">
              <h3>Web Developer</h3>
              <p>Mengembangkan website, aplikasi, dan solusi digital untuk mendukung semua divisi.</p>
            </div>
          </div>
        </div>
      </section>
    `;
  } else if(page === 'kontak'){
    app.innerHTML = `
      <section class="contact-page">
        <h1>Kontak</h1>
        <p>Hubungi kami via email: <a href="mailto:contact@essamedia.com">contact@essamedia.com</a></p>
      </section>
    `;
  }
}

// Routing SPA
function router() {
  const hash = location.hash.replace('#', '');

  if (hash === '' || hash === 'home') {
    renderHome();
  } else if (hash.startsWith('video-')) {
    const id = hash.split('-')[1];
    renderVideo(id);
  } else if (hash === 'tentang' || hash === 'kontak') {
    renderStatic(hash);
  } else {
    app.innerHTML = '<h1>404 - Halaman tidak ditemukan</h1>';
  }
}

// Event Listener
window.addEventListener('hashchange', router);
window.addEventListener('load', router);
