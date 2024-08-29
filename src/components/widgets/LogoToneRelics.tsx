import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import toneRelicLogoDark from '../../public/logos/toneRelics-dark.svg';
import toneRelicLogoPurple from '../../../public/logos/toneRelics.svg';

const LogoToneRelics = () => {
  return (
    <Link href='/'className='flex items-center gap-3'>
                {/* <Image src='/logo.png' alt='' width={24} height={24}></Image> */}
                <div className=' h-10 w-52 flex justify-start'>
                <Image src={toneRelicLogoPurple} alt='ToneRelic logo' width={200} ></Image>
                </div>
            </Link>
  )
}

export default LogoToneRelics
