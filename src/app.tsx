import React from "react";
import {Preloader} from "./pages/start-page";
import {BlockchainService} from "./blockchain-service";
// import {Phase} from "./utils";
import {Confirm} from "./pages/confirm";
import {InvestorPage} from "./pages/investor";
import {AdminPage} from "./pages/admin";
import {WalletConnect} from "./pages/start-page";


export const App: React.FC = () => {
    const [language, setLanguage] = React.useState(navigator.language)

    const [walletConnected, setWalletConnected] = React.useState(false)
    const [walletConnecting, setWalletConnecting] = React.useState(false)
    const [admin, setAdmin] = React.useState(true)

    const connectWallet = () => {
        setWalletConnecting(true)
        BlockchainService.connectWallet().then( address => {
            setWalletConnecting(false)
            setWalletConnected(true)

            // setAdmin(BlockchainService.isAdmin(address))
            setAdmin(false)
        })
    }

    return (
        <>
            { walletConnecting && (
                <div>
                    <Preloader language={language}/>
                </div>
            )}
            { !walletConnected && !walletConnecting && (
                <div>
                    <WalletConnect language={language} connectWallet={connectWallet}/>
                </div>
            )}
            { walletConnected && admin && (
                <div>
                    <AdminPage/>
                </div>
            )}
            { walletConnected && !admin && (
                <div>
                    <InvestorPage language={language}/>
                </div>
            )}
        </>
    )
}
