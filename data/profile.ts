import type { Lang } from "@/lib/i18n";

export const common = {
  name: "Hai Dang Dev",
  email: "haidang9ahv1@gmail.com",
  phone: "(+84) 919 769 987",
  links: {
    github: "https://github.com/haidangcs14",
    linkedin: "https://www.linkedin.com/in/haidang-dev",
    cv: "/HaiDang_SE_CV_ENG_v2.pdf",
  },
  avatar: "/avatar.jpg",
  skills: [
    "Python",
    "Docker",
    "FastAPI",
    ".NET",
    "WPF",
    "OpenCV",
    "Tensorflow",
    "PyTorch",
    "HuggingFace",
    "Streamlit",
    "MS SQL Server",
    "MongoDB",
  ],
};

export type Content = {
  role: string;
  location: string;
  siteTitle: string;
  about: string[];
  experience: {
    period: string;
    title: string; // dòng đậm: công ty hoặc "Freelance Developer"
    subtitle?: string; // dòng nghiêng: chức danh
    location?: string; // địa điểm (nằm bên phải, dòng nghiêng)
    url?: string; // nếu có, tiêu đề sẽ thành link
    description?: string;
    technologies?: string;
    responsibilities?: string[];
  }[];
  projects: {
    title: string;
    tech?: string;
    org: string;
    context: string;
    points: string[];
  }[];
  certificates: {
    category: string;
    name: string;
    issuer: string;
    year: string;
    url?: string;
  }[];
  education: { school: string; degree: string; period: string }[];
  updated: string;
};

