import React from "react";
import {Language} from "./components/start-page";
import {Button} from "./components/start-page";
import {Address} from "./components/wallet-connected";
import {Content} from "./components/wallet-connected";
import {LanguageVisitor} from "./components/wallet-connected";

export const App: React.FC = () => {
    const [language, setLanguage] = React.useState(navigator.language === 'ru' ? 'ru' : 'en')

    const [walletConnected, setWalletConnected] = React.useState(false)
    const [admin, setAdmin] = React.useState(true)

    const buttonClickHandle = () => {
        // todo
        setWalletConnected(true)
        setAdmin(false)
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
                <div>
                    <Address  language={language} />
                    <Content  language={language} />
                    <LanguageVisitor language={language} setLanguage={setLanguage} />
                </div>
            )}
        </>
    )
}