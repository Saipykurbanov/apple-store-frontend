import PolicyLink from './components/PolicyLink';
import './css/footer.scss';

export default function Footer() {

    return (
        <footer>
            <div className="logo"><span></span>ifix<span>Store.</span></div>
            {/* <img src="/icons/logo.svg" alt="" className="logo" /> */}

            <nav>
                <a href="#main">главная</a>
                <a href="#store">магазин</a>
                <a href="#repair">ремонт</a>
            </nav>

           <PolicyLink />

            <p className="copyright">© 2025 ifixStore. <br></br> Все права защищены.</p>
        </footer>
    )
}