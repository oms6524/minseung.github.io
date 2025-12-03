const config = {
    // [개인 정보]
    profile: {
        name: "오민승 (Min-Seung Oh)",
        role: "Ph.D. Candidate in Soil Biogeochemistry",
        university: "서울대학교 (Seoul National University)",
        email: "oms6524@snu.ac.kr",
        // 👇 [NEW] 연구실 홈페이지 주소 (여기에 실제 주소를 넣으세요)
        labUrl: "https://kjmin.weebly.com/", 
        
        // 👇 리서치게이트 주소
        researchgate: "https://www.researchgate.net/profile/Min-Seung-Oh",
        scholar: "https://scholar.google.com/citations?user=dcZRV0AAAAAJ&hl=ko&oi=ao", 
        bio: "Hello! I’m a PhD student studying soil biogeochemistry, with research interests in enzyme activity in dry soils and soil microbiology."
    },

    // [학력 (CV)]
    education: [
        { date: "2024 - Present", title: "Ph.D. in Soil Biogeochemistry", place: "Seoul National University" },
        { date: "2022 - 2024", title: "M.S. in Environmental Microbiology", place: "Gyeongsang  National University" },
        { date: "2018 - 2022", title: "B.S. in Applied Biological Chemistry", place: "Gyeongsang  National University" }
    ],

    // [논문 실적]
    publications: [
        {
            year: "2025",
            title: "Crucial factors determining the response of activated sludge-derived fertilizer particles to crop root exudates",
            authors: "H. Ahn, J. Ur Rehman, T. Kim, <b>M. S. Oh</b>, H. Y. Yoon, C. Kim, Y. Lee, S. G. Shin, J.-R. Jeon",
            journal: "Journal of Environmental Chemical Engineering (IF: 7.2)",
            link: "https://www.sciencedirect.com/science/article/pii/S2213343725052078"
        },
        {
            year: "2025",
            title: "Synthesis of melanoidin-like polymers for non-roasted coffee brewing",
            authors: "Y. Lee, H. Y. Yoon, J. Kim, N. T. Phong, E.-N. Joe, M. Tag, <b>M. S. Oh</b>, J. Y. Moon, J.-R. Jeon",
            journal: "Food Bioscience (IF: 5.9) ",
            link: "https://www.sciencedirect.com/science/article/pii/S221242922501884X"
        },
        {
            year: "2024",
            title: "Recycling tempura powder debris derived from the fried food industry as a binder for 3-dimensional biodegradable composites: A novel circular economy alternative to low-performance plastics",
            authors: "<b>M. S. Oh</b>, H. Y. Yoon, N. T. Phong, Y. Lee, K. H. Kang, Y. M. Kim, K. S. Kim, J.-R. Jeon",
            journal: "Environmental Technology & Innovation (IF: 7.1) ",
            link: "https://www.sciencedirect.com/science/article/pii/S2352186424002700"
        },
        {
            year: "2024",
            title: "Methane emissions and the microbial community in flooded paddies affected by the application of Fe-stabilized natural organic matter",
            authors: "E.-N. Joe, H. G. Chae, J. Ur Rehman, <b>M. S. Oh</b>, H. Y. Yoon, H.-J. Shin, P. J. Kim, J. G. Lee, H. S. Gwon, J.-R. Jeon",
            journal: "Science of The Total Environment (IF: 8.0) ",
            link: "https://www.sciencedirect.com/science/article/pii/S0048969724000056"
        },
        {
            year: "2023",
            title: "Three-Dimensional Biomass Composites Using the Maillard Reaction Products of Molasses as a Binder",
            authors: "<b>M. S. Oh</b>, H. Y. Yoon, N. T. Phong, Y. Lee, K. H. Kang, Y. M. Kim, K. S. Kim, J.-R. Jeon",
            journal: "ACS Food Science & Technology (IF: 2.8) ",
            link: "https://pubs.acs.org/doi/full/10.1021/acsfoodscitech.3c00234"
        },
        {
            year: "2022",
            title: "Lignin metabolism by selected fungi and microbial consortia for plant stimulation: implications for biologically active humus genesis",
            authors: "J. Ur Rehman, E.-N. Joe, H. Y. Yoon, S. Kwon, <b>M. S. Oh</b>, E. J. Son, K.-S. Jang, J.-R. Jeon",
            journal: "Microbiology Spectrum (IF: 9.0) ",
            link: "https://journals.asm.org/doi/full/10.1128/spectrum.02637-22"
        },
        {
            year: "2020",
            title: "Effects of microbes from coal-related commercial humic substances on hydroponic crop cultivation: A microbiological view for agronomical use of humic substances",
            authors: "H. J. Jeong*, <b>M. S. Oh</b>*, J. Ur Rehman, H. Y. Yoon, J.-H. Kim, J. Shin, S. G. Shin, H. Bae, J.-R. Jeon",
            journal: "Journal of Agricultural and Food Chemistry (IF: 6.2) ",
            link: "https://pubs.acs.org/doi/full/10.1021/acs.jafc.0c05474"
        },
        {
            year: "2020",
            title: "Fungal mycelia functionalization with halloysite nanotubes for hyphal spreading and sorption behavior regulation: a new bio-ceramic hybrid for enhanced water treatment",
            authors: "H. Ahn, J. Ur Rehman, T. Kim, <b>M. S. Oh</b>, H. Y. Yoon, C. Kim, Y. Lee, S. G. Shin, J.-R. Jeon",
            journal: "Water Research (IF: 12.4) ",
            link: "https://pubs.acs.org/doi/full/10.1021/acs.jafc.0c05474"
        },
    ],

// [수상 실적] (NEW)
    awards: [
        { date: "2024", title: "NH Bank Talent Scholarship", org: "NH bank" },
        { date: "2022", title: "Agricultural Life Industry Startup Idea Contest (Top Award)", org: "GNU Agro Frontier Leader business group" },
        { date: "2021", title: "National Non-face-to-face Business Model Idea Contest (Top Award)", org: "Korea Techno Park" },
        { date: "2020", title: "Start-up Idea Contest (Top Award)", org: "GNU Public Education Innovation Center" },
        { date: "2018 – 2022", title: "Regular Scholarship", org: "Gyeongsang National University (GNU)" },
        { date: "2018 – 2020", title: "Agri and Food Talent Scholarship", org: "Ministry of Agriculture, Food and Rural Affairs" }
    ],

    // [특허] (NEW)
    patents: [
        {
            title: "Molasses-Biomass Composite and Manufacturing method",
            number: "KR 10-2465421-0000",
            inventors: "J.-R. Jeon, <b>M. S. Oh</b>, Y. M. Kim, S. M. Kwon, H. Y. Yoon, S. M. Noh, S. J. Son",
            note: "Technology transferred (Valued at KRW 20 million)"
        },
        {
            title: "Composition for reducing methane emission from soil comprising hydroxyapatite coated with humic acid",
            number: "KR 10-2792682-0000",
            inventors: "J.-R. Jeon, H. Y. Yoon, E. N. Cho, P. J. Kim, S. M. Noh, <b>M. S. Oh</b>, S. J. Son, H. K. Chae",
            note: ""
        },
        {
            title: "Extraction method for fulvic acid analogue in lignocellulosic biomass",
            number: "KR 10-2703227-0000",
            inventors: "J.-R. Jeon, N. T. Phong, H. Y. Yoon, J. E. Park, J. M. Baek, Y. S. Lee, <b>M. S. Oh</b>, D. W. Han, G. S. Kim, M. S. Kang, M. N. Kwon, H. E. Choi",
            note: ""
        },
        {
            title: "Composition for eco-friendly packaging and manufacturing method thereof",
            number: "KR 10-2703226-0000",
            inventors: "J.-R. Jeon, <b>M. S. Oh</b>, E. N. Cho, Y. S. Lee, H. Y. Yoon, J. M. Baek, W. S. Noh, Y. M. Kim",
            note: ""
        },
        {
            title: "Composition for blocking ultraviolet comprising mixture of lignin and catechin",
            number: "KR 10-2534550-0000",
            inventors: "J.-R. Jeon, M. J. Kim, J. H. Kwon, J. Ur Rehman, T. H. Kim, <b>M. S. Oh</b>, H. Y. Yoon, H. J. Ahn",
            note: ""
        },
        {
            title: "Fungal pellets having improved adsorb activity for treating wastewater",
            number: "KR 10-2249813-0000",
            inventors: "J.-R. Jeon, H. Y. Yoon, E. M. Joe, <b>M. S. Oh</b>, Y. G. Lee, J. Ur Rehman, S. G. Shin",
            note: ""
        },
        {
            title: "Eco-friendly composite material and manufacturing method thereof",
            number: "KR 10-20250107628",
            inventors: "J.-R. Jeon, <b>M. S. Oh</b>, H. Y. Yoon, S. M. Noh, E. N. Cho, Y. S. Lee, Y. M. Kim",
            note: ""
        }
    ],

    // [갤러리 / 연구 프로젝트]
    projects: [
        {
            title: "Artifical Soil Experiment",
            description: "인공토양을 활용하여 효소활성을 연구하는 모습입니다.",
            image: "fig1.jpg"
        },
        {
            title: "Hallasan National Park Sampling",
            description: "한라산에서 토양 샘플링.. 친구들과 함께",
            image: "fig2.jpg" // 같은 폴더에 있는 이미지 파일명
        }

    ]
};