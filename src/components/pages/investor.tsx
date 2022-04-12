import React from 'react'
import '../main.css'

export function Address({language}) {
    return <div className={'container'}>
        <p className={'address'}>{language === 'ru' ? 'Ваш адрес: ' : 'Your address: '}<span className={'address-value'}>0xjfn4...65hfg</span></p>
    </div>
}

export function Content({language}) {
    return <div className={'content'}>
        <div className={'content-container'}>
            <p className={'locked'}>{language === 'ru' ? 'токены фета заблокированы: ' : 'pheta tokens locked:'}<span className={'locked-value'}>990</span></p>
            <p className={'unlocked'}>{language === 'ru' ? 'токены фета разблокированы: ' : 'pheta tokens unlocked:'}<span className={'unlocked-value'}>10</span></p>
            <a href="#" className={'content-button'}>{language === 'ru' ? 'получить 10 токенов' : 'get 10 tokens'}</a>
        </div>
    </div>
}

export function ButtonMore({language}) {
    return (
        <div className={'container'}>
            <div className="button-more-container">
                <a href="#" className="button-more">{language === 'ru' ? 'купить больше' : 'buy more'}</a>
            </div>
        </div>
    )
}

export function LanguageVisitor({language, setLanguage}) {
    return <div className={'container'}>
        <div className="visitor-language">
            <a href="#"
               style={{fontWeight: language === 'ru' ? 700 : 400}}
               onClick={ () => setLanguage('ru')} className={'lang-item'}
            >ru</a>
            <a href="#"
               style={{fontWeight: language === 'ru' ? 400 : 700}}
               onClick={ () => setLanguage('en')} className={'lang-item'}
            >en</a>
        </div>
    </div>
}