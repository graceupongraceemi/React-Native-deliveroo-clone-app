import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import CategoryCard from './CategoryCard';

const Categories = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {/* CategoryCard  */}

      <CategoryCard
        imgUrl='https://images.unsplash.com/photo-1562436260-8c9216eeb703?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHN1c2hpfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60'
        title='Testing 1'
      />
      <CategoryCard
        imgUrl='https://images.unsplash.com/photo-1562436260-8c9216eeb703?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHN1c2hpfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60'
        title='Testing 2'
      />
      <CategoryCard
        imgUrl='https://images.unsplash.com/photo-1562436260-8c9216eeb703?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHN1c2hpfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60'
        title='Testing 3'
      />
      <CategoryCard
        imgUrl='https://images.unsplash.com/photo-1562436260-8c9216eeb703?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHN1c2hpfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60'
        title='Testing 3'
      />
      <CategoryCard
        imgUrl='https://images.unsplash.com/photo-1562436260-8c9216eeb703?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHN1c2hpfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60'
        title='Testing 3'
      />
      <CategoryCard
        imgUrl='https://images.unsplash.com/photo-1562436260-8c9216eeb703?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHN1c2hpfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60'
        title='Testing 3'
      />
    </ScrollView>
  );
};

export default Categories;
