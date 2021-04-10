import React, { useEffect, useState } from "react";
import "./App.css";
import { ZephyrDisplay } from "./types";
import { ZephyrRow } from "./zephyr-row";
import { zephyrOutputData, coloursOutputData } from "./utils";

function App() {
  const [zephyrDisplays, setZephyrDisplays] = useState<ZephyrDisplay[]>([]);
  const [displayStandardOut, setDisplayStandard] = useState<boolean>(true);
  const [displayEnhancedOut, setDisplayEnhanced] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    setLoading(true);

    setZephyrDisplays(
      zephyrOutputData
        .filter(
          (zephyr) =>
            zephyr.currentlyOwned &&
            !(zephyr.type === "Standard" && !displayStandardOut) &&
            !(zephyr.type === "Enhanced" && !displayEnhancedOut)
        )
        .map((zephyr) => {
          return {
            ...zephyr,
            pollutionColor: coloursOutputData.find(
              (color) =>
                color.value ===
                (zephyr.NO2 > zephyr.PM25 ? zephyr.NO2 : zephyr.PM25)
            ),
          };
        })
        .sort((zephyr) => (zephyr.type === "Standard" ? -1 : 1))
    );
    setLoading(false);
  }, [displayStandardOut, displayEnhancedOut]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>List of Zephyr Filters</h1>
        <div>
          <label className="checkboxText">
            <input
              type="checkbox"
              name="filterTopicName"
              checked={displayStandardOut}
              onChange={() => setDisplayStandard(!displayStandardOut)}
            />
            Display Standard Zephyrs
          </label>
          <label className="checkboxText">
            <input
              type="checkbox"
              name="filterTopicName"
              checked={displayEnhancedOut}
              onChange={() => setDisplayEnhanced(!displayEnhancedOut)}
            />
            Display Enhanced Zephyrs
          </label>
        </div>
      </header>

      {loading ? (
        <p>loading....</p>
      ) : zephyrDisplays.length === 0 ? (
        <p>No Data To Display</p>
      ) : (
        <div className="ZephyrTableWrapper">
          <div style={{ display: "table" }}>
            <div style={{ display: "table-row" }}>
              <div
                className={"ZephyrTableHeaderCell"}
                style={{ display: "table-cell" }}
              >
                Name
              </div>
              <div
                className={"ZephyrTableHeaderCell"}
                style={{ display: "table-cell" }}
              >
                Type
              </div>
              <div
                className={"ZephyrTableHeaderCell"}
                style={{ display: "table-cell" }}
              >
                Battery %
              </div>
              <div
                className={"ZephyrTableHeaderCell"}
                style={{ display: "table-cell" }}
              >
                NO₂
              </div>
              <div
                className={"ZephyrTableHeaderCell"}
                style={{ display: "table-cell" }}
              >
                PM₂.₅
              </div>
            </div>
            {zephyrDisplays.map((zephyr) => (
              <ZephyrRow zephyr={zephyr} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
