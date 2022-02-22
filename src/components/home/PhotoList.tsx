import { Dimensions, Text } from 'react-native';
import styled from 'styled-components/native';
import { SeeCoffeeShopsQuery } from '../../generated/graphql';

const { width: SCREEN_WIDTH } = Dimensions.get('screen');

const PhotoListContainer = styled.ScrollView``;

export const CoffeeShopImage = styled.View`
  background-color: white;
  width: ${SCREEN_WIDTH}px;
  min-height: 250px;
  flex: 1;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const ImagePage = styled.Text`
  position: absolute;
  right: 10px;
  bottom: 10px;
  font-size: 10px;
  color: rgba(0, 0, 0, 0.5);
`;

type PhotoListProps = {
  photos: SeeCoffeeShopsQuery['seeCoffeeShops']['coffeeShops'][0]['photos'];
};

export default function PhotoList({ photos }: PhotoListProps) {
  return (
    <PhotoListContainer
      horizontal
      pagingEnabled
      bounces={false}
      showsHorizontalScrollIndicator={false}
    >
      {photos.map(({ id, url }, index) => (
        <CoffeeShopImage key={id}>
          <Text>{url}</Text>
          {photos.length > 1 && (
            <ImagePage>
              {index + 1}/{photos.length}
            </ImagePage>
          )}
        </CoffeeShopImage>
      ))}
    </PhotoListContainer>
  );
}
