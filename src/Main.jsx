import React from 'react';
import Dev from './Dev';
import './Main.css';
import ax from './imgs/axload.png';
import fr from './imgs/freee.jpeg';
import ht from './imgs/hitachi.jpeg';
import tt from './imgs/TTDC.jpeg';
import itlink from './imgs/itlink.jpg';
import jp from './imgs/jp.png';
import skill from './imgs/skill.png';
import process from './imgs/process.png';

class Main extends React.Component{
    render(){
        const devList = [
            {image:'https://prog-8.com/images/html/advanced/html.png', lng:'ReactJs(PG) N2', nat:'インド国籍', loc:'東京'},
            {image:'https://prog-8.com/images/html/advanced/html.png', lng:'Java(SE) N1', nat:'台湾国籍', loc:'大阪'},
            {image:'https://prog-8.com/images/html/advanced/html.png', lng:'UI/UX N2', nat:'ロシア国籍', loc:'東京'},
            {image:'https://prog-8.com/images/html/advanced/html.png', lng:'PHP(SE) N1', nat:'バングラデシュ', loc:'神奈川'}
        ];
        return(
            <div className = 'main-body'>
                <div className='company'>
                    <h1>実績</h1>
                    <div className='company-list'>
                        <img src={ax}/>
                        <img src={fr}/>
                        <img src={ht}/>
                        <img src={tt}/>
                    </div>
                    <h2><span>50社以上の企業様に満足いただいています。</span></h2>
                </div>
                <div className = 'achieve'>
                    <h1>採用事例</h1>
                    <div className = 'engineers'>
                        {devList.map((DevItem) => {
                            return(
                                <Dev
                                  image = {DevItem.image}
                                  lng = {DevItem.lng}
                                  nat = {DevItem.nat}
                                  loc = {DevItem.loc}
                                />
                            );
                        })}
                    </div>
                </div>
                <div className = 'jpmatter'>
                    <h1>エンジニア採用の現状</h1>
                    <div class="matters">
                        <div class="m1">
                            <div class="m1-t">良い人材の<br/>採用難</div>
                        </div>
                        <div class="m2">
                            <div class="m2-t">未経験育成の<br/>コスト</div>
                        </div>
                    </div>
                    <div className="sr">
                        <div class="sup">外国籍エンジニアのご採用をサポートいたします！</div>
                        <div class="rewords">初期費用無料の完全成果報酬</div>
                    </div>
                </div>
                <div className = 'struc'>
                    <h1>エンジニア情報</h1>
                    <div class="itlink">
                        <img class="itl" src={itlink} />
                        <div class="com">
                            <p>700人以上の登録</p>
                            <h2>国内７：海外３</h2>
                        </div>
                    </div>
                    <div class="gra">
                        <div class="skill-box">
                            <div class="sk">
                                <div class="stitle">さまざまな開発言語</div>
                                <img src={skill}  />
                            </div>
                            <p class="text-contents">Javaをはじめとするさまざまな技術を用いた人材、上流から下流工程まで担当のできる人材からPGに特化した人材までご紹介可能です。
                            </p>
                        </div>
                        <div class="jp-box">
                            <div class="jp">
                                <div class="stitle">高い日本語能力</div>
                                <img src={jp}  />
                            </div>
                            <p class="text-contents">ご紹介させていただく人材のほとんどが、JLPT N3からN1の資格を取得しており、日系企業または、外資系日本法人出身であるため、日本語での高いコミュニケーションと日本のビジネス文化を理解しています。</p>
                        </div>
                    </div>
                </div>
                <div className = 'flow'>
                    <h1>紹介までの流れ</h1>
                    <img class="pros" src={process} />
                </div>
            </div>
        );
    }
}
export default Main;

//
//     <div class="engineers">
//         <div class="dev-icon">
//             <img src="https://prog-8.com/images/html/advanced/html.png">
//             <p>ReactJs(PG) N2
//             <br>インド国籍
//             <br>東京</p>
//         </div>
//         <div class="dev-icon">
//             <img src="https://prog-8.com/images/html/advanced/html.png">
//             <p>Java(SE) N1
//             <br>台湾国籍
//             <br>大阪</p>
//         </div>
//         <div class="dev-icon">
//             <img src="https://prog-8.com/images/html/advanced/html.png">
//             <p>UI/UX N2
//             <br>ロシア国籍
//             <br>東京</p>
//         </div>
//         <div class="dev-icon">
//             <img src="https://prog-8.com/images/html/advanced/html.png">
//             <p>PHP(SE) N1
//             <br>バングラデシュ
//             <br>神奈川</p>
//         </div>
//     </div>
//