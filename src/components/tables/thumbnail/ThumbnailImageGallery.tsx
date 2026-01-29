"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";

interface ThumbnailImageGalleryProps {
  images: (string | StaticImageData)[];
  thumbnailMode?: boolean;
}

export const ThumbnailImageGallery: React.FC<ThumbnailImageGalleryProps> = ({
  images,
  thumbnailMode = false,
}) => {
  if (!images || images.length === 0) {
    return (
      <div className="p-4 text-center text-gray-500">No images available</div>
    );
  }

  return (
    <div className="p-4 bg-gray-50 border-t border-gray-200">
      <div className="flex flex-col gap-3">
        <div
          className="
            w-full 
            min-w-75 
           h-35 
            overflow-x-auto 
            overflow-y-hidden 
            flex-wrap
          "
        >
          {/* Inner container that holds all images - it can be wider than parent */}
          <div className="inline-flex gap-3 h-full w-full max-w-sm p-3">
            {images.map((img, idx) => (
              <div
                key={idx}
                className="
                  relative 
                  shrink-0 
                  w-40 h-full
                  rounded-md 
                  overflow-hidden
                  hover:shadow-lg hover:border-blue-200
                  transition-all duration-200
                  group
                "
              >
                {typeof img === "string" ? (
                  <Image
                    src={img}
                    alt={`Inspection image ${idx + 1}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="160px"
                    priority={idx < 3}
                  />
                ) : (
                  <Image
                    src={img}
                    alt={`Inspection image ${idx + 1}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="160px"
                    priority={idx < 3}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
