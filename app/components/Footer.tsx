import { Button } from "primereact/button";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto text-center">
        {/* Header Section */}
        <div className="mb-12">
          <h2 className="text-5xl font-bold text-white mb-4">Enatega</h2>
          <p className="text-lg leading-relaxed mx-auto max-w-lg">
            Enatega is an innovative open-source delivery management platform.
            Built with Next.js, Tailwind CSS, and PrimeReact, we encourage students to contribute.
          </p>
        </div>

        {/* Call to Action Section */}
        <div className="mb-12">
          <Button
            label="Join the Community"
            className="p-button p-button-lg p-button-rounded p-button-outlined text-white border-white hover:bg-white hover:text-gray-900 transition-all duration-300"
          />
        </div>

        {/* Links Section */}
        <div className="mb-8">
          <ul className="flex justify-center space-x-8 text-lg">
            <li>
              <a
                href="#"
                className="hover:text-gray-400 transition-colors duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-gray-400 transition-colors duration-300"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-gray-400 transition-colors duration-300"
              >
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="flex justify-center space-x-6 mb-12">
          <Button
            icon="pi pi-facebook"
            className="p-button-rounded p-button-text p-button-icon-only hover:bg-blue-600 transition-all duration-300"
            aria-label="Facebook"
          />
          <Button
            icon="pi pi-twitter"
            className="p-button-rounded p-button-text p-button-icon-only hover:bg-blue-400 transition-all duration-300"
            aria-label="Twitter"
          />
          <Button
            icon="pi pi-instagram"
            className="p-button-rounded p-button-text p-button-icon-only hover:bg-pink-600 transition-all duration-300"
            aria-label="Instagram"
          />
          <Button
            icon="pi pi-linkedin"
            className="p-button-rounded p-button-text p-button-icon-only hover:bg-blue-700 transition-all duration-300"
            aria-label="LinkedIn"
          />
          <Button
            icon="pi pi-github"
            className="p-button-rounded p-button-text p-button-icon-only hover:bg-gray-800 transition-all duration-300"
            aria-label="GitHub"
          />
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-sm text-gray-400">
          <p>Powered by <span className="font-semibold">codinghub</span></p>
          <p>Enatega &ndash; &copy; 2025 All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
