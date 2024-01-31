function featureCard({ featureIcon, featureTitle, featureDesc }) {
  return (
    <div className="flex gap-[14px] items-start">
      <img src={featureIcon} alt={featureTitle} />
      <div className="flex flex-col">
        <h3 className="text-[--primary-color] text-md sm:text-xl capitalize font-bold">{featureTitle}</h3>
        <span className="text-[--dark-primary-color] text-sm" dangerouslySetInnerHTML={{__html: featureDesc}} />
      </div>
    </div>
  )
}

export default featureCard