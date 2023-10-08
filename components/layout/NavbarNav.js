import Link from "next/link"

export default function NavbarNav() {

    return (
        <>

            <ul className="navbar_nav">
                <li className="menu-item nav-item menu-item-has-children dropdown mennucolumn_full-six">
                    <Link href="/" className="nav_link">
                        <span className="text-link"> Partner with US </span>
                    </Link>
                    <ul className="sub_menu">
                        <li className="menu-item nav-item">
                            <Link href="/" className="nav_link">
                                <span className="text-link">
                                    Policyholder
                                </span>
                            </Link>
                        </li>
                        <li className="menu-item nav-item">
                            <Link href="/" className="nav_link">
                                <span className="text-link">
                                    Insurer
                                </span>
                            </Link>
                        </li>
                        <li className="menu-item nav-item">
                            <Link href="/" className="nav_link">
                                <span className="text-link">
                                    Distributors
                                </span>
                            </Link>
                        </li>
                        <li className="menu-item nav-item">
                            <Link href="/" className="nav_link">
                                <span className="text-link">
                                    Lenders
                                </span>
                            </Link>
                        </li>
                        <li className="menu-item nav-item">
                            <Link href="/" className="nav_link">
                                <span className="text-link">
                                    Investors
                                </span>
                            </Link>
                        </li>
                    </ul>
                    <div className="dropdown-btn"><span className="fa fa-angle-down" /></div>
                </li>
                <li className="menu-item menu-item-has-children dropdown  nav-item">
                    <Link href="#" className="nav_link">
                        <span className="text-link">
                            Solutions
                        </span>
                    </Link>
                    <ul className="sub_menu">
                        <li className="menu-item nav-item">
                            <Link href="/" className="nav_link">
                                <span className="text-link">
                                    Content & Delivery Stack
                                </span>
                            </Link>
                        </li>
                        <li className="menu-item nav-item">
                            <Link href="/" className="nav_link">
                                <span className="text-link">
                                    Policy Loan Marketplace
                                </span>
                            </Link>
                        </li>
                        <li className="menu-item nav-item">
                            <Link href="/" className="nav_link">
                                <span className="text-link">
                                    Policy Assignment Platform
                                </span>
                            </Link>
                        </li>
                    </ul>
                    <div className="dropdown-btn"><span className="fa fa-angle-down" /></div>
                </li>
                <li className="menu-item  menu-item-has-children dropdown  mennucolumn_ nav-item">
                    <Link href="#" className="nav_link">
                        <span className="text-link">
                            Company
                        </span>
                    </Link>
                    <ul className="sub_menu">
                        <li className="menu-item nav-item">
                            <Link href="/" className="nav_link">
                                <span className="text-link"> About
                                    Us
                                </span>
                            </Link>
                        </li>
                        <li className="menu-item   nav-item">
                            <Link href="/" className="nav_link">
                                <span className="text-link">
                                    Team
                                </span>
                            </Link>
                        </li>
                        <li className="menu-item   nav-item">
                            <Link href="/team-detail" className="nav_link">
                                <span className="text-link"> Careers
                                </span>
                            </Link>
                        </li>
                    </ul>
                    <div className="dropdown-btn"><span className="fa fa-angle-down" /></div>
                </li>
                {/* <li className="menu-item  menu-item-has-children dropdown  mennucolumn_  nav-item">
                    <Link href="#" className="nav_link">
                        <span className="text-link">
                            Portfolio
                        </span>
                    </Link>
                    <ul className="sub_menu">
                        <li className="menu-item nav-item">
                            <Link href="/portfolio-style-1" className="nav_link">
                                <span className="text-link">
                                    Portfolio Style 1
                                </span>
                            </Link>
                        </li>
                        <li className="menu-item nav-item">
                            <Link href="/portfolio-style-2" className="nav_link">
                                <span className="text-link">
                                    Portfolio Style 2
                                </span>
                            </Link>
                        </li>
                        <li className="menu-item nav-item">
                            <Link href="/portfolio-details" className="nav_link">
                                <span className="text-link">
                                    Portfolio Details
                                </span>
                            </Link>
                        </li>
                    </ul>
                    <div className="dropdown-btn"><span className="fa fa-angle-down" /></div>
                </li> */}
                <li className="menu-item  menu-item-has-children dropdown nav-item">
                    <Link href="/blog" className="nav_link">
                        <span className="text-link">
                            Resources
                        </span>
                    </Link>
                    <ul className="sub_menu">
                        <li className="menu-item menu-item-has-children dropdown  nav-item">
                            <Link href="#" className="nav_link">
                                <span className="text-link">
                                    Blogs
                                </span>
                            </Link>
                            {/* <ul className="sub_menu">
                                <li className="menu-item  nav-item">
                                    <Link href="/blog" className="nav_link">
                                        <span className="text-link">
                                            Blog Default
                                        </span>
                                    </Link>
                                </li>
                                <li className="menu-item  nav-item">
                                    <Link href="/blog-style-1" className="nav_link">
                                        <span className="text-link">
                                            Blog Style 1
                                        </span>
                                    </Link>
                                </li>
                                <li className="menu-item  nav-item">
                                    <Link href="/blog-style-2" className="nav_link">
                                        <span className="text-link">
                                            Blog Style 2
                                        </span>
                                    </Link>
                                </li>
                            </ul> */}
                        </li>
                        {/* <li className="menu-item menu-item-has-children dropdown  nav-item">
                            <Link href="#" className="nav_link"><span className="text-link"> Blog
                                Details </span></Link>
                            <ul className="sub_menu">
                                <li className="menu-item   nav-item">
                                    <Link href="/blog-details" className="nav_link">
                                        <span className="text-link">
                                            No Sidebar
                                        </span>
                                    </Link>
                                </li>
                                <li className="menu-item  nav-item">
                                    <Link href="/blog-details-left-sidebar" className="nav_link">
                                        <span className="text-link">
                                            Left Sidebar
                                        </span>
                                    </Link>
                                </li>
                                <li className="menu-item nav-item">
                                    <Link href="/blog-details-right-sidebar" className="nav_link">
                                        <span className="text-link">
                                            Right Sidebar
                                        </span>
                                    </Link>
                                </li>
                            </ul>
                        </li> */}
                    </ul>
                    <div className="dropdown-btn"><span className="fa fa-angle-down" /></div>
                </li>
                {/* <li className="menu-item  menu-item-has-children dropdown  mennucolumn_  nav-item">
                    <Link href="/shop" className="nav_link">
                        <span className="text-link">
                            Shop
                        </span>
                    </Link>
                    <ul className="sub_menu">
                        <li className="menu-item nav-item">
                            <Link href="/shop" className="nav_link">
                                <span className="text-link">
                                    Products
                                </span>
                            </Link>
                        </li>
                        <li className="menu-item nav-item">
                            <Link href="/shop-details" className="nav_link">
                                <span className="text-link">
                                    Product Details
                                </span>
                            </Link>
                        </li>
                        <li className="menu-item nav-item">
                            <Link href="/my-account" className="nav_link">
                                <span className="text-link">
                                    My account
                                </span>
                            </Link>
                        </li>
                        <li className="menu-item nav-item">
                            <Link href="/cart" className="nav_link">
                                <span className="text-link">
                                    Cart
                                </span>
                            </Link>
                        </li>
                        <li className="menu-item nav-item">
                            <Link href="/checkout" className="nav_link">
                                <span className="text-link">
                                    Checkout
                                </span>
                            </Link>
                        </li>
                    </ul>
                    <div className="dropdown-btn"><span className="fa fa-angle-down" /></div>
                </li> */}
                <li className="menu-item  nav-item">
                    <Link href="/contact" className="nav_link">
                        <span className="text-link">
                            Contact
                        </span>
                    </Link>
                </li>
            </ul>
        </>
    )
}
