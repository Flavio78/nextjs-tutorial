const PetsPage = () => {
  return (
    <div>
      {['1', '2', '3', '4', '5'].map((path) => (
        <div key={path}>
          <img src={`./${path}.jpg`} alt="pet" width="280" height="420" />
        </div>
      ))}
    </div>
  );
};

export default PetsPage;
