import React from 'react'
import '../main.css'

export function AdminTable({language}) {
    return <div className={'container'}>
        <div className="table">
            <div className="line-one line">
                <h3 className={'line-title'}>supply</h3>
                <h3 className={'line-title'}>invested</h3>
                <h3 className={'line-title'}>unlocked</h3>
                <h3 className={'line-title'}>released</h3>
                <h3 className={'line-title'}>left</h3>
            </div>
            <div className="line-two line">
                <h3 className={'line-title line-title-two'}>seed round</h3>
                <p className={'line-value'}>100000</p>
                <p className={'line-value'}>45678</p>
                <p className={'line-value'}>1234</p>
                <p className={'line-value'}>1234</p>
                <p className={'line-value'}>1234</p>
                <a href="#" className={'line-btn'}>withdraw</a>
            </div>
            <div className="line-three line">
                <h3 className={'line-title line-title-three'}>private round</h3>
                <p className={'line-value'}>100000</p>
                <p className={'line-value'}>45678</p>
                <p className={'line-value'}>1234</p>
                <p className={'line-value'}>1234</p>
                <p className={'line-value'}>1234</p>
                <a href="#" className={'line-btn'}>withdraw</a>
            </div>
        </div>
    </div>
}
export function Title({language}) {
    return <div className={'container-admin'}>
        <h2 className={'admin-title'}>{language === 'ru' ? 'Зарегистрировать Новые инвестиции' : 'Registrate New investment'}</h2>
    </div>
}
export function AdminContent({language}) {
    return <div className={'container-admin-content'}>
        <div className="select-one-container">
            <div className="select-one">
                <select>
                    <option>{language === 'ru' ? 'сид раунд' : 'seed round'}</option>
                    <option>{language === 'ru' ? 'сид раунд 2' : 'seed round 2'}</option>
                </select>
            </div>
            <div>
                <p className={'select-one-available'}>{language === 'ru' ? 'Имеется в наличии' : 'available'}: <span className={'available-span'}>100000</span>  {language === 'ru' ? 'Фета токены' : 'pheta tokens'}</p>
                <p className={'select-one-course'}>1 USD = 0.11 PHETA</p>
            </div>
        </div>
        <div className="select-two-container">
            <form action="#" className={'form'}>
                <input type="text" className={'address-input'} placeholder={language === 'ru' ? 'Адрес' : 'Address'} required/>
                <input type="number" className={'amount-input'} placeholder={language === 'ru' ? 'Кол-во' : 'Amount'} required/>
                <div className="select-two">
                    <select>
                        <option>usd</option>
                        <option>pheta</option>
                    </select>
                </div>
            </form>
        </div>
    </div>
}
export function Amount({language}) {
    return <div className={'container-admin-content'}>
        <p className={'amount'}>{language === 'ru' ? 'кол-во фета токенов' : 'pheta tokens amount'}: <span>10000</span></p>
    </div>
}
