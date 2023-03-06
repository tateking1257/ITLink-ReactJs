import React from 'react';
import Header from './Header';
import './Footer.css'
import ls from "./imgs/linkstaff.jpg"

class Footer extends React.Component{
    render(){
        return(
            <div className="footer">
                <h1>ご連絡、ご相談お待ちしております。</h1>
                <button 
                className='inqu2'
                onClick={()=>{this.handleClickLesson()}}
                >お問合せ</button>

                {/* <a href="#" class="btn inqu2">お問合せ</a> */}
                <div className="contact">
                    <h2>03-3401-8901</h2>
                    <p>グローバルソリューション事業部</p>
                </div>
                <div className="ls">
                    <div className="iunf">
                        <p>株式会社リンクスタッフ
                        <br/>東京都港区赤坂赤坂第一ビル 5F
                        <br/>グローバルソリューション事業部
                        <br/>TEL :03-3401-8901</p>
                    </div>
                    <a href="https://www.linkstaff.co.jp/" className="lsm">
                        <img width="700" src={ls} />
                    </a>
                    <p>© 1996–2023 Linkstaff Co.,Ltd. All rights reserved.</p>
                </div>
                {/* <div className="tel">
                    <h2><span class="fa fa-phone"></span>03-3401-8901</h2>
                    <p>グローバルソリューション事業部</p>
                </div>
                <div className="ls">
                    <div className="logo"></div>
                    <div className="inf">
                        <p>株式会社リンクスタッフ
                        <br/>東京都港区赤坂赤坂第一ビル 5F
                        <br/>グローバルソリューション事業部
                        <br/>TEL :03-3401-8901</p>
                    </div>
                    <a href="https://www.linkstaff.co.jp/" class="lsm">
                        <img width="350" src="./imgs/linkstaff.jpg" />
                    </a>
                </div> */}
            </div>
        );
    }
}
export default Footer;