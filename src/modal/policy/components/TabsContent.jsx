import Delivery from "../tabs/Delivery";
import Main from "../tabs/Main";
import UserAgreement from "../tabs/UserAgreement";

export default function TabsContent({ tab }) {
    const components = {
        user: <UserAgreement />,
        delivery: <Delivery />,
    };

    return (
        <div className="tabs_content">
            {components[tab] || <Main />}
        </div>
    )
}