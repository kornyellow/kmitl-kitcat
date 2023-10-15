'use client'

import React, { useState } from "react";
import Image from 'next/image'
import check from '@/image/check.png'
import finised from '@/image/finish.png'
import CheckoutDone from "./CheckoutDone";


interface CheckoutProps {
    status: number;
}

const Checkout: React.FC<CheckoutProps> = ({ status }) => {

    return (
        <div>
            {status === 3 ? (<CheckoutDone />) :
                <div className="flex flex-col lg:flex-row justify-center h-[20rem] md:mt-[60px] lg:mt-0">
                    <div className="flex flex-col justify-center h-48 lg:h-auto">
                        <p className="hidden lg:block rotate-90 lg:rotate-0 w-48 h-1 mx-auto lg:my-4 bg-[var(--grey)] pb-[0.5rem]"></p>
                    </div>
                    <div className="flex flex-col items-center">
                        <h3 className="mt-3 font-extrabold">เสร็จสิ้น</h3>
                        <div className='w-[12.5rem] h-[12.5rem] rounded-full bg-[var(--grey)] flex justify-center items-center'>
                            <Image width={117} src={check} alt="check" />
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}

export default Checkout;