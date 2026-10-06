// DAILY HELPER
// Main application logic

(function () {
  "use strict";

  const app = {
    language: localStorage.getItem("daily_helper_language") || "en",

    init: function () {
      this.loadLanguage();
      this.setupLanguageSelector();
      this.setupToolButtons();
    },

    setupLanguageSelector: function () {
      const selector = document.getElementById("languageSelect");

      if (!selector) return;

      selector.value = this.language;

      selector.addEventListener("change", function () {
        app.language = this.value;
        localStorage.setItem("daily_helper_language", app.language);

        if (app.language === "ar" || app.language === "ur") {
          document.body.classList.add("rtl");
        } else {
          document.body.classList.remove("rtl");
        }
      });
    },

    loadLanguage: function () {
      if (this.language === "ar" || this.language === "ur") {
        document.body.classList.add("rtl");
      }
    },

    setupToolButtons: function () {
      const buttons = document.querySelectorAll("[data-tool]");

      buttons.forEach(function (button) {
        button.addEventListener("click", function () {
          const tool = button.getAttribute("data-tool");
          app.openTool(tool);
        });
      });
    },

    openTool: function (tool) {
      console.log("Opening tool:", tool);

      alert(
        "Daily Helper\n\n" +
        "This tool will be activated in the next development step:\n\n" +
        tool
      );
    }
  };

  document.addEventListener("DOMContentLoaded", function () {
    app.init();
  });
})();
