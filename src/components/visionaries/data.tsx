interface visionProps {
  id: number;
  header: string;
  icon: string;
  paragraph: string;
}

export const Visions: visionProps[] = [
  {
    id: 1,
    header: "Write legal pleadings",
    icon: "/assests/team.png",
    paragraph:
      "At Legal Wizard, we use AI technology to help lawyers write legal pleadings faster and more efficiently. However, it's importent to remember that AI is not a substitute for attorney's understanding of the applicable law. While our system can provide suggestions and assistance, it's up to the attorney to ensure that facts, jurisprudence, citations, and case law are correctly representated in their brief.",
  },
  {
    id: 2,
    header: "Speed Up writing",
    icon: "/assests/robot.png",
    paragraph:
      "Legal Wizard is simply a tool to help speed up the writing process, bu it should never be used as a substitute for professional legal advice. Attorneys should always exercise independent professional jugement when utilizing the Legal Wizard platform",
  },
  {
    id: 3,
    header: "For Attorneys",
    icon: "/assests/support.png",
    paragraph:
      "By using Legal Wizard, attorneys agree to the AI and Attorney responsibility terms of service, which can be found in our Terms of Service agreement. If you have any questions about our platform or our terms of service, please don't hesitate to contact us.",
  },
];
