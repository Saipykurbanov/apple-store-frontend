'use client'
import useHeader from './hooks/useHeader';
import MobileNav from './ccomponents/MobileNav';
import DescNav from './ccomponents/DescNav';
import './css/header.scss';

export default function Header () {
    const header = useHeader()

    return (
        <header className={`${header.open ? '' : 'close'}`}>
            <DescNav header={header}/>

            <MobileNav header={header}/>
        </header>
    );
}