import React, {useState, useEffect} from 'react';
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import InputAdornment from "@mui/material/InputAdornment";
import CircularProgress from "@mui/material/CircularProgress";
import Divider from "@mui/material/Divider";
import Search from '@mui/icons-material/Search';
import SearchExpandedCard from './SearchExpandedCard';
import {getAlbumSearch} from '../../services/album-service';
import {useNavigate, useLocation} from 'react-router-dom';
import createTheme from "@mui/material/styles/createTheme";
import ThemeProvider from "@mui/material/styles/ThemeProvider";

const theme = createTheme({
  palette: {
    primary: {
      main: '#2196f3'
    },
    secondary: {
      main: '#f50057'
    }
  }
});

const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const q = params.get('q');
    if (q) {
      setSearchTerm(q);
      handleSearch(q);
    }
  }, [location.search]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = async (query) => {
    setLoading(true);
    try {
      const results = await getAlbumSearch(query);

      const albums = results.slice(0, 10).map((album) => ({
        spotifyId: album.spotifyId,
        name: album.name,
        artist: album.artists[0].name,
        image: album.images[1].url,
        url: album.external_urls.spotify
      }));

      setResults(albums);
      setLoading(false);
      setError(null);

      // Push the search term to the URL as a query param
      navigate(`/search?q=${encodeURIComponent(query)}`);
    } catch (error) {
      console.error('Error fetching search results:', error);
      setLoading(false);
      setError(error.message);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch(searchTerm);
    }
  };

  return (
      <ThemeProvider theme={theme}>
        <Container sx={{padding: '24px'}}>
          <Typography variant="h4" sx={{marginBottom: '16px'}}>
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
                      <IconButton onClick={() => handleSearch(searchTerm)} disabled={loading}>
                        <Search/>
                      </IconButton>
                    </InputAdornment>
                )
              }}
              sx={{marginBottom: '16px'}}
          />
          <Divider sx={{marginBottom: '16px'}}/>
          {loading && (
              <Typography variant="body1"
                          sx={{textAlign: 'center', marginBottom: '16px'}}>
                <CircularProgress size={32} color="secondary"
                                  sx={{marginRight: '8px'}}/>
                Searching...
              </Typography>
          )}
          {error && (
              <Typography variant="body1"
                          sx={{color: 'error.main', marginBottom: '16px'}}>
                {error}
              </Typography>
          )}
          {results.length > 0 && (
              <List sx={{marginBottom: '16px'}}>
                {results.map((result, index) => (
                    <SearchExpandedCard key={result.spotifyId} index={index}
                                        album={result}/>))}
              </List>
          )}
          {results.length === 0 && !loading && (
              <Typography variant="body1"
                          sx={{textAlign: 'center', marginBottom: '16px'}}>
                No results found.
              </Typography>
          )}
        </Container>
      </ThemeProvider>
  );
};

export default SearchPage;
