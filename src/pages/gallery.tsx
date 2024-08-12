import Image from 'next/image';
import styles from '@/styles/Gallery.module.css'

const images = [
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg',
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg',
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/6.svg',
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/8.svg',
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/10.svg',
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/12.svg'
];

const Gallery: React.FC = () => {
  return (
    <div className={styles.grid}>
      {images.map((src, index) => (
        <div key={index} className={styles.imageContainer}>
          <Image 
            src={src} 
            alt={`Image ${index + 1}`} 
            width={300} 
            height={200} 
            layout="responsive" 
            className={styles.image}
          />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
