import './App.css'
import React from 'react';
import Header from './header';
import Main from './main';
import Footer from './footer';

const App = () => {
  const initialState = {
    books: [
      {
        "id": 1,
        "title": "ألف ليلة وليلة",
        "author": "غير معروف",
        "isbn": "978-0140449389"
      },
      {
        "id": 2,
        "title": "النبي",
        "author": "جبران خليل جبران",
        "isbn": "978-0394404288"
      },
      {
        "id": 3,
        "title": "الأيام",
        "author": "طه حسين",
        "isbn": "978-9953331913"
      },
      {
        "id": 4,
        "title": "رجال في الشمس",
        "author": "غسان كنفاني",
        "isbn": "978-9953212212"
      },
      {
        "id": 5,
        "title": "الحب في زمن الكوليرا",
        "author": "غابرييل غارسيا ماركيز",
        "isbn": "978-0307389732"
      },
      {
        "id": 6,
        "title": "الخبز الحافي",
        "author": "محمد شكري",
        "isbn": "978-9953318475"
      },
      {
        "id": 7,
        "title": "مدن الملح",
        "author": "عبد الرحمن منيف",
        "isbn": "978-9953888825"
      },
      {
        "id": 8,
        "title": "ثلاثية نجيب محفوظ",
        "author": "نجيب محفوظ",
        "isbn": "978-9770934706"
      },
      {
        "id": 9,
        "title": "زقاق المدق",
        "author": "نجيب محفوظ",
        "isbn": "978-9770931170"
      },
      {
        "id": 10,
        "title": "بيروت 75",
        "author": "غادة السمان",
        "isbn": "978-9953333974"
      }
    ]
    
  };

  return (
    <div className="App">
      <Header />
      <Main books={initialState.books} />
      <Footer />
      
    </div>
  );
};

export default App;

