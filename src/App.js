import React, { Component } from "react";
import { GlobalStyles, ThemeProvider, theme, Modal, Snackbar } from 'cs-reusable-component-library-exporter';
import CreditMemos from './CreditMemos'

class App extends Component {  
  constructor(props){
    super(props)
    this.state = {
      modalSettings: false,
      snackbarShow: false
    };    
  }

  render(){ 
    return (
      <ThemeProvider theme = {theme}>
        <React.Fragment>
        <GlobalStyles/>          
          <CreditMemos />
        </React.Fragment>         
      </ThemeProvider>
    );  
  }
};

export default App
