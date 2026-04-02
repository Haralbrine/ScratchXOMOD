(function () {
  // change navbar background
  document.querySelectorAll('div.menu-bar_menu-bar_JcuHF.box_box_2jjDp')
  .forEach(el => {
    el.style.backgroundColor = 'purple';
  });

  // also change feedback button text color
  function updateButtonColors() {
    const feedbackLinks = document.querySelectorAll(
      'a.menu-bar_feedback-link_1BnAR'
    );
    feedbackLinks.forEach(link => {
      const span = link.querySelector('.button_content_3jdgj span');
      if (span) {
        span.style.color = 'purple'; // sets text color to match navbar
      }
    });
  }

  // run once
  updateButtonColors();

  // keep checking for dynamic UI changes
  const observer = new MutationObserver(updateButtonColors);
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
})();
