import React from "react";
import { ZephyrDisplay } from "./types";
import "./App.css";

interface IProps {
  zephyr: ZephyrDisplay;
}

export function ZephyrRow(props: IProps) {
  return (
    <div
      style={{
        display: "table-row",
        backgroundColor: props.zephyr.pollutionColor?.hex,
      }}
    >
      <div style={{ display: "table-cell" }}>{props.zephyr.name}</div>
      <div style={{ display: "table-cell" }}>{props.zephyr.type}</div>
      <div style={{ display: "table-cell" }}>
        {props.zephyr.batteryPercentage}%
      </div>
      <div style={{ display: "table-cell" }}>{props.zephyr.NO2}</div>
      <div style={{ display: "table-cell" }}>{props.zephyr.PM25}</div>
    </div>
  );
}
