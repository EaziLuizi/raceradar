export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white mt-auto">
      <div className="container mx-auto px-4 py-6">
        <p className="text-center text-gray-400">
          © {new Date().getFullYear()} RaceRadar. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
