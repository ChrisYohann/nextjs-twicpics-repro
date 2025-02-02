'use client';

import Image from '@/components/Image';
import imageData from '@/data/images.json';

export default function ImageGallery() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {imageData.images.map((src, index) => {
        return (
          <div
            key={src}
            className="aspect-square overflow-hidden rounded-lg shadow-lg"
          >
            <Image
              src={src}
              alt={`Image ${index + 1}`}
              ratio="1"
              mode="cover"
              placeholder="preview"
              className="h-full w-full"
            />
          </div>
        );
      })}
    </div>
  );
}