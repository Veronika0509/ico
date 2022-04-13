import React from 'react'
import '../main.css'

export function Preloader({language}) {
    return (
        <div className={'preloader'}>
            <h1>{language === 'ru' ? 'загрузка' : 'loading'}...</h1>
        </div>
    )
}

export function Language({language, setLanguage}) {
    return (
        <div className={'container'}>
            <div className={'lang-container'}>
                <a href="#"
                   style={{fontWeight: language === 'ru' ? 700 : 400}}
                   onClick={() => setLanguage('ru')} className={'lang-item'}
                >ru</a>
                <a href="#"
                   style={{fontWeight: language === 'ru' ? 400 : 700}}
                   onClick={() => setLanguage('en')} className={'lang-item'}
                >en</a>
            </div>
        </div>
    )
}

export function ConnectWalletButton({language, onClick}) {
    function all() {
        onClick()
    }
    return <div className={'container-btn'}>
        <a href="#" onClick={all} className={'button'}>{language === 'ru' ? 'подключить кошелек' : 'connect wallet'}</a>
    </div>;
}