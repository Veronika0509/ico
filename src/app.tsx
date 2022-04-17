import React from "react";
import {Preloader} from "./pages/start-page";
import {InvestorPage} from "./pages/investor";
import {AdminPage} from "./pages/admin";
import {WalletConnect} from "./pages/start-page";

const adminAddress = ''

export const App: React.FC = () => {
    const [language, setLanguage] = React.useState(navigator.language)

    const [walletConnected, setWalletConnected] = React.useState(false)
    const [walletAddress, setWalletAddress] = React.useState('')
    const [walletConnecting, setWalletConnecting] = React.useState(false)
    const [admin, setAdmin] = React.useState(true)
    // const { active, account, library, connector, activate, setError, deactivate } = useWeb3React()

    const walletConnectedHandler = (address) => {
        // setWalletConnecting(true)
        //     setWalletConnecting(false)
        setWalletConnected(true)
        setWalletAddress(address)
        setAdmin(adminAddress === address)
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
                    <WalletConnect language={language} onConnected={walletConnectedHandler}/>
                </div>
            )}
            { walletConnected && admin && (
                <div>
                    <AdminPage/>
                </div>
            )}
            { walletConnected && !admin && (
                <div>
                    <InvestorPage walletAddress={walletAddress} language={language}/>
                </div>
            )}
        </>
    )
}
