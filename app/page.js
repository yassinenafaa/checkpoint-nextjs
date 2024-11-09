import Image from "next/image";
import styles from "./page.module.css";
// import ContactsList from "./components/ContactsList";
// import Counter from "./components/Counter";

export default function Home() {
    return (
        <div className={styles.page}>
            <h1 className='title'>Hello World</h1>
            {/* <Counter /> */}
            {/* <ContactsList /> */}
        </div>
    );
}
