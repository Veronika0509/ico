import React from "react";
import '../css/confirm.css'

import backArrow from '../components/assets/img/arrow-left.png'
import Background from "../components/assets/img/bg.jpg";

export function Confirm({language}) {
    return (
        <section className={'c'} style={{backgroundImage: `url(${Background})`}}>
            <a className="c-back">
                <img className={'c-back-img'} src={backArrow} alt="Back arrow"/>
                <p className={'c-back-text'}>{language === 'ru' ? 'Назад' : 'Back'}</p>
            </a>
            <div className={'c-content'}>
                <div className={'c-content-container'}>
                    <p className={'c-address'}>{language === 'ru' ? 'Ваш адрес' : 'Your address'}: <span>0xjfn4...65hfg</span></p>
                    <div className={'c-buy-container'}>
                        <h2 className={'c-buy-title'}>{language === 'ru' ? 'купить фета токены' : 'buy pheta tokens'}</h2>
                        <p className={'c-buy-form-amount-desc'}>{language === 'ru' ? 'Имеется' : 'Available'}: <span>100</span> BUSD</p>
                        <div className={'c-buy-form'}>
                            <div className={'c-buy-form-amount'}>
                                <input className={'c-buy-form-amount-input'} type="number" placeholder={language === 'ru' ? 'Кол-во' : 'Amount'} required/>
                            </div>
                            <div className="c-buy-form-texts">
                                <p className={'c-buy-form-texts-one'}><span>0</span> pheta</p>
                                <p className={'c-buy-form-texts-two'}>1 usd = 0.11 pheta</p>
                            </div>
                        </div>
                        <div className="c-btn">
                            <a href="#" className={'c-btn-link'}>{language === 'ru' ? 'Купить' : 'Buy'}</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}