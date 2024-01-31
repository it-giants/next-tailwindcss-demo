import Rating from '@/components/rating'

function talentCard({talentTitle, rateValue, talentSkills}) {
  return (
    <div className="flex flex-col bg-[--secondary-color] text-[--dark-primary-color] p-4 rounded-lg max-[450px]:min-h-[150px]">
      <div className="mb-4">
        <span className="text-2xl">{talentTitle && talentTitle}</span>
      </div>

      <div className="flex justify-between text-[15px] font-medium gap-2">
        <div className="flex items-center gap-1">
          <Rating rateValue={rateValue}/>
        </div>

        <span>{talentSkills} skills</span>
      </div>
    </div>
  )
}

export default talentCard