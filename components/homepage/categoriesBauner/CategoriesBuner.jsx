import Category from './Category';
function CategoriesBuner() {
  return (
    <div className=' container m-auto gap-4 grid'>
      <div className='grid gap-4  grid-cols-[40%_1fr]'>
        <Category />
        <Category />
      </div>
      <div className='grid gap-4  grid-cols-[1fr_40%]'>
        <Category />
        <Category />
      </div>
    </div>
  );
}

export default CategoriesBuner;
