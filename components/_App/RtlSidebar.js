import React from 'react';
import Link from 'next/link'

const RtlSidebar = () => {
    return (
        <>
            <div className='rtl-sidebar'>
                <ul>
                    <li>
                        <Link href='/' title="English">EN</Link>
                    </li>
                    <li>
                        <Link href='/ar' title="Arabic">AR</Link>
                    </li>
                    <li>
                        <Link href='/fr' title="French">FR</Link>
                    </li>
                    <li>
                        <Link href='/nl' title="Netherlands">NL</Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default RtlSidebar;