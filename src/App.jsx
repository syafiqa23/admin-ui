import "./App.css";

function App() {
  return (
    <>
      <div className="p-6 space-y-8">
        {/* LATIHAN 1 - NAVBAR */}
        <h2 className="font-semibold">LATIHAN 1</h2>
        <nav className="p-4 bg-gray-100 flex flex-col md:flex-row md:items-center md:justify-between">
          {/* Kiri - Logo */}
          <div className="font-bold text-lg mb-2 md:mb-0">MyLogo</div>

          {/* Kanan - Menu */}
          <ul className="flex flex-col md:flex-row gap-2 md:gap-6">
            <li>
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <hr />
        {/* LATIHAN 2 - GRID GALERI */}
        <h2 className="font-semibold">LATIHAN 2</h2>
        <div className="p-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <img
            src="https://www.placehold.co/200x200"
            alt="Gambar Galeri"
            className="h-48"
          />
          <img
            src="https://www.placehold.co/200x200"
            alt="Gambar Galeri"
            className="h-48"
          />
          <img
            src="https://www.placehold.co/200x200"
            alt="Gambar Galeri"
            className="h-48"
          />
          <img
            src="https://www.placehold.co/200x200"
            alt="Gambar Galeri"
            className="h-48"
          />
          <img
            src="https://www.placehold.co/200x200"
            alt="Gambar Galeri"
            className="h-48"
          />
          <img
            src="https://www.placehold.co/200x200"
            alt="Gambar Galeri"
            className="h-48"
          />
        </div>
        <hr />
        {/* LATIHAN 3 - PRICING TABLE */}
        <h2 className="font-semibold">LATIHAN 3</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 text-center">
          <div className="bg-gray-200 p-6 rounded shadow-sm flex flex-col justify-center">
            Basic 
            <br />
            Rp 50.000
          </div>
          <div className="bg-blue-100 p-8 rounded shadow-md scale-105 flex flex-col justify-center">
            Pro
            <br />
            Rp 100.000
          </div>
          <div className="bg-gray-200 p-6 rounded shadow-sm flex flex-col justify-center">
            Premium
            <br />
            Rp 200.000
          </div>
        </div>
        <hr />
        {/* LATIHAN 4 - DASHBOARD LAYOUT */}
        <h2 className="font-semibold">LATIHAN 4</h2>
        <div className="min-h-screen grid grid-cols-12 gap-2">
          <header className="bg-gray-300 p-4 col-span-12">Header</header>
          <aside className="bg-gray-200 p-4 col-span-12 md:col-span-3">Sidebar</aside>
          <main className="bg-white p-4 border col-span-12 md:col-span-9">Content</main>
          <footer className="bg-gray-300 p-4 col-span-12">Footer</footer>
        </div>
        <hr />
        {/* LATIHAN 5 - CARD PRODUCT */}
        <h2 className="font-semibold">LATIHAN 5</h2>
        <div className="border flex flex-col md:flex-row items-center md:items-center md:justify-start gap-4 p-4 w-full">
          <img
            src="https://www.placehold.co/80x80"
            alt="Gambar Produk"
            className="h-20 w-20 object-cover"
          />
          <div className="text-center md:text-left">
            <h3 className="font-bold">Nama Produk</h3>
            <p className="text-sm text-gray-600">Deskripsi produk singkat...</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
