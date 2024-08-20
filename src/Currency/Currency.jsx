import "../Currency/Currency.css";

export const Currency = () => {
  return (
    <>
      <div className="container">
        <div className="box"></div>
        <div className="data">
          <h2>Currency Converter</h2>
          <div className="input">
            <label htmlFor="" id="amount">
              Amount:
            </label>
            <input type="number" id="amount" />
          </div>
          <div className="input">
            <label htmlFor="fromCurrency">From Currency:</label>
            <select id="currency">
              <option value="USD">USD - United States Dollar</option>
              <option value="EUR">EUR - Euro</option>
              <option value="GBP">GBP - British Pound Sterling</option>
              <option value="JPY">JPY - Japaneese Yen</option>
              <option value="AUD">AUD - Australian Dollar</option>
              <option value="CAD">CAD - Canadian Dollar</option>
              <option value="CNY">CNY - Chineese Yuan</option>
              <option value="INR">INR - Indian Rupee </option>
              <option value="BRL">BRL - Brazillian Real</option>
              <option value="ZAR">ZAR - South African Rand</option>
            </select>
          </div>
          <div className="input">
            <label htmlFor="toCurrency">To Currency:</label>
            <select id="currency">
              <option value="USD">USD - United States Dollar</option>
              <option value="EUR">EUR - Euro</option>
              <option value="GBP">GBP - British Pound Sterling</option>
              <option value="JPY">JPY - Japaneese Yen</option>
              <option value="AUD">AUD - Australian Dollar</option>
              <option value="CAD">CAD - Canadian Dollar</option>
              <option value="CNY">CNY - Chineese Yuan</option>
              <option value="INR">INR - Indian Rupee </option>
              <option value="BRL">BRL - Brazillian Real</option>
              <option value="ZAR">ZAR - South African Rand</option>
            </select>
          </div>
          <div className="result">
            <p>1 INR is </p>
          </div>
        </div>
      </div>
    </>
  );
};
