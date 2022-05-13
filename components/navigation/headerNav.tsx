import Link from "next/link";

const HeaderNav = () => {
    return (
      <div className="navigation">
        <input
          type="checkbox"
          className="navigation__checkbox"
          id="navi-toggle"
        />
        <label htmlFor="navi-toggle" className="navigation__button">
          <span className="navigation__icon">&nbsp;</span>
        </label>
        <div className="navigation__background">&nbsp;</div>
        <nav className="navigation__nav">
          <ul className="navigation__list">
            <li className="navigation__item">
              <Link href="/">
                <a className="navigation__link">Home</a>
              </Link>
            </li>
            <li className="navigation__item">
              <Link href="/blog">
                <a className="navigation__link">Blog</a>
              </Link>
            </li>
            <li className="navigation__item">
              <Link href="/contact">
                <a className="navigation__link">Contact</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
}

export default HeaderNav;