import React, { useState } from 'react';
import { Button, Typography, Container, Box, CssBaseline, Switch, IconButton} from '@material-ui/core';
import Table from "./components/table";
import TextField from "./components/textfields";
import Banner from "./components/banner";
import BottomToolbar from "./components/bottomtoolbar";
import Snackbars from "./components/snackbars";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import './App.css';
import Menulist from "./components/MenuList";
import Imagebanner from "./components/bannerimage";






function App() {
  const [darkMode, setDarkMode] =useState(false);
  const theme = createMuiTheme ({
    palette: {
      type: darkMode ? "dark" : "light",
    }
  });
  return (
<ThemeProvider theme={theme}>
  <CssBaseline />

  <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)}/>

  <Container className="container">
  
  
      <Banner></Banner>
 
      <Imagebanner></Imagebanner>
      
      <Box mt={1}><Typography variant="h4" gutterBottom>
       <IconButton edge="start"  color="inherit" aria-label="menu"></IconButton>
        Header
      </Typography></Box>

      <TextField>
        
      </TextField>
      <Box mt={1} mb={2} mr={3}> <Button color="primary" variant="contained">BUTTON</Button> <Button color="secondary" variant="outlined">BUTTON</Button> </Box>
      
      <Menulist></Menulist>
      
      <Box mt={3} mb={3}>
       
      </Box>
      <Box> <Snackbars></Snackbars></Box>
      <Box mt={1} mb={2}> <Table /> </Box>
      <BottomToolbar></BottomToolbar>
   </Container>
   
   </ThemeProvider>
  );
  
  
}

export default App;
