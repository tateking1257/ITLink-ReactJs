import React from 'react';
import './Header.css';

class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {isModalOpen:false};
        this.state = {isSubmitted:false};
        // this.state = {email:''};
        // this.state = {hasEmailError:false};
    }
    handleClickLesson(){
        this.setState({isModalOpen:true});
    }
    handleClickClose(){
        this.setState({isModalOpen:false});
    }
    
    handleSubmit(){
        this.setState({isSubmitted:true});
    }
    // handleEmailChange(event){
    //     const inputValue = event.target.value;
    //     const isEmpty = inputValue ==='';
    //     this.setState({
    //         email:inputValue,
    //         hasEmailError:isEmpty
    //     });
    // }
    render(){
        // let emailErrorText;
        // if (this.state.hasEmailError){
        //     emailErrorText = (
        //         <p>Emailを入力してください</p>
        //     );
        // }

        let contactForm;
        if(this.state.isSubmitted){
            contactForm = (
                <div className='sub-comp'>
                    <h1>送信完了</h1>
                    <p>お問合せありがとうございます。<br/>営業日2日以内に返送いたします。</p>
                    <button
                      className='close'
                      onClick={()=>{this.handleClickClose()}}
                    >もどる</button>
                </div>
            );
        }   else{
            contactForm = (
                <div className = 'terms'>
                    <form onSubmit={()=>{this.handleSubmit()}}>
                        <p>会社名</p>
                        <input type="text" size="12" className="oto" />
                        <p>担当者名</p>
                        <input type="text" size="12" className="oto" />
                        <p>メールアドレス</p>
                        <input 
                          type="text"
                          value={this.state.email}
                        //   onChange = {(event)=>{this.handleEmailChange(event)}}
                        />
                        {/* {emailErrorText} */}
                        <p>お問合せ内容</p>
                        <textarea />
                        <p></p>
                        <input
                          type ='submit'
                          value = '送信'
                        />
                        <p></p>
                        <button
                        className='close'
                        onClick={()=>{this.handleClickClose()}}
                        >もどる</button>
                    </form>
                </div>
            );

        }

        let modal;
        if(this.state.isModalOpen){
            modal = (
                <div className = 'iform'>
                    {contactForm}
                </div>
            );
        }
        return(
            <div className = 'header'>
                <div className='logo'>
                    <p>株式会社LinkStaff</p>
                    <h1>IT-LINK</h1>
                </div>
                <div class='nav'>
                    <button 
                    className='inqu'
                    onClick={()=>{this.handleClickLesson()}}
                    >お問合せ</button>
                    <div className='tel'>03-3401-8901</div>
                </div>
                {modal}
            </div>
        );
    }
}
export default Header;