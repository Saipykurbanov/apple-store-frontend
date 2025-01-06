'use client'

import useEnter from '@/hooks/useEnter';
import ContactContent from './components/ContactContent';
import Map from './components/Map';
import './css/contacts.scss';

export default function Contacts () {

    const [blockRef] = useEnter('contacts')

    return (
        <div className="contacts container" id='contacts' ref={blockRef}>
            <ContactContent />

            <Map />
        </div>
    );
}