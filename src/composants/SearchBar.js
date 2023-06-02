import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';

const SearchBar = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        marginright: '100%',
        marginBottom: '20px',
        width: '400px',
        height: '60px',
        backgroundColor: '#F6F6F6',
        borderRadius: '20px',
        boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.16)',
        paddingLeft: '16px',
      }}
    >
      <TextField
        id="search"
        label="Recherche"
        variant="standard"
        sx={{
          width: '100%',
          backgroundColor: 'transparent',
          '& input': {
            color: '#333',
            fontWeight: 500,
          },
          '& label': {
            color: '#666',
            fontWeight: 500,
          },
          '& .MuiOutlinedInput-notchedOutline': {
            display: 'none',
          },
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ color: '#666' }} />
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};

export default SearchBar;
