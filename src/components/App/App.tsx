import { useEffect } from "react";
import "./App.scss";
import { useWeb3React } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import UserPanel from "components/UserPanel/UserPanel";

export default function App() {
    const { connector } = useWeb3React<Web3Provider>();

    useEffect(() => void connector.activate(), [connector]);

    return (
        <div className="app">
            <UserPanel />
        </div>
    );
}
