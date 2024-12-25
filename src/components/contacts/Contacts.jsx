import ContactContent from './components/ContactContent';
import Map from './components/Map';
import './css/contacts.scss';

export default function Contacts () {

    return (
        <div className="contacts container" id='contacts'>
            <ContactContent />

            <Map />
        </div>
    );
}