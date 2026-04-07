(function () {
  // ------------------------------
  // Set your theme color here
  // ------------------------------
  const themeColor = 'purple'; // Example: 'purple', '#ff00ff', '#3498db', etc.

  // ------------------------------
  // Function to apply the theme
  // ------------------------------
  function applyTheme() {
    // Change navbar background
    document.querySelectorAll('div.menu-bar_menu-bar_JcuHF.box_box_2jjDp')
      .forEach(el => el.style.backgroundColor = themeColor);

    // Change feedback button text color
    document.querySelectorAll('a.menu-bar_feedback-link_1BnAR')
      .forEach(link => {
        const span = link.querySelector('.button_content_3jdgj span');
        if (span) span.style.color = themeColor;
      });

    // Change extension button (background + border + outline)
    document.querySelectorAll('.gui_extension-button-container_b4rCs.box_box_2jjDp button.gui_extension-button_2T7PA')
      .forEach(b => {
        b.style.setProperty('background-color', themeColor, 'important');
        b.style.setProperty('border', '2px solid ' + themeColor, 'important');
        b.style.setProperty('outline', '2px solid ' + themeColor, 'important');
        b.style.setProperty('box-shadow', 'none', 'important');
      });
  }

  // Apply theme immediately
  applyTheme();

  // Re-apply on DOM changes (dynamic editor)
  const observer = new MutationObserver(applyTheme);
  observer.observe(document.body, { childList: true, subtree: true });
})();