export const content: Record<Lang, Content> = {
  vi: {
    role: "Software Engineer",
    location: "Việt Nam",
    siteTitle: "Hai Dang | Software Engineer",
    about: [
      "Xin chào 👋, mình là Hải Đăng, hiện đang làm Software Engineer. Mình tập trung vào backend, các dự án outsource và xây dựng các dự án liên quan đến giáo dục.",
      "Trước đó mình làm tại các công ty phần mềm trong và ngoài nước, xây dựng hệ thống giáo dục cho trung tâm học thêm ở Nhật Bản và các dự án STEM, NCKH cho học sinh ở Việt Nam.",
    ],

    experience: [
      {
        period: "Sep 2024 – Present",
        title: "Lập trình viên tự do (Freelance Developer)",
        subtitle: "Kỹ sư phần mềm",
        location: "Hà Nội",
        description:
          "Lập trình viên tự do và người hướng dẫn (mentor), chuyên về Python và phát triển phần mềm. Tập trung xây dựng lộ trình học tập thực tiễn, đào tạo thông qua dự án và trang bị các kỹ năng phù hợp với nhu cầu thực tế của ngành công nghiệp phần mềm.",
        technologies:
          "Python3, Beautiful Soup, Selenium, Computer Vision, Machine Learning, FastAPI, MongoDB, Git, v.v.",
        responsibilities: [
          "Xây dựng lộ trình học tập có cấu trúc và các bài tập lập trình thực hành, giúp giảm 30% thời gian làm quen và tiếp cận kiến thức cho người học mới.",
          "Hướng dẫn hơn 5 học viên từ trình độ cơ bản đến nâng cao về Python, thuật toán và phát triển phần mềm, đạt tỷ lệ hoàn thành dự án 80%.",
          "Thiết kế và triển khai hơn 5 dự án thực hành (ví dụ: mô hình phân loại, ứng dụng web), giúp nâng cao kỹ năng phát triển phần mềm thực tế của học viên.",
          "Thực hiện đánh giá mã nguồn (Code Review) và hỗ trợ gỡ lỗi (Debugging), góp phần nâng cao chất lượng code và khả năng giải quyết vấn đề.",
        ],
      },
      {
        period: "Jan 2024 – Sep 2024",
        title: "Rikai Mind",
        url: "https://careers.rikai.technology/",
        subtitle: "Kỹ sư phần mềm",
        location: "Hà Nội",
        description:
          "Tái xây dựng ứng dụng quản lý hoạt động dạy và học cho một trung tâm giáo dục tại Nhật Bản, thay thế hệ thống cũ bằng WPF, C# và SQL Server. Áp dụng kiến trúc MVVM nhằm cải thiện khả năng bảo trì, hiệu suất và khả năng mở rộng của hệ thống.",
        technologies:
          "C#, .NET, WPF (MVVM), SQL Server, Excel, Git, Gitlab, SVM.",
        responsibilities: [
          "Áp dụng kiến trúc MVVM trong các ứng dụng WPF nhằm nâng cao khả năng bảo trì mã nguồn và tách biệt các thành phần xử lý.",
          "Thiết kế và tài liệu hóa mô hình dữ liệu cũng như luồng hoạt động của hệ thống cho hơn 5 module UX/UI.",
          "Phát triển, kiểm thử và gỡ lỗi các tính năng của ứng dụng, đảm bảo tính ổn định và nâng cao trải nghiệm người dùng.",
          "Tái cấu trúc và chuyển đổi các nghiệp vụ xử lý dữ liệu trên Excel thành mã nguồn ứng dụng, đáp ứng yêu cầu phần mềm của khách hàng và cải thiện khả năng bảo trì.",
        ],
      },
      {
        period: "Apr 2023 – Sep 2023",
        title: "Trung tâm Ứng cứu khẩn cấp không gian mạng Việt Nam (VNCERT)",
        url: "https://vncert.vn/",
        subtitle: "Thực tập sinh Python",
        location: "Hà Nội",
        description:
          "Thực tập sinh Python, tập trung vào lập trình Python, xây dựng giao diện người dùng và xử lý logic ứng dụng cho các nền tảng học tập trực tuyến.",
        technologies: "Python3, NodeJS, UI Development, Git, Gitlab.",
        responsibilities: [
          "Vận dụng các kiến thức nền tảng về lập trình Python để hỗ trợ các công việc phát triển phần mềm và cải thiện kỹ năng lập trình.",
          "Phát triển và triển khai các thành phần giao diện người dùng cho màn hình bài giảng của các khóa học trực tuyến.",
          "Xử lý logic ứng dụng nhằm đảm bảo các chức năng hoạt động ổn định và mang lại trải nghiệm mượt mà cho người dùng trên các module học tập.",
        ],
      },
      {
        period: "Jan 2023 – Apr 2023",
        title: "AHT Tech",
        url: "https://www.arrowhitech.com/",
        subtitle: "Thực tập sinh Python",
        location: "Hà Nội",
      },
    ],

    projects: [
      {
        title: "Project Alpha",
        tech: "Python, FastAPI, MongoDB, Docker",
        org: "Company X",
        context: "Nền tảng xử lý tài liệu",
        points: [
          "Thiết kế kiến trúc microservices xử lý hơn 10.000 trang mỗi giờ.",
          "Xây dựng gateway tập trung để theo dõi chi phí sử dụng API của từng khách hàng.",
          "Xây dựng hệ thống đánh giá tự động, so sánh chất lượng giữa các bản phát hành.",
        ],
      },
      {
        title:
          "Phát triển hệ thống nhận diện biển số xe ứng dụng Machine Learning.",
        tech: "Python, OpenCV, Scikit-learn, Django, CNN",
        org: "Cá nhân",
        context: "Công cụ nội bộ",
        points: [
          "Phát triển hệ thống nhận diện biển số xe hoàn chỉnh (End-to-End) sử dụng mạng nơ-ron nhân tạo (Neural Networks) để phát hiện biển số và phân loại ký tự từ hình ảnh.",
          "Xây dựng quy trình tiền xử lý dữ liệu (Data Preprocessing) bằng OpenCV và Scikit-learn, bao gồm khử nhiễu và xử lý dữ liệu hình ảnh bị thiếu hoặc không đồng nhất nhằm cải thiện hiệu suất mô hình.",
          "Thiết kế, huấn luyện và tối ưu hóa các mô hình Machine Learning nhằm nâng cao độ chính xác trong việc nhận diện biển số xe từ hình ảnh đầu vào.",
          "Xây dựng và triển khai ứng dụng web sử dụng Django để tích hợp mô hình đã huấn luyện, cho phép thực hiện nhận diện biển số theo thời gian thực thông qua giao diện thân thiện với người dùng.",
        ],
      },
    ],
    // awards: [
    //   {
    //     rank: "Top 5+",
    //     title: "Học bổng khuyến khích học tập",
    //     detail:
    //       "Đạt học bổng khuyến khích học tập trong nhiều kì học liên tiếp nhờ thành tích học tập xuất sắc và tham gia nghiên cứu khoa học.",
    //     year: "2020, 2021, 2022",
    //   },
    // ],
    certificates: [
      {
        category: "Tiếng Anh",
        name: "Aptis General, trình độ B1 (CEFR)",
        issuer: "British Council",
        year: "2024",
        url: "https://credentials.britishcouncil.org/c724acfb-3ca2-4fa0-bca5-45fb8b701f65?key=6790630b0d2f912bd3b271cd1034cf11c5a27f02c01cba0fdf0dfd43f72319e3#acc.OwmuNkvt",
      },
      {
        category: "AWS",
        name: "AWS Certified Cloud Practitioner",
        issuer: "Amazon Web Services",
        year: "2023",
      },
      {
        category: "Python",
        name: "PCEP: Certified Entry-Level Python Programmer",
        issuer: "Python Institute",
        year: "2023",
      },
    ],
    education: [
      {
        school: "Trường CNTT&TT - Đại học Công nghiệp Hà Nội",
        degree: "Thạc sĩ Hệ thống thông tin",
        period: "2023 – 2026",
      },
      {
        school: "Trường Đại học Công nghiệp Hà Nội",
        degree: "Cử nhân Khoa học máy tính",
        period: "2019 – 2023",
      },
    ],
    updated: "11/2026",
  },

  en: {
    role: "Software Engineer",
    location: "Vietnam",
    siteTitle: "Your Name | Software Engineer",
    about: [
      "Hello 👋, I'm Hai Dang, a Software Engineer specializing in backend development, outsourcing projects, and building education-focused solutions.",
      "I have previously worked with both domestic and international software companies, contributing to the development of educational systems for tutoring centers in Japan, as well as STEM and scientific research projects for students in Vietnam.",
    ],
    experience: [
      {
        period: "Sep 2024 – Present",
        title: "Freelance Developer",
        subtitle: "Software Engineer",
        location: "Ha Noi",
        description:
          "Freelance developer and mentor specializing in Python and software development, focused on delivering practical, project-based learning and industry-relevant skills.",
        technologies:
          "Python3, Beautiful Soup, Selenium, Computer Vision, Machine Learning, FastAPI, MongoDB, Git, etc.",
        responsibilities: [
          "Created structured learning paths and coding exercises, reducing onboarding time for new learners by 30%.",
          "Mentored 5+ learners (beginner to advanced) in Python, algorithms, and software development, achieving 80% project completion rate.",
          "Designed and delivered 5+ hands-on projects (e.g., classification models, web applications), improving learners' practical development skills.",
          "Conducted code reviews and provided debugging support, enhancing code quality and problem-solving capabilities.",
        ],
      },
      {
        period: "Jan 2024 – Sep 2024",
        title: "Rikai Mind",
        url: "https://careers.rikai.technology/",
        subtitle: "Software Engineer",
        location: "Ha Noi",
        description:
          "Rebuilt a tutoring management application for a Japanese education center from a legacy system using WPF, C#, and SQL Server. Applied the MVVM architecture to improve maintainability, performance, and scalability.",
        technologies:
          "C#, .NET, WPF (MVVM), SQL Server, Excel, Git, Gitlab, SVM.",
        responsibilities: [
          "Applied MVVM architecture in WPF applications to improve code maintainability and separation of concerns.",
          "Designed and documented data models and system workflows for 5 + UX / UI modules.",
          "Developed, tested, and debugged application features, ensuring reliability and high-quality user experience.",
          "Refactored and migrated Excel-based business logic into application code to align with client software requirements and improve maintainability",
        ],
      },
      {
        period: "Apr 2023 – Sep 2023",
        title:
          "Vietnam Cybersecurity Emergency Response Team / Coordination Center (VNCERT)",
        url: "https://vncert.vn/",
        subtitle: "Python Developer Internship",
        location: "Ha Noi",
        description:
          "Python intern focusing on Python programming and building user interfaces and application logic for online learning platforms.",
        technologies: "Python3, NodeJS, UI Development, Git, Gitlab.",
        responsibilities: [
          "Applied Python programming fundamentals to support development tasks and improve coding practices.",
          "Developed and implemented user interface components for online course lecture screens.",
          "Handled application logic to ensure smooth functionality and user experience across learning modules.",
        ],
      },
      {
        period: "Jan 2023 – Apr 2023",
        title: "AHT Tech",
        url: "https://www.arrowhitech.com/",
        subtitle: "Python Developer Internship",
        location: "Ha Noi",
      },
    ],
    projects: [
      {
        title: "Project Alpha",
        org: "Company X",
        context: "Document processing platform",
        points: [
          "Designed a microservices architecture processing over 10,000 pages per hour.",
          "Built a central gateway to track API usage and cost per client.",
          "Built an automated evaluation system comparing quality across releases.",
        ],
      },
      {
        title: "License Plate Recognition using Neural Network",
        tech: "Python, OpenCV, Scikit-learn, Django, CNN",
        org: "Individual",
        context: "Internal tooling",
        points: [
          "Developed an end-to-end license plate recognition system using neural networks for image-based detection and character classification.",
          "Implemented data preprocessing pipelines with OpenCV and Scikit-learn, including noise reduction and handling incomplete or inconsistent image data to improve model performance.",
          "Designed, trained, and optimized machine learning models to perform accurate license plate recognition from input images.",
          "Built and deployed a Django-based web application to integrate the trained model, enabling real-time inference through a user-friendly interface",
        ],
      },
    ],
    // awards: [
    //   {
    //     rank: "Top 5+",
    //     title: "Academic Incentive Scholarship",
    //     detail:
    //       "Received academic merit scholarships for multiple consecutive semesters, thanks to outstanding academic performance and participation in scientific research.",
    //     year: "2020, 2021, 2022",
    //   },
    // ],
    certificates: [
      {
        category: "English",
        name: "Aptis General, CEFR level B1",
        issuer: "British Council",
        year: "2024",
        url: "https://credentials.britishcouncil.org/c724acfb-3ca2-4fa0-bca5-45fb8b701f65?key=6790630b0d2f912bd3b271cd1034cf11c5a27f02c01cba0fdf0dfd43f72319e3#acc.OwmuNkvt",
      },
      {
        category: "AWS",
        name: "AWS Certified Cloud Practitioner",
        issuer: "Amazon Web Services",
        year: "2023",
      },
      {
        category: "Python",
        name: "PCEP: Certified Entry-Level Python Programmer",
        issuer: "Python Institute",
        year: "2023",
      },
    ],
    education: [
      {
        school: "SoICT - Hanoi University of Industry",
        degree: "Master of Information Systems",
        period: "2023 – 2026",
      },
      {
        school: "Hanoi University of Industry",
        degree: "Bachelor of Computer Science",
        period: "2019 – 2023",
      },
    ],
    updated: "Nov/2026",
  },
};

