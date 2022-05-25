import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { add as addFn } from "@max-poc/calculator";
import { todayIsoFormat } from "@max-poc/domain-date-formatter";
import { timeMultiply } from "@max-poc/date-formatter";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <div>{todayIsoFormat("dot")}</div>
      <div>{addFn(2, 3)}</div>
      <div>{timeMultiply()}</div>
    </div>
  );
};

export default Home;
