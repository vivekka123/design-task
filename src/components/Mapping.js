import React from 'react';

const ContentWithImagesAndIcons = () => {
  const data = [
    {
      id: 1,
      content: 'First item',
      imageUrl: 'https://example.com/image1.jpg',
      iconName: 'icon1',
    },
    {
      id: 2,
      content: 'Second item',
      imageUrl: 'https://example.com/image2.jpg',
      iconName: 'icon2',
    },
    // ... more items
  ];

  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          <h2>{item.content}</h2>
          <img src={item.imageUrl} alt={item.content} />
          <span className={`icon-${item.iconName}`} /> {/* Assume a CSS class for icons */}
        </div>
      ))}
    </div>
  );
};

export default ContentWithImagesAndIcons;
