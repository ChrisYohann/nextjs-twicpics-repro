import { Button } from '@/components/ui/button';
import { useRouter } from 'next/router';

export default function About() {
  const router = useRouter();

  return (
    <div className="flex min-h-[calc(100vh-5rem)] flex-col items-center justify-center">
      <h1 className="mb-8 text-3xl font-bold">About Page</h1>
      <p className="mb-8 max-w-2xl text-center text-gray-600">
        This page exists to demonstrate the TwicPics issue. When you navigate here
        from the gallery, check the console to see if images are still being
        loaded after unmounting.
      </p>
      <Button
        onClick={() => router.push('/gallery')}
        className="bg-blue-600 hover:bg-blue-700"
      >
        Back to Gallery
      </Button>
    </div>
  );
}