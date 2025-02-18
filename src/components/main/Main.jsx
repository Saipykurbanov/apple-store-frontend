import ScrollDown from './components/ScrollDown';
import ContactUs from './components/ContactUs';
import MainTitle from './components/MainTitle';
import './css/main.scss';
import Image from 'next/image';

export default function Main () {

    return (
        <div className='main' id='main'>
            <div className="content">
                <div className="logo"><span></span>ifix<span>Store.</span></div>

                <div className="description">
                   <MainTitle />

                    <p className='description_item'>Ремонт любой техники — от смартфонов до бытовой электроники.</p>
                    <p className='description_item'>Мы также специализируемся на продаже мобильных телефонов Apple, предлагая актуальные модели по выгодным ценам.</p>

                    <div className="adress">
                        <Image 
                            src="./icons/map.svg"
                            width={0} 
                            height={0} 
                            style={{ width: '12px', height: 'auto' }} 
                            placeholder="blur" 
                            unoptimized={true} 
                            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCAAoADUDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDxSiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP//Z" 
                            loading="lazy"
                            alt=""
                        />
                        <p>Респ. Крым, г. Симферополь, ул. Козлова 45а</p>
                    </div>

                    <ContactUs />
                    
                    <ScrollDown />
                </div>

            </div>
        </div>
    );
}