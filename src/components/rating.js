import { StarIcon } from "@heroicons/react/24/solid"

function rating({rateValue}) {
  return (
    <div className="flex items-center gap-1">
      <StarIcon className="h-4 w-4 text-[#4E91CD] stroke-2" />
      <span>{rateValue}/5</span>
    </div>
  )
}

export default rating