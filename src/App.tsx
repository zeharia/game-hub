import { Grid, GridItem, Show } from "@chakra-ui/react";

const App = () => {
  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
    >
      <GridItem area={"nav"} bg="coral">
        Nav
      </GridItem>
      <GridItem area={"aside"} bg="yellow" hideBelow={"lg"}>
        Aside
      </GridItem>
      <GridItem area={"main"} bg="blue">
        Main
      </GridItem>
    </Grid>
  );
};

export default App;
