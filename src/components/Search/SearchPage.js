import React, { useState } from 'react';
import axios from 'axios';
import {
  Container,
  TextField,
  IconButton,
  List,
  InputAdornment
} from '@mui/material';
import { Search } from '@mui/icons-material';
import SearchExpandedCard from './SearchExpandedCard';
import { getAlbumSearch } from '../../services/album-service';

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = async () => {
    try {

      const results = await getAlbumSearch(searchTerm);

      let albums = [];
      for (let i = 0; i < Math.min(results.length, 10); i++) {
        let album = results[i];
        let spotifyId = album.spotifyId;
        let name = album.name;
        let artist = album.artists[0].name;
        let image = album.images[1].url;
        let url = album.external_urls.spotify;
        albums.push({ spotifyId, name, artist, image, url });
      }
      setResults(albums);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <Container>
      <Container sx={{m: 1}}>
      <TextField
        label="Search"
        placeholder="Search for an album, artist, or keyword"
        variant="outlined"
        value={searchTerm}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        fullWidth
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handleSearch}>
                <Search />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      </Container>
      <List>
        {results.map((result, index) => (
          <SearchExpandedCard index={index} album={result} />
        ))}
      </List>
    </Container>
  );
};

export default SearchPage;
