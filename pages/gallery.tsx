import ImageGallery from '@/components/ImageGallery';

export default function Gallery() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Image Gallery</h1>
      <p className="text-gray-600">
        Navigate away from this page to see the TwicPics issue in the console.
      </p>
      <ImageGallery />
    </div>
  );
}