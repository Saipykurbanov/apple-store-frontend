export default function Tabs({tab, setTab}) {

    return (
         <div className="tabs">
            <div className={`tab_item ${tab === 'policy' ? 'active' : ''}`} onMouseDown={() => setTab('policy')}>Политика конфиденциальности</div>
            <div className={`tab_item ${tab === 'user' ? 'active' : ''}`} onMouseDown={() => setTab('user')}>Пользовательское соглашение</div>
            <div className={`tab_item ${tab === 'delivery' ? 'active' : ''}`} onMouseDown={() => setTab('delivery')}>Условия доставки</div>
        </div>
    )
}