import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';

const SearchBar = () => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
      <TextField
        id="search"
        label="Recherche"
        variant="outlined"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};
export default SearchBar;