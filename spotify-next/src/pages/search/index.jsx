import MainLayout from "@/layouts/mainLayout";
import styles from "../../styles/Search.module.scss";
import Navbar from "@/components/navbar";
import SearchInput from "@/components/searchInput";
import CategoriesList from "@/components/categoriesList";
import { Main } from "next/document";
import { useState } from "react";
import Album from "@/components/album";
import Artist from "@/components/artist";

export default function Search() {
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <MainLayout>
      <Navbar />
      <SearchInput
        setSearchResults={setSearchResults}
        setIsLoading={setIsLoading}
      />
      {isLoading && <div class="loader"></div>}

      <div className={styles.results}>
        {Object.keys(searchResults).length > 0 &&
          searchResults.artists.items.map((artist, key) => (
            <Artist artistData={artist} key={key} id={key} />
          ))}
        {Object.keys(searchResults).length > 0 &&
          searchResults.albums.items.map((album, key) => (
            <Album albumData={album} key={key} id={key} />
          ))}
      </div>

      <CategoriesList />
    </MainLayout>
  );
}
