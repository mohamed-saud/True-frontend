import Category from './Category';
import image1 from '@/assets/accessories-banner-1.jpg';
import image2 from '@/assets/accessories-banner-2.jpg';
import image3 from '@/assets/accessories-banner-3.jpg';
import image4 from '@/assets/accessories-banner-4.jpg';

function CategoriesBuner() {
  return (
    <div className=' container m-auto gap-4 grid'>
      <div className='grid gap-4 grid-cols-1  xl:grid-cols-[40%_1fr]'>
        <Category
          image={image1}
          imageWidth={485}
          imageHight={340}
          subtitle='Something completely new'
          title='Cases for Phone'
          link='/'
        />
        <Category
          image={image2}
          imageWidth={680}
          imageHight={340}
          subtitle='Accessories for watch'
          title='Straps of Any Color'
          link='/'
        />
      </div>
      <div className='grid gap-4 grid-cols-1  xl:grid-cols-[40%_1fr]'>
        <Category
          image={image3}
          imageWidth={680}
          imageHight={340}
          subtitle='Special offer'
          title='Buy One and Get 50% Off the Second'
          link='/'
        />
        <Category
          image={image4}
          imageWidth={485}
          imageHight={340}
          subtitle='Try something completely'
          title='Charger Discount'
          link='/'
        />
      </div>
    </div>
  );
}

export default CategoriesBuner;
