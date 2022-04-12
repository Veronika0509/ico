import React from "react";
import {Preloader} from "./components/pages/start-page";
import {Language} from "./components/pages/start-page";
import {Button} from "./components/pages/start-page";
import {Address} from "./components/pages/investor";
import {Content} from "./components/pages/investor";
import {LanguageVisitor} from "./components/pages/investor";
import {ButtonMore} from "./components/pages/investor";
import {AdminTable} from "./components/pages/admin";
import {Title} from "./components/pages/admin";
import {AdminContent} from "./components/pages/admin";
import {Amount} from "./components/pages/admin";
import {AdminButton} from "./components/pages/admin";

export const App: React.FC = () => {
    const [language, setLanguage] = React.useState(navigator.language === 'ru' ? 'ru' : 'en')

    const [walletConnected, setWalletConnected] = React.useState(false)
    const [admin, setAdmin] = React.useState(true)

    const buttonClickHandle = () => {
        setTimeout(function () {
            setWalletConnected(true)
        }, 10)
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
               <div>
                   <AdminTable language={language}/>
                   <Title language={language} />
                   <AdminContent language={language} />
                   <Amount language={language} />
                   <AdminButton language={language} />
               </div>
            )}
            { walletConnected && !admin && (
                <div>
                    <Address  language={language} />
                    <Content  language={language} />
                    <ButtonMore language={language} />
                    <LanguageVisitor language={language} setLanguage={setLanguage} />
                </div>
            )}
        </>
    )
}