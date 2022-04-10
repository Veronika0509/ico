import React from "react";
import {Language} from "./components/start-page";
import {Button} from "./components/start-page";

export const App: React.FC = () => {
    const [language, setLanguage] = React.useState(navigator.language === 'ru' ? 'ru' : 'en')

    const [walletConnected, setWalletConnected] = React.useState(false)
    const [admin, setAdmin] = React.useState(true)

    const buttonClickHandle = () => {
        // todo
        console.log('clicked')
        setWalletConnected(true)
        setAdmin(true)
    }

    return (
        <>
            { walletConnected || (
                <div>
                    <Language language={language} setLanguage={setLanguage} />
                    <Button language={language} buttonClickHandle={buttonClickHandle}/>
                </div>
            )}

            { walletConnected && admin && (
                'admin'
            )}

            { walletConnected && !admin && (
                'visitor'
            )}
        </>
    )
}