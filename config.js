// config.js
const config = {
    // [개인 정보]
    profile: {
        name: "홍길동 (Gil-Dong Hong)",
        role: "Ph.D. Candidate in Your Major",
        university: "OO 대학교 (OO University)",
        email: "email@university.edu",
        github: "https://github.com/yourid",
        scholar: "https://scholar.google.com/citations?user=yourid", // 구글 스칼라 링크
        bio: "안녕하세요. 저는 OO 분야를 연구하는 박사과정생입니다. 주로 데이터 분석과 인공지능을 활용한 연구에 관심이 있습니다."
    },

    // [학력 및 경력 (CV)]
    education: [
        { date: "2023 - Present", title: "Ph.D. in Major", place: "OO University" },
        { date: "2021 - 2023", title: "M.S. in Major", place: "OO University" },
        { date: "2017 - 2021", title: "B.S. in Major", place: "OO University" }
    ],

    // [논문 실적]
    publications: [
        {
            year: "2024",
            title: "Research on AI-based Data Analysis",
            authors: "<b>G. Hong</b>, A. Smith, B. Kim",
            journal: "Journal of Computer Science (IF: 4.5)",
            link: "#"
        },
        {
            year: "2023",
            title: "Analysis of Big Data Trends",
            authors: "A. Smith, <b>G. Hong</b>",
            journal: "International Conference on Data",
            link: "#"
        }
    ],

    // [갤러리 / 연구 프로젝트] - 이미지 파일 경로를 넣으세요
    projects: [
        {
            title: "Project Alpha",
            description: "연구 프로젝트 A에 대한 설명입니다.",
            image: "https://via.placeholder.com/300x200" // 실제 이미지 경로로 변경 (예: images/p1.jpg)
        },
        {
            title: "Project Beta",
            description: "실험 결과 시각화 자료입니다.",
            image: "https://via.placeholder.com/300x200"
        }
    ]
};