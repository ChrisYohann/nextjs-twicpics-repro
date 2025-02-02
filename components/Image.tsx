'use client';

import {
  ComponentProps,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { TwicImg, StateEvent } from '@twicpics/components/react';
import ContentLoader from 'react-content-loader';
import classNames from 'classnames';
import { twMerge } from 'tailwind-merge';
import styled from '@emotion/styled';

type TwicImgProps = ComponentProps<typeof TwicImg> & {
  style?: any;
  fullHeight?: boolean;
};

const ImgWrapper = ({ fullHeight, ...rest }: TwicImgProps) => (
  <TwicImg {...rest} />
);

const Wrapper = styled(ImgWrapper)`
  .twic-w {
    height: 100%;
    position: relative;
  }

  img.twic-done {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    ${(props) => (props.fullHeight ? { height: '100%' } : {})}
  }
`;

const Image = ({
  onStateChange,
  className,
  fullHeight = true,
  eager = true,
  ...rest
}: TwicImgProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const isMounted = useRef(true);

  const imagePath =
    typeof rest.src === 'string' ? rest.src : 'non-string source';

  const handleLoadStateChange = useCallback(
    ({ target, state }: StateEvent) => {
      if (!isMounted.current) {
        console.log(
          `Warning: State change called after unmount for ${imagePath} : ${state}`,
        );
        return;
      }

      if (state === 'done') {
        setIsLoaded(true);
      }
      onStateChange?.({ target, state });
      console.log(`State change for ${imagePath} : ${state}`, target);
    },
    [onStateChange, imagePath],
  );

  useEffect(
    () => () => {
      isMounted.current = false;
      console.log(`Unmount for ${imagePath}`);
    },
    [imagePath],
  );

  return (
    <div className="relative h-full w-full">
      {!isLoaded && (
        <div
          style={{ backgroundColor: 'transparent' }}
          className={twMerge(
            'absolute h-full w-full shrink-0 basis-full',
            className,
            'bottom-0 top-0 translate-y-0'
          )}
        >
          <div className="absolute bottom-0 left-0 right-0 top-0 overflow-hidden">
            <ContentLoader
              uniqueKey={`twic-img-loader-${rest.src}`}
              speed={2}
              width="100%"
              height="100%"
              viewBox="0 0 400 400"
              backgroundColor="#f3f3f3"
              foregroundColor="#ecebeb"
              preserveAspectRatio="none"
              className="h-full w-full"
            >
              <rect x="0" y="0" width="100%" height="100%" />
            </ContentLoader>
          </div>
        </div>
      )}
      <Wrapper
        {...rest}
        fullHeight={fullHeight}
        onStateChange={handleLoadStateChange}
        className={classNames(isLoaded ? 'block' : 'invisible', className)}
        eager={eager}
      />
    </div>
  );
};

export default Image;