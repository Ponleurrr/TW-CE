const products = [
  {
    id: "laptop-bag",
    name: "Laptop Bag",
    price: 7.5,
    image: "images/Accessories/Laptop Bag.jpg",
    category: "tech",
    subcategory: "accessories",
    
    badge: "trending", 
    seller: "Light"
  },
  {
    id: "journal-book",
    name: "Journal Book",
    price: 5,
    image: "images/Notebooks&Paper/Journal book.jpg",
    category: "academic",
    subcategory: "notebooks-papers",
    badge: "trending",
    seller: "Ponleur"
  },
  {
    id: "novels",
    name: "Novels",
    price: 6,
    image: "images/Books/Novels.jpg",
    category: "academic",
    subcategory: "books",
    badge: "new",
    seller: "Veha"
  },
  {
    id: "khmer-novels",
    name: "Khmer Novel",
    price: 2,
    image: "images/Books/Khmer Novel.png",
    category: "academic",
    subcategory: "books",
    badge: "new",
    seller: "Daniel"
  },
  {
    id: "exam-paper",
    name: "Exam Papers",
    price: 3,
    image: "images/Exam Materials/Exam Papers.jpg",
    category: "academic",
    subcategory: "exam-materials",
    badge: "trending",
    seller: "abcde"
  },
  {
    id: "geometria-set",
    name: "Geometria Set",
    price: 2,
    image: "images/Exam Materials/Geometria set.jpg",
    category: "academic",
    subcategory: "exam-materials",
    badge: "new",
    seller: "neaat"
  },
  {
    id: "math-guideline",
    name: "Math Guideline",
    price: 1,
    image: "images/Grade 12 Books/Math guideline.jpg",
    category: "academic",
    subcategory: "grade12-books",
    seller: "monie",
    recommended: true
  },
  {
    id: "a4-paper",
    name: "A4 Paper",
    price: 15,
    image: "images/Notebooks&Paper/A4 paper.jpg",
    category: "academic",
    subcategory: "notebooks-papers",
    badge: "trending",
    seller: "Hoshi",
  },
  {
    id: "paper-clips",
    name: "Paper Clips",
    price: 1,
    image: "images/SchoolSupplies/Paper Clips.jpg",
    category: "academic",
    subcategory: "school-supplies",
    badge: "trending",
    seller: "Lyyaa"
  },
  {
    id: "faber-castell-pencil-set",
    name: "Faber Castell Pencil Set",
    price: 4,
    image: "images/SchoolSupplies/Faber Castell pencil set.jpg",
    category: "academic",
    subcategory: "school-supplies",
    badge: "new",
    seller: "Mingg"
  },
  {
    id: "highlighter",
    name: "Highlighter",
    price: 1.5,
    image: "images/SchoolSupplies/Highlighter.jpg",
    category: "academic",
    subcategory: "school-supplies",
    seller: "Ponlue",
    recommended: true
  },
  {
    id: "cable-protector",
    name: "Cable Protector",
    price: 1,
    image: "images/Accessories/Cable Protector.jpg",
    seller: "Tianxu",
    badge: "trending",
    category: "tech",
    subcategory: "accessories"
  },
  {
    id: "mini-claw-machine",
    name: "Mini Claw Machine",
    price: 10,
    image: "images/Gaming Accessories/Mini Claw Machine.jpg",
    seller: "Vichara",
    badge: "trending",

    category: "tech",
    subcategory: "gaming-accessories"
  },
  {
    id: "airport-with-case",
    name: "Airport with case",
    price: 19,
    image: "images/Headphones/Airport with case.jpg",
    seller: "Nabmat",
    badge: "new",

    category: "tech",
    subcategory: "headphones"
  },
  {
    id: "clear-phone-case",
    name: "Clear Phone Case",
    price: 2,
    image: "images/Accessories/Clear Phone Case.jpg",
    seller: "Nika",
    badge: "trending",

    category: "tech",
    subcategory: "accessories"
  },
  {
    id: "extension-cord",
    name: "Extension Cord",
    price: 3,
    image: "images/Study Electronics/Extension Cord.jpg",
    seller: "Mealea",
    badge: "new",

    category: "tech",
    subcategory: "study-electronics"
  },
  {
    id: "hyperdrive-adapter",
    name: "HyperDrive Adapter",
    price: 20,
    image: "images/Study Electronics/HyperDrive adapter.jpg",
    seller: "Geto",
    badge: "new",

    category: "tech",
    subcategory: "study-electronics"
  },
  {
    id: "creamy-keyboard",
    name: "Creamy Keyboard",
    price: 35,
    image: "images/Study Electronics/Creamy keyboard.jpg",
    seller: "Gojo",
    badge: "new",

    category: "tech",
    subcategory: "study-electronics"
  },
  {
    id: "grade12-coursebooks",
    name: "Grade 12 Coursebooks",
    price: 7,
    image: "images/Grade 12 Books/Grade 12 coursebooks.jpg",
    seller: "Taneth",
    recommended: true,

    category: "academic",
    subcategory: "grade12-books"
  },
  {
    id: "gaming-controller",
    name: "Gaming Controller",
    price: 20,
    image: "images/Gaming Accessories/Gaming Controller.jpg",
    seller: "Visoth",
    recommended: true,

    category: "tech",
    subcategory: "gaming-accessories"
  },
  {
    id: "apple-earpods",
    name: "Apple EarPods (wired)",
    price: 19,
    seller: "Mathew",
    image: "images/Headphones/Apple EarPods(wired).jpg",
    recommended: true,

    category: "tech",
    subcategory: "headphones"
  },
  {
    id: "sony-pink-camera",
    name: "Sony Pink Camera",
    price: 280,
    seller: "Sokha",
    image: "images/Smart Devices/Sony Pink Camera.jpg",
    recommended: true,

    category: "tech",
    subcategory: "smart-devices"
  },
  {
    id: "color-markers",
    name: "Color Markers",
    price: 9,
    seller: "Moa Moa",
    image: "images/SchoolSupplies/Color makers.jpg",
    recommended: true,

    category: "academic",
    subcategory: "school-supplies"
  },
  {
    id: "organizer-bag",
    name: "Organizer Bag",
    price: 2,
    seller: "Minato",
    image: "images/Accessories/Organizer bag.jpg",
    recommended: true,

    category: "tech",
    subcategory: "accessories"
  },
  {
    id: "tools",
    name: "Tools",
    price: 2,
    seller: "Minato",
    image: "images/Accessories/Tools.jpg",

    category: "tech",
    subcategory: "accessories"
  },
  {
    id: "apple-pencils",
    name: "Apple Pencils",
    price: 6,
    seller: "Minato",
    image: "images/Accessories/Apple Pencils.jpg",

    category: "tech",
    subcategory: "accessories"
  },
  {
    id: "portable-charger",
    name: "Portable Charger",
    price: 4,
    seller: "Minato",
    image: "images/Accessories/Portable Charger.jpg",

    category: "tech",
    subcategory: "accessories"
  },
  {
    id: "phone-holder",
    name: "Phone Holder",
    price: 2,
    seller: "Minato",
    image: "images/Accessories/Phone Holder.jpg",

    category: "tech",
    subcategory: "accessories"
  },
  {
    id: "pixel-speaker",
    name: "Pixel Speaker",
    price: 39,
    seller: "Minato",
    image: "images/Gaming Accessories/Pixel Speaker.jpg",

    category: "tech",
    subcategory: "gaming-accessories"
  },
  {
    id: "black-game-console",
    name: "Black Game Console",
    price: 30,
    seller: "Minato",
    image: "images/Gaming Accessories/Black Game Console.jpg",

    category: "tech",
    subcategory: "gaming-accessories"
  },
  {
    id: "Gaming-chair",
    name: "Gaming Chair",
    price: 80,
    seller: "Minato",
    image: "images/Gaming Accessories/Gaming Chair.jpg",

    category: "tech",
    subcategory: "gaming-accessories"
  },
  {
    id: "white-game-console",
    name: "White Game Console",
    price: 30,
    seller: "Minato",
    image: "images/Gaming Accessories/White Game Console.jpg",

    category: "tech",
    subcategory: "gaming-accessories"
  },
  {
    id: "1080p-webcam",
    name: "1080p Webcam",
    price: 10,
    seller: "Minato",
    image: "images/Gaming Accessories/1080p Webcam.jpg",

    category: "tech",
    subcategory: "gaming-accessories"
  },
  {
    id: "hyperx-headset",
    name: "HyperX Headset",
    price: 40,
    seller: "Minato",
    image: "images/Gaming Accessories/HyperX Headset.jpg",

    category: "tech",
    subcategory: "gaming-accessories"
  },
  {
    id: "airports",
    name: "Airport",
    price: 19,
    seller: "Meow",
    image: "images/Headphones/Airport.jpg",

    category: "tech",
    subcategory: "headphones"
  },
  {
    id: "miffy-wireless-earbuds",
    name: "Miffy Earbuds",
    price: 24,
    seller: "Meow",
    image: "images/Headphones/Miffy Wireless Earbuds.jpg",

    category: "tech",
    subcategory: "headphones"
  },
  {
    id: "pochaco-headphone",
    name: "Pochaco Headphone",
    price: 15,
    seller: "Meow",
    image: "images/Headphones/Pochaco Headphone.jpg",

    category: "tech",
    subcategory: "headphones"
  },
  {
    id: "airpod-max",
    name: "Airpod Max",
    price: 300,
    seller: "Meow",
    image: "images/Headphones/AirPods Max.jpg",

    category: "tech",
    subcategory: "headphones"
  },
  {
    id: "pink-sanrio-earbuds",
    name: "Pink Sanrio Earbuds",
    price: 16,
    seller: "Meow",
    image: "images/Headphones/Pink Saniro Earbuds.jpg",

    category: "tech",
    subcategory: "headphones"
  },
  {
    id: "black-earbuds",
    name: "Black Earbuds",
    price: 15,
    seller: "Meow",
    image: "images/Headphones/Black Earbud.jpg",

    category: "tech",
    subcategory: "headphones"
  },
  {
    id: "mini-printer",
    name: "Mini Printer",
    price: 6,
    seller: "Meow",
    image: "images/Smart Devices/Mini Printer.jpg",

    category: "tech",
    subcategory: "smart-devices"
  },
  {
    id: "cleaning-machine",
    name: "Cleaning Machine",
    price: 10,
    seller: "Meow",
    image: "images/Smart Devices/Cleaning Machine.jpg",

    category: "tech",
    subcategory: "smart-devices"
  },
  {
    id: "smart-watch",
    name: "Smart Watch",
    price: 9,
    seller: "Meow",
    image: "images/Smart Devices/Smart Watch.jpg",

    category: "tech",
    subcategory: "smart-devices"
  },
  {
    id: "jisulife-fan",
    name: "Jisulife Fan",
    price: 9,
    seller: "Meow",
    image: "images/Smart Devices/Jisulife Fan.jpg",

    category: "tech",
    subcategory: "smart-devices"
  },
  {
    id: "osmo-pocket",
    name: "OSMO Pocket",
    price: 180,
    seller: "Meow",
    image: "images/Smart Devices/OSMO Pocket.jpg",

    category: "tech",
    subcategory: "smart-devices"
  },
  {
    id: "neck-fan",
    name: "Neck Fan",
    price: 8,
    seller: "Meow",
    image: "images/Smart Devices/Neck Fan.jpg",

    category: "tech",
    subcategory: "smart-devices"
  },
  {
    id: "electric-fan",
    name: "Electric Fan",
    price: 19,
    seller: "Meow",
    image: "images/Smart Devices/Electric Fan.jpg",

    category: "tech",
    subcategory: "smart-devices"
  },
  {
    id: "printer",
    name: "Printer",
    price: 60,
    seller: "Meow",
    image: "images/Study Electronics/Printer.jpg",

    category: "tech",
    subcategory: "study-electronics"
  },
  {
    id: "kindle",
    name: "Kindle",
    price: 80,
    seller: "Meow",
    image: "images/Study Electronics/Kindle.jpg",

    category: "tech",
    subcategory: "study-electronics"
  },
  {
    id: "flash-drive",
    name: "Flash Drive",
    price: 19,
    seller: "Meow",
    image: "images/Study Electronics/Flash Drive.jpg",

    category: "tech",
    subcategory: "study-electronics"
  },
  {
    id: "black-white-mouses",
    name: "Black & White Mouses",
    price: 19,
    seller: "Meow",
    image: "images/Study Electronics/Black & White Mouses.jpg",

    category: "tech",
    subcategory: "study-electronics"
  },
  {
    id: "ipad",
    name: "Ipad",
    price: 199,
    seller: "Meow",
    image: "images/Study Electronics/Ipad.jpg",

    category: "tech",
    subcategory: "study-electronics"
  },
  {
    id: "Folktale",
    name: "Folktale",
    price: 1,
    image: "images/Books/Folktale.jpg",
    seller: "Hanni",
    
    category: "academic",
    subcategory: "books"
  },
  {
    id: "children-book",
    name: "Children Book",
    price: 2,
    image: "images/Books/Children Book.jpg",
    seller: "Roma",
    
    category: "academic",
    subcategory: "books"
  },
  {
    id: "khmer-dictionary",
    name: "Khmer Dictionary",
    price: 3,
    image: "images/Books/Khmer Dictionary.png",
    seller: "Nama",
    
    category: "academic",
    subcategory: "books"
  },
  {
    id: "storybooks",
    name: "Storybooks",
    price: 6,
    image: "images/Books/Storybooks.webp",
    seller: "Kaori",
    
    category: "academic",
    subcategory: "books"
  },
  {
    id: "hsk4",
    name: "HSK 4",
    price: 8.99,
    image: "images/Books/HSK 4.jpg",
    seller: "Strawberry",
    
    category: "academic",
    subcategory: "books"
  },
  {
    id: "english-book",
    name: "English Book",
    price: 4,
    image: "images/Books/English Book.jpg",
    seller: "Kiwi",
    
    category: "academic",
    subcategory: "books"
  },
  {
    id: "epibole-ruler",
    name: "Epibole Ruler",
    price: 19,
    image: "images/Exam Materials/Epibole Ruler.png",
    seller: "Tanjiro",
    
    category: "academic",
    subcategory: "exam-materials"
  },
  {
    id: "parabola-ruler",
    name: "Parabola Ruler",
    price: 19,
    image: "images/Exam Materials/Parabola Ruler.png",
    seller: "Nezuko",
    
    category: "academic",
    subcategory: "exam-materials"
  },
  {
    id: "flashcard-for-biology",
    name: "Flashcard for Biology",
    price: 19,
    image: "images/Exam Materials/Flashcard for Biology.jpg",
    seller: "Muichiro",
    
    category: "academic",
    subcategory: "exam-materials"
  },
  {
    id: "clear-pencilcase",
    name: "Clear Pencilcase",
    price: 1.5,
    image: "images/Exam Materials/Clear Pencilcase.jpg",
    seller: "Sawako",
    
    category: "academic",
    subcategory: "exam-materials"
  },
  {
    id: "note-for-biology",
    name: "Note for Biology",
    price: 2,
    image: "images/Exam Materials/Note for Biology.jpg",
    seller: "Ribbon",
    
    category: "academic",
    subcategory: "exam-materials"
  },
  {
    id: "cyan-pencilcase",
    name: "Cyan Pencilcase",
    price: 1.5,
    image: "images/Exam Materials/Cyan Pencilcase.jpg",
    seller: "Meow meow",
    
    category: "academic",
    subcategory: "exam-materials"
  },
  {
    id: "literature",
    name: "Literature",
    price: 5,
    image: "images/Grade 12 Books/Literature.jpg",
    seller: "Momoo",
    
    category: "academic",
    subcategory: "grade12-books"
  },
  {
    id: "adn/arn-book",
    name: "ADN & ARN Book",
    price: 1.99,
    image: "images/Grade 12 Books/ADNARN Book.png",
    seller: "Milkie",
    
    category: "academic",
    subcategory: "grade12-books"
  },
  {
    id: "physic-formula",
    name: "Physic Formula",
    price: 3,
    image: "images/Grade 12 Books/Physic Formula.png",
    seller: "Kawaii",
    
    category: "academic",
    subcategory: "grade12-books"
  },
  {
    id: "mathematical-olympic",
    name: "Mathematical Olympic",
    price: 5,
    image: "images/Grade 12 Books/Mathematical Olympic.png",
    seller: "Sushi",
    
    category: "academic",
    subcategory: "grade12-books"
  },
  {
    id: "coursebooks",
    name: "Coursebooks",
    price: 7,
    image: "images/Grade 12 Books/Coursebooks.jpg",
    seller: "Fruitie",
    
    category: "academic",
    subcategory: "grade12-books"
  },
  {
    id: "teacher-book-for-math",
    name: "Teacher Book for Math",
    price: 6,
    image: "images/Grade 12 Books/Teacher Book for Math.webp",
    seller: "Foodie",
    
    category: "academic",
    subcategory: "grade12-books"
  },
  {
    id: "notebook",
    name: "Notebook",
    price: 3,
    image: "images/Notebooks&Paper/Notebook.jpg",
    seller: "Bread",
    
    category: "academic",
    subcategory: "notebooks-papers"
  },
  {
    id: "note",
    name: "Note",
    price: 1.5,
    image: "images/Notebooks&Paper/Note.jpg",
    seller: "Butter",
    
    category: "academic",
    subcategory: "notebooks-papers"
  },
  {
    id: "notetaker",
    name: "Notaker",
    price: 2,
    image: "images/Notebooks&Paper/Notetaker.jpg",
    seller: "Bie bie",
    
    category: "academic",
    subcategory: "notebooks-papers"
  },
  {
    id: "sticker-note",
    name: "Sticker Note",
    price: 1.99,
    image: "images/Notebooks&Paper/Sticker Note.jpg",
    seller: "Ice Cream",
    
    category: "academic",
    subcategory: "notebooks-papers"
  },
  {
    id: "color-paper",
    name: "Color Paper",
    price: 3,
    image: "images/Notebooks&Paper/Color Paper.jpg",
    seller: "Barbie",
    
    category: "academic",
    subcategory: "notebooks-papers"
  },
  {
    id: "refill-paper",
    name: "Refill Paper",
    price: 2,
    image: "images/Notebooks&Paper/Refill Paper.jpg",
    seller: "Baby",
    
    category: "academic",
    subcategory: "notebooks-papers"
  },
  {
    id: "eraser",
    name: "Eraser",
    price: 0.99,
    image: "images/SchoolSupplies/Eraser.jpg",
    seller: "Star",
    
    category: "academic",
    subcategory: "school-supplies"
  },
  {
    id: "ruler-box",
    name: "Ruler Box",
    price: 1.5,
    image: "images/SchoolSupplies/Ruler Box.jpg",
    seller: "Moon",
    
    category: "academic",
    subcategory: "school-supplies"
  },
  {
    id: "tape-dispenser",
    name: "Tape Dispenser",
    price: 2,
    image: "images/SchoolSupplies/Tape Dispenser.jpg",
    seller: "Starry Night",
    
    category: "academic",
    subcategory: "school-supplies"
  },
  {
    id: "calculator",
    name: "Calculator",
    price: 2.99,
    image: "images/SchoolSupplies/Calculator.jpg",
    seller: "Moonie",
    
    category: "academic",
    subcategory: "school-supplies"
  }

];
