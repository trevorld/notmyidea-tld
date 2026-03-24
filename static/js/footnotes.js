(function() {
    var refs = document.querySelectorAll('a.footnote-reference[href]');
    if (!refs.length) return;

    var tooltip = document.createElement('div');
    tooltip.className = 'footnote-tooltip';
    document.body.appendChild(tooltip);

    for (var i = 0; i < refs.length; i++) {
        (function(ref) {
            ref.addEventListener('mouseenter', function() {
                var target = document.querySelector(ref.getAttribute('href'));
                if (!target) return;
                var td = target.querySelector('td:last-child');
                if (!td) return;
                tooltip.textContent = td.textContent.trim();
                tooltip.style.visibility = 'hidden';
                tooltip.style.display = 'block';
                var rect = ref.getBoundingClientRect();
                var top = window.scrollY + rect.top - tooltip.offsetHeight - 6;
                if (top < window.scrollY) top = window.scrollY + rect.bottom + 6;
                var left = Math.min(rect.left, window.innerWidth - tooltip.offsetWidth - 10);
                tooltip.style.top = top + 'px';
                tooltip.style.left = Math.max(left, 4) + 'px';
                tooltip.style.visibility = '';
            });
            ref.addEventListener('mouseleave', function() {
                tooltip.style.display = 'none';
            });
        })(refs[i]);
    }
})();
