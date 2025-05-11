import appointment_img from './appointment_img.png'
import header_img from './header_img.png'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.png'
import contact_image from './contact_image.png'
import about_image from './about_image.png'
import logo from './logo.svg'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import doc1 from './doc1.png'
import doc2 from './doc2.png'
import doc3 from './doc3.png'
import doc4 from './doc4.png'
import doc5 from './doc5.png'
import doc6 from './doc6.png'
import doc7 from './doc7.png'
import doc8 from './doc8.png'
import doc9 from './doc9.png'
import doc10 from './doc10.png'
import doc11 from './doc11.png'
import doc12 from './doc12.png'
import doc13 from './doc13.png'
import doc14 from './doc14.png'
import doc15 from './doc15.png'
import Dermatologist from './Dermatologist.svg'
import Gastroenterologist from './Gastroenterologist.svg'
import General_physician from './General_physician.svg'
import Gynecologist from './Gynecologist.svg'
import Neurologist from './Neurologist.svg'
import Pediatricians from './Pediatricians.svg'
import ChatBot from './chat-bot.png'
import SpeechBubble from './speech-bubble.png'
import TipsAndTricks from './tips-and-tricks.png'
import Stress from './stress.png'


export const assets = {
    appointment_img,
    header_img,
    group_profiles,
    logo,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo
}



export const whatWeProvide = [
    {
      speciality: 'Counselor Booking',
      description: 'Book sessions with certified mental health counselors at your convenience.',
      image: General_physician,
    },
    {
      speciality: 'AI Depression Check',
      description: 'Use our free AI-integrated tool to assess signs of depression in minutes.',
      image: ChatBot, 
    },
    {
      speciality: 'Live Chat with Counselors',
      description: 'Get instant support by chatting with licensed professionals in real-time.',
      image: SpeechBubble,
    },
    {
      speciality: 'Mental Health Tips',
      description: 'Access curated tips and exercises to improve your daily mental well-being.',
      image: TipsAndTricks,
    },
    {
      speciality: 'Stress & Anxiety Management',
      description: 'Resources and professionals to help manage stress, anxiety, and burnout.',
      image: Stress,
    }
  ];
  

  export const counsellors = [
    {
      _id: 'coun1',
      name: 'Dr. Olivia Bennett',
      image: doc1,
      speciality: 'Mental Health Counselor',
      degree: 'M.A. Psychology',
      experience: '5 Years',
      about: 'Olivia is dedicated to helping individuals manage stress, anxiety, and emotional challenges through empathetic listening and evidence-based strategies.',
      fees: 45,
      address: {
        line1: '22nd Cross, Richmond',
        line2: 'Circle, Ring Road, London'
      }
    },
    {
      _id: 'coun2',
      name: 'Dr. Ethan Moore',
      image: doc2,
      speciality: 'Clinical Psychologist',
      degree: 'Ph.D. Psychology',
      experience: '6 Years',
      about: 'Ethan specializes in cognitive behavioral therapy and works with clients experiencing depression, PTSD, and behavioral issues.',
      fees: 50,
      address: {
        line1: '33rd Cross, Richmond',
        line2: 'Circle, Ring Road, London'
      }
    },
    {
      _id: 'coun3',
      name: 'Dr. Mia Thompson',
      image: doc3,
      speciality: 'Child & Adolescent Counselor',
      degree: 'M.Sc. Child Psychology',
      experience: '3 Years',
      about: 'Mia helps children and teens manage emotional and social difficulties, providing guidance in a safe and supportive environment.',
      fees: 40,
      address: {
        line1: '44th Cross, Richmond',
        line2: 'Circle, Ring Road, London'
      }
    },
    {
      _id: 'coun4',
      name: 'Dr. Liam Anderson',
      image: doc4,
      speciality: 'Family & Marriage Counselor',
      degree: 'M.A. Counseling',
      experience: '7 Years',
      about: 'Liam supports families and couples in building healthy communication and resolving relational conflicts effectively.',
      fees: 55,
      address: {
        line1: '55th Cross, Richmond',
        line2: 'Circle, Ring Road, London'
      }
    },
    {
      _id: 'coun5',
      name: 'Dr. Emma Wilson',
      image: doc5,
      speciality: 'Grief & Trauma Specialist',
      degree: 'Ph.D. Clinical Psychology',
      experience: '8 Years',
      about: 'Emma guides individuals through the healing process after loss or trauma, with compassion and professional insight.',
      fees: 60,
      address: {
        line1: '66th Cross, Richmond',
        line2: 'Circle, Ring Road, London'
      }
    },
     {
      _id: 'coun6',
      name: 'Dr. Olivia Bennett',
      image: doc4,
      speciality: 'Mental Health Counselor',
      degree: 'M.A. Psychology',
      experience: '5 Years',
      about: 'Olivia is dedicated to helping individuals manage stress, anxiety, and emotional challenges through empathetic listening and evidence-based strategies.',
      fees: 20,
      address: {
        line1: '22nd Cross, Richmond',
        line2: 'Circle, Ring Road, London'
      }
    }
  ];
  