import { Fragment } from 'react';
import { Link } from 'react-router-dom';

const FooterContent = () => {
    return (
        <Fragment>
            <p>Время работы: пн-вс 09:00 - 21:00</p>
            <p className="unp">ТОВАРИЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ "АТЛАНТ ПЛЮС" БИН 220940045493 Алматы, Федорова, 21</p>
            <p>Акция действует на всей территории Казахстана</p>
            <p>
                Телефон: <a href="tel:+77008365223">+77008365223</a>
            </p>
            <p>
                E-mail: <a href="mailto:kctelekom2022@gmail.com">kctelekom2022@gmail.com</a>
            </p>
            <Link className="first" to="/politics">
                Политика конфиденциальности
            </Link>
            <Link to="/agreement">Пользовательское соглашение</Link>
            <Link to="/return-product">Договор возврата товара и денежных средств</Link>
        </Fragment>
    );
};

export default FooterContent;
