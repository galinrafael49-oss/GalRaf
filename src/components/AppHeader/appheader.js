import React from 'react';
import {BurgerIcon, ListIcon, Logo, ProfileIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './header.module.css';

class AppHeader extends React.Component {
    render() {
        return (
            <header className={styles.header}>
                <div className={styles.nav_left}>
                    <div className={styles.nav}>
                        <BurgerIcon type="primary" />
                        <p className="text text_type_main-default">Конструктор</p>
                    </div>
                    <div className={styles.nav}>
                        <ListIcon type="secondary" />
                        <p className="text text_type_main-default text_color_inactive">Лента заказов</p>
                    </div>
                </div>

                <div className={styles.logo}>
                    <Logo />
                </div>

                <div className={styles.nav}>
                    <ProfileIcon type="secondary" />
                    <p className="text text_type_main-default text_color_inactive">Личный кабинет</p>
                </div>
            </header>
        );
    }
}

export default AppHeader;