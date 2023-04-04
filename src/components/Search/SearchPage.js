import React, { useState } from 'react';
import axios from 'axios';
import {
  Container,
  TextField,
  IconButton,
  List,
  InputAdornment,
  CircularProgress,
  Typography,
  createTheme,
  ThemeProvider,
  Divider,
} from '@mui/material';
import { Search } from '@mui/icons-material';
import SearchExpandedCard from './SearchExpandedCard';
import { getAlbumSearch } from '../../services/album-service';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2196f3',
    },
    secondary: {
      main: '#f50057',
    },
  },
});

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = async () => {
    setLoading(true);
    try {
      const results = await getAlbumSearch(searchTerm);

      const albums = results.slice(0, 10).map((album) => ({
        spotifyId: album.spotifyId,
        name: album.name,
        artist: album.artists[0].name,
        image: album.images[1].url,
        url: album.external_urls.spotify,
      }));

      setResults(albums);
      setLoading(false);
      setError(null);
    } catch (error) {
      console.error('Error fetching search results:', error);
      setLoading(false);
      setError(error.message);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container sx={{ padding: '24px' }}>
        <Typography variant="h4" sx={{ marginBottom: '16px' }}>
          Search for an album, artist, or keyword
        </Typography>
        <TextField
          label="Search"
          placeholder="Search"
          variant="outlined"
          value={searchTerm}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
          fullWidth
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleSearch} disabled={loading}>
                  <Search />
                </IconButton>
              </InputAdornment>
            ),
          }}
          sx={{ marginBottom: '16px' }}
        />
        <Divider sx={{ marginBottom: '16px' }} />
        {loading && (
          <Typography variant="body1" sx={{ textAlign: 'center', marginBottom: '16px' }}>
            <CircularProgress size={32} color="secondary" sx={{ marginRight: '8px' }} />
            Searching...
          </Typography>
        )}
        {error && (
          <Typography variant="body1" sx={{ color: 'error.main', marginBottom: '16px' }}>
            {error}
          </Typography>
        )}
        {results.length > 0 && (
          <List sx={{ marginBottom: '16px' }}>
            {results.map((result, index) => (
              <SearchExpandedCard key={result.spotifyId} index={index} album={result} />
            ))}
          </List>
        )}
        {results.length === 0 && !loading && (
          <Typography variant="body1" sx={{ textAlign: 'center', marginBottom: '16px' }}>
            No results found.
          </Typography>
        )}
      </Container>
    </ThemeProvider>
  );
};

export default SearchPage;
