
import Link from "next/link";
import Image from "next/image";
import styles from "./menu.module.css"
import MenuPosts from "../MenuPosts/MenuPosts";
import MenuCategories from "../menuCategories/menuCategories";

const Menu = () => {

  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>{"What's hot"}</h2>
      <h1 className={styles.title}>Most Popular</h1>
      <MenuPosts withImage={true} />

      <h2 className={styles.subtitle}>Discover by topic</h2>
      <h1 className={styles.title}>Categories</h1>
      <MenuCategories />
      
      <h2 className={styles.subtitle}>Chosen by the editor</h2>
      <h1 className={styles.title}>Editors Pick</h1>
      <MenuPosts withImage={true} />
    
    </div>
  );
};

export default Menu;