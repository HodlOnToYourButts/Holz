const express = require('express');
const path = require('path');

const app = express();
const PORT = 8080;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Guide routes
const guides = ['linux', 'macos', 'windows', 'android', 'ios', 'openwrt'];
guides.forEach(platform => {
  app.get(`/guides/${platform}`, (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'guides', `${platform}.html`));
  });
});

// Linux distro routes
const linuxDistros = ['archlinux', 'debian', 'redhat'];
linuxDistros.forEach(distro => {
  app.get(`/guides/linux/${distro}`, (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'guides', 'linux', `${distro}.html`));
  });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Holz server running on port ${PORT}`);
});