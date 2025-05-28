import headerLogo from "../../public/investment-calculator-logo.png"

function Header() {
    return (
      <div id="header">
            <img src={headerLogo} />
            <h1>Investment Calculator</h1>
      </div>
    );
}

export default Header;