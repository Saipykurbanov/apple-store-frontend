import './css/footer.scss';

export default function Footer() {

    return (
        <footer>
            <img src="/icons/logo.svg" alt="" className="logo" />

            <nav>
                <a href="">главная</a>
                <a href="">магазин</a>
                <a href="">ремонт</a>
            </nav>

            <p className="copyright">Copyright © 2024</p>
        </footer>
    )
}