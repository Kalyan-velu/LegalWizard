import DlaPiper from "/assests/firm-logos/DLA_Piper_Logo.svg";
import Eversheds_Sutherland_logo from "/assests/firm-logos/Eversheds_Sutherland_logo.svg";
import Ogletree_deakins from "/assests/firm-logos/ogletree-deakins.png";

interface Testimonial {
  id: number;
  name: string;
  designation: string;
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
    name: "John Doe",
    designation: "CEO",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius lacinia nisi, id scelerisque tellus pellentesque a. Nunc eget justo et quam gravida eleifend.",
    avatarUrl: "/path/to/avatar/john-doe.jpg",
  },
  {
    id: 2,
    name: "Jane Smith",
    designation: "Marketing Manager",
    content:
      "In hac habitasse platea dictumst. Nulla nec risus libero. Vestibulum nec rhoncus orci. Curabitur dapibus tincidunt tristique. Phasellus lacinia ex nec auctor faucibus.",
    avatarUrl: "/path/to/avatar/jane-smith.jpg",
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
