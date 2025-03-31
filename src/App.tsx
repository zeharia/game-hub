import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import "./index.css";
import GameGrid from "./components/GameGrid";
import GameGenres from "./components/GameGenres";
import { useState } from "react";
import { Genres } from "./hook/useGenres";

const App = () => {
  const [selectedGenre, setSelectedGenre] = useState<Genres | null>(null);
  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
      templateColumns={{
        base: "1fr",
        lg: "200px",
      }}
    >
      <GridItem area={"nav"}>
        <NavBar />
      </GridItem>
      <GridItem area={"aside"} hideBelow={"lg"} paddingX={5}>
        <GameGenres selectedGenre={selectedGenre} onSelectGenre={(genre) => setSelectedGenre(genre)} />
      </GridItem>
      <GridItem area={"main"}>
        <GameGrid selectedGenre={selectedGenre} />
      </GridItem>
    </Grid>
  );
};

export default App;
