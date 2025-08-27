import React, { useId } from "react";

function input() {
  label,
    onammountchange,
    oncurrencychange,
    (currencyoptions = []),
    (selectedcurrency = "usd"),
    (currencydisabled = false),
    (className = "");
  const ID = useId();
  return (
    <div className={`bg-white p-3rounded-lg text-sm flex ${className}`}>
      Input box
      <div className="w-1-2">
        <label htmlFor={ID} className="text-black/40 mb-2 inline-block">
          {label}
        </label>
        <input
          id={ID}
          text="number"
          className="outline-none w-full bg-transparent py-1.5 text-lg"
          placeholder="Amount"
          disabled={amountDisabled}
          value={amount}
          onChange={(e) =>
            onammountchange && onammountchange(Number(e.target.value))
          }
          // without number it takes string also
        ></input>
      </div>
      <div className="w-1/2 flex flex-col items-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectedcurrency}
          onChange={
            oncurrencychange && oncurrencychange(Number(e.target.value))
          }
          disabled={currencydisabled}
        >
          {currencyoptions.map((Currency) => (
            // no {} as wedon't need to return
            <option key={key} value={Currency}>
              {Currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default input;
