import React from "react";

export function WalletAddress({language}) {
    return (
        <div className={'container-address'}>
            <p className={'address'}>{language === 'ru' ? 'Ваш адрес: ' : 'Your address: '}<span
                className={'address-value'}>0xjfn4...65hfg</span></p>
        </div>
    )
}
