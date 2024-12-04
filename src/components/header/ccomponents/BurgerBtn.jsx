export default function BurgerBtn ({callback}) {

    return (
        <button  className="burger_btn" onClick={callback}>
            <img src="./icons/burger.svg" alt="" />
        </button>
    )
}