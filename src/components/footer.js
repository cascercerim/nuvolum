import React from 'react'

export default function footer() {
    return (
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    {/* Column1 */}
                    <div className="col">
                        <h5>Nuvolum Test</h5>
                        <ul className="list-unstyled">
                            <li>123-456-7890</li>
                            <li>North Pole, Santa's House</li>
                            <li>123 Candy Cane Lane</li>
                        </ul>
                    </div>
                    {/* Column2 */}
                    <div className="col">
                        <h5>STUFF</h5>
                        <ul className="list-unstyled">
                            <li>Careers</li>
                            <li>Services</li>
                            <li>Blog</li>
                        </ul>
                    </div>
                    {/* Column3 */}
                    <div className="col">
                        <h5>ANOTHER COLUMN</h5>
                        <ul className="list-unstyled">
                            <li>Cookies</li>
                            <li>Privacy and Terms</li>
                            <li>About</li>
                        </ul>
                    </div>
                </div>
                <hr className="line-break" />
                <div className="row">
                    <p className="col-sm">
                        &copy;{new Date().getFullYear()} NUVOLUM CODE TEST | All rights reserved | Terms Of Service | Privacy
                    </p>
                </div>
            </div>
        </div>
    )
}

