import React from "react";
import {Preloader} from "./pages/start-page";
import {Language} from "./pages/start-page";
import {ConnectWalletButton} from "./pages/start-page";
import {InvestorPage} from "./pages/investor";
import {TableWithdrawal} from "./pages/admin";
import {AdminPage} from "./pages/admin";
import {BlockchainService} from "./blockchain-service";
import {Phase} from "./utils";
import {WalletAddress} from "./components/walletAddress";


export const App: React.FC = () => {
    const [language, setLanguage] = React.useState(navigator.language === 'ru' ? 'ru' : 'en')

    const [walletConnected, setWalletConnected] = React.useState(false)
    const [walletConnecting, setWalletConnecting] = React.useState(false)
    const [admin, setAdmin] = React.useState(true)

    const connectWallet = () => {
        setWalletConnecting(true)
        BlockchainService.connectWallet().then( address => {
            setWalletConnecting(false)
            setWalletConnected(true)

            setAdmin(BlockchainService.isAdmin(address))
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
                    <Language language={language} setLanguage={setLanguage} />
                    <ConnectWalletButton language={language} onClick={connectWallet}/>
                </div>
            )}
            { walletConnected && admin && (
                <div>
                    <TableWithdrawal />
                    <AdminPage />
                </div>
            )}
            { walletConnected && !admin && (
                <div>
                    <WalletAddress language={language}/>
                    <InvestorPage language={language}/>
                    <Language language={language} setLanguage={setLanguage} />
                </div>
            )}
        </>
    )
}
