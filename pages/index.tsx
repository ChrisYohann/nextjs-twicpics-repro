import { Button } from '@/components/ui/button';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex min-h-[calc(100vh-5rem)] flex-col items-center justify-center">
      <h1 className="mb-8 text-4xl font-bold">TwicPics Issue Reproduction</h1>
      <p className="mb-8 text-center text-gray-600">
        This is a minimal reproduction of an issue with TwicPics where images
        continue to load after component unmount.
      </p>
      <Button
        onClick={() => router.push('/gallery')}
        className="bg-blue-600 hover:bg-blue-700"
      >
        Go to Gallery
      </Button>
    </div>
  );
}