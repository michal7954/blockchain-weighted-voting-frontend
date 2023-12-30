import ReactDOM from "react-dom/client";
import "index.css";
import App from "components/App/App";
import { hooks as metaMaskHooks, metaMask } from "connectors/metaMask";
import { Web3ReactHooks, Web3ReactProvider } from "@web3-react/core";
import type { MetaMask } from "@web3-react/metamask";
import { ThemeProvider, createTheme } from "@mui/material";
import { StyledEngineProvider } from '@mui/material/styles';
import {
    experimental_extendTheme as extendTheme,
    Experimental_CssVarsProvider as CssVarsProvider,
  } from '@mui/material/styles';

const connectors: [MetaMask, Web3ReactHooks][] = [[metaMask, metaMaskHooks]];

const theme = createTheme();

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <Web3ReactProvider connectors={connectors}>
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
                <CssVarsProvider theme={extendTheme(theme)}>
                    <App />
                </CssVarsProvider>
            </ThemeProvider>
        </StyledEngineProvider>
    </Web3ReactProvider>
);
