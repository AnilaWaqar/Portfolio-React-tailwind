// components/Footer.js
export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-green-600 to-green-400 p-4 text-center text-white">
      <p>&copy; {new Date().getFullYear()} Anila Waqar. All rights reserved.</p>
    </footer>
  );
}