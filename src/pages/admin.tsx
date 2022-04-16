import React from 'react'
import '../css/admin.css'
import {BlockchainService} from "../blockchain-service";
import {Phase} from "../utils";

import Background from '../components/assets/img/bg.jpg'


export function AdminPage() {
    return (
        <section className={'ap-container'} style={{backgroundImage: `url(${Background})`}}>
            <div className={'ap-content'}>
                <div className={'ap-content-container'}>
                    <div className={'ap-table'}>
                        <div className={'ap-table-titles'}>
                            <h6 className={'ap-table-title'}>supply</h6>
                            <h6 className={'ap-table-title'}>invested</h6>
                            <h6 className={'ap-table-title'}>unlocked</h6>
                            <h6 className={'ap-table-title'}>released</h6>
                            <h6 className={'ap-table-title'}>left</h6>
                        </div>
                        <div className={'ap-table-line'}>
                            <h3 className={'ap-table-line-title ap-table-line-title-first'}>seed round</h3>
                            <p className={'ap-table-line-value'}>100000</p>
                            <p className={'ap-table-line-value'}>45678</p>
                            <p className={'ap-table-line-value'}>1234</p>
                            <p className={'ap-table-line-value'}>1234</p>
                            <p className={'ap-table-line-value'}>1234</p>
                            <a href="#" className={'ap-table-line-link'}>withdrow</a>
                        </div>
                        <div className={'ap-table-line'}>
                            <h3 className={'ap-table-line-title ap-table-line-title-second'}>private round</h3>
                            <p className={'ap-table-line-value'}>100000</p>
                            <p className={'ap-table-line-value'}>45678</p>
                            <p className={'ap-table-line-value'}>1234</p>
                            <p className={'ap-table-line-value'}>1234</p>
                            <p className={'ap-table-line-value'}>1234</p>
                            <a href="#" className={'ap-table-line-link'}>withdrow</a>
                        </div>
                    </div>
                    <div className={'ap-form'}>
                        <h2 className={'ap-form-title'}>Register New investment</h2>
                        <div className={'inputs-one'}>
                            <p className={'inputs-one-input-one-desc'}>Choose round</p>
                            <div className={'input-one'}>
                                <div className={'select-one'}>
                                    <select>
                                        <option>seed round</option>
                                        <option>seed round 2</option>
                                    </select>
                                </div>
                                <div className={'select-one-texts'}>
                                    <p className={'select-one-texts-one'}>available: <span>100000</span> pheta tokens</p>
                                    <p className={'select-one-texts-two'}>1 usd = 0.11 pheta</p>
                                </div>
                            </div>
                        </div>
                        <div className={'form-two'}>
                            <div className="form-two-input-one">
                                <p className={'form-two-input-one-desc inputs-one-input-one-desc'}>Address</p>
                                <input type="text" className={'form-two-input-one-input'} placeholder={'Address'} required/>
                            </div>
                            <div className="form-two-input-two">
                                <p className={'form-two-input-two-desc inputs-one-input-one-desc'}>Amount</p>
                                <input type="number" className={'form-two-input-two-input'} placeholder={'Amount'} required/>
                            </div>
                            <div className="form-two-input-three">
                                <p className={'form-two-input-three-desc inputs-one-input-one-desc'}>Token</p>
                                <div className={'select-two'}>
                                    <select>
                                        <option>busd</option>
                                        <option>pheta</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <p className={'select-one-texts-form-two'}>available: <span>100000</span> pheta tokens</p>
                    </div>
                    <a href="#" className={'ap-btn'}>register</a>
                </div>
            </div>
        </section>
    )
}

















// export function TableWithdrawal() {
//     return (
//         <div className={'container'}>
//             <div className="table">
//                 <div className="line-one line">
//                     <h3 className={'line-title'}>supply</h3>
//                     <h3 className={'line-title'}>invested</h3>
//                     <h3 className={'line-title'}>unlocked</h3>
//                     <h3 className={'line-title'}>released</h3>
//                     <h3 className={'line-title'}>left</h3>
//                 </div>
//                 <div className="line-two line">
//                     <h3 className={'line-title line-title-two'}>seed round</h3>
//                     <p className={'line-value'}>100000</p>
//                     <p className={'line-value'}>45678</p>
//                     <p className={'line-value'}>1234</p>
//                     <p className={'line-value'}>1234</p>
//                     <p className={'line-value'}>1234</p>
//                     <a href="#" className={'line-btn'}>withdraw</a>
//                 </div>
//                 <div className="line-three line">
//                     <h3 className={'line-title line-title-three'}>private round</h3>
//                     <p className={'line-value'}>100000</p>
//                     <p className={'line-value'}>45678</p>
//                     <p className={'line-value'}>1234</p>
//                     <p className={'line-value'}>1234</p>
//                     <p className={'line-value'}>1234</p>
//                     <a href="#" className={'line-btn'}>withdraw</a>
//                 </div>
//             </div>
//         </div>
//     )
// }
// export function AdminPage() {
//     return (
//         <div>
//             <div className={'container-admin'}>
//                 <h2 className={'admin-title'}>Registrate New investment</h2>
//             </div>
//             <div className={'container-admin-content'}>
//                 <div className="select-one-container">
//                     <div className="select-one">
//                         <select>
//                             <option>seed round</option>
//                             <option>seed round 2</option>
//                         </select>
//                     </div>
//                     <div>
//                         <p className={'select-one-available'}>available:<span className={'available-span'}> 100000 </span>pheta tokens</p>
//                         <p className={'select-one-course'}>1 USD = 0.11 PHETA</p>
//                     </div>
//                 </div>
//                 <div className="select-two-container">
//                     <form action="#" className={'form'}>
//                         <input type="text" className={'address-input'} placeholder={'Address'} required/>
//                         <input type="number" className={'amount-input amount-input-first'} placeholder={'Amount'} required/>
//                         <div className="select-two">
//                             <select>
//                                 <option>usd</option>
//                                 <option>pheta</option>
//                             </select>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//             <div className={'container-admin-content'}>
//                 <p className={'amount'}>pheta tokens amount:<span>10000</span></p>
//             </div>
//             <div className={'container-admin-content'}>
//                 <a href="#" className="admin-btn"
//                    onClick={() => BlockchainService.registerPurchase(Phase.SEED, '', 1)}>
//                     register
//                 </a>
//             </div>
//         </div>
//     )
// }