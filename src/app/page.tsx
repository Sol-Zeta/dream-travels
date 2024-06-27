import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <p>The places you dream of</p>
      <p>Let's live new adventures</p>
      <div className="search-bar">
        <input type="text" placeholder="Search trips" />
        <button>Search</button>
      </div>
    </main>
  );
}
