function DogDetail({ dog }) {
  return (
    <div>
      <h1>{dog.name}</h1>
      <img src={dog.src} alt={`${dog.name}`} />
      <ul>
        {dog.facts.map((f) => (
          <li key={f}>{f}</li>
        ))}
      </ul>
    </div>
  );
}

export default DogDetail;
