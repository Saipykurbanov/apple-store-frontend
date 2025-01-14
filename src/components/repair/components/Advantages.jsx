import React from 'react';
import AdvantagesItem from './AdvantagesItem';
import Image from 'next/image';

const Advantages = () => {
    return (
        <div className='advantages'>
            <div className="advantages_container">
                <AdvantagesItem 
                    title={'Любая техника от телефонов до ноутбуков'}
                    content={'Мы предлагаем ремонт различной техники: от смартфонов и планшетов до ноутбуков и другой электроники. Быстрое устранение неисправностей и профессиональный подход. Восстановим вашу технику в кратчайшие сроки!'}
                />
                <AdvantagesItem 
                    title={'Гарантия до 1 года на оригинальные запчасти'}
                    content={'Гарантия на все виды ремонта, при условии использования оригинальных запчастей. Только оригинальные детали обеспечат долгосрочную эксплуатацию и стабильную работу устройств.'}
                />
                <AdvantagesItem 
                    title={'Гарантия до 1 года на оригинальные запчасти'}
                    content={'Гарантия на все виды ремонта, при условии использования оригинальных запчастей. Только оригинальные детали обеспечат долгосрочную эксплуатацию и стабильную работу устройств.'}
                />
            </div>
            
            <Image 
                className='advantages_image' 
                src="/images/phone.svg"
                width={0} 
                height={0} 
                style={{ width: '40dvw', height: 'auto' }} 
                loading="lazy"
                placeholder="blur" 
                unoptimized={true} 
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCAAoADUDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDxSiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP//Z" 
                alt=""
            />
        </div>
    );
};

export default Advantages;