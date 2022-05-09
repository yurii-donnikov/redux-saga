import React from "react";
import style from "./Container.module.scss";

interface IContainer {
  children: React.ReactNode;
}

function Container({ children }: IContainer) {
  return <div className={style.container}>{children}</div>;
}

export default Container;
