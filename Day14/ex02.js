setInterval(() => {
  const now = new Date();
  document.close();
  document.write(now.toLocaleTimeString());
}, 1000);
