import CoffeeShopList from '../components/home/CoffeeShopList';
import CenterLayout from '../components/layout/CenterLayout';
import { useSeeCoffeeShopsQuery } from '../generated/graphql';

export default function HomeScreen() {
  const { loading, data, refetch, fetchMore } = useSeeCoffeeShopsQuery({ variables: { items: 3 } });

  return (
    <CenterLayout loading={loading}>
      <CoffeeShopList
        coffeeShops={data?.seeCoffeeShops.coffeeShops}
        refetch={refetch}
        fetchMore={fetchMore}
      />
    </CenterLayout>
  );
}
