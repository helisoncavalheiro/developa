import "./bootstrap";
import * as bootstrap from "bootstrap";
import "../scss/app.scss";

import React from "react";
import { render } from "react-dom";
import { createInertiaApp } from "@inertiajs/inertia-react";
import { InertiaProgress } from "@inertiajs/progress";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import Layout from "./Layouts/App";
const appName =
  window.document.getElementsByTagName("title")[0]?.innerText || "Laravel";

createInertiaApp({
  title: (title) => `${title} - ${appName}`,
  resolve: (name) => {
    const page = resolvePageComponent(
      `./Pages/${name}.jsx`,
      import.meta.glob("./Pages/**/*.jsx")
    );
    page.then((module) => {
      module.default.layout =
        module.default.layout || ((page) => <Layout children={page} />);
    });
    return page;
  },
  setup({ el, App, props }) {
    return render(<App {...props} />, el);
  },
});

InertiaProgress.init({ color: "#4B5563" });
