import "./Footer.css"
import {AiFillGithub} from "react-icons/ai"

const Footer = () => {
    return <footer className='footer' style={{ backgroundImage: "url(/img/footer.png)" }}>
        <div className='redes'>
            <a href='https://www.facebook.com/albeiro.alexander.0611/'>
                <img src="/img/facebook.png" alt='Facebook' />
            </a>
            <a href='https://github.com/Ashelesss'>
                <AiFillGithub src={AiFillGithub} alt='GitHub' />
            </a>
            <a href='https://www.instagram.com/albeiroalexander/'>
                <img src="/img/instagram.png" alt='instagram' />
            </a>
        </div>
        <img src='/img/Logo.png' alt='org' />
        <strong>Desarrollado por Asheless</strong>
    </footer>
}

export default Footer