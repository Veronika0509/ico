import React from 'react'
import '../css/main.css'

import Background from '../components/assets/img/bg.jpg'
import metamaskIcon from '../components/assets/img/metamask-icon.png'
import coinbaseIcon from '../components/assets/img/coinbase-icon.png'
import walletConnectIcon from '../components/assets/img/wallet-connect-icon.png'
import phantomIcon from '../components/assets/img/phantom-icon.png'

export function Preloader({language}) {
    return (
        <div className={'preloader'}>
            <h1>{language === 'ru' ? 'загрузка' : 'loading'}...</h1>
        </div>
    )
}

export function WalletConnect({language, connectWallet}) {
    function all() {
        connectWallet()
    }
    return (
        <section className={'wallet-connect'} style={{backgroundImage: `url(${Background})`}}>
            <div className={'container'}>
                <div className="w-c-content">
                    <div className={'w-c-content-container'}>
                        <h2 className={'w-c-content-title'}>{language === 'ru' ? 'Подключить кошелек' : 'Connect your wallet'}</h2>
                        <ul className="w-c-content-list">
                            <li className="w-c-content-list-item metamask-item" onClick={all}>
                                <img className={'w-c-content-list-item-img'} src={metamaskIcon} alt="Metamask icon"/>
                                <a href="#" className={'w-c-content-list-item-link'}>Metamask</a>
                            </li>
                            <li className="w-c-content-list-item coinbase-item">
                                <div className={'w-c-content-list-item-container'}>
                                    <img className={'w-c-content-list-item-img'} src={coinbaseIcon} alt="Coinbase icon"/>
                                    <a href="#" className={'w-c-content-list-item-link not-working-text'}>Coinbase</a>
                                </div>
                                <div className={'not-working-div'}><p className={'not-working-div-text'}>{language === 'ru' ? 'в разработке' : 'coming soon'}</p></div>
                            </li>
                            <li className="w-c-content-list-item wallet-connect-item">
                                <div className={'w-c-content-list-item-container'}>
                                    <img className={'w-c-content-list-item-img'} src={walletConnectIcon} alt="Coinbase icon"/>
                                    <a href="#" className={'w-c-content-list-item-link not-working-text'}>Walletconnect</a>
                                </div>
                                <div className={'not-working-div'}><p className={'not-working-div-text'}>{language === 'ru' ? 'в разработке' : 'coming soon'}</p></div>
                            </li>
                            <li className="w-c-content-list-item phantom-item">
                                <div className={'w-c-content-list-item-container'}>
                                    <img className={'w-c-content-list-item-img'} src={phantomIcon} alt="Coinbase icon"/>
                                    <a href="#" className={'w-c-content-list-item-link not-working-text'}>Phantom</a>
                                </div>
                                <div className={'not-working-div'}><p className={'not-working-div-text'}>{language === 'ru' ? 'в разработке' : 'coming soon'}</p></div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}













// export function Language({language, setLanguage}) {
//     return (
//         <div className={'container'}>
//             <div className={'lang-container'}>
//                 <a href="#"
//                    style={{fontWeight: language === 'ru' ? 700 : 400}}
//                    onClick={() => setLanguage('ru')} className={'lang-item'}
//                 >ru</a>
//                 <a href="#"
//                    style={{fontWeight: language === 'ru' ? 400 : 700}}
//                    onClick={() => setLanguage('en')} className={'lang-item'}
//                 >en</a>
//             </div>
//         </div>
//     )
// }
//
// export function ConnectWalletButton({language, onClick}) {
//     function all() {
//         onClick()
//     }
//     return <div className={'container-btn'}>
//         <a href="#" onClick={all} className={'button'}>{language === 'ru' ? 'подключить кошелек' : 'connect wallet'}</a>
//     </div>;
// }