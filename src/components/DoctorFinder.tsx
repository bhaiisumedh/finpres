import React, { useState } from 'react';
import { MapPin, Phone, Star, Clock, Navigation } from 'lucide-react';
import { Doctor } from '../types';

const DoctorFinder: React.FC = () => {
  const [location, setLocation] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [doctors] = useState<Doctor[]>([
    {
      id: '1',
      name: 'Dr. Sarah Johnson',
      specialty: 'Internal Medicine',
      rating: 4.8,
      distance: '0.5 miles',
      address: '123 Medical Center Dr, City, ST 12345',
      phone: '(555) 123-4567',
      availability: 'Available today'
    },
    {
      id: '2',
      name: 'Dr. Michael Chen',
      specialty: 'Endocrinology',
      rating: 4.9,
      distance: '1.2 miles',
      address: '456 Health Plaza, City, ST 12345',
      phone: '(555) 234-5678',
      availability: 'Next available: Tomorrow'
    },
    {
      id: '3',
      name: 'Dr. Emily Rodriguez',
      specialty: 'Cardiology',
      rating: 4.7,
      distance: '2.1 miles',
      address: '789 Heart Center Blvd, City, ST 12345',
      phone: '(555) 345-6789',
      availability: 'Available this week'
    }
  ]);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center space-x-2 mb-6">
        <MapPin className="w-6 h-6 text-red-600" />
        <h2 className="text-2xl font-bold text-gray-900">Find Nearby Doctors</h2>
      </div>

      {/* Search Filters */}
      <div className="grid md:grid-cols-3 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Location
          </label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter your zip code or city"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Specialty
          </label>
          <select
            value={specialty}
            onChange={(e) => setSpecialty(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">All Specialties</option>
            <option value="internal">Internal Medicine</option>
            <option value="endocrinology">Endocrinology</option>
            <option value="cardiology">Cardiology</option>
            <option value="primary">Primary Care</option>
          </select>
        </div>
        <div className="flex items-end">
          <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Search Doctors
          </button>
        </div>
      </div>

      {/* Map Placeholder */}
      <div className="bg-gray-100 rounded-lg h-64 mb-6 flex items-center justify-center">
        <div className="text-center">
          <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-2" />
          <p className="text-gray-600">Interactive map will be displayed here</p>
          <p className="text-sm text-gray-500 mt-1">Showing doctors within 10 miles</p>
        </div>
      </div>

      {/* Doctor List */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Nearby Healthcare Providers
        </h3>
        
        {doctors.map((doctor) => (
          <div key={doctor.id} className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <h4 className="text-lg font-semibold text-gray-900">{doctor.name}</h4>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600">{doctor.rating}</span>
                  </div>
                </div>
                
                <p className="text-blue-600 font-medium mb-1">{doctor.specialty}</p>
                
                <div className="flex items-center space-x-4 text-sm text-gray-600 mb-2">
                  <div className="flex items-center space-x-1">
                    <Navigation className="w-4 h-4" />
                    <span>{doctor.distance}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{doctor.availability}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm mb-2">{doctor.address}</p>
                
                <div className="flex items-center space-x-1 text-sm text-gray-600">
                  <Phone className="w-4 h-4" />
                  <span>{doctor.phone}</span>
                </div>
              </div>
              
              <div className="flex flex-col space-y-2 ml-4">
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm">
                  Book Appointment
                </button>
                <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                  View Profile
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorFinder;