/*\
title: $:/plugins/oeyoews/tiddlywiki-tailwindcss-plus/startup.js
type: application/javascript
module-type: startup
hide-body: yes

tailwindcss startup

\*/
(function () {
  /*jslint node: true, browser: true */
  /*global $tw: false */
  "use strict";

  exports.name = "tailwindcss-startup-hook";
  exports.platforms = ["browser"];
  exports.after = ["startup"];
  exports.before = ["story"];
  exports.synchronous = true;
  exports.startup = () => {
    tailwind = require("tailwindcss.min.js");
    // tailwind.config = require("tailwind.config.js");
    var daisyui = require("daisyui.js");
    tailwind.config = {
      theme: {
        extend: {
          boxShadow: {
            // lg: '5px 20px #000001f',
          },
          typography: ({ theme }) => ({
            DEFAULT: {
              css: {
                // '--tw-prose-body': theme('colors.white'),
                "blockquote p:first-of-type::before": null,
                "blockquote p:last-of-type::after": null,
                pre: {
                  backgroundColor: theme("colors.neutral.100"),
                  color: theme("colors.neutral.900"),
                  border: `none`,
                },
                code: {
                  fontFamily: "serif",
                  backgroundColor: theme("colors.slate.100"),
                  borderRadius: theme("borderRadius.sm"),
                  padding: `${theme("padding.1")} ${theme("padding.1.5")}`,
                  border: `none`,
                },
                "code::before": {
                  content: "normal",
                },
                "code::after": {
                  content: "normal",
                },
              },
            },
          }),
        },
      },
      darkMode: "class",
      variants: {
        extend: {
          appearance: ["hover", "focus"],
        },
      },
      important: true,
      corePlugins: {
        preflight: false,
      },
      plugins: [daisyui],
    };
  };
})();
