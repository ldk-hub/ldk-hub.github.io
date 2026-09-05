document.addEventListener('DOMContentLoaded', function () {
  var codeBlocks = document.querySelectorAll('div.highlighter-rouge pre, figure.highlight pre');
  codeBlocks.forEach(function (pre) {
    var container = pre.parentElement;
    if (!container || container.querySelector('.code-copy-btn')) return;

    var btn = document.createElement('button');
    btn.className = 'code-copy-btn';
    btn.setAttribute('type', 'button');
    btn.innerHTML = '<i class="far fa-copy"></i> Copy';

    btn.addEventListener('click', function () {
      var code = pre.querySelector('code');
      var text = code ? code.innerText : pre.innerText;

      navigator.clipboard.writeText(text).then(function () {
        btn.innerHTML = '<i class="fas fa-check"></i> Copied!';
        btn.classList.add('copied');
        setTimeout(function () {
          btn.innerHTML = '<i class="far fa-copy"></i> Copy';
          btn.classList.remove('copied');
        }, 2000);
      }).catch(function (err) {
        console.error('Copy failed: ', err);
      });
    });

    container.appendChild(btn);
  });
});
