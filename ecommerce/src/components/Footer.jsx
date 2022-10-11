import './Footer.css'
function Footer(){
    return(
        <footer className='footer'>
            <label htmlFor="">Developer Contact</label>
            <label htmlFor="">Name: Matias Celasco</label>
            <div className="footer__img">
            <a href="https://www.linkedin.com/in/matias-celasco-b9bb14133/" target="_blank" rel="noreferrer" >
                <img className="footer__img--linkedIn" src={`${process.env.PUBLIC_URL}/images/linkedIn_icon.png`} alt="" />
            </a>
            <a href="https://github.com/matimg90/frontEnd_Projects" target="_blank" rel="noreferrer" >
                <img className="footer__img--git" src={`${process.env.PUBLIC_URL}/images/git_icon.png`} alt="" />
            </a>
            <a href="mailto: matiascelasco123@gmail.com" target="_blank" rel="noreferrer" >
                <img className="footer__img--gmail" src={`${process.env.PUBLIC_URL}/images/gmail-icon.png`} alt="" />
            </a>
            </div>

        </footer>
    )
}

export default Footer   