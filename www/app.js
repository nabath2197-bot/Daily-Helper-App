// DAILY HELPER
// Main application logic

(function () {
  "use strict";

  const app = {

    // Remember selected language
    language: localStorage.getItem("daily_helper_language") || "en",

    // Start app
    init: function () {
      this.setupLanguageSelector();
      this.loadSavedLanguage();
      this.setupToolButtons();
    },

    // Language selector
    setupLanguageSelector: function () {
      const selector = document.getElementById("languageSelect");

      if (!selector) return;

      selector.value = this.language;

      selector.addEventListener("change", function () {
        app.setLanguage(this.value);
      });
    },

    // Change language
    setLanguage: function (language) {
      this.language = language;

      localStorage.setItem(
        "daily_helper_language",
        language
      );

      this.updateDirection();

      console.log(
        "Daily Helper language:",
        language
      );
    },

    // Load saved language
    loadSavedLanguage: function () {
      const selector =
        document.getElementById("languageSelect");

      if (selector) {
        selector.value = this.language;
      }

      this.updateDirection();
    },

    // Arabic and Urdu use RTL
    updateDirection: function () {
      if (
        this.language === "ar" ||
        this.language === "ur"
      ) {
        document.body.classList.add("rtl");
      } else {
        document.body.classList.remove("rtl");
      }
    },

    // Connect all tool buttons
    setupToolButtons: function () {
      const buttons =
        document.querySelectorAll("[data-tool]");

      buttons.forEach(function (button) {

        button.addEventListener("click", function () {

          const tool =
            button.getAttribute("data-tool");

          app.openTool(tool);
        });

      });
    },

    // Open selected tool
    openTool: function (tool) {

      console.log(
        "Selected Daily Helper tool:",
        tool
      );

      // Temporary message.
      // Real tools will replace this later.
      const toolNames = {

        money: "Money",
        calculator: "Calculator",
        loan: "Home Loan",
        time: "Time",
        calendar: "Calendar",
        notes: "Notes",
        todo: "To-Do",
        expenses: "Expenses",
        currency: "Currency",
        converter: "Converter",
        age: "Age Calculator",
        percentage: "Percentage",
        bill: "Bill Split",
        qr: "QR Tools",
        language: "Languages",
        settings: "Settings"

      };

      const name =
        toolNames[tool] || "Tool";

      alert(
        "Daily Helper\n\n" +
        name +
        "\n\n" +
        "This tool is ready to be activated."
      );
    }

  };

  // Start when page is ready
  document.addEventListener(
    "DOMContentLoaded",
    function () {
      app.init();
    }
  );

})();
