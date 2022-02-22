import { ObservableQuery } from '@apollo/client';
import React, { useState } from 'react';
import { FlatList, ListRenderItemInfo, Text } from 'react-native';
import styled from 'styled-components/native';
import { SeeCoffeeShopsQuery } from '../../generated/graphql';
import PhotoList, { CoffeeShopImage } from './PhotoList';

// const CoffeeShopFlatList = styled.FlatList``;

const CoffeeShopContainer = styled.View`
  flex: 1;
`;

const CoffeeShopDescription = styled.View`
  padding: 0 1px;
`;

const CoffeeShopName = styled.Text`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 30px;
  padding: 5px;
`;

const CategoryContainer = styled.ScrollView``;

const Category = styled.View`
  background-color: ${({ theme }) => theme.accentColor};
  margin: 0 1px;
  padding: 2px 3px;
  border-radius: 3px;
`;

const CategoryText = styled.Text`
  color: white;
  font-size: 10px;
`;

type CoffeeShopType = SeeCoffeeShopsQuery['seeCoffeeShops']['coffeeShops'][0];

type CoffeeShopListProps = {
  coffeeShops: CoffeeShopType[];
  refetch: ObservableQuery['refetch'];
  fetchMore: ObservableQuery['fetchMore'];
};

export default function CoffeeShopList({ coffeeShops, refetch, fetchMore }: CoffeeShopListProps) {
  const lastId = coffeeShops[coffeeShops.length - 1].id;
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async () => {
    setRefreshing(true);
    await refetch();
    setRefreshing(false);
  };

  return (
    <FlatList
      data={coffeeShops}
      onRefresh={onRefresh}
      refreshing={refreshing}
      onEndReachedThreshold={0.3}
      onEndReached={() => fetchMore({ variables: { items: 3, lastId } })}
      keyExtractor={(item: CoffeeShopType) => item.id.toString()}
      renderItem={({ item }: ListRenderItemInfo<CoffeeShopType>) => (
        <CoffeeShopContainer>
          {item.photos.length ? (
            <PhotoList photos={item.photos} />
          ) : (
            <CoffeeShopImage>
              <Text>No Image</Text>
            </CoffeeShopImage>
          )}
          <CoffeeShopDescription>
            <CategoryContainer
              horizontal
              bounces={false}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ alignItems: 'flex-start' }}
            >
              {item.categories.map(({ id, slug }) => (
                <Category key={id}>
                  <CategoryText>#{slug}</CategoryText>
                </Category>
              ))}
            </CategoryContainer>
            <CoffeeShopName>{item.name}</CoffeeShopName>
            {console.log(item.name)}
          </CoffeeShopDescription>
        </CoffeeShopContainer>
      )}
    />
  );
}
