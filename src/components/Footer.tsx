import React from 'react';
import { Heart, Shield, Users, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Heart className="w-6 h-6 text-red-500" />
              <h3 className="text-lg font-bold">MediAssist AI</h3>
            </div>
            <p className="text-gray-400 text-sm">
              Empowering patients with AI-driven prescription analysis 
              and healthcare insights for better health outcomes.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Features</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">OCR Analysis</a></li>
              <li><a href="#" className="hover:text-white transition-colors">AI Diagnosis</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Medicine Database</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Doctor Finder</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Trust & Safety</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-green-400" />
                <span className="text-sm text-gray-400">HIPAA Compliant</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4 text-blue-400" />
                <span className="text-sm text-gray-400">FDA Guidelines</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-purple-400" />
                <span className="text-sm text-gray-400">24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © 2024 MediAssist AI. All rights reserved.
            </p>
            <p className="text-sm text-gray-400 mt-2 md:mt-0">
              For educational purposes only. Not a substitute for professional medical advice.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;