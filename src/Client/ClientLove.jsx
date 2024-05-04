import React, { useState } from 'react';
import './ClientLove.css';

const ClientLove = () => {
  const [selectedName, setSelectedName] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  // Object to store text corresponding to each image's name
  const textByImage = {
    Pabithra: 'Hello, I am Pabithra. Welcome to my profile!',
    Sheeba: 'Greetings! I am Sheeba. Explore my work and projects here.',
    Ashu: 'Hi there! I am Ashu. Check out my latest updates and creations.',
    Bhavani: 'Nice to meet you! I am Bhavani. Discover more about me and my journey.',
    Agalya: 'Hello everyone! I am Agalya. Stay tuned for exciting updates and news.',
  };

  const handleClick = (name) => {
    setSelectedName(name);
    const items = document.querySelectorAll('.nameofpeople li');
    items.forEach((item) => {
      if (item.textContent === name) {
        item.classList.add('selected');
      } else {
        item.classList.remove('selected');
      }
    });
  };
  const handleImageChange = (direction) => {
    if (direction === 'left') {
      setSelectedImageIndex(selectedImageIndex === 0 ? 4 : selectedImageIndex - 1); // Loop to the last image if at the first one
    } else if (direction === 'right') {
      setSelectedImageIndex(selectedImageIndex === 4 ? 0 : selectedImageIndex + 1); // Loop to the first image if at the last one
    }
  };
  const images = [
    'https://www.akirathecouture.com/cdn/shop/files/IMG_1825.jpg?v=1709277812&width=900',
    'https://www.akirathecouture.com/cdn/shop/files/IMG_1827.jpg?v=1709277811&width=900',
    '//www.akirathecouture.com/cdn/shop/files/Screenshot_2023-09-20_125024.png?v=1695194638&width=900',
    '//www.akirathecouture.com/cdn/shop/files/d958ece1-1f8a-4825-b0ae-94d0f88927d9.jpg?v=1695194518&width=900',
    '//www.akirathecouture.com/cdn/shop/files/IMG_1825.jpg?v=1709277812&width=900',
  ];
  return (
    <div className='Main-page'>
      <div className='clientLove'>
        <h1>Client Love</h1>
      </div>
      <div className='container-courosal'>
        <div className='nameofpeople'>

          <li className={selectedName === 'Pabithra' ? 'selected' : ''} onClick={() => handleClick('Pabithra')}>Pabithra</li>
          <li className={selectedName === 'Sheeba' ? 'selected' : ''} onClick={() => handleClick('Sheeba')}>Sheeba</li>
          <li className={selectedName === 'Ashu' ? 'selected' : ''} onClick={() => handleClick('Ashu')}>Ashu</li>
          <li className={selectedName === 'Bhavani' ? 'selected' : ''} onClick={() => handleClick('Bhavani')}>Bhavani</li>
          <li className={selectedName === 'Agalya' ? 'selected' : ''} onClick={() => handleClick('Agalya')}>Agalya</li>
          
        </div>
        
          
        <div className='carousel-container'>
          {selectedName && (
            <div className='card'>
              <div className='image-container'>
                {selectedName === 'Pabithra' && (
                  <img src='https://www.akirathecouture.com/cdn/shop/files/IMG_1825.jpg?v=1709277812&width=900' alt='Pabithra' />
                )}
                {selectedName === 'Sheeba' && (
                  <img src='https://www.akirathecouture.com/cdn/shop/files/IMG_1827.jpg?v=1709277811&width=900' alt='Sheeba' />
                )}
                {selectedName === 'Ashu' && (
                  <img src='//www.akirathecouture.com/cdn/shop/files/Screenshot_2023-09-20_125024.png?v=1695194638&width=900' alt='Ashu' />
                )}
                {selectedName === 'Bhavani' && (
                  <img src='//www.akirathecouture.com/cdn/shop/files/d958ece1-1f8a-4825-b0ae-94d0f88927d9.jpg?v=1695194518&width=900' alt='Bhavani' />
                )}
                {selectedName === 'Agalya' && (
                  <img src='//www.akirathecouture.com/cdn/shop/files/IMG_1825.jpg?v=1709277812&width=900' alt='Agalya' />
                )}
              </div>
              <div className='text-container'>
                <h1>{selectedName}</h1>
                <p>{textByImage[selectedName]}</p>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default ClientLove;
