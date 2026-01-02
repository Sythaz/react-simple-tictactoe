# React Simple Tic Tac Toe

Aplikasi permainan Tic Tac Toe interaktif yang dibangun dengan React dan Tailwind CSS. Project ini mendukung fitur time-travel yang memungkinkan pemain untuk kembali ke move sebelumnya. Ini adalah sebuah project untuk belajar ReactJS

## 🎮 Features

- ✅ Permainan Tic Tac Toe klasik 3x3
- ✅ Deteksi pemenang otomatis
- ✅ Deteksi hasil seri (draw)
- ✅ **Time-travel**: Kembali ke move sebelumnya
- ✅ History semua langkah permainan
- ✅ UI responsif dengan Tailwind CSS
- ✅ Component-based architecture

## 🛠️ Tech Stack

- **React 19.2.0** - Library UI
- **Vite 7.2.4** - Build tool & dev server
- **Tailwind CSS 4.1.18** - Styling
- **ESLint** - Linting

## 📁 Struktur Project

```
react-simple-tictactoe/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── board.jsx    # Board grid component
│   │   └── square.jsx   # Individual square button
│   ├── hooks/           # Custom React hooks (future)
│   ├── pages/           # Page components (future)
│   ├── services/        # API services (future)
│   ├── utils/           # Utility functions
│   │   └── gameLogic.js # Game logic (winner calculation)
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── index.html           # HTML template
├── package.json         # Dependencies
├── vite.config.js       # Vite configuration
└── eslint.config.js     # ESLint configuration
```

## 🚀 Cara Menjalankan

### Prerequisites

Pastikan Anda sudah install:
- Node.js (versi 16 atau lebih baru)
- npm atau yarn

### Installation

1. Clone repository ini
```bash
git clone https://github.com/Sythaz/react-simple-tictactoe.git
cd react-simple-tictactoe
```

2. Install dependencies
```bash
npm install
```

3. Jalankan development server
```bash
npm run dev
```

4. Buka browser dan akses `http://localhost:5173`

## 🎯 Cara Bermain

1. **Mulai permainan**: Klik pada kotak kosong untuk menempatkan X atau O
2. **Bergantian**: Pemain X dan O bergantian setiap move
3. **Menang**: Dapatkan 3 simbol berturut-turut (horizontal, vertikal, atau diagonal)
4. **Seri**: Jika semua kotak terisi tanpa ada pemenang
5. **Time-travel**: Klik tombol di History untuk kembali ke move sebelumnya

## 🧩 Komponen Utama

### App.jsx
Komponen utama yang mengelola:
- State management (history, current move)
- Game logic (handle click, jump to move)
- Status display (winner, draw, next player)

### Board.jsx
Merender grid 3x3 dengan 9 kotak Square

### Square.jsx
Button individual untuk setiap kotak di board

### gameLogic.js
Utility function untuk menghitung pemenang berdasarkan kombinasi menang