import React, { useState } from 'react';

import { Switch, Typography } from 'antd';
import ReactImageMagnify from 'react-image-magnify';
import GreenFilter from 'components/greenfilter';
import styled from 'styled-components';
import { ThemeProps, Theme } from 'constants/theme.types';

const { Text } = Typography;

const ImageFilter = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${({ theme: { defaults } }: ThemeProps) => defaults.padding};
  margin-right: ${({ theme: { defaults } }: ThemeProps) => defaults.marginBottom};
  span {
    margin-left: ${({ theme: { defaults } }: ThemeProps) => defaults.padding};
  }
`;
const CarouselImageList = styled.div`
  padding: 8px;
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;
  background: white;
`;
interface CarouselImageProps {
  isSelected: boolean;
  theme: Theme;
}

const CarouselImage = styled.img<CarouselImageProps>`
  box-sizing: border-box;
  height: 64px;
  width: auto;
  cursor: pointer;
  margin-right: 8px;
  &:last-child {
    margin-right: 0px;
  }
  border: ${(props: CarouselImageProps) =>
    `2px  solid ${props.isSelected ? props.theme.color.dark : props.theme.color.light}`};
`;
export interface Props {
  images: string[];
}

export default function Carousel(props: Props) {
  const [selectedImage, setSelectedImage] = useState<string>(props.images[0]);
  const [isGreenPlane, setIsGreenPlane] = useState<boolean>(false);

  return (
    <div>
      <ImageFilter>
        <Switch title='Green Plane' onChange={() => setIsGreenPlane(!isGreenPlane)} />
        <Text>Green Plane</Text>

        <GreenFilter />
      </ImageFilter>

      <ReactImageMagnify
        {...{
          hoverDelayInMs: 100,
          enlargedImagePosition: 'over',
          style: isGreenPlane ? { filter: 'url(#greenFilter)' } : {},
          smallImage: {
            alt: 'Carousel Image',
            isFluidWidth: true,
            src: selectedImage,
          },
          largeImage: {
            src: selectedImage,
            width: 1500,
            height: 1500,
          },
        }}
      />
      <CarouselImageList>
        {props.images.map(src => (
          <CarouselImage
            key={src}
            style={isGreenPlane ? { filter: 'url(#greenFilter)' } : {}}
            isSelected={selectedImage === src}
            onClick={() => setSelectedImage(src)}
            src={src}
          />
        ))}
      </CarouselImageList>
    </div>
  );
}
