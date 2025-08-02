export default async function layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='mx-auto flex min-h-screen w-full max-w-[1440px] flex-col'>
      <div className='relative flex min-h-[500px] flex-1 items-stretch justify-center'>
        {children}
      </div>
    </div>
  );
}
