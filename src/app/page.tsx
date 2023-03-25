import { Inter } from "next/font/google";
import styles from "./page.module.css";
import Card from "../component/common/Card";
import TestButton from "@/component/common/TestButton";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.gridContainer}>
      <Card
        imageUrl="https://via.placeholder.com/300x200"
        title="excel file을 활용할 예정"
        description=""
        linkUrl="https://www.example.com"
      />
      <Card
        imageUrl="https://via.placeholder.com/300x200"
        title="개인화 데이터를 활용해볼 예정"
        description=""
        linkUrl="https://www.example.com"
      />
      <Card
        imageUrl="https://via.placeholder.com/300x200"
        title="또 무엇이 있을까나"
        description=""
        linkUrl="https://www.example.com"
      />
      <TestButton />
    </main>
  );
}
