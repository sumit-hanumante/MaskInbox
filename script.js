document.getElementById('copy-btn').addEventListener('click', function () {
  const addr = document.getElementById('temp-address').textContent;
  navigator.clipboard.writeText(addr).then(() => {
    const original = this.textContent;
    this.textContent = 'Copied!';
    setTimeout(() => {
      this.textContent = original;
    }, 1000);
  });
});

document.querySelectorAll('#message-list li').forEach((item) => {
  item.addEventListener('click', () => {
    const content = item.getAttribute('data-message');
    document.getElementById('message-content').textContent = content;
  });
});
