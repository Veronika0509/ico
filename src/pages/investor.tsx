import React from 'react'
import '../css/investor.css'
import Background from "../components/assets/img/bg.jpg";
import {useWeb3React} from "@web3-react/core";
import {ERC20ABI} from "../abi/ERC20ABI";
import {Contract} from "@ethersproject/contracts";
import {parseEther} from "@ethersproject/units";
import {Web3Provider} from "@ethersproject/providers";


export function InvestorPage({walletAddress, language}) {
    const { active, account, library, connector, activate, setError, deactivate } = useWeb3React<Web3Provider>()

    const buyMoreHandler = async () => {
        console.log(account)
        console.log(library)
        const erc20 = new Contract('0xe9e7cea3dedca5984780bafc599bd69add087d56', ERC20ABI, library.getSigner())//, library.getSigner())
        const balance = await erc20.balanceOf('0x8178026B891fae0D14afbaD8a437C8B0aC5C63F5').catch('error', console.error)
        console.log(balance)
    }


    return (
        <section className={'ip'} style={{backgroundImage: `url(${Background})`}}>
            <div className={'ip-content'}>
                <div className="ip-content-container">
                    <p className={'ip-address'}>{language === 'ru' ? 'Ваш адрес' : 'Your address'}: <span>{walletAddress}</span></p>
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
                        <a href="#" className={'ip-btn-two'} onClick={buyMoreHandler}>{language === 'ru' ? 'Купить еще' : 'buy more'}</a>
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
