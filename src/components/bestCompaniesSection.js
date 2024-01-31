import CompanyCard from '@/components/companyCard'

function bestCompaniesSection() {
  return (
    <section className="best-companies-section">
      <div className="container mx-auto px-4">
        <h2 className="text-[34px] sm:text-[52px] md:text-[76px] font-bold capitalize text-[--primary-color] text-center">Best Companies</h2>
        <p className="text-[20px] font-medium text-[--dark-primary-color] text-center">Find great work providers</p>

        <div className="talents-container grid grid-cols-4 max-[1024px]:grid-cols-3 max-[767px]:grid-cols-2 max-[450px]:grid-cols-1 gap-10 my-9 mt-10 sm:mt-20">
          <CompanyCard />
          <CompanyCard />
          <CompanyCard />
          <CompanyCard />
          <CompanyCard />
          <CompanyCard />
          <CompanyCard />
          <CompanyCard />
        </div>
      </div>
    </section>
  )
}

export default bestCompaniesSection