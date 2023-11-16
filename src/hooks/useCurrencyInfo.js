import { useState, useEffect } from "react";

const useCurrencyInfo = (currency) => {
    const [currencyInfo, setCurrencyInfo] = useState({});

    useEffect(() => {
        const url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`;

        fetch(url)
            .then((res) => res.json())
            .then((res) => setCurrencyInfo(res[currency]));
    }, [currency]);

    return currencyInfo;
};

export default useCurrencyInfo;
