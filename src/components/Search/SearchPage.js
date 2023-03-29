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

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = async () => {
    try {
      // We need to replace this with a call to our backend for searching albums
      // const url = `https://api.example.com/search?q=${searchTerm}`;
      // const response = await axios.get(url);
      let testing = [
        {
          "name": "Nothing was the same",
          "artist": "Drake",
          "image": "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/41aLMoRW0HL.jpg",
          "url": "https://open.spotify.com/playlist/37i9dQZF1DWU05aHRDUDnL"
        },
        {
          "name": "Solid Air",
          "artist": "John Martyn",
          "image": "https://www.nme.com/wp-content/uploads/2016/09/2015JohnMartyn_SolidAir_201015.jpg",
          "url": "https://open.spotify.com/playlist/37i9dQZF1DWU05aHRDUDnL"
        },
      ]
      setResults(testing); // Adjust according to the API response structure
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
        placeholder="Search for an album"
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
