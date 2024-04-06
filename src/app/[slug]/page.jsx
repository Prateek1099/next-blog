import React from 'react'
import styles from "./singlePage.module.css"
import Image from 'next/image'
import Menu from '../Components/Menu/Menu'
import Comments from '../Components/Comments/Comments'

const SinglePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Lorem ipsum dolor sit amealiquid quas d.</h1>
        <div className={styles.user}>

        <div className={styles.userImageContainer}>
            <Image src="/p1.jpeg" alt='' fill className={styles.avatar} />
            </div>

            <div className={styles.userTextContainer}>
                <span className={styles.username}>Prateek Parihar</span>
                <span className={styles.date}>01.01.2024</span>
            </div>

        </div>
      </div>
      <div className={styles.imageContainer}>
      <Image src="/p1.jpeg" alt='' fill className={styles.image} />
      </div>
        </div> 
        <div className={styles.content}>
            <div className={styles.post}>
            <div className={styles.description}>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, quis modi obcaecati exercitationem esse dignissimos incidunt officia deleniti, molestiae ut quos repellat sequi vitae excepturi nihil voluptatibus inventore similique? Eligendi!

              </p>

              <h2>Naya Blog Shuru Yaha se</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, quis modi obcaecati exercitationem esse dignissimos incidunt officia deleniti, molestiae ut quos repellat sequi vitae excepturi nihil voluptatibus inventore similique? Eligendi!

              </p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, quis modi obcaecati exercitationem esse dignissimos incidunt officia deleniti, molestiae ut quos repellat sequi vitae excepturi nihil voluptatibus inventore similique? Eligendi!

              </p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, quis modi obcaecati exercitationem esse dignissimos incidunt officia deleniti, molestiae ut quos repellat sequi vitae excepturi nihil voluptatibus inventore similique? Eligendi!

              </p>
              </div>
              <div className={styles.comment}>
                <Comments />
              </div>
            </div>
            <Menu />
            </div> 
    </div>
  )
}

export default SinglePage