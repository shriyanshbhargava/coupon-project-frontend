'use client'
import React from 'react'
import Image from 'next/image'
import * as styles from './CouponCard.module.css'

import { Collapse, Button, Card, Typography, CardBody } from '@material-tailwind/react'

export default function CouponCard() {
  const [open, setOpen] = React.useState(false)

  const toggleOpen = () => setOpen((cur) => !cur)

  return (
    <div>
      <a href='#' class='p-4 flex flex-col bg-white border border-gray-200 rounded-lg shadow md:max-w-6xl '>
        <div className={styles.mainDivCoupon}>
          <Image
            class='object-cover w-full md:h-auto md:w-48 md:rounded-none md:rounded-lg'
            src='https://static.couponfollow.com/aliexpress-com/logo.png'
            alt=''
            width={150}
            height={150}
          />
          <div class='flex flex-col justify-between  p-4  text-black'>
            <p class='mb-2 w-16 text-center p-1 text-md font-bold text-black bg-gray-300'>CODE</p>
            <h5 class='mb-2 text-2xl font-bold tracking-tight text-black '>
              AliExpress Coupon Code: $30 Off Your Purchase of $200+
            </h5>
            <p class='mb-3 font-normal text-gray-700 dark:text-gray-400 text-ellipsis'>
              Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
            </p>
          </div>
          <span className='bg-zumthor-50 px-10 py-2  border-2 border-cerulean-blue-700 border-dashed text-right'>
            US 20
          </span>
          {/* <button className=' px-10 py-2 bg-cerulean-blue-700 text-white z-10 absolute object-right'>Show Coupon Code</button> */}
        </div>
        <div className='border-t-2 mt-4 '>
          <Button className='text-black pt-2 pl-0' onClick={toggleOpen}>
            See More +
          </Button>
          <Collapse open={open}>
            <Card className='mt-1 '>
              <CardBody>
                <Typography>
                  Use our Tailwind CSS collapse for your website. You can use if for accordion, collapsible items and
                  much more.
                </Typography>
              </CardBody>
            </Card>
          </Collapse>
        </div>
      </a>
    </div>
  )
}
