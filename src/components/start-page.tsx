import React from 'react'
import './main.css'

export function Language({language, setLanguage}) {
    return <div className={'container'}>
        <div className={'lang-container'}>
            <a href="#"
                style={{fontWeight: language === 'ru' ? 700 : 400}}
               onClick={ () => setLanguage('ru')} className={'lang-item'}
            >ru</a>
            <a href="#"
                style={{fontWeight: language === 'ru' ? 400 : 700}}
               onClick={ () => setLanguage('en')} className={'lang-item'}
            >en</a>
        </div>
    </div>;
}

export function Button({language, buttonClickHandle}) {
    return <div className={'container-btn'}>
        <a href="#" onClick={buttonClickHandle} className={'button'}>{language === 'ru' ? 'подключить кошелек' : 'connect wallet'}</a>
    </div>;
}