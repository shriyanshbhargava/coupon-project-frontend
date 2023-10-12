'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import * as styles from './Header.module.css'
import SearchBar from './SearchBar'
import headerLogo from '../../assets/headerLogo.png'
import { HiMenuAlt3 } from 'react-icons/fa'

const Header = () => {
  const [toggle, setToggle] = useState(false)

  const showNav = () => {
    setToggle(!toggle)
  }
  return (
    <div className={styles.HeaderMain}>
      <nav className='fixed top-0 w-full bg-slate-500 items-center flex p-4'>
        <div className='flex justify-between items-center w-full flex-wrap md:flex-nowrap'>
          <section className={styles.HeaderOne}>
            <Image src={headerLogo} width={100} alt='logo' />
          </section>

          <button className='flex justify-end md:hidden ring-1 ring-black rounded' onClick={showNav}>
            <HiMenuAlt3 />
          </button>

          <ul
            className={`${
              toggle ? ' flex' : ' hidden'
            } flex-col justify-center items-center w-full first:mt-2 md:flex-row md:w-auto md:space-x-10 md:flex`}
          >
            <section className={styles.HeaderTwo}>
              <SearchBar />
            </section>
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

export default Header
