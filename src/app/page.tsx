import "@/styles/globals.css";
import SearchBar from "./components/SearchBar/SearchBar";
import Box from "./components/Box/Box";
import HeaderButton from "./components/HeaderButton/HeaderButton";

export default function Home() {
  return (
    <>
      <section>
        <HeaderButton></HeaderButton>
      </section>
      {/* <SearchBar></SearchBar> */}
      <Box></Box>
      <Box></Box>
      <Box></Box>
    </>
  );
}
