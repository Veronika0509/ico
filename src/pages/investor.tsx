import React from 'react'
import '../css/investor.css'
import Background from "../components/assets/img/bg.jpg";

export function InvestorPage({language}) {
    return (
        <section className={'ip'} style={{backgroundImage: `url(${Background})`}}>
            <div className={'ip-content'}>
                <div className="ip-content-container">
                    <p className={'ip-address'}>{language === 'ru' ? 'Ваш адрес' : 'Your address'}: <span>0xjfn4...65hfg</span></p>
                    <div className="ip-info">
                        <div className="ip-info-one">
                            <h2 className={'ip-info-title-one'}>{language === 'ru' ? 'Заблокированые фета токены' : 'pheta token locked'}:</h2>
                            <p className={'ip-info-value-one'}>990</p>
                        </div>
                        <div className="ip-info-two">
                            <h2 className={'ip-info-title-two'}>{language === 'ru' ? 'Разблокированые фета токены' : 'pheta token unlocked'}:</h2>
                            <p className={'ip-info-value-two'}>10</p>
                        </div>
                    </div>
                    <div className={'ip-btns'}>
                        <a href="#" className={'ip-btn-one'}>{language === 'ru' ? 'Получить 10 токенов' : 'get 10 tokens'}</a>
                        <a href="#" className={'ip-btn-two'}>{language === 'ru' ? 'Купить еще' : 'buy more'}</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

























// export function InvestorPage({language}) {
//     return (
//         <div className={'container'}>
//             <div className={'content'}>
//                 <div className={'content-container'}>
//                     <p className={'locked'}>{language === 'ru' ? 'токены фета заблокированы: ' : 'pheta tokens locked:'}<span className={'locked-value'}>990</span></p>
//                     <p className={'unlocked'}>{language === 'ru' ? 'токены фета разблокированы: ' : 'pheta tokens unlocked:'}<span className={'unlocked-value'}>10</span></p>
//                     <a href="#" className={'content-button'}>{language === 'ru' ? 'получить 10 токенов' : 'get 10 tokens'}</a>
//                 </div>
//             </div>
//             <div className={'container'}>
//                 <div className="button-more-container">
//                     <a href="#" className="button-more">{language === 'ru' ? 'купить больше' : 'buy more'}</a>
//                 </div>
//             </div>
//         </div>
//     )
// }