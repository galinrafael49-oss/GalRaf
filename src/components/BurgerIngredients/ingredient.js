import { useState, useMemo } from "react";
import {
    CurrencyIcon,
    Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./ingredients.module.css";
import ingredients from "./data";

const TABS = [
    { value: "bun", label: "Булки" },
    { value: "sauce", label: "Соусы" },
    { value: "main", label: "Начинки" },
];

function Ingredient() {
    const [current, setCurrent] = useState("bun");

    const counters = useMemo(() => {
        const map = {};
        ingredients.forEach((item, index) => {
            if (index % 3 === 0) {
                map[item._id] = 1;
            }
        });
        return map;
    }, []);

    return (
        <section className={styles.section}>
            {/* вкладки — вне скролла */}
            <div className={styles.tabs}>
                {TABS.map((tab) => (
                    <button
                        key={tab.value}
                        className={
                            current === tab.value
                                ? `${styles.tab} ${styles.tabActive}`
                                : styles.tab
                        }
                        onClick={() => setCurrent(tab.value)}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* скроллится только это */}
            <div className={styles.scroll}>
                {TABS.map((tab) => {
                    const items = ingredients.filter((item) => item.type === tab.value);

                    return (
                        <div key={tab.value} className={styles.group}>
                            <h2 className="text text_type_main-medium">{tab.label}</h2>

                            <ul className={styles.list}>
                                {items.map((item) => (
                                    <li key={item._id} className={styles.card}>
                                        <div className={styles.imageWrapper}>
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className={styles.image}
                                            />
                                            {counters[item._id] && (
                                                <Counter
                                                    count={counters[item._id]}
                                                    size="default"
                                                    extraClass="m-1"
                                                />
                                            )}
                                        </div>

                                        <div className={styles.price}>
                                            <p className="text text_type_digits-default">
                                                {item.price}
                                            </p>
                                            <CurrencyIcon type="primary" />
                                        </div>

                                        <p className="text text_type_main-default">{item.name}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

export default Ingredient;