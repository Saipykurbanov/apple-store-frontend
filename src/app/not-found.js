import Button from "@/components/button/Button";


export default function NotFound() {
    return (
        <div className="not_found">
            <div className="not_found_content">
                <h1>404</h1>
                <div className="description">
                    <h2>Страница не найдена</h2>
                    <p>Мы не можем найти страницу, которую вы ищете. Возможно, вы перешли по неверной ссылке или страница была удалена.</p>
                </div>
            </div>
            
            <a href="/" className="main_button">Вернуться назад</a>
        </div>
    );
}