/** Nhãn giao diện (menu, tiêu đề mục, nút...) */
export type UI = {
  nav: Record<
    | "home"
    | "experience"
    | "projects"
    | "certificates"
    | "education"
    | "skills",
    string
  >;
  sections: Record<
    "experience" | "projects" | "certificates" | "education" | "skills",
    string
  >;
  at: string;
  skip: string;
  cv: string;
  themeToggle: string;
  langLabel: string;
  lastUpdated: string;
  description: string;
  technologies: string;
  responsibilities: string;
  viewCredential: string;
  backToTop: string;
  sectionMenu: string;
  breadcrumb: string;
};

export const ui: Record<Lang, UI> = {
  vi: {
    nav: {
      home: "Trang chủ",
      experience: "Kinh nghiệm",
      projects: "Dự án",
      certificates: "Giải thưởng",
      education: "Học vấn",
      skills: "Kỹ năng",
    },
    sections: {
      experience: "Kinh nghiệm làm việc",
      projects: "Dự án tiêu biểu",
      certificates: "Chứng chỉ",
      education: "Học vấn",
      skills: "Kỹ năng và công nghệ",
    },
    at: "tại",
    skip: "Chuyển đến nội dung chính",
    cv: "CV",
    themeToggle: "Đổi giao diện sáng/tối",
    langLabel: "Ngôn ngữ",
    lastUpdated: "Cập nhật lần cuối",
    description: "Mô tả",
    technologies: "Công nghệ",
    responsibilities: "Trách nhiệm",
    viewCredential: "Xem chứng chỉ",
    backToTop: "Lên đầu trang",
    sectionMenu: "Chọn mục",
    breadcrumb: "Vị trí hiện tại",
  },
  en: {
    nav: {
      home: "Home",
      experience: "Experience",
      projects: "Projects",
      certificates: "Certificates",
      education: "Education",
      skills: "Skills",
    },
    sections: {
      experience: "Industry experience",
      projects: "Selected projects",
      certificates: "Certificates and trainings",
      education: "Education",
      skills: "Skills and technologies",
    },
    at: "at",
    skip: "Skip to main content",
    cv: "CV",
    themeToggle: "Toggle light/dark theme",
    langLabel: "Language",
    lastUpdated: "Last updated",
    description: "Description",
    technologies: "Technologies",
    responsibilities: "Responsibilities",
    viewCredential: "View credential",
    backToTop: "Back to top",
    sectionMenu: "Jump to section",
    breadcrumb: "You are here",
  },
};
