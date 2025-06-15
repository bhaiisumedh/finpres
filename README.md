# AI Prescription Assistant

A comprehensive full-stack web application that leverages artificial intelligence to analyze prescription images and PDFs, providing users with detailed medicine information, potential diagnoses, and nearby healthcare provider recommendations.

## 🚀 Features

### Core AI Capabilities
- **OCR Text Extraction**: Advanced AI-powered text extraction from prescription images and PDFs
- **NLP/NER Analysis**: Natural Language Processing to identify medicines, dosages, symptoms, and medical instructions
- **ML-Based Diagnosis**: Machine learning algorithms to predict potential medical conditions
- **Medicine Database**: Comprehensive drug information including side effects, interactions, and warnings
- **Doctor Finder**: Location-based healthcare provider search with ratings and availability

### User Interface
- **Drag & Drop Upload**: Intuitive file upload with support for JPEG, PNG, and PDF files
- **Real-time Processing**: Live status updates during AI analysis pipeline
- **Interactive Results**: Detailed prescription analysis with expandable medicine information
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern UI/UX**: Beautiful, production-ready interface with smooth animations

## 🛠 Technology Stack

### Frontend
- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **Lucide React** for icons
- **Vite** for build tooling

### Backend
- **Node.js** with Express
- **Multer** for file upload handling
- **CORS** for cross-origin requests
- **UUID** for unique identifiers

### AI Services (Simulated)
- OCR text extraction simulation
- NLP/NER medical text analysis
- ML-based diagnosis prediction
- Medicine database lookup
- Recommendation generation

## 📋 Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

## 🔧 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ai-prescription-assistant
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create uploads directory**
   ```bash
   mkdir uploads
   ```

4. **Start the application**
   ```bash
   # Start both frontend and backend concurrently
   npm run dev
   
   # Or start them separately:
   # Frontend (port 5173)
   npm run dev:frontend
   
   # Backend (port 3001)
   npm run dev:backend
   ```

5. **Access the application**
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:3001

## 🏗 Project Structure

```
ai-prescription-assistant/
├── src/                          # Frontend source code
│   ├── components/              # React components
│   │   ├── Header.tsx          # Application header
│   │   ├── UploadSection.tsx   # File upload interface
│   │   ├── ProcessingStatus.tsx # AI processing stages
│   │   ├── ResultsSection.tsx  # Analysis results display
│   │   ├── MedicineInfo.tsx    # Detailed medicine information
│   │   ├── DoctorFinder.tsx    # Healthcare provider search
│   │   └── Footer.tsx          # Application footer
│   ├── types.ts                # TypeScript type definitions
│   ├── App.tsx                 # Main application component
│   └── main.tsx               # Application entry point
├── server/                     # Backend source code
│   └── index.js               # Express server with AI services
├── uploads/                   # File upload directory
└── README.md                 # This file
```

## 🔌 API Endpoints

### Health Check
```
GET /api/health
```

### Prescription Analysis
```
POST /api/analyze-prescription
Content-Type: multipart/form-data
Body: prescription file (image/PDF)
```

### Medicine Information
```
GET /api/medicine/:name
```

### Nearby Doctors
```
GET /api/doctors/nearby?lat=&lng=&specialty=&radius=
```

## 🎯 Usage Guide

1. **Upload Prescription**
   - Drag and drop a prescription image or PDF
   - Or click "Choose File" to browse files
   - Supported formats: JPEG, PNG, PDF (max 10MB)

2. **AI Processing**
   - Watch real-time processing stages:
     - Text extraction (OCR)
     - Content analysis (NLP/NER)
     - Diagnosis prediction (ML)
     - Research & recommendations

3. **Review Results**
   - View extracted prescription text
   - Explore identified medicines with detailed information
   - Review AI-generated diagnosis and confidence scores
   - Read personalized health recommendations

4. **Find Healthcare Providers**
   - Search for nearby doctors by specialty
   - View ratings, availability, and contact information
   - Interactive map integration (placeholder)

## 🧠 AI Services Simulation

Since this runs in a WebContainer environment, the AI services are simulated but demonstrate realistic functionality:

- **OCR Service**: Simulates text extraction with confidence scores
- **NLP Analysis**: Identifies medicines, dosages, and medical terms
- **ML Diagnosis**: Predicts conditions based on prescription content
- **Medicine Database**: Comprehensive drug information lookup
- **Recommendation Engine**: Generates personalized health advice

## 🚦 Production Deployment

For production deployment, you would integrate real AI services:

1. **OCR**: Google Vision API, AWS Textract, or Tesseract
2. **NLP/NER**: spaCy, Hugging Face Transformers, or AWS Comprehend Medical
3. **ML Diagnosis**: Custom trained models or medical AI APIs
4. **Medicine Database**: RxNorm, openFDA, or commercial drug databases
5. **Maps**: Google Maps API for doctor finder functionality

## 🔒 Security & Compliance

- File upload validation and size limits
- CORS configuration for secure requests
- Input sanitization and error handling
- HIPAA compliance considerations for production
- Secure API key management (environment variables)

## 🎨 Design Features

- Modern gradient backgrounds and color schemes
- Smooth animations and micro-interactions
- Responsive breakpoints for all devices
- Accessible design with proper contrast ratios
- Professional medical-grade interface
- Loading states and progress indicators

## 🧪 Testing

```bash
# Run linting
npm run lint

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📝 Important Notes

- This is a demonstration application with simulated AI services
- Not intended for actual medical use without proper AI integration
- All medical information is for educational purposes only
- Always consult healthcare professionals for medical advice
- Ensure proper data privacy and HIPAA compliance for production use

## 🚀 Future Enhancements

- Real AI service integration
- User authentication and profiles
- Medical history tracking
- Prescription reminders
- Telemedicine integration
- Mobile app development
- Multi-language support
- Advanced analytics dashboard

## 📞 Support

For technical support or questions about the AI Prescription Assistant application, please refer to the documentation or contact the development team.

---

**Disclaimer**: This application is for educational and demonstration purposes only. It is not intended to replace professional medical advice, diagnosis, or treatment. Always consult qualified healthcare providers for medical decisions.