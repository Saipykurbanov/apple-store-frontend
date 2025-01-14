import Api from "@/utils/Api";

export default function ItemOption ({ icon, description }) {

    return (
        <div className="item_option">
            <div className="icon_container"><img src={`${Api.url}images/products/${icon}`} alt="" /></div>

            <p className="description">{description}</p>
        </div>
    )
}