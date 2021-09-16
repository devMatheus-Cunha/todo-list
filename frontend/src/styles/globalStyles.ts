import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0; 
    padding: 0;
    box-sizing: border-box;
  }
  
  html, body, #root {
    max-height:100vh;
    max-width:100vw;
    
    width:100%;
    height:100%;
  }
  
  *, button, input{
     border: 0;
     background: none;
     font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    button {
     cursor: pointer;
    }
    
    html{
      background: var(--primary);
      color: white !important;
    }
    
    :root {
      --primary: #000;
      --secondary: #15181C;
      --navBar: #202327;
      --white-050: #D9D9D9;
      --gray: #cccc;
      --outline: #2F3336;     
      --green: #00C06B;
      --red: #E8265E;
      --blue: #33A1F2;
      --blue-hover: #2386cf;
      --dark-hover: #011017;
    }
`;
