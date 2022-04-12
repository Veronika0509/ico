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
import {BlockchainService} from "./blockchain-service";
import {Phase} from "./utils";

export const App: React.FC = () => {
    const [language, setLanguage] = React.useState(navigator.language === 'ru' ? 'ru' : 'en')

    const [walletConnected, setWalletConnected] = React.useState(false)
    const [walletConnecting, setWalletConnecting] = React.useState(false)
    const [admin, setAdmin] = React.useState(true)

    const buttonClickHandle = () => {
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
                    <Language language={language} setLanguage={setLanguage} />
                    Connecting...
                </div>
            )}
            { !walletConnected && !walletConnecting && (
                <div>
                    <Language language={language} setLanguage={setLanguage} />
                    <Button language={language} buttonClickHandle={buttonClickHandle}/>
                </div>
            )}
            { walletConnected && admin && (
                // fixme: я бы сделал отдельные компоненты для Амина и Инвестора, так как нам прийдёться добавить не
                //  мало логики в каждый из комплонентов, и эта логика будет разная, почти не будет общих методов
               <div>
                   <AdminTable language={language}/>
                   <Title language={language} />
                   <AdminContent language={language} />

                   // я бы не делал здесь отдельного компонента, так как нам понадобиться передавать сюда значение, будем много дополнительного кода
                   <Amount language={language} />
                   // вот например  так
                   {/*<AdminButton language={language} />*/}
                   <div className={'container-admin-content'}>
                       <a href="#" className="admin-btn"
                          onClick={() => BlockchainService.registerPurchase(Phase.SEED, '', 1)}>
                           {language === 'ru' ? 'зарегистрировать' : 'register'}
                       </a>
                   </div>
               </div>
            )}
            { walletConnected && !admin && (
                // тоже стоит вынести в отдельный компонент
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
