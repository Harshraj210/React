import React, { useId } from "react";


function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectedCurrency = "usd",
  amountDisabled = false,
  currencyDisabled = false,
  className = "",
}) {
  const amountInputId = useId();

  return (
    <div className={`bg-white/60 p-4 rounded-lg text-sm flex shadow-md backdrop-blur-sm ${className}`}>
      <div className="w-1/2 flex flex-col">
        <label htmlFor={amountInputId} className="text-gray-600 mb-2">
          {label}
        </label>
        <input
          id={amountInputId}
          className="outline-none w-full bg-transparent py-1.5 text-lg"
          type="number" 
          placeholder="Amount"
          disabled={amountDisabled}
          value={amount}
          onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
        />
      </div>
      <div className="w-1/2 flex flex-col items-end text-right">
        <label className="text-gray-600 mb-2">Currency Type</label>
        <select
          className="rounded-lg px-2 py-2 bg-gray-100 cursor-pointer outline-none shadow-sm"
          value={selectedCurrency}
          
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisabled}
        >
          {currencyOptions.map((currency) => (
            
            <option key={currency} value={currency}>
              {currency.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;