import React from "react";
import {Language} from "./components/start-page";
import {Button} from "./components/start-page";

export const App: React.FC = () => {
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