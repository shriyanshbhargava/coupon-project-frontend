'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import * as styles from './Header.module.css'
import SearchBar from './SearchBar'
import headerLogo from '../../assets/headerLogo.png'
import headerMobileLogo from '../../assets/headerMobileLogo.png'

import { HiMenuAlt3 } from 'react-icons/hi'

export default function Header() {
  const [toggle, setToggle] = useState(false)

  const showNav = () => {
    setToggle(!toggle)
  }

  const [matches, setMatches] = useState(window.matchMedia('(min-width: 768px)').matches)

  useEffect(() => {
    window.matchMedia('(min-width: 768px)').addEventListener('change', (e) => setMatches(e.matches))
  }, [])
  return (
    <div className={styles.HeaderMain}>
      <nav className='fixed top-0 w-full bg-header p-4'>
        <div className='flex justify-between items-center w-full flex-wrap md:flex-nowrap'>
          <section className={styles.HeaderOne}>
            {matches && <Image src={headerLogo} width={100} alt='logo' />}
            {!matches && <Image src={headerMobileLogo} width={30} alt='Mobilelogo' />}
          </section>
          <section className={styles.HeaderTwo}>
            <SearchBar />
          </section>
          <button className='flex justify-end md:hidden' onClick={showNav}>
            <HiMenuAlt3 size={25} />
          </button>

          <ul
            className={`${
              toggle ? ' flex' : ' hidden'
            } flex-col justify-center items-center text-lg p-1 w-full first:mt-2 md:flex-row md:w-auto md:space-x-10 md:flex`}
          >
            <section className={styles.HeaderThree}>
              <div>
                <Link className={styles.HeaderThreeLink} href='/'>
                  About
                </Link>
                <Link className={styles.HeaderThreeLink} href='/'>
                  Blog
                </Link>
                <Link className={styles.HeaderThreeLink} href='/'>
                  Contact
                </Link>
              </div>
            </section>
          </ul>
        </div>
      </nav>
    </div>
  )
}
