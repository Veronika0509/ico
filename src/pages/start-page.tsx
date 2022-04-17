import React from 'react'
import '../css/main.css'

import Background from '../components/assets/img/bg.jpg'
import metamaskIcon from '../components/assets/img/metamask-icon.png'
import coinbaseIcon from '../components/assets/img/coinbase-icon.png'
import walletConnectIcon from '../components/assets/img/wallet-connect-icon.png'
import phantomIcon from '../components/assets/img/phantom-icon.png'
import {UnsupportedChainIdError, useWeb3React} from "@web3-react/core";
import {UserRejectedRequestError} from "@web3-react/injected-connector";
import Web3 from "web3";
import {bscChainId, injected} from "../index";

export function Preloader({language}) {
    return (
        <div className={'preloader'}>
            <h1>{language === 'ru' ? 'загрузка' : 'loading'}...</h1>
        </div>
    )
}

export function WalletConnect({language, onConnected}) {
    const { active, account, library, connector, activate, setError, deactivate } = useWeb3React()

    if (active && typeof account === 'string') {
        onConnected(account)
    }

    const changeNetwork = async () => {
        if (window['ethereum']) {
                await window['ethereum'].request({
                    method: 'wallet_switchEthereumChain',
                    params: [{ chainId: Web3.utils.toHex(bscChainId) }],
                })
        } else {
            console.error('No ethereum');
        }
    }

    const clickHandler = async () => {
        activate(injected,async (error) => {
            if (error instanceof UnsupportedChainIdError) {
                await changeNetwork()
            }
            else if (error instanceof UserRejectedRequestError) {
                // ignore user rejected error
            } else {
                setError(error)
            }
        }, false)
    }

    return (
        <section className={'wallet-connect'} style={{backgroundImage: `url(${Background})`}}>
            <div className={'container'}>
                <div className="w-c-content">
                    <div className={'w-c-content-container'}>
                        <h2 className={'w-c-content-title'}>{language === 'ru' ? 'Подключить кошелек' : 'Connect your wallet'}</h2>
                        <ul className="w-c-content-list">
                            <li className="w-c-content-list-item metamask-item" onClick={clickHandler}>
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
