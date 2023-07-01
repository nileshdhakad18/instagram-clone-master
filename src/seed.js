export function seedDatabase(firebase) {
  for (let i = 1; i <= 5; ++i) {
    firebase
      .firestore()
      .collection('photos')
      .add({
        photoId: i,
        userId: '',
        imageSrc: `/images/users/charvi/${i}.jpg`,
        caption: [],
        likes: [],
        comments: [],
        userLatitude: '40.7128°',
        userLongitude: '74.0060°',
        dateCreated: Date.now(),
      });
  }
}
