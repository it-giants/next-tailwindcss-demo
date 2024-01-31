function button({ children, btnOutlined, classList }) {
  const isBtnOutlined = btnOutlined ;

  let btnStyle = 'btn bg-[--primary-color] text-white py-3 px-6 rounded-[45px] hover:bg-[--primary-color] hover:shadow-[none] border-0';

  if (isBtnOutlined === 'true') {
    btnStyle = 'btn bg-white text-[--primary-color] py-3 px-6 rounded-[45px] hover:bg-white hover:border-[--primary-color] border-[--primary-color]';
  }

  return (
    <button className={`${btnStyle} ${classList ? classList : ''}`}>

      {children}

    </button>
  )
}

export default button