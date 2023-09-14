import React from "react";

class ReadFile extends React.Component {
  static read = async (file) => {
    let arrayFile = [];

    const response = await fetch(file);
    const text = await response.text();
    text.split("\n").forEach((line) => {
      arrayFile.push(line);
    });

    return arrayFile;
  };

  render() {
    return;
  }
}

export default ReadFile;
