(function () {
  const style = document.createElement("style");
  document.head.appendChild(style);

  function shade(hex, percent) {
    let f = parseInt(hex.slice(1), 16),
      t = percent < 0 ? 0 : 255,
      p = percent < 0 ? percent * -1 : percent,
      R = f >> 16,
      G = (f >> 8) & 0x00ff,
      B = f & 0x0000ff;

    return (
      "#" +
      (
        0x1000000 +
        (Math.round((t - R) * p) + R) * 0x10000 +
        (Math.round((t - G) * p) + G) * 0x100 +
        (Math.round((t - B) * p) + B)
      )
        .toString(16)
        .slice(1)
    );
  }

  const config = {
    color: "#1e90ff"
  };

  function applyStyles() {
    const light = shade(config.color, 0.2);
    const dark = shade(config.color, -0.3);

    style.textContent = `
      #custom-loading-screen {
        position: fixed;
        inset: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #111;
        z-index: 999999;
      }

      #custom-loading-spinner::after {
        content: "";
        display: block;
        width: 72px;
        height: 72px;
        border-radius: 50%;
        border: 10px solid;
        border-color: ${light} ${dark} ${light} ${dark};
        animation: spin 1.1s linear infinite;
        filter: drop-shadow(0 0 6px ${config.color}55);
      }

      @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
    `;
  }

  function createLoader() {
    const screen = document.createElement("div");
    screen.id = "custom-loading-screen";

    const spinner = document.createElement("div");
    spinner.id = "custom-loading-spinner";

    screen.appendChild(spinner);
    document.body.appendChild(screen);
  }

  window.LoadingScreen = {
    config(opts) {
      if (opts?.color) config.color = opts.color;
      applyStyles();
    },
    hide() {
      document.getElementById("custom-loading-screen")?.remove();
    }
  };

  applyStyles();

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", createLoader);
  } else {
    createLoader();
  }

  window.addEventListener("load", () => {
    setTimeout(() => LoadingScreen.hide(), 500);
  });
})();
