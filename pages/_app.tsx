import { HomeCompent } from "../src/components/HomeComponent";
import "../src/styles/styles.css";
import { StyleProvider, ThemePicker } from "vcc-ui";
import React from "react";

function HomePage() {
  return (
    <React.StrictMode>
      <StyleProvider>
        <ThemePicker variant="light">
          <HomeCompent />
        </ThemePicker>
      </StyleProvider>
    </React.StrictMode>
  );
}

export default HomePage;
