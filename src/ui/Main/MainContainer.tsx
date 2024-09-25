import React, { PropsWithChildren } from "react";
import style from './MainContainer.module.scss';

export const MainContainer: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <main className={style.main__container}>
      {children}
    </main>
  );
};