import Image from 'next/image'
import companyLogo from '@/assets/imgs/company-logo.svg'
import Rating from '@/components/rating'

function companyCard() {
  return (
    <div className="flex flex-col items-center">
      <Image src={companyLogo.src} width={80} height={103} />
      <hr className="w-full mt-4 border-black" />

      <div className="flex flex-col gap-2 text-center mt-3 text-[--dark-primary-color] items-center">
        <h3 className="text-[24px] font-bold leading-[normal]">Company Name</h3>
        <span className="text-[15px] font-bold">Tasks completed: 120</span>

        <div className="flex gap-[8px] text-[15px]">
          <span>968 skills</span>
          <span>|</span>
          <Rating rateValue="4.5" />
        </div>
      </div>

    </div>
  )
}

export default companyCard