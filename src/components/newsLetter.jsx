
import Banner from '../shared/Banner'
import banner2 from '../assets/banner2.png'

const NewsLetter = () => {
  return (
    <div className='md:px-14  p-4  max-w-screen-2xl mx-auto my-12'>
      {/*use our banner component and pass props*/}
      <Banner banner={banner2} heading={"Each student an share their discount code for friends"} subheading={"A simple paragraph is comprised of three major components. The first sentence, which is often a declarative sentence, is called the “topic sentence."} btn1={"I have a code"} btn2={"share"} />
    </div>
  )
}

export default NewsLetter