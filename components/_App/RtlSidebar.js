import React from 'react';
import Link from 'next/link'

const RtlSidebar = () => {
    return (
        <>
            <div className='rtl-sidebar'>
                <ul>
                    <li>
                        <Link legacyBehavior href='/' title="English">EN</Link>
                    </li>
                    <li>
                        <Link legacyBehavior href='/ar' title="Arabic">AR</Link>
                    </li>
                    <li>
                        <Link legacyBehavior href='/fr' title="French">FR</Link>
                    </li>
                    <li>
                        <Link legacyBehavior href='/nl' title="Netherlands">NL</Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default RtlSidebar;