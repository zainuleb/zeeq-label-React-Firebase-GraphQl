import React from "react";
import styles from "./Directory.module.scss";

import MenuItem from "../menuItem/MenuItem";
import Data from "../../Data/directoryData.json";

const Directory = () => {
  const directoryData = Data;
  return (
    <div className={styles.directoryMenu}>
      {directoryData.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};

export default Directory;
