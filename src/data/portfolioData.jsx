import { Brain, TrendingUp, BarChart3, Database } from 'lucide-react';
import profileImg from '../assets/profile.jpg';

export const projects = [
  {
    title: "Spam/Scam call Classification and Location Detection System",
    description: "This project classifies calls as scam, spam, or ham, tracks their locations via geographic data, and visualizes patterns, frequencies, and durations using Whisper for audio-to-text.",
    tech: ["Python", "OpenCage API", "Whisper", "Sklearn", "Matplotlib", "Flask", "HTML/CSS"],
    icon: <Brain className="w-6 h-6" />,
    url: "https://github.com/achal3014/Spam-Fraud-Call-Location-Detection/blob/main/readme.md"
  },
  {
    title: "American Sign Language (ASL) Recognition",
    description: "Real-time ASL recognition system using computer vision and deep learning. Generated own dataset with 100+ images for each letter.",
    tech: ["Python", "OpenCV", "Mediapipe","TensorFlow", "Keras"],
    icon: <TrendingUp className="w-6 h-6" />,
    url: "https://github.com/achal3014/Sign-Language-Detection/blob/master/README.md"
  },
  {
    title: "Blood Cell Image Classification",
    description: "Automated classification of blood cell images using pre build YOLO v10 model. Used BCCD dataset with just 364 images still producing excellent results.",
    tech: ["Python", "OpenCV", "YOLOv10", "Pandas"],
    icon: <BarChart3 className="w-6 h-6" />,
    url: "https://github.com/achal3014/Blood_Cell_Image_Classification/blob/master/README.md"
  },
];

export const skills = {
  development: [
    "Java", "HTML/CSS", "JavaScript", "React", "Git", "SQL"
  ],
  dataScience: [
    "Python","Machine Learning", "Deep Learning", "TensorFlow", "Scikit-Learn", "Data Visualization"
  ]
};

export const personalInfo = {
  name: "S ACHAL",
  title: "DEVELOPER | DATA SCIENTIST",
  tagline: "In the symphony of data, I find the melodies that transform noise into insights and complexity into clarity",
  education: "B.E in Information Science and Engineering, 2026",
  experience: "Building skills via personal projects",
  bio: "Passionate developer and data scientist with expertise in machine learning, statistical analysis, frontend development, and DSA-based problem solving. Skilled at uncovering patterns in complex datasets and building data-driven solutions that create real impact.",
  image: profileImg
};