import img from '@/public/1.jpg';
import Image from 'next/image';

const PetsPage: React.FC = () => {
  return (
    <div>
      <Image
        src={img}
        placeholder="blur"
        blurDataURL="/loading_pets.jpg"
        alt="pet"
        width="420"
        height="630"
      />
      {['1', '2', '3', '4', '5'].map((path) => (
        <div key={path}>
          <Image src={`/${path}.jpg`} alt="pet" width="420" height="630" />
        </div>
      ))}
    </div>
  );
};

export default PetsPage;
