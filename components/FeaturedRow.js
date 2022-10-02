import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import { ArrowRightIcon } from 'react-native-heroicons/outline';
import RestaurantCard from './RestaurantCard';

const FeaturedRow = ({ id, title, description }) => {
  return (
    <View>
      <View className='mt-4 flex-row items-center justify-between px-4'>
        <Text className='font-bold text-lg'>{title}</Text>
        <ArrowRightIcon color='#00CCBB' />
      </View>

      <Text className='text-xs text-gray-500 px-4'>{description}</Text>

      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15
        }}
        showHorizontalScrollIndicator={false}
        className='pt-4'
      >
        {/* RestaurantCards... */}
        <RestaurantCard
          id={123}
          imgUrl='https://media.istockphoto.com/photos/futomaki-sushi-picture-id183341110?b=1&k=20&m=183341110&s=170667a&w=0&h=AiW7jAdyHaonpvA00LKT8mpC1xmSK5pZNqIl4cNd75M='
          title='Yo! Sushi'
          rating={4.5}
          genre='Japanese'
          address='123 Main St'
          short_description='This is a Test description'
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurantCard
          id={123}
          imgUrl='https://media.istockphoto.com/photos/futomaki-sushi-picture-id183341110?b=1&k=20&m=183341110&s=170667a&w=0&h=AiW7jAdyHaonpvA00LKT8mpC1xmSK5pZNqIl4cNd75M='
          title='Yo! Sushi'
          rating={4.5}
          genre='Japanese'
          address='123 Main St'
          short_description='This is a Test description'
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurantCard
          id={123}
          imgUrl='https://media.istockphoto.com/photos/futomaki-sushi-picture-id183341110?b=1&k=20&m=183341110&s=170667a&w=0&h=AiW7jAdyHaonpvA00LKT8mpC1xmSK5pZNqIl4cNd75M='
          title='Yo! Sushi'
          rating={4.5}
          genre='Japanese'
          address='123 Main St'
          short_description='This is a Test description'
          dishes={[]}
          long={20}
          lat={0}
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
