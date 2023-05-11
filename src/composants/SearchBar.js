import React from 'react';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

const SearchContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  marginLeft: 'auto',
});

export default function SearchBar() {
  const handleSearch = (event) => {
    // Gérer la logique de recherche ici
    const searchTerm = event.target.value;
    console.log(searchTerm);
  };

  return (
    <SearchContainer>
      <TextField
        placeholder="Rechercher..."
        variant="outlined"
        onChange={handleSearch}
      />
      <IconButton>
        <SearchIcon />
      </IconButton>
    </SearchContainer>
  );
}
