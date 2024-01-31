import Button from '@/components/button'
import Image from 'next/image'
import Trustedby1 from '@/assets/imgs/trustedby-1.png'
import Trustedby2 from '@/assets/imgs/trustedby-2.png'
import Trustedby3 from '@/assets/imgs/trustedby-3.png'
import HeroImage from '@/assets/imgs/hero-img.svg'

function heroSection() {
  return (
    // <section className="hero-section flex bg-[url('../assets/imgs/hero-img.svg')] bg-no-repeat bg-right pt-16">
    <section className="hero-section flex pb-5">
      <div className="container mx-auto px-4">
        <div className="hero-section-contents flex max-[1024px]:justify-center">
          <div className="flex justify-between gap-3 max-[1024px]:flex-col-reverse max-[1024px]:items-center">
            <div className="flex flex-col max-[1024px]:items-center max-[1024px]:text-center max-w-[568px] max-[1279px]:max-w-[400px] max-[1024px]:max-w-[100%] gap-4 flex-grow mt-28 max-[1024px]:mt-4">
              <h1 className="text-[76px] max-[1279px]:text-[48px] max-[639px]:text-[38px] text-[--primary-color] font-bold leading-[normal] capitalize">Working with <br />global talents</h1>
              <p className="text-2xl text-[--dark-primary-color]">Forget the old rules. You can have the best people. Right now. Right here.</p>

              <div className="mt-2 sm:mt-4 mb-2 sm:mb-9 flex gap-2 max-[639px]:flex-wrap">
                <Button classList="max-[639px]:w-full sm:min-w-[150px]">Get Started</Button>
                <Button classList="max-[639px]:w-full sm:min-w-[150px]" btnOutlined="true">Learn how to hire</Button>
              </div>

              <div>
                <p className="text-[--dark-primary-color] font-500">Trusted By:</p>

                <div className="flex gap-5 mt-2 max-[639px]:justify-center">
                  <Image src={Trustedby1.src} width={78} height={31} />
                  <Image src={Trustedby2.src} width={104} height={31} />
                  <Image src={Trustedby3.src} width={93} height={30} />
                </div>
              </div>
            </div>

            <div className="mt-14 max-[639px]:mt-4 max-[1024px]:max-w-[600px]">
              <Image src={HeroImage.src} width={900} height={567} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default heroSection