import ReactDOM from "react-dom/client";
import "index.css";
import App from "components/App/App";
import { hooks as metaMaskHooks, metaMask } from "connectors/metaMask";
import { Web3ReactHooks, Web3ReactProvider } from "@web3-react/core";
import type { MetaMask } from "@web3-react/metamask";
import { ThemeProvider, createTheme } from "@mui/material";

const connectors: [MetaMask, Web3ReactHooks][] = [[metaMask, metaMaskHooks]];

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <Web3ReactProvider connectors={connectors}>
        <ThemeProvider theme={createTheme()}>
            <App />
        </ThemeProvider>
    </Web3ReactProvider>
);
