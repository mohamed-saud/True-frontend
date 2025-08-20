import Navbar from '@/components/layouts/Navbar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='mx-auto flex min-h-screen w-full flex-col'>
      <div className='relative flex flex-col w-full'>
        <Navbar />
        {children}
      </div>
    </div>
  );
}
