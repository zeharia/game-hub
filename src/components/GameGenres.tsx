import useGenres from "@/hook/useGenres";

const GameGenres = () => {
  const { data } =useGenres();
  return (
    <ul>
      {data.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GameGenres;
