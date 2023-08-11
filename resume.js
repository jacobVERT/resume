function showTab(tabIndex) {
  const tabPanels = document.querySelectorAll('.tab-panel');
  const tabButtons = document.querySelectorAll('.tab-button');

  tabPanels.forEach((panel, index) => {
    if (index === tabIndex) {
      panel.classList.add('active');
    } else {
      panel.classList.remove('active');
    }
  });

  tabButtons.forEach((button, index) => {
    if (index === tabIndex) {
      button.classList.add('active');
    } else {
      button.classList.remove('active');
    }
  });
}
