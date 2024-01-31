// Note that we can use <Link> which is coming back from next js but because it's just 1 page I didn't use it
import TalentCard from '@/components/talentCard'
import talentVector from '@/assets/imgs/talent.png'
import Image from 'next/image'
import noCostIcon from '@/assets/imgs/no-cost.svg'
import postJobIcon from '@/assets/imgs/post-job.svg'
import safetyIcon from '@/assets/imgs/safety.svg'
import Button from '@/components/button'
import FeatureCard from '@/components/featureCard';

function talentsSection() {
  return (
    <section className="talents-section my-9 sm:my-12">
      <div className="container mx-auto px-4">
        <h2 className="text-[--color-3] text-[28px] sm:text-[36px] font-medium mb-2 leading-[normal] max-[639px]:text-center">Browse talent by category</h2>
        <p className="text-[--dark-primary-color] max-[639px]:text-center">Looking for work? <a href="#" className="text-[--primary-color]">Browse more</a></p>

        <div className="talents-container grid grid-cols-4 max-[1024px]:grid-cols-3 max-[767px]:grid-cols-2 max-[450px]:grid-cols-1 gap-5 my-5">
          <TalentCard talentTitle="Development & IT" rateValue="4.85" talentSkills="1853" />
          <TalentCard talentTitle="Graphic Design & Creative Stuff" rateValue="4.91" talentSkills="968" />
          <TalentCard talentTitle="Sales & Marketing" rateValue="4.77" talentSkills="392" />
          <TalentCard talentTitle="Copy Writing & Translation" rateValue="4.92" talentSkills="505" />
          <TalentCard talentTitle="Admin & Customer Support" rateValue="4.66" talentSkills="508" />
          <TalentCard talentTitle="Finance & Accounting" rateValue="4.77" talentSkills="214" />
          <TalentCard talentTitle="Engineer & Architecture" rateValue="4.13" talentSkills="756" />
          <TalentCard talentTitle="Legal" rateValue="4.85" talentSkills="145" />
        </div>


        <div className="flex flex-col md:flex-row justify-center gap-12 md:gap-32 my-12 md:my-28 max-[639px]:items-center">
          <div className="flex max-[767px]:justify-center items-start">
            <Image src={talentVector.src} width={504} height={343} className="object-contain" />
          </div>

          <div>
            <h2 className="text-[36px] max-[639px]:text-[28px] text-[--primary-color] font-bold leading-[normal] capitalize">Working with global talents</h2>

            <div className="flex flex-col gap-4 mt-4">
              <FeatureCard featureIcon={noCostIcon.src} featureTitle="No cost to join" featureDesc="No cost to join" />
              <FeatureCard featureIcon={postJobIcon.src} featureTitle="Post a job and hire top talent" featureDesc="Finding talent doesn't have to be a chore. <strong>Post a job or we can search for you!</strong></span>" />
              <FeatureCard featureIcon={safetyIcon.src} featureTitle="Work with the best—without breaking the bank" featureDesc="bluHub makes it affordable to up your work and take advantage of low transaction rates." />
            </div>

            <div className="mt-4 sm:mt-4 mb-2 sm:mb-9 flex gap-2 max-[639px]:flex-wrap">
              <Button classList="max-[639px]:w-full sm:min-w-[150px]">Get Started</Button>
              <Button classList="max-[639px]:w-full sm:min-w-[150px]" btnOutlined="true">Learn how to hire</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default talentsSection