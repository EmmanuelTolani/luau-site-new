import React, { useState } from "react";
import Link from 'next/link'

export default function SubHeader() {
 
  return (
    <>
      <header className="subheader">
        <div className="subheader__container">
            <div></div>
            <ul>
                <li>
                    <Link href='/'>
                        Resources
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        About
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        Contact
                    </Link>
                </li>
            </ul>
      </div>
      </header>
    </>
  );
}
