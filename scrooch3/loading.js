(function () {
  const style = document.createElement("style");
  style.textContent = `
    #custom-loading-screen {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: #111;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 999999;
    }

    #custom-loading-spinner::after {
      content: "";
      display: block;
      width: 64px;
      height: 64px;
      border-radius: 50%;
      border: 6px solid;
      border-color: #3498db transparent #3498db transparent; /* BLUE */
      animation: spin 1.1s linear infinite;
    }

    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `;
  document.head.appendChild(style);

  function createLoader() {
    const screen = document.createElement("div");
    screen.id = "custom-loading-screen";

    const spinner = document.createElement("div");
    spinner.id = "custom-loading-spinner";

    screen.appendChild(spinner);
    document.body.appendChild(screen);
  }

  function hideLoader() {
    const el = document.getElementById("custom-loading-screen");
    if (el) el.remove();
  }

  // expose API
  window.LoadingScreen = {
    hide: hideLoader
  };

  // create ASAP
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", createLoader);
  } else {
    createLoader();
  }

  // auto-hide when page fully loads
  window.addEventListener("load", () => {
    setTimeout(hideLoader, 500);
  });
})();
