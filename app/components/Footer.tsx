import { FaGithub, FaXTwitter } from "react-icons/fa6";
import { MdMail } from "react-icons/md";

export function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 border-t border-gray-800 py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-white mb-6">お気軽にご連絡ください</h3>
          <div className="flex justify-center space-x-6 mb-8">
            <a href="https://github.com/grfsv" className="text-gray-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
              <FaGithub className="w-6 h-6" />
            </a>
            <a href="https://x.com/grfsv36025" className="text-gray-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
              <FaXTwitter className="w-6 h-6" />
            </a>
            <a href="mailto:grfsv.y@gmail.com" className="text-gray-400 hover:text-white transition-colors">
              <MdMail className="w-6 h-6" />
            </a>
          </div>
          <p className="text-gray-400">© 2025 grfsv. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}