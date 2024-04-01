import React from 'react';
import styles from './featured.module.css';
import Image from 'next/image';

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey Prateek there here</b>
       ti ea recusais magni ducimus odit fugit! 
       </h1>
      
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt='' fill />
        </div>

        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, quae sed? Molestias delectus minima saepe, ipsum voluptatibus sapiente perferendis cumque quibusdam beatae? Deleniti est sapiente ab, officiis animi officia incidunt!</h1>
          <p className={styles.postDesc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ipsam, eum minus amet quos vero nisi error molestiae, unde cum excepturi modi nostrum iusto esse laboriosam nulla itaque necessitatibus maxime!Lorem
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis natus ut voluptas iure tempore fugiat quos iusto atque corrupti rerum inventore cupiditate velit accusamus hic, cum quia totam sunt laudantium!
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
