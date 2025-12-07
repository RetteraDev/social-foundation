import * as React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel';

interface PhotoCarouselProps {
  images: string[];
  altPrefix?: string;
  className?: string;
  showIndicators?: boolean;
  showNavigation?: boolean;
}

export const PhotoCarousel = ({
  images,
  altPrefix = 'Изображение',
  className = '',
  showIndicators = true,
  showNavigation = true,
}: PhotoCarouselProps) => {
  const [api, setApi] = React.useState<CarouselApi | null>(null);
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  if (!images || images.length === 0) return null;

  return (
    <div className={`w-full ${className}`}>
      <div className="relative group">
        <Carousel
          opts={{
            loop: true,
            align: 'start',
          }}
          setApi={setApi}
          className="w-full"
        >
          {/* Кнопки навигации снаружи контента */}
          {showNavigation && images.length > 1 && (
            <>
              <CarouselPrevious 
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 
                          h-10 w-10 md:h-12 md:w-12 
                          bg-background/80 backdrop-blur-sm 
                          border shadow-md hover:bg-background
                          -translate-x-1" 
              />
              <CarouselNext 
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 
                          h-10 w-10 md:h-12 md:w-12 
                          bg-background/80 backdrop-blur-sm 
                          border shadow-md hover:bg-background
                          translate-x-1" 
              />
            </>
          )}
          
          {/* Контент карусели с учетом кнопок */}
          <div className={`
            ${showNavigation && images.length > 1 ? 'px-10 md:px-14 lg:px-16' : 'px-0'}
          `}>
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index} className="relative aspect-video sm:aspect-[16/9] overflow-hidden rounded-lg shadow-lg">
                  <img
                    src={image}
                    alt={`${altPrefix} ${index + 1}`}
                    className="w-full h-full object-cover rounded-lg"
                    loading="lazy"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </div>
        </Carousel>
        
        {/* Индикатор в текстовом виде */}
        {showIndicators && (
          <div className="text-center text-sm text-muted-foreground mt-2">
            Фото {current} из {count}
          </div>
        )}
      </div>
    </div>
  );
};