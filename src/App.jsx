import useCurrencyInfo from "./hooks/useCurrencyInfo";
import { InputBox } from "./components";
import { useState } from "react";

function App() {
    const [from, setFrom] = useState("usd");
    const [to, setTo] = useState("inr");
    const [amount, setAmount] = useState(0);
    const [convertedAmount, setConvertedAmount] = useState(0);

    const currencyInfo = useCurrencyInfo(from);

    const options = Object.keys(currencyInfo);

    const swap = () => {
        setFrom(to);
        setTo(from);
        setAmount(0);
        setConvertedAmount(0);
    };

    const convert = () => {
        setConvertedAmount(amount * currencyInfo[to]);
    };

    return (
        <div className="w-full h-screen bg-cover bg-no-repeat bg-[url('https://images.unsplash.com/photo-1622760274068-a26adafc984f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
            <div className="w-full h-screen backdrop-blur-lg bg-green-900 bg-opacity-30 flex flex-col justify-center items-center">
                <h1 className="text-white text-5xl -translate-y-12">Currency Converter</h1>
                <div className="w-full max-w-md border border-gray-300 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert();
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={amount}
                                currencyOptions={options}
                                onCurrencyChange={(currency) =>
                                    setFrom(currency)
                                }
                                selectCurrency={from}
                                onAmountChange={(currency) =>
                                    setAmount(currency)
                                }
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                            >
                                Swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount={convertedAmount}
                                currencyOptions={options}
                                onCurrencyChange={(currency) => setTo(currency)}
                                selectCurrency={to}
                                onAmountChange={(currency) =>
                                    setAmount(currency)
                                }
                                amountDisable
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
                        >
                            Convert {from.toUpperCase()} to {to.toUpperCase()}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default App;
