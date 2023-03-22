import styles from "./card.module.css";

interface CardProps {
  imageUrl: string;
  title: string;
  description: string;
  linkUrl: string;
}

const Card = ({ imageUrl, title, description, linkUrl }: CardProps) => {
  return (
    <div className={styles.card}>
      <img src={imageUrl} alt={title} />
      <div className={styles.cardContent}>
        <h2>{title}</h2>
        <p>{description}</p>
        <a href={linkUrl}>Learn More</a>
      </div>
    </div>
  );
};

export default Card;
