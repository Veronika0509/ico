import React from 'react'
import '../main.css'


export function InvestorPage({language}) {
    return (
        <div>
            <div className={'container'}>
                <p className={'address'}>{language === 'ru' ? 'Ваш адрес: ' : 'Your address: '}<span className={'address-value'}>0xjfn4...65hfg</span></p>
            </div>
            <div className={'content'}>
                <div className={'content-container'}>
                    <p className={'locked'}>{language === 'ru' ? 'токены фета заблокированы: ' : 'pheta tokens locked:'}<span className={'locked-value'}>990</span></p>
                    <p className={'unlocked'}>{language === 'ru' ? 'токены фета разблокированы: ' : 'pheta tokens unlocked:'}<span className={'unlocked-value'}>10</span></p>
                    <a href="#" className={'content-button'}>{language === 'ru' ? 'получить 10 токенов' : 'get 10 tokens'}</a>
                </div>
            </div>
            <div className={'container'}>
                <div className="button-more-container">
                    <a href="#" className="button-more">{language === 'ru' ? 'купить больше' : 'buy more'}</a>
                </div>
            </div>
        </div>
    )
}