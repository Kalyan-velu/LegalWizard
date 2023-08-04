import DlaPiper from "/assests/firm-logos/DLA_Piper_Logo.svg";
import Eversheds_Sutherland_logo from "/assests/firm-logos/Eversheds_Sutherland_logo.svg";
import Ogletree_deakins from "/assests/firm-logos/ogletree-deakins.png";

interface Testimonial {
  id: number;
  name: string;
  designation: string;
  header: string;
  content: string;
  avatarUrl: string;
}

interface FirmDataItem {
  name: string;
  logo: string; // URL to the logo image (supports .svg, .png, .webp, etc.)
  alt: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Marvin McKinney",
    designation: "UI UX Designer",
    header: "If I could give a 7star Ratin I would...",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius lacinia nisi, id scelerisque tellus pellentesque a. Nunc eget justo et quam gravida eleifend.",
    avatarUrl: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    id: 2,
    name: "Arlene McCoy",
    designation: "UI UX Designer",
    header: "Best Company AI...",
    content:
      "In hac habitasse platea dictumst. Nulla nec risus libero. Vestibulum nec rhoncus orci. Curabitur dapibus tincidunt tristique. Phasellus lacinia ex nec auctor faucibus.",
    avatarUrl: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    id: 3,
    name: "Courtney Henry",
    designation: "UI UX Designer",
    header: "Must have tool for Creative Agency...",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius lacinia nisi, id scelerisque tellus pellentesque a. Nunc eget justo et quam gravida eleifend.",
    avatarUrl: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    id: 4,
    name: "Jacob Jones",
    designation: "UI UX Designer",
    header: "Amazing And Efficient...",
    content:
      "In hac habitasse platea dictumst. Nulla nec risus libero. Vestibulum nec rhoncus orci. Curabitur dapibus tincidunt tristique. Phasellus lacinia ex nec auctor faucibus.",
    avatarUrl: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 5,
    name: "Jane Smith",
    designation: "Marketing Manager",
    header: "Amazing and Efficient...",
    content:
      "In hac habitasse platea dictumst. Nulla nec risus libero. Vestibulum nec rhoncus orci. Curabitur dapibus tincidunt tristique. Phasellus lacinia ex nec auctor faucibus.",
    avatarUrl: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    id: 6,
    name: "John Doe",
    designation: "CEO",
    header: "Best Company AI...",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius lacinia nisi, id scelerisque tellus pellentesque a. Nunc eget justo et quam gravida eleifend.",
    avatarUrl: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    id: 7,
    name: "Jane Smith",
    designation: "Marketing Manager",
    header: "Best Company AI...",
    content:
      "In hac habitasse platea dictumst. Nulla nec risus libero. Vestibulum nec rhoncus orci. Curabitur dapibus tincidunt tristique. Phasellus lacinia ex nec auctor faucibus.",
    avatarUrl: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  // Add more testimonials here...
];

const firmData: FirmDataItem[] = [
  {
    name: "DLAPiper",
    logo: DlaPiper,
    alt: "DLAPiper",
  },
  {
    name: "Eversheds_Sutherland",
    logo: Eversheds_Sutherland_logo,
    alt: "Eversheds_Sutherland",
  },
  // Add more firms here using the same structure
  {
    name: "O%27Melveny",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/52/O%27Melveny_%26_Myers_logo.svg",
    alt: "O%27Melveny",
  },
  {
    name: "fisherphillips",
    logo: "https://www.fisherphillips.com/a/web/Q87jgrng2TvBrFgPUw4q9/2kpWCb/download.svg",
    alt: "fisherphillips",
  },
  {
    name: "Ogletree_deakins",
    logo: Ogletree_deakins,
    alt: "Ogletree_deakins",
  },
];
export { testimonials, firmData };
