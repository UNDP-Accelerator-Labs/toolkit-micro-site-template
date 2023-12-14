// builds lunr
var index = lunr(function () {
  this.field('title')
  this.field('content', {boost: 10})
  this.field('sdg')
  this.field('tags')
  this.field('url')
  this.ref('id')
});





index.add({
    title: "A sample of a new topic",
    content: "New Topic\n\nContent goes here.\n",
    tags: null,
    sdg: null,
    url: "/Second%20Topic/Sub%20Topic.html",
    id: 0
});












index.add({
    title: "Contributors",
    content: "Meet the Contributors\n\n\n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Ana M. Grijalva\n        \n        UNDP Ecuador Accelerator Lab\n        Head of Exploration\n      \n    \n    Ana M. Grijalva is an economist, education specialist, and social innovator with 10 years of experience. She has a vast experience in program development, management, implementation, monitoring, and evaluation, but also in cutting-edge research and data analysis. She has expertise on key issues related to education, labor market, MSME productivity and governance. She has worked for different agencies of the United Nations (International Institute for Educational Planning and Economic Commission for Latin America and the Caribbean) and for international organizations such as University of Oxford, Inter-American Development Bank, and World Bank. Also, she has experience in Ecuador´s public sector, and has worked for the academia in the United Kingdom and Ecuador. She is excited to collaborate to the change of the status quo through public and social innovation, data analysis, technology, and civic engagement.\n    \n\n    \n      Contact \n      \n      \n      \n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Jerson del Rosario\n        \n        UNDP Dominican Republic Accelerator Lab\n        Head of Solutions Mapping\n      \n    \n    As a sociologist, qualitative researcher and development practitioner, Jerson has worked as local development facilitator for grassroots community organizations and was a researcher and social policy analyst for the Social Policy Coordination Cabinet of the Dominican Republic. He has conducted ethnographic research on education, youth and teen pregnancy, precarious livelihoods and income generation policies, with a strong interest in small-scale entrepreneurs and the ways they understand the economic complexities of globalization. Jerson holds a bachelor’s in International Relations, a master’s in Local Development and International Cooperation, a master’s in Sociology and Education and is currently pursuing doctoral studies in Sociology.\n    \n\n    \n      Contact \n      \n      \n      \n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Nguyen Tuan Luong\n        \n        UNDP Viet Nam Accelerator Lab\n        Head of Solutions Mapping\n      \n    \n    Luong grew up around the world as a “third culture kid” and now sees himself as a global citizen. Having worked with the Innovation Partnership Programme between Finland and Vietnam, and contributed towards developing a thriving innovation ecosystem in Vietnam, Luong brings expertise in public-private partnerships. He is passionate about helping changemaker communities such as Knowmads Hanoi and Art of Hosting in creating space for meaningful conversations.  \nLuong is a Swedish Institute alumnus and graduated in Master’s in strategic leadership toward Sustainability from Sweden. By combining his cross-cultural understanding, tech-savviness, and business sense, he hopes to facilitate organizations transformation toward greater sustainability, collaboration and creativity.  \nIn his spare time, you can find him learning and practicing his hobbies. He is always excited to meet new people and looks forward to listening and sharing good stories with them.  \n\n    \n\n    \n      Contact \n      \n      \n      \n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Sandy Ramirez\n        \n        UNDP Dominican Republic Accelerator Lab\n        Head of Exploration\n      \n    \n    Innovation and digital business specialist. Sandy has worked in promoting and developing policies to strengthen MSMEs and before joining the lab was the coordinator of Digital Economy for the Ministry of Industry, Commerce and MSMEs. Sandy has coordinated the execution of cooperation projects to promote innovation with governments of Taiwan, Korea and Spain. Sandy holds a masters degree in Digital Business and Digital Marketing as well as a masters in Business Administration.\n    \n\n    \n      Contact \n      \n      \n      \n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Caroline Kiarie-Kimondo\n        \n        UNDP Kenya Accelerator Lab\n        Head of Exploration\n      \n    \n    Caroline Kiarie-Kimondo is the Head of Exploration, Kenya Accelerator Lab. Caroline is a social impact strategist with a passion for framing and reframing positive social impact narratives. She has 15 years of experience in philanthropy, movement building, social innovation, and strategic communications. She's also skilled in leadership coaching, human-centered design thinking, decision architecture, agile project management, and adaptive leadership.\n    \n\n    \n      Contact \n      \n      \n      \n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Nampaka Nkumbula\n        \n        UNDP Zambia Accelerator Lab\n        Head of Experimentation\n      \n    \n    Nampaka is currently the Zambia Accelerator Lab Head of Experimentation and is a seasoned researcher within experience supporting the Zambian Innovation ecosystem with a bias on strengthening Research and development pathways for the growth of innovations by influencing government approach and methods towards responding aptly to grassroots innovations. Prior to joining UNDP, Nampaka worked at Innovations for Poverty Action. She has experience working in the development sector, promoting the use of rigorously generated evidence with partners, conducting policy driven research, and leveraging large administrative data systems to inform decision making processes and develop scaling pathways to move promising interventions from research to scale. Working in the Health, Education and Financial Inclusion sectors in Zambia, Nampaka also has experience in agricultural policy analysis and banking with a specific focus on fund management and marketing. As a successful applicant to the B360 internship at Credit Suisse, Nampaka worked in the Export Finance Department under Corporate and Specialty Lending as a Junior Portfolio Manager. She holds a Master of Arts Degree in Economics from the University of Zambia (UNZA) and a Bachelor of Arts Degree in Economics with Mathematics and Statistics from UNZA.\n    \n\n    \n      Contact \n      \n      \n      \n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Alena Klatte\n        \n        UNDP Chief Digital Office\n        Global Project Manager, Strategic Data Initiatives\n      \n    \n    \n    \n\n    \n      Contact \n      \n      \n      \n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Christof Hawle\n        \n        UNDP Chief Digital Office\n        Digital Innovation and Transformation Specialist\n      \n    \n    Christof has a background in private sector digital transformation consulting and development innovation and has been with the CDO since 2021. He has been supporting individual digital innovation projects and Digital X, and coordinates efforts to implement \"Digital by Default\": assuring digital is embedded in our business processes and programming life cycle. \n    \n\n    \n      Contact \n      \n      \n      \n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Yrika Maritz\n        \n        UNDP Namibia Accelerator Lab\n        Head of Experimentation\n      \n    \n    Yrika Vanessa Maritz is the Head of Experimentation at the UNDP Accelerator Lab Namibia. She previously worked at the Office of the Prime Minister in various roles, including Learning and Development Officer and Deputy Director of the Efficiency and Charter Unit.  She also served as the former Director of the Centre for Management and Leadership Development at the National School of Government, NIPAM.  Yrika is a Clinical Psychologist by profession and holds a Master in Public Administration, as well as a PhD in Public and Development Management.  She has been trained in various specialized learning and development models and schools in Tanzania, the UK, Germany, Sweden, Japan, and China. She is an accredited Management Consultant with the CIMC in the UK and registered with the Social Work and Psychology Council of Namibia.\n    \n\n    \n      Contact \n      \n      \n      \n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Cristhian Parra\n        \n        UNDP Paraguay Accelerator Lab\n        Head of Experimentation\n      \n    \n    Cristian Parra has a Ph.D. in Information and Communication Technologies from University of Trento, Italy, and an Informatics Engineering degree from the Polytechnic School of UNA. For the past 10 years, he has been working in social informatics R&amp;D projects, using participatory design and human-centered design approaches to topics in community-based public health, social inclusion, civic technologies and citizen participation. He was a postdoctoral researcher at the University of California, Berkeley, where he led the projects of the Social Apps Lab (CITRIS). As consultant, he helped organizations like the World Bank, the IADB, the SSI of Berkeley, among others. Before joining AccLab, he was working as a Senior Researcher at the Catholic University of Asunción, where he led projects like TopaDengue, which combines community participation with technologies to fight the spread of the Aedes Aegypti through a bottom-up citizen science approach, within a controlled experiment. In 2018, with his team, he was the recipient of one of the Honorific Mentions of the National Prize for Science for some of these works. Cristhian has always had a passion for initiatives at intersections, bridging Computer and Social Sciences to inform research, development, and implementation of innovative socio-technical solutions for social or community challenges. This passion led him straight to this lab, where he sees a unique opportunity to contribute to the already great work that UNDP is doing in solving the big societal and development challenges of our century.\n    \n\n    \n      Contact \n      \n      \n      \n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Eduardo Gustale\n        \n        UNDP Accelerator Labs\n        Monitoring, Experimentation and Learning Specialist\n      \n    \n    Experienced in Sustainable Development and Social Innovation. Worked repeated times in academic research, survey development and market insight. Elected Global Shaper by the World Economic Forum &amp; Chevening Scholar for an MSc in Innovation and Entrepreneurship at University of Warwick.\n    \n\n    \n      Contact \n      \n      \n      \n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Tayo Akinyemi\n        \n        UNDP Accelerator Labs\n        Learning and Community Manager\n      \n    \n    I have spent most of my career creating order from ambiguity, whether it's charting my own vocational journey, supporting an African entrepreneurial leadership center launch, building the first pan-African network of tech hubs, or decoding early stage investing in Africa. In other words, I like to help great people build great things, ideally by marrying vision (dream+strategy) with implementation (getting stuff done). African tech entrepreneurship and innovation trends on all of my feeds, with a special emphasis on building enabling infrastructure (think hubs and accelerators) enhancing, the capacity of those enablers (especially early stage investors).\n    \n\n    \n      Contact \n      \n      \n      \n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Calum Handforth\n        \n        UNDP Chief Digital Office\n        Digital Programmes Strategic Manager\n      \n    \n    UN Advisor and Fellow - focusing on data, innovation, and digital tech in international development and government.\n    \n\n    \n      Contact \n      \n      \n      \n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Nicola Holden\n        \n        UNDP Chief Digital Office\n        Digital Experience Advisor\n      \n    \n    \n    \n\n    \n      Contact \n      \n      \n      \n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Adedapo Aderemi\n        \n        UNDP Accelerator Labs\n        Software Developer\n      \n    \n    Experienced Software Engineer and Cloud Enthusiast.\n    \n\n    \n      Contact \n      \n      \n      \n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Mónica Ríos\n        \n        UNDP Paraguay Accelerator Labs\n        Head of Exploration\n      \n    \n    Mónica Rios has a Business Administration Degree, holds a Master’s Degree in Creation and Management of Innovative and Technology Based Companies (Barcelona, Spain) as part of the National Scholarship Program “BECAL” and a Diploma in Corporate Social Responsibility (Santiago, Chile). She worked with the private sector, NGOs and multilateral funds in subjects related to corporate social responsibility, sustainability, marketing, strategy and innovation. Before joining UNDP he designed and coordinated incubation and acceleration processes for MSMEs in the creative sector in Paraguay and social innovation projects through the IDB LAB. Her main motivation lies in lies in maximize innovative projects developed in Paraguay, which can inspire others to think big, as well as learn from other practices developed by others AccLabs worldwide.\n    \n\n    \n      Contact \n      \n      \n      \n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Alberto Cottica\n        \n        UNDP Accelerator Labs\n        R&amp;D Specialist\n      \n    \n    Originally a development/environmental economist, now more of a quantitative social scientist. Anthropology, ethnography, network science. Interested in epistemology. Committed citizen. Runner. Ex-minor rockstar.\n    \n\n    \n      Contact \n      \n      \n      \n    \n  \n  \n\n\n",
    tags: null,
    sdg: null,
    url: "/Team.html",
    id: 1
});












index.add({
    title: "A new sub topic for third menu",
    content: "New Topic\n\nContent goes here.\n",
    tags: null,
    sdg: null,
    url: "/Third%20topic/Third%20sub%20topic.html",
    id: 2
});












index.add({
    title: "Background and purpose",
    content: "Background and purpose\n\nContent goes here.\n",
    tags: ["poverty","inequality","women empoverment"],
    sdg: ["Gender Equality"],
    url: "/Getting%20started/background.html",
    id: 3
});



    
    window.tags = ["poverty"]

    
    window.tags = ["poverty","inequality"]

    
    window.tags = ["poverty","inequality","women empoverment"]




    
    window.sdg = ["Gender Equality"]







index.add({
    title: "How to use the toolkit",
    content: "How to use this toolkit\n\nContent goes here.\n",
    tags: ["poverty","inequality","women empoverment","digital"],
    sdg: ["No Poverty","Zero Hunger","Quality Education"],
    url: "/Getting%20started/how-to-use-the-toolkit.html",
    id: 4
});



    
    window.tags = ["poverty"]

    
    window.tags = ["poverty","inequality"]

    
    window.tags = ["poverty","inequality","women empoverment"]

    
    window.tags = ["poverty","inequality","women empoverment","digital"]




    
    window.sdg = ["No Poverty"]

    
    window.sdg = ["No Poverty","Zero Hunger"]

    
    window.sdg = ["No Poverty","Zero Hunger","Quality Education"]







index.add({
    title: "Second topic",
    content: "\n",
    tags: null,
    sdg: null,
    url: "/Second%20Topic/",
    id: 5
});












index.add({
    title: "Getting Started",
    content: "\n",
    tags: null,
    sdg: null,
    url: "/Getting%20started/",
    id: 6
});












index.add({
    title: "Third topic",
    content: "\n",
    tags: null,
    sdg: null,
    url: "/Third%20topic/",
    id: 7
});












index.add({
    title: "Getting Started",
    content: "Markdown Basics\n\nIntroduction\n\nThis page serves as a reference guide to the Markdown syntax used for creating different elements in your micro-site. You can use this guide to populate your micro-site with various content elements.\n\nHeaders\n\nUse hash symbols (#) for headers. The number of hashes indicates the header level.\n\nHeader 1\nHeader 2\nHeader 3\nHeader 4\nHeader 5\nHeader 6\n\nText Formatting\n\nItalic Text\nBold Text\nStrikethrough Text\n\nLinks\n\nLink Text\n\nLists\n\nUnordered List:\n\n  Item 1\n  Item 2\n  Item 3\n\n\nOrdered List:\n\n  First Item\n  Second Item\n  Third Item\n\n\nImages\n\n\n\nBlockquotes\n\n\n  This is a blockquote.\n\n\nCode Blocks\n\nInline code: code here\n\nCode Block:\n`python\ndef hello():\n    print(\"Hello, World!\")\n\\`\n\nHorizontal Lines\n\n\n\nTables\n\n\n  \n    \n      Header 1\n      Header 2\n    \n  \n  \n    \n      Content 1\n      Content 2\n    \n  \n\n\nFootnotes\n\nThis is a sentence with a footnote.1\n\n\n  \n    \n      This is the footnote content. &#8617;\n    \n  \n\n",
    tags: ["poverty","inequality","women empoverment"],
    sdg: ["No Poverty","Zero Hunger"],
    url: "/",
    id: 8
});



    
    window.tags = ["poverty"]

    
    window.tags = ["poverty","inequality"]

    
    window.tags = ["poverty","inequality","women empoverment"]




    
    window.sdg = ["No Poverty"]

    
    window.sdg = ["No Poverty","Zero Hunger"]










index.add({
    title: "Third value",
    content: "## New Topic\n\nContent goes here.\n",
    tags: null,
    sdg: null,
    url: "/Third%20topic/third%20value.html",
    id: 10
});












index.add({
    title: "Value of toolkit",
    content: "## New Topic\n\nContent goes here.\n",
    tags: null,
    sdg: null,
    url: "/Second%20Topic/value.html",
    id: 11
});












index.add({
    title: "Values and attitude",
    content: "## Values and attitude\n\n\nContent goes here.",
    tags: ["poverty","inequality","women empoverment","digital"],
    sdg: ["Gender Equality","Clean Water and Sanitation","Decent Work and Economic Growth"],
    url: "/Getting%20started/values.html",
    id: 12
});



    
    window.tags = ["poverty"]

    
    window.tags = ["poverty","inequality"]

    
    window.tags = ["poverty","inequality","women empoverment"]

    
    window.tags = ["poverty","inequality","women empoverment","digital"]




    
    window.sdg = ["Gender Equality"]

    
    window.sdg = ["Gender Equality","Clean Water and Sanitation"]

    
    window.sdg = ["Gender Equality","Clean Water and Sanitation","Decent Work and Economic Growth"]







index.add({
    title: "Ana M. Grijalva",
    content: "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Ana M. Grijalva\n            \n            UNDP Ecuador Accelerator Lab\n            Head of Exploration\n          \n        \n        \n          Ana M. Grijalva is an economist, education specialist, and social innovator with 10 years of experience. She has a vast experience in program development, management, implementation, monitoring, and evaluation, but also in cutting-edge research and data analysis. She has expertise on key issues related to education, labor market, MSME productivity and governance. She has worked for different agencies of the United Nations (International Institute for Educational Planning and Economic Commission for Latin America and the Caribbean) and for international organizations such as University of Oxford, Inter-American Development Bank, and World Bank. Also, she has experience in Ecuador´s public sector, and has worked for the academia in the United Kingdom and Ecuador. She is excited to collaborate to the change of the status quo through public and social innovation, data analysis, technology, and civic engagement.\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          Contact \n          \n          \n          \n        \n      \n    \n  \n\n",
    tags: null,
    sdg: null,
    url: "/contributors/Ana-Grijalva.html",
    id: 13
});












index.add({
    title: "Jerson del Rosario",
    content: "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Jerson del Rosario\n            \n            UNDP Dominican Republic Accelerator Lab\n            Head of Solutions Mapping\n          \n        \n        \n          As a sociologist, qualitative researcher and development practitioner, Jerson has worked as local development facilitator for grassroots community organizations and was a researcher and social policy analyst for the Social Policy Coordination Cabinet of the Dominican Republic. He has conducted ethnographic research on education, youth and teen pregnancy, precarious livelihoods and income generation policies, with a strong interest in small-scale entrepreneurs and the ways they understand the economic complexities of globalization. Jerson holds a bachelor’s in International Relations, a master’s in Local Development and International Cooperation, a master’s in Sociology and Education and is currently pursuing doctoral studies in Sociology.\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          Contact \n          \n          \n          \n        \n      \n    \n  \n\n",
    tags: null,
    sdg: null,
    url: "/contributors/Jerson-del-Rosario.html",
    id: 14
});












index.add({
    title: "Nguyen Tuan Luong",
    content: "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Nguyen Tuan Luong\n            \n            UNDP Viet Nam Accelerator Lab\n            Head of Solutions Mapping\n          \n        \n        \n          Luong grew up around the world as a “third culture kid” and now sees himself as a global citizen. Having worked with the Innovation Partnership Programme between Finland and Vietnam, and contributed towards developing a thriving innovation ecosystem in Vietnam, Luong brings expertise in public-private partnerships. He is passionate about helping changemaker communities such as Knowmads Hanoi and Art of Hosting in creating space for meaningful conversations.  \nLuong is a Swedish Institute alumnus and graduated in Master’s in strategic leadership toward Sustainability from Sweden. By combining his cross-cultural understanding, tech-savviness, and business sense, he hopes to facilitate organizations transformation toward greater sustainability, collaboration and creativity.  \nIn his spare time, you can find him learning and practicing his hobbies. He is always excited to meet new people and looks forward to listening and sharing good stories with them.  \n\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          Contact \n          \n          \n          \n        \n      \n    \n  \n\n",
    tags: null,
    sdg: null,
    url: "/contributors/Nguyen-Tuan-Luong.html",
    id: 15
});












index.add({
    title: "Sandy Ramirez",
    content: "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Sandy Ramirez\n            \n            UNDP Dominican Republic Accelerator Lab\n            Head of Exploration\n          \n        \n        \n          Innovation and digital business specialist. Sandy has worked in promoting and developing policies to strengthen MSMEs and before joining the lab was the coordinator of Digital Economy for the Ministry of Industry, Commerce and MSMEs. Sandy has coordinated the execution of cooperation projects to promote innovation with governments of Taiwan, Korea and Spain. Sandy holds a masters degree in Digital Business and Digital Marketing as well as a masters in Business Administration.\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          Contact \n          \n          \n          \n        \n      \n    \n  \n\n",
    tags: null,
    sdg: null,
    url: "/contributors/Sandy-Ramirez.html",
    id: 16
});












index.add({
    title: "Caroline Kiarie-Kimondo",
    content: "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Caroline Kiarie-Kimondo\n            \n            UNDP Kenya Accelerator Lab\n            Head of Exploration\n          \n        \n        \n          Caroline Kiarie-Kimondo is the Head of Exploration, Kenya Accelerator Lab. Caroline is a social impact strategist with a passion for framing and reframing positive social impact narratives. She has 15 years of experience in philanthropy, movement building, social innovation, and strategic communications. She's also skilled in leadership coaching, human-centered design thinking, decision architecture, agile project management, and adaptive leadership.\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          Contact \n          \n          \n          \n        \n      \n    \n  \n\n",
    tags: null,
    sdg: null,
    url: "/contributors/Caroline-Kiarie.html",
    id: 17
});












index.add({
    title: "Nampaka Nkumbula",
    content: "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Nampaka Nkumbula\n            \n            UNDP Zambia Accelerator Lab\n            Head of Experimentation\n          \n        \n        \n          Nampaka is currently the Zambia Accelerator Lab Head of Experimentation and is a seasoned researcher within experience supporting the Zambian Innovation ecosystem with a bias on strengthening Research and development pathways for the growth of innovations by influencing government approach and methods towards responding aptly to grassroots innovations. Prior to joining UNDP, Nampaka worked at Innovations for Poverty Action. She has experience working in the development sector, promoting the use of rigorously generated evidence with partners, conducting policy driven research, and leveraging large administrative data systems to inform decision making processes and develop scaling pathways to move promising interventions from research to scale. Working in the Health, Education and Financial Inclusion sectors in Zambia, Nampaka also has experience in agricultural policy analysis and banking with a specific focus on fund management and marketing. As a successful applicant to the B360 internship at Credit Suisse, Nampaka worked in the Export Finance Department under Corporate and Specialty Lending as a Junior Portfolio Manager. She holds a Master of Arts Degree in Economics from the University of Zambia (UNZA) and a Bachelor of Arts Degree in Economics with Mathematics and Statistics from UNZA.\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          Contact \n          \n          \n          \n        \n      \n    \n  \n\n",
    tags: null,
    sdg: null,
    url: "/contributors/Nampaka-Nkumbula.html",
    id: 18
});












index.add({
    title: "Alena Klatte",
    content: "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Alena Klatte\n            \n            UNDP Chief Digital Office\n            Global Project Manager, Strategic Data Initiatives\n          \n        \n        \n          \n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          Contact \n          \n          \n          \n        \n      \n    \n  \n\n",
    tags: null,
    sdg: null,
    url: "/contributors/Alena-Klatte.html",
    id: 19
});












index.add({
    title: "Christof Hawle",
    content: "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Christof Hawle\n            \n            UNDP Chief Digital Office\n            Digital Innovation and Transformation Specialist\n          \n        \n        \n          Christof has a background in private sector digital transformation consulting and development innovation and has been with the CDO since 2021. He has been supporting individual digital innovation projects and Digital X, and coordinates efforts to implement \"Digital by Default\": assuring digital is embedded in our business processes and programming life cycle. \n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          Contact \n          \n          \n          \n        \n      \n    \n  \n\n",
    tags: null,
    sdg: null,
    url: "/contributors/Christof-Hawle.html",
    id: 20
});












index.add({
    title: "Yrika Maritz",
    content: "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Yrika Maritz\n            \n            UNDP Namibia Accelerator Lab\n            Head of Experimentation\n          \n        \n        \n          Yrika Vanessa Maritz is the Head of Experimentation at the UNDP Accelerator Lab Namibia. She previously worked at the Office of the Prime Minister in various roles, including Learning and Development Officer and Deputy Director of the Efficiency and Charter Unit.  She also served as the former Director of the Centre for Management and Leadership Development at the National School of Government, NIPAM.  Yrika is a Clinical Psychologist by profession and holds a Master in Public Administration, as well as a PhD in Public and Development Management.  She has been trained in various specialized learning and development models and schools in Tanzania, the UK, Germany, Sweden, Japan, and China. She is an accredited Management Consultant with the CIMC in the UK and registered with the Social Work and Psychology Council of Namibia.\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          Contact \n          \n          \n          \n        \n      \n    \n  \n\n",
    tags: null,
    sdg: null,
    url: "/contributors/Yrika-Maritz.html",
    id: 21
});












index.add({
    title: "Cristhian Parra",
    content: "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Cristhian Parra\n            \n            UNDP Paraguay Accelerator Lab\n            Head of Experimentation\n          \n        \n        \n          Cristian Parra has a Ph.D. in Information and Communication Technologies from University of Trento, Italy, and an Informatics Engineering degree from the Polytechnic School of UNA. For the past 10 years, he has been working in social informatics R&D projects, using participatory design and human-centered design approaches to topics in community-based public health, social inclusion, civic technologies and citizen participation. He was a postdoctoral researcher at the University of California, Berkeley, where he led the projects of the Social Apps Lab (CITRIS). As consultant, he helped organizations like the World Bank, the IADB, the SSI of Berkeley, among others. Before joining AccLab, he was working as a Senior Researcher at the Catholic University of Asunción, where he led projects like TopaDengue, which combines community participation with technologies to fight the spread of the Aedes Aegypti through a bottom-up citizen science approach, within a controlled experiment. In 2018, with his team, he was the recipient of one of the Honorific Mentions of the National Prize for Science for some of these works. Cristhian has always had a passion for initiatives at intersections, bridging Computer and Social Sciences to inform research, development, and implementation of innovative socio-technical solutions for social or community challenges. This passion led him straight to this lab, where he sees a unique opportunity to contribute to the already great work that UNDP is doing in solving the big societal and development challenges of our century.\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          Contact \n          \n          \n          \n        \n      \n    \n  \n\n",
    tags: null,
    sdg: null,
    url: "/contributors/Cristhian-Parra.html",
    id: 22
});












index.add({
    title: "Eduardo Gustale",
    content: "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Eduardo Gustale\n            \n            UNDP Accelerator Labs\n            Monitoring, Experimentation and Learning Specialist\n          \n        \n        \n          Experienced in Sustainable Development and Social Innovation. Worked repeated times in academic research, survey development and market insight. Elected Global Shaper by the World Economic Forum & Chevening Scholar for an MSc in Innovation and Entrepreneurship at University of Warwick.\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          Contact \n          \n          \n          \n        \n      \n    \n  \n\n",
    tags: null,
    sdg: null,
    url: "/contributors/Eduardo-Gustale.html",
    id: 23
});












index.add({
    title: "Tayo Akinyemi",
    content: "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Tayo Akinyemi\n            \n            UNDP Accelerator Labs\n            Learning and Community Manager\n          \n        \n        \n          I have spent most of my career creating order from ambiguity, whether it's charting my own vocational journey, supporting an African entrepreneurial leadership center launch, building the first pan-African network of tech hubs, or decoding early stage investing in Africa. In other words, I like to help great people build great things, ideally by marrying vision (dream+strategy) with implementation (getting stuff done). African tech entrepreneurship and innovation trends on all of my feeds, with a special emphasis on building enabling infrastructure (think hubs and accelerators) enhancing, the capacity of those enablers (especially early stage investors).\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          Contact \n          \n          \n          \n        \n      \n    \n  \n\n",
    tags: null,
    sdg: null,
    url: "/contributors/Tayo-Akinyemi.html",
    id: 24
});












index.add({
    title: "Calum Handforth",
    content: "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Calum Handforth\n            \n            UNDP Chief Digital Office\n            Digital Programmes Strategic Manager\n          \n        \n        \n          UN Advisor and Fellow - focusing on data, innovation, and digital tech in international development and government.\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          Contact \n          \n          \n          \n        \n      \n    \n  \n\n",
    tags: null,
    sdg: null,
    url: "/contributors/Calum-Handforth.html",
    id: 25
});












index.add({
    title: "Nicola Holden",
    content: "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Nicola Holden\n            \n            UNDP Chief Digital Office\n            Digital Experience Advisor\n          \n        \n        \n          \n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          Contact \n          \n          \n          \n        \n      \n    \n  \n\n",
    tags: null,
    sdg: null,
    url: "/contributors/Nicola-Holden.html",
    id: 26
});












index.add({
    title: "Adedapo Aderemi",
    content: "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Adedapo Aderemi\n            \n            UNDP Accelerator Labs\n            Software Developer\n          \n        \n        \n          Experienced Software Engineer and Cloud Enthusiast.\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          Contact \n          \n          \n          \n        \n      \n    \n  \n\n",
    tags: null,
    sdg: null,
    url: "/contributors/Adedapo-Aderemi.html",
    id: 27
});












index.add({
    title: "Mónica Ríos",
    content: "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Mónica Ríos\n            \n            UNDP Paraguay Accelerator Labs\n            Head of Exploration\n          \n        \n        \n          Mónica Rios has a Business Administration Degree, holds a Master’s Degree in Creation and Management of Innovative and Technology Based Companies (Barcelona, Spain) as part of the National Scholarship Program “BECAL” and a Diploma in Corporate Social Responsibility (Santiago, Chile). She worked with the private sector, NGOs and multilateral funds in subjects related to corporate social responsibility, sustainability, marketing, strategy and innovation. Before joining UNDP he designed and coordinated incubation and acceleration processes for MSMEs in the creative sector in Paraguay and social innovation projects through the IDB LAB. Her main motivation lies in lies in maximize innovative projects developed in Paraguay, which can inspire others to think big, as well as learn from other practices developed by others AccLabs worldwide.\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          Contact \n          \n          \n          \n        \n      \n    \n  \n\n",
    tags: null,
    sdg: null,
    url: "/contributors/Monica-Rios.html",
    id: 28
});












index.add({
    title: "Alberto Cottica",
    content: "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Alberto Cottica\n            \n            UNDP Accelerator Labs\n            R&D Specialist\n          \n        \n        \n          Originally a development/environmental economist, now more of a quantitative social scientist. Anthropology, ethnography, network science. Interested in epistemology. Committed citizen. Runner. Ex-minor rockstar.\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          Contact \n          \n          \n          \n        \n      \n    \n  \n\n",
    tags: null,
    sdg: null,
    url: "/contributors/Alberto-Cottica.html",
    id: 29
});













// builds reference data
var store = [{
  "title": "A sample of a new topic",
  "url": "/Second%20Topic/Sub%20Topic.html",
  "content": "New Topic\n\nContent goes here.\n",
  "tags": null,
  "sdg": null,
  "excerpt": "New Topic\n\nContent goes here.\n",
  "id": 30
},{
  "title": "Contributors",
  "url": "/Team.html",
  "content": "Meet the Contributors\n\n\n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Ana M. Grijalva\n        \n        UNDP Ecuador Accelerator Lab\n        Head of Exploration\n      \n    \n    Ana M. Grijalva is an economist, education specialist, and social innovator with 10 years of experience. She has a vast experience in program development, management, implementation, monitoring, and evaluation, but also in cutting-edge research and data analysis. She has expertise on key issues related to education, labor market, MSME productivity and governance. She has worked for different agencies of the United Nations (International Institute for Educational Planning and Economic Commission for Latin America and the Caribbean) and for international organizations such as University of Oxford, Inter-American Development Bank, and World Bank. Also, she has experience in Ecuador´s public sector, and has worked for the academia in the United Kingdom and Ecuador. She is excited to collaborate to the change of the status quo through public and social innovation, data analysis, technology, and civic engagement.\n    \n\n    \n      Contact \n      \n      \n      \n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Jerson del Rosario\n        \n        UNDP Dominican Republic Accelerator Lab\n        Head of Solutions Mapping\n      \n    \n    As a sociologist, qualitative researcher and development practitioner, Jerson has worked as local development facilitator for grassroots community organizations and was a researcher and social policy analyst for the Social Policy Coordination Cabinet of the Dominican Republic. He has conducted ethnographic research on education, youth and teen pregnancy, precarious livelihoods and income generation policies, with a strong interest in small-scale entrepreneurs and the ways they understand the economic complexities of globalization. Jerson holds a bachelor’s in International Relations, a master’s in Local Development and International Cooperation, a master’s in Sociology and Education and is currently pursuing doctoral studies in Sociology.\n    \n\n    \n      Contact \n      \n      \n      \n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Nguyen Tuan Luong\n        \n        UNDP Viet Nam Accelerator Lab\n        Head of Solutions Mapping\n      \n    \n    Luong grew up around the world as a “third culture kid” and now sees himself as a global citizen. Having worked with the Innovation Partnership Programme between Finland and Vietnam, and contributed towards developing a thriving innovation ecosystem in Vietnam, Luong brings expertise in public-private partnerships. He is passionate about helping changemaker communities such as Knowmads Hanoi and Art of Hosting in creating space for meaningful conversations.  \nLuong is a Swedish Institute alumnus and graduated in Master’s in strategic leadership toward Sustainability from Sweden. By combining his cross-cultural understanding, tech-savviness, and business sense, he hopes to facilitate organizations transformation toward greater sustainability, collaboration and creativity.  \nIn his spare time, you can find him learning and practicing his hobbies. He is always excited to meet new people and looks forward to listening and sharing good stories with them.  \n\n    \n\n    \n      Contact \n      \n      \n      \n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Sandy Ramirez\n        \n        UNDP Dominican Republic Accelerator Lab\n        Head of Exploration\n      \n    \n    Innovation and digital business specialist. Sandy has worked in promoting and developing policies to strengthen MSMEs and before joining the lab was the coordinator of Digital Economy for the Ministry of Industry, Commerce and MSMEs. Sandy has coordinated the execution of cooperation projects to promote innovation with governments of Taiwan, Korea and Spain. Sandy holds a masters degree in Digital Business and Digital Marketing as well as a masters in Business Administration.\n    \n\n    \n      Contact \n      \n      \n      \n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Caroline Kiarie-Kimondo\n        \n        UNDP Kenya Accelerator Lab\n        Head of Exploration\n      \n    \n    Caroline Kiarie-Kimondo is the Head of Exploration, Kenya Accelerator Lab. Caroline is a social impact strategist with a passion for framing and reframing positive social impact narratives. She has 15 years of experience in philanthropy, movement building, social innovation, and strategic communications. She's also skilled in leadership coaching, human-centered design thinking, decision architecture, agile project management, and adaptive leadership.\n    \n\n    \n      Contact \n      \n      \n      \n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Nampaka Nkumbula\n        \n        UNDP Zambia Accelerator Lab\n        Head of Experimentation\n      \n    \n    Nampaka is currently the Zambia Accelerator Lab Head of Experimentation and is a seasoned researcher within experience supporting the Zambian Innovation ecosystem with a bias on strengthening Research and development pathways for the growth of innovations by influencing government approach and methods towards responding aptly to grassroots innovations. Prior to joining UNDP, Nampaka worked at Innovations for Poverty Action. She has experience working in the development sector, promoting the use of rigorously generated evidence with partners, conducting policy driven research, and leveraging large administrative data systems to inform decision making processes and develop scaling pathways to move promising interventions from research to scale. Working in the Health, Education and Financial Inclusion sectors in Zambia, Nampaka also has experience in agricultural policy analysis and banking with a specific focus on fund management and marketing. As a successful applicant to the B360 internship at Credit Suisse, Nampaka worked in the Export Finance Department under Corporate and Specialty Lending as a Junior Portfolio Manager. She holds a Master of Arts Degree in Economics from the University of Zambia (UNZA) and a Bachelor of Arts Degree in Economics with Mathematics and Statistics from UNZA.\n    \n\n    \n      Contact \n      \n      \n      \n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Alena Klatte\n        \n        UNDP Chief Digital Office\n        Global Project Manager, Strategic Data Initiatives\n      \n    \n    \n    \n\n    \n      Contact \n      \n      \n      \n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Christof Hawle\n        \n        UNDP Chief Digital Office\n        Digital Innovation and Transformation Specialist\n      \n    \n    Christof has a background in private sector digital transformation consulting and development innovation and has been with the CDO since 2021. He has been supporting individual digital innovation projects and Digital X, and coordinates efforts to implement \"Digital by Default\": assuring digital is embedded in our business processes and programming life cycle. \n    \n\n    \n      Contact \n      \n      \n      \n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Yrika Maritz\n        \n        UNDP Namibia Accelerator Lab\n        Head of Experimentation\n      \n    \n    Yrika Vanessa Maritz is the Head of Experimentation at the UNDP Accelerator Lab Namibia. She previously worked at the Office of the Prime Minister in various roles, including Learning and Development Officer and Deputy Director of the Efficiency and Charter Unit.  She also served as the former Director of the Centre for Management and Leadership Development at the National School of Government, NIPAM.  Yrika is a Clinical Psychologist by profession and holds a Master in Public Administration, as well as a PhD in Public and Development Management.  She has been trained in various specialized learning and development models and schools in Tanzania, the UK, Germany, Sweden, Japan, and China. She is an accredited Management Consultant with the CIMC in the UK and registered with the Social Work and Psychology Council of Namibia.\n    \n\n    \n      Contact \n      \n      \n      \n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Cristhian Parra\n        \n        UNDP Paraguay Accelerator Lab\n        Head of Experimentation\n      \n    \n    Cristian Parra has a Ph.D. in Information and Communication Technologies from University of Trento, Italy, and an Informatics Engineering degree from the Polytechnic School of UNA. For the past 10 years, he has been working in social informatics R&amp;D projects, using participatory design and human-centered design approaches to topics in community-based public health, social inclusion, civic technologies and citizen participation. He was a postdoctoral researcher at the University of California, Berkeley, where he led the projects of the Social Apps Lab (CITRIS). As consultant, he helped organizations like the World Bank, the IADB, the SSI of Berkeley, among others. Before joining AccLab, he was working as a Senior Researcher at the Catholic University of Asunción, where he led projects like TopaDengue, which combines community participation with technologies to fight the spread of the Aedes Aegypti through a bottom-up citizen science approach, within a controlled experiment. In 2018, with his team, he was the recipient of one of the Honorific Mentions of the National Prize for Science for some of these works. Cristhian has always had a passion for initiatives at intersections, bridging Computer and Social Sciences to inform research, development, and implementation of innovative socio-technical solutions for social or community challenges. This passion led him straight to this lab, where he sees a unique opportunity to contribute to the already great work that UNDP is doing in solving the big societal and development challenges of our century.\n    \n\n    \n      Contact \n      \n      \n      \n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Eduardo Gustale\n        \n        UNDP Accelerator Labs\n        Monitoring, Experimentation and Learning Specialist\n      \n    \n    Experienced in Sustainable Development and Social Innovation. Worked repeated times in academic research, survey development and market insight. Elected Global Shaper by the World Economic Forum &amp; Chevening Scholar for an MSc in Innovation and Entrepreneurship at University of Warwick.\n    \n\n    \n      Contact \n      \n      \n      \n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Tayo Akinyemi\n        \n        UNDP Accelerator Labs\n        Learning and Community Manager\n      \n    \n    I have spent most of my career creating order from ambiguity, whether it's charting my own vocational journey, supporting an African entrepreneurial leadership center launch, building the first pan-African network of tech hubs, or decoding early stage investing in Africa. In other words, I like to help great people build great things, ideally by marrying vision (dream+strategy) with implementation (getting stuff done). African tech entrepreneurship and innovation trends on all of my feeds, with a special emphasis on building enabling infrastructure (think hubs and accelerators) enhancing, the capacity of those enablers (especially early stage investors).\n    \n\n    \n      Contact \n      \n      \n      \n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Calum Handforth\n        \n        UNDP Chief Digital Office\n        Digital Programmes Strategic Manager\n      \n    \n    UN Advisor and Fellow - focusing on data, innovation, and digital tech in international development and government.\n    \n\n    \n      Contact \n      \n      \n      \n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Nicola Holden\n        \n        UNDP Chief Digital Office\n        Digital Experience Advisor\n      \n    \n    \n    \n\n    \n      Contact \n      \n      \n      \n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Adedapo Aderemi\n        \n        UNDP Accelerator Labs\n        Software Developer\n      \n    \n    Experienced Software Engineer and Cloud Enthusiast.\n    \n\n    \n      Contact \n      \n      \n      \n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Mónica Ríos\n        \n        UNDP Paraguay Accelerator Labs\n        Head of Exploration\n      \n    \n    Mónica Rios has a Business Administration Degree, holds a Master’s Degree in Creation and Management of Innovative and Technology Based Companies (Barcelona, Spain) as part of the National Scholarship Program “BECAL” and a Diploma in Corporate Social Responsibility (Santiago, Chile). She worked with the private sector, NGOs and multilateral funds in subjects related to corporate social responsibility, sustainability, marketing, strategy and innovation. Before joining UNDP he designed and coordinated incubation and acceleration processes for MSMEs in the creative sector in Paraguay and social innovation projects through the IDB LAB. Her main motivation lies in lies in maximize innovative projects developed in Paraguay, which can inspire others to think big, as well as learn from other practices developed by others AccLabs worldwide.\n    \n\n    \n      Contact \n      \n      \n      \n    \n  \n    \n  \n    \n      \n      \n        \n        \n        \n      \n    \n      \n        \n          Alberto Cottica\n        \n        UNDP Accelerator Labs\n        R&amp;D Specialist\n      \n    \n    Originally a development/environmental economist, now more of a quantitative social scientist. Anthropology, ethnography, network science. Interested in epistemology. Committed citizen. Runner. Ex-minor rockstar.\n    \n\n    \n      Contact \n      \n      \n      \n    \n  \n  \n\n\n",
  "tags": null,
  "sdg": null,
  "excerpt": "Meet the Contributors Ana M. Grijalva UNDP Ecuador Accelerator Lab Head of Exploration Ana M. Grijalva is an economist, education...",
  "id": 30
},{
  "title": "A new sub topic for third menu",
  "url": "/Third%20topic/Third%20sub%20topic.html",
  "content": "New Topic\n\nContent goes here.\n",
  "tags": null,
  "sdg": null,
  "excerpt": "New Topic\n\nContent goes here.\n",
  "id": 30
},{
  "title": "Background and purpose",
  "url": "/Getting%20started/background.html",
  "content": "Background and purpose\n\nContent goes here.\n",
  "tags": ["poverty","inequality","women empoverment"],
  "sdg": ["Gender Equality"],
  "excerpt": "Background and purpose\n\nContent goes here.\n",
  "id": 30
},{
  "title": "How to use the toolkit",
  "url": "/Getting%20started/how-to-use-the-toolkit.html",
  "content": "How to use this toolkit\n\nContent goes here.\n",
  "tags": ["poverty","inequality","women empoverment","digital"],
  "sdg": ["No Poverty","Zero Hunger","Quality Education"],
  "excerpt": "How to use this toolkit\n\nContent goes here.\n",
  "id": 30
},{
  "title": "Second topic",
  "url": "/Second%20Topic/",
  "content": "\n",
  "tags": null,
  "sdg": null,
  "excerpt": "\n",
  "id": 30
},{
  "title": "Getting Started",
  "url": "/Getting%20started/",
  "content": "\n",
  "tags": null,
  "sdg": null,
  "excerpt": "\n",
  "id": 30
},{
  "title": "Third topic",
  "url": "/Third%20topic/",
  "content": "\n",
  "tags": null,
  "sdg": null,
  "excerpt": "\n",
  "id": 30
},{
  "title": "Getting Started",
  "url": "/",
  "content": "Markdown Basics\n\nIntroduction\n\nThis page serves as a reference guide to the Markdown syntax used for creating different elements in your micro-site. You can use this guide to populate your micro-site with various content elements.\n\nHeaders\n\nUse hash symbols (#) for headers. The number of hashes indicates the header level.\n\nHeader 1\nHeader 2\nHeader 3\nHeader 4\nHeader 5\nHeader 6\n\nText Formatting\n\nItalic Text\nBold Text\nStrikethrough Text\n\nLinks\n\nLink Text\n\nLists\n\nUnordered List:\n\n  Item 1\n  Item 2\n  Item 3\n\n\nOrdered List:\n\n  First Item\n  Second Item\n  Third Item\n\n\nImages\n\n\n\nBlockquotes\n\n\n  This is a blockquote.\n\n\nCode Blocks\n\nInline code: code here\n\nCode Block:\n`python\ndef hello():\n    print(\"Hello, World!\")\n\\`\n\nHorizontal Lines\n\n\n\nTables\n\n\n  \n    \n      Header 1\n      Header 2\n    \n  \n  \n    \n      Content 1\n      Content 2\n    \n  \n\n\nFootnotes\n\nThis is a sentence with a footnote.1\n\n\n  \n    \n      This is the footnote content. &#8617;\n    \n  \n\n",
  "tags": ["poverty","inequality","women empoverment"],
  "sdg": ["No Poverty","Zero Hunger"],
  "excerpt": "Markdown Basics Introduction This page serves as a reference guide to the Markdown syntax used for creating different elements in...",
  "id": 30
},{
  "title": null,
  "url": "/assets/lunr-feed.js",
  "content": "// builds lunr\nvar index = lunr(function () {\n  this.field('title')\n  this.field('content', {boost: 10})\n  this.field('sdg')\n  this.field('tags')\n  this.field('url')\n  this.ref('id')\n});\n\n\n{% assign count = 0 %}\n{% for post in site.pages %}\n{% unless post.url contains 'assets/' %}\nindex.add({\n    title: {{post.title | jsonify}},\n    content: {{post.content | strip_html | jsonify}},\n    tags: {{ post.tags | jsonify }},\n    sdg: {{ post.sdg | jsonify }},\n    url: {{ post.url | jsonify }},\n    id: {{count}}\n});\n\n{% assign tags = \"\" | split: \",\" %}\n{% for tg in post.tags %}\n    {% unless tags contains tg %}\n        {% assign tags = tags | push: tg %}\n    {% endunless %}\n    window.tags = {{ tags | jsonify}}\n{% endfor %}\n\n{% assign sdg = \"\" | split: \",\" %}\n{% for cg in post.sdg %}\n    {% unless sdg contains cg %}\n        {% assign sdg = sdg | push: cg %}\n    {% endunless %}\n    window.sdg = {{ sdg | jsonify}}\n{% endfor %}\n\n\n{% endunless %}\n{% assign count = count | plus: 1 %}\n{% endfor %}\n\n\n// builds reference data\nvar store = [{% for post in site.pages %}{\n  \"title\": {{post.title | jsonify}},\n  \"url\": {{ post.url | jsonify  }},\n  \"content\": {{post.content | strip_html | jsonify}},\n  \"tags\": {{ post.tags | jsonify }},\n  \"sdg\": {{ post.sdg | jsonify }},\n  \"excerpt\": {{ post.content | strip_html | truncatewords: 20 | jsonify }},\n  \"id\": {{ count }}\n}{% unless forloop.last %},{% endunless %}{% endfor %}]\n\n\n// builds search\n$(document).ready(function() {\n  $('input#search').on('keyup', function () {\n    var resultdiv = $('#results');\n    var contentdiv = $('#content');\n\n    var query = $(this).val();\n    var result = index.search(query);\n    resultdiv.empty();\n    contentdiv.empty()\n    \n    // Add status\n    resultdiv.prepend('Found '+result.length+' result(s)');\n    // Loop through, match, and add results\n    for (var item in result) {\n      var ref = result[item].ref;\n      var searchitem = `\n      \n        \n        \n            ${store[ref]?.title}\n        \n        \n        \n            ${store[ref].excerpt}\n        \n    \n      `\n\n      resultdiv.append(searchitem);\n    }\n  });\n  \n\n  //POPULATE TAGS AND SDG FILTER\nvar tagsdiv = $('#tag-div');\nvar sdgdiv = $('#sdg-div')\n\nif(tags.length > 0){\n    let tg = `\n    \n        \n        Tags\n        \n        \n    `;\n\n    for(let i = 0; i \n                \n                    ${tags[i]?.toUpperCase()}\n                    \n                \n              \n        `;\n    }\n\n    tg += `\n            \n        \n    `;\n\n    tagsdiv.append(tg)\n}\n\nif(sdg.length > 0){\n    let tg = `\n    \n        \n        SDG\n        \n        \n    `;\n\n    for(let i = 0; i \n                \n                    ${sdg[i]}\n                    \n                \n              \n        `;\n    }\n\n    tg += `\n            \n        \n    `;\n\n    sdgdiv.append(tg)\n}\n\nlet taglist = []\nlet sdglist = []\n\nlet searchitemfn = post => `\n\n    \n    \n        ${post?.title}\n    \n    \n    \n        ${post.excerpt}\n    \n\n`\n\nlet resultdiv = $('#results');\nlet contentdiv = $('#content');\nlet contentCopy = $(\"#content\").html(); // Store the current content\n\nlet filterresult = () => {\n    resultdiv.empty()\n    resultdiv.prepend('Showing results for  ' + [...sdglist, ...taglist].toString() + '');\n    for(post of store){\n        if(post?.tags?.some(tg => taglist.includes(tg) )){\n            contentdiv.empty()\n            var searchitem = searchitemfn(post)\n\n            resultdiv.append(searchitem);\n        }\n        else if(post?.sdg?.some(tg => sdglist.includes(tg) )){\n            contentdiv.empty()\n            var searchitem = searchitemfn(post)\n\n            resultdiv.append(searchitem);\n        }\n    };\n}\n\n$(document).on('multiSelectInputToggle', (e) => {\n    let { value, checked, name } = e.target;\n    \n    if(checked && name === 'tags') taglist.push(value)\n    else if(checked && name === 'sdg') sdglist.push(value)\n    else if(!checked && name === 'sdg' && sdglist.includes(value)) sdglist.splice(sdglist.indexOf(value), 1)\n    else if(taglist.includes(value)) taglist.splice(taglist.indexOf(value), 1)\n  \n    filterresult()\n\n});\n\n$(document).on('filterSearchChipRemoval', (e) => {\n    let textContent = e.target.getAttribute('option-name');\n    sdglist.includes(textContent) && sdglist.splice(sdglist.indexOf(textContent), 1)\n    taglist.includes(textContent) && taglist.splice(taglist.indexOf(textContent), 1)\n    filterresult()\n});\n\n$(document).on('filterSearchClear', (e) => {\n    sdglist = [];\n    taglist =  [];\n    resultdiv.empty()\n    $(\"#content\").html(contentCopy);\n});\n\n//GET ELEMTENTS WITH ID TAGS AND SDG\n$('.tag-chip').on('click', e =>{\n    let textContent = e.target.getAttribute('text-value');\n    taglist = [ textContent ]\n    sdglist = []\n    contentdiv.empty()\n    filterresult()\n} )\n\n$('.sdg-chip').on('click', e =>{\n    let textContent = e.target.getAttribute('text-value');\n    sdglist = [textContent]\n    taglist = []\n    contentdiv.empty()\n    filterresult()\n} )\n\n})",
  "tags": null,
  "sdg": null,
  "excerpt": "// builds lunr var index = lunr(function () { this.field('title') this.field('content', {boost: 10}) this.field('sdg') this.field('tags') this.field('url') this.ref('id') }); {% assign...",
  "id": 30
},{
  "title": "Third value",
  "url": "/Third%20topic/third%20value.html",
  "content": "## New Topic\n\nContent goes here.\n",
  "tags": null,
  "sdg": null,
  "excerpt": "## New Topic\n\nContent goes here.\n",
  "id": 30
},{
  "title": "Value of toolkit",
  "url": "/Second%20Topic/value.html",
  "content": "## New Topic\n\nContent goes here.\n",
  "tags": null,
  "sdg": null,
  "excerpt": "## New Topic\n\nContent goes here.\n",
  "id": 30
},{
  "title": "Values and attitude",
  "url": "/Getting%20started/values.html",
  "content": "## Values and attitude\n\n\nContent goes here.",
  "tags": ["poverty","inequality","women empoverment","digital"],
  "sdg": ["Gender Equality","Clean Water and Sanitation","Decent Work and Economic Growth"],
  "excerpt": "## Values and attitude\n\n\nContent goes here.",
  "id": 30
},{
  "title": "Ana M. Grijalva",
  "url": "/contributors/Ana-Grijalva.html",
  "content": "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Ana M. Grijalva\n            \n            UNDP Ecuador Accelerator Lab\n            Head of Exploration\n          \n        \n        \n          Ana M. Grijalva is an economist, education specialist, and social innovator with 10 years of experience. She has a vast experience in program development, management, implementation, monitoring, and evaluation, but also in cutting-edge research and data analysis. She has expertise on key issues related to education, labor market, MSME productivity and governance. She has worked for different agencies of the United Nations (International Institute for Educational Planning and Economic Commission for Latin America and the Caribbean) and for international organizations such as University of Oxford, Inter-American Development Bank, and World Bank. Also, she has experience in Ecuador´s public sector, and has worked for the academia in the United Kingdom and Ecuador. She is excited to collaborate to the change of the status quo through public and social innovation, data analysis, technology, and civic engagement.\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          Contact \n          \n          \n          \n        \n      \n    \n  \n\n",
  "tags": null,
  "sdg": null,
  "excerpt": "Ana M. Grijalva UNDP Ecuador Accelerator Lab Head of Exploration Ana M. Grijalva is an economist, education specialist, and social...",
  "id": 30
},{
  "title": "Jerson del Rosario",
  "url": "/contributors/Jerson-del-Rosario.html",
  "content": "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Jerson del Rosario\n            \n            UNDP Dominican Republic Accelerator Lab\n            Head of Solutions Mapping\n          \n        \n        \n          As a sociologist, qualitative researcher and development practitioner, Jerson has worked as local development facilitator for grassroots community organizations and was a researcher and social policy analyst for the Social Policy Coordination Cabinet of the Dominican Republic. He has conducted ethnographic research on education, youth and teen pregnancy, precarious livelihoods and income generation policies, with a strong interest in small-scale entrepreneurs and the ways they understand the economic complexities of globalization. Jerson holds a bachelor’s in International Relations, a master’s in Local Development and International Cooperation, a master’s in Sociology and Education and is currently pursuing doctoral studies in Sociology.\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          Contact \n          \n          \n          \n        \n      \n    \n  \n\n",
  "tags": null,
  "sdg": null,
  "excerpt": "Jerson del Rosario UNDP Dominican Republic Accelerator Lab Head of Solutions Mapping As a sociologist, qualitative researcher and development practitioner,...",
  "id": 30
},{
  "title": "Nguyen Tuan Luong",
  "url": "/contributors/Nguyen-Tuan-Luong.html",
  "content": "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Nguyen Tuan Luong\n            \n            UNDP Viet Nam Accelerator Lab\n            Head of Solutions Mapping\n          \n        \n        \n          Luong grew up around the world as a “third culture kid” and now sees himself as a global citizen. Having worked with the Innovation Partnership Programme between Finland and Vietnam, and contributed towards developing a thriving innovation ecosystem in Vietnam, Luong brings expertise in public-private partnerships. He is passionate about helping changemaker communities such as Knowmads Hanoi and Art of Hosting in creating space for meaningful conversations.  \nLuong is a Swedish Institute alumnus and graduated in Master’s in strategic leadership toward Sustainability from Sweden. By combining his cross-cultural understanding, tech-savviness, and business sense, he hopes to facilitate organizations transformation toward greater sustainability, collaboration and creativity.  \nIn his spare time, you can find him learning and practicing his hobbies. He is always excited to meet new people and looks forward to listening and sharing good stories with them.  \n\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          Contact \n          \n          \n          \n        \n      \n    \n  \n\n",
  "tags": null,
  "sdg": null,
  "excerpt": "Nguyen Tuan Luong UNDP Viet Nam Accelerator Lab Head of Solutions Mapping Luong grew up around the world as a...",
  "id": 30
},{
  "title": "Sandy Ramirez",
  "url": "/contributors/Sandy-Ramirez.html",
  "content": "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Sandy Ramirez\n            \n            UNDP Dominican Republic Accelerator Lab\n            Head of Exploration\n          \n        \n        \n          Innovation and digital business specialist. Sandy has worked in promoting and developing policies to strengthen MSMEs and before joining the lab was the coordinator of Digital Economy for the Ministry of Industry, Commerce and MSMEs. Sandy has coordinated the execution of cooperation projects to promote innovation with governments of Taiwan, Korea and Spain. Sandy holds a masters degree in Digital Business and Digital Marketing as well as a masters in Business Administration.\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          Contact \n          \n          \n          \n        \n      \n    \n  \n\n",
  "tags": null,
  "sdg": null,
  "excerpt": "Sandy Ramirez UNDP Dominican Republic Accelerator Lab Head of Exploration Innovation and digital business specialist. Sandy has worked in promoting...",
  "id": 30
},{
  "title": "Caroline Kiarie-Kimondo",
  "url": "/contributors/Caroline-Kiarie.html",
  "content": "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Caroline Kiarie-Kimondo\n            \n            UNDP Kenya Accelerator Lab\n            Head of Exploration\n          \n        \n        \n          Caroline Kiarie-Kimondo is the Head of Exploration, Kenya Accelerator Lab. Caroline is a social impact strategist with a passion for framing and reframing positive social impact narratives. She has 15 years of experience in philanthropy, movement building, social innovation, and strategic communications. She's also skilled in leadership coaching, human-centered design thinking, decision architecture, agile project management, and adaptive leadership.\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          Contact \n          \n          \n          \n        \n      \n    \n  \n\n",
  "tags": null,
  "sdg": null,
  "excerpt": "Caroline Kiarie-Kimondo UNDP Kenya Accelerator Lab Head of Exploration Caroline Kiarie-Kimondo is the Head of Exploration, Kenya Accelerator Lab. Caroline...",
  "id": 30
},{
  "title": "Nampaka Nkumbula",
  "url": "/contributors/Nampaka-Nkumbula.html",
  "content": "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Nampaka Nkumbula\n            \n            UNDP Zambia Accelerator Lab\n            Head of Experimentation\n          \n        \n        \n          Nampaka is currently the Zambia Accelerator Lab Head of Experimentation and is a seasoned researcher within experience supporting the Zambian Innovation ecosystem with a bias on strengthening Research and development pathways for the growth of innovations by influencing government approach and methods towards responding aptly to grassroots innovations. Prior to joining UNDP, Nampaka worked at Innovations for Poverty Action. She has experience working in the development sector, promoting the use of rigorously generated evidence with partners, conducting policy driven research, and leveraging large administrative data systems to inform decision making processes and develop scaling pathways to move promising interventions from research to scale. Working in the Health, Education and Financial Inclusion sectors in Zambia, Nampaka also has experience in agricultural policy analysis and banking with a specific focus on fund management and marketing. As a successful applicant to the B360 internship at Credit Suisse, Nampaka worked in the Export Finance Department under Corporate and Specialty Lending as a Junior Portfolio Manager. She holds a Master of Arts Degree in Economics from the University of Zambia (UNZA) and a Bachelor of Arts Degree in Economics with Mathematics and Statistics from UNZA.\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          Contact \n          \n          \n          \n        \n      \n    \n  \n\n",
  "tags": null,
  "sdg": null,
  "excerpt": "Nampaka Nkumbula UNDP Zambia Accelerator Lab Head of Experimentation Nampaka is currently the Zambia Accelerator Lab Head of Experimentation and...",
  "id": 30
},{
  "title": "Alena Klatte",
  "url": "/contributors/Alena-Klatte.html",
  "content": "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Alena Klatte\n            \n            UNDP Chief Digital Office\n            Global Project Manager, Strategic Data Initiatives\n          \n        \n        \n          \n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          Contact \n          \n          \n          \n        \n      \n    \n  \n\n",
  "tags": null,
  "sdg": null,
  "excerpt": "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Alena Klatte\n            \n            UNDP Chief Digital Office\n            Global Project Manager, Strategic Data Initiatives\n          \n        \n        \n          \n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          Contact \n          \n          \n          \n        \n      \n    \n  \n\n",
  "id": 30
},{
  "title": "Christof Hawle",
  "url": "/contributors/Christof-Hawle.html",
  "content": "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Christof Hawle\n            \n            UNDP Chief Digital Office\n            Digital Innovation and Transformation Specialist\n          \n        \n        \n          Christof has a background in private sector digital transformation consulting and development innovation and has been with the CDO since 2021. He has been supporting individual digital innovation projects and Digital X, and coordinates efforts to implement \"Digital by Default\": assuring digital is embedded in our business processes and programming life cycle. \n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          Contact \n          \n          \n          \n        \n      \n    \n  \n\n",
  "tags": null,
  "sdg": null,
  "excerpt": "Christof Hawle UNDP Chief Digital Office Digital Innovation and Transformation Specialist Christof has a background in private sector digital transformation...",
  "id": 30
},{
  "title": "Yrika Maritz",
  "url": "/contributors/Yrika-Maritz.html",
  "content": "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Yrika Maritz\n            \n            UNDP Namibia Accelerator Lab\n            Head of Experimentation\n          \n        \n        \n          Yrika Vanessa Maritz is the Head of Experimentation at the UNDP Accelerator Lab Namibia. She previously worked at the Office of the Prime Minister in various roles, including Learning and Development Officer and Deputy Director of the Efficiency and Charter Unit.  She also served as the former Director of the Centre for Management and Leadership Development at the National School of Government, NIPAM.  Yrika is a Clinical Psychologist by profession and holds a Master in Public Administration, as well as a PhD in Public and Development Management.  She has been trained in various specialized learning and development models and schools in Tanzania, the UK, Germany, Sweden, Japan, and China. She is an accredited Management Consultant with the CIMC in the UK and registered with the Social Work and Psychology Council of Namibia.\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          Contact \n          \n          \n          \n        \n      \n    \n  \n\n",
  "tags": null,
  "sdg": null,
  "excerpt": "Yrika Maritz UNDP Namibia Accelerator Lab Head of Experimentation Yrika Vanessa Maritz is the Head of Experimentation at the UNDP...",
  "id": 30
},{
  "title": "Cristhian Parra",
  "url": "/contributors/Cristhian-Parra.html",
  "content": "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Cristhian Parra\n            \n            UNDP Paraguay Accelerator Lab\n            Head of Experimentation\n          \n        \n        \n          Cristian Parra has a Ph.D. in Information and Communication Technologies from University of Trento, Italy, and an Informatics Engineering degree from the Polytechnic School of UNA. For the past 10 years, he has been working in social informatics R&D projects, using participatory design and human-centered design approaches to topics in community-based public health, social inclusion, civic technologies and citizen participation. He was a postdoctoral researcher at the University of California, Berkeley, where he led the projects of the Social Apps Lab (CITRIS). As consultant, he helped organizations like the World Bank, the IADB, the SSI of Berkeley, among others. Before joining AccLab, he was working as a Senior Researcher at the Catholic University of Asunción, where he led projects like TopaDengue, which combines community participation with technologies to fight the spread of the Aedes Aegypti through a bottom-up citizen science approach, within a controlled experiment. In 2018, with his team, he was the recipient of one of the Honorific Mentions of the National Prize for Science for some of these works. Cristhian has always had a passion for initiatives at intersections, bridging Computer and Social Sciences to inform research, development, and implementation of innovative socio-technical solutions for social or community challenges. This passion led him straight to this lab, where he sees a unique opportunity to contribute to the already great work that UNDP is doing in solving the big societal and development challenges of our century.\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          Contact \n          \n          \n          \n        \n      \n    \n  \n\n",
  "tags": null,
  "sdg": null,
  "excerpt": "Cristhian Parra UNDP Paraguay Accelerator Lab Head of Experimentation Cristian Parra has a Ph.D. in Information and Communication Technologies from...",
  "id": 30
},{
  "title": "Eduardo Gustale",
  "url": "/contributors/Eduardo-Gustale.html",
  "content": "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Eduardo Gustale\n            \n            UNDP Accelerator Labs\n            Monitoring, Experimentation and Learning Specialist\n          \n        \n        \n          Experienced in Sustainable Development and Social Innovation. Worked repeated times in academic research, survey development and market insight. Elected Global Shaper by the World Economic Forum & Chevening Scholar for an MSc in Innovation and Entrepreneurship at University of Warwick.\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          Contact \n          \n          \n          \n        \n      \n    \n  \n\n",
  "tags": null,
  "sdg": null,
  "excerpt": "Eduardo Gustale UNDP Accelerator Labs Monitoring, Experimentation and Learning Specialist Experienced in Sustainable Development and Social Innovation. Worked repeated times...",
  "id": 30
},{
  "title": "Tayo Akinyemi",
  "url": "/contributors/Tayo-Akinyemi.html",
  "content": "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Tayo Akinyemi\n            \n            UNDP Accelerator Labs\n            Learning and Community Manager\n          \n        \n        \n          I have spent most of my career creating order from ambiguity, whether it's charting my own vocational journey, supporting an African entrepreneurial leadership center launch, building the first pan-African network of tech hubs, or decoding early stage investing in Africa. In other words, I like to help great people build great things, ideally by marrying vision (dream+strategy) with implementation (getting stuff done). African tech entrepreneurship and innovation trends on all of my feeds, with a special emphasis on building enabling infrastructure (think hubs and accelerators) enhancing, the capacity of those enablers (especially early stage investors).\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          Contact \n          \n          \n          \n        \n      \n    \n  \n\n",
  "tags": null,
  "sdg": null,
  "excerpt": "Tayo Akinyemi UNDP Accelerator Labs Learning and Community Manager I have spent most of my career creating order from ambiguity,...",
  "id": 30
},{
  "title": "Calum Handforth",
  "url": "/contributors/Calum-Handforth.html",
  "content": "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Calum Handforth\n            \n            UNDP Chief Digital Office\n            Digital Programmes Strategic Manager\n          \n        \n        \n          UN Advisor and Fellow - focusing on data, innovation, and digital tech in international development and government.\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          Contact \n          \n          \n          \n        \n      \n    \n  \n\n",
  "tags": null,
  "sdg": null,
  "excerpt": "Calum Handforth UNDP Chief Digital Office Digital Programmes Strategic Manager UN Advisor and Fellow - focusing on data, innovation, and...",
  "id": 30
},{
  "title": "Nicola Holden",
  "url": "/contributors/Nicola-Holden.html",
  "content": "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Nicola Holden\n            \n            UNDP Chief Digital Office\n            Digital Experience Advisor\n          \n        \n        \n          \n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          Contact \n          \n          \n          \n        \n      \n    \n  \n\n",
  "tags": null,
  "sdg": null,
  "excerpt": "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Nicola Holden\n            \n            UNDP Chief Digital Office\n            Digital Experience Advisor\n          \n        \n        \n          \n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          Contact \n          \n          \n          \n        \n      \n    \n  \n\n",
  "id": 30
},{
  "title": "Adedapo Aderemi",
  "url": "/contributors/Adedapo-Aderemi.html",
  "content": "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Adedapo Aderemi\n            \n            UNDP Accelerator Labs\n            Software Developer\n          \n        \n        \n          Experienced Software Engineer and Cloud Enthusiast.\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          Contact \n          \n          \n          \n        \n      \n    \n  \n\n",
  "tags": null,
  "sdg": null,
  "excerpt": "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Adedapo Aderemi\n            \n            UNDP Accelerator Labs\n            Software Developer\n          \n        \n        \n          Experienced Software Engineer and Cloud Enthusiast.\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          Contact \n          \n          \n          \n        \n      \n    \n  \n\n",
  "id": 30
},{
  "title": "Mónica Ríos",
  "url": "/contributors/Monica-Rios.html",
  "content": "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Mónica Ríos\n            \n            UNDP Paraguay Accelerator Labs\n            Head of Exploration\n          \n        \n        \n          Mónica Rios has a Business Administration Degree, holds a Master’s Degree in Creation and Management of Innovative and Technology Based Companies (Barcelona, Spain) as part of the National Scholarship Program “BECAL” and a Diploma in Corporate Social Responsibility (Santiago, Chile). She worked with the private sector, NGOs and multilateral funds in subjects related to corporate social responsibility, sustainability, marketing, strategy and innovation. Before joining UNDP he designed and coordinated incubation and acceleration processes for MSMEs in the creative sector in Paraguay and social innovation projects through the IDB LAB. Her main motivation lies in lies in maximize innovative projects developed in Paraguay, which can inspire others to think big, as well as learn from other practices developed by others AccLabs worldwide.\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          Contact \n          \n          \n          \n        \n      \n    \n  \n\n",
  "tags": null,
  "sdg": null,
  "excerpt": "Mónica Ríos UNDP Paraguay Accelerator Labs Head of Exploration Mónica Rios has a Business Administration Degree, holds a Master’s Degree...",
  "id": 30
},{
  "title": "Alberto Cottica",
  "url": "/contributors/Alberto-Cottica.html",
  "content": "\n  \n    \n      \n        \n          \n            \n            \n            \n          \n          \n            \n              Alberto Cottica\n            \n            UNDP Accelerator Labs\n            R&D Specialist\n          \n        \n        \n          Originally a development/environmental economist, now more of a quantitative social scientist. Anthropology, ethnography, network science. Interested in epistemology. Committed citizen. Runner. Ex-minor rockstar.\n        \n      \n    \n  \n\n\n  \n    \n      \n        \n          Contact \n          \n          \n          \n        \n      \n    \n  \n\n",
  "tags": null,
  "sdg": null,
  "excerpt": "Alberto Cottica UNDP Accelerator Labs R&D Specialist Originally a development/environmental economist, now more of a quantitative social scientist. Anthropology, ethnography,...",
  "id": 30
}]


// builds search
$(document).ready(function() {
  $('input#search').on('keyup', function () {
    var resultdiv = $('#results');
    var contentdiv = $('#content');

    var query = $(this).val();
    var result = index.search(query);
    resultdiv.empty();
    contentdiv.empty()
    
    // Add status
    resultdiv.prepend('<h6 class="">Found '+result.length+' result(s)</h6>');
    // Loop through, match, and add results
    for (var item in result) {
      var ref = result[item].ref;
      var searchitem = `
      <div class="tertiary">
        <h5 class="" tabindex="0" data-viewport="false">
        <a href="/toolkit-micro-site-template${store[ref]?.url}">
            ${store[ref]?.title}
        </a>
        </h5>
        <p>
            ${store[ref].excerpt}
        </p>
    </div>
      `

      resultdiv.append(searchitem);
    }
  });
  

  //POPULATE TAGS AND SDG FILTER
var tagsdiv = $('#tag-div');
var sdgdiv = $('#sdg-div')

if(tags.length > 0){
    let tg = `
    <div class="multi-select" data-multi-select="">
        <button aria-label="Region" aria-expanded="false" data-id="tag">
        Tags
        </button>
        <ul
        data-type="region"
        role="listbox"
        aria-multiselectable="true"
        aria-hidden="true"
        aria-modal="true"
        >
    `;

    for(let i = 0; i < tags.length; i++) {
        tg += `
            <li role="option">
                <div class="form-check">
                    <label for="tag${i+1}">${tags[i]?.toUpperCase()}</label>
                    <input
                        type="checkbox"
                        id="${tags[i]}"
                        name="tags"
                        value="${tags[i]}"
                    />
                </div>
            </li>  
        `;
    }

    tg += `
            </ul>
        </div>
    `;

    tagsdiv.append(tg)
}

if(sdg.length > 0){
    let tg = `
    <div class="multi-select" data-multi-select="">
        <button aria-label="Region" aria-expanded="false" data-id="sdg">
        SDG
        </button>
        <ul
        data-type="region"
        role="listbox"
        aria-multiselectable="true"
        aria-hidden="true"
        aria-modal="true"
        >
    `;

    for(let i = 0; i < sdg.length; i++) {
        tg += `
            <li role="option">
                <div class="form-check">
                    <label for="sdg${i+1}">${sdg[i]}</label>
                    <input
                        type="checkbox"
                        id="${sdg[i]}"
                        name="sdg"
                        value="${sdg[i]}"
                    />
                </div>
            </li>  
        `;
    }

    tg += `
            </ul>
        </div>
    `;

    sdgdiv.append(tg)
}

let taglist = []
let sdglist = []

let searchitemfn = post => `
<div class="tertiary">
    <h5 class="" tabindex="0" data-viewport="false">
    <a href="/toolkit-micro-site-template${post?.url}">
        ${post?.title}
    </a>
    </h5>
    <p>
        ${post.excerpt}
    </p>
</div>
`

let resultdiv = $('#results');
let contentdiv = $('#content');
let contentCopy = $("#content").html(); // Store the current content

let filterresult = () => {
    resultdiv.empty()
    resultdiv.prepend('<h6 class="">Showing results for  ' + [...sdglist, ...taglist].toString() + '</h6>');
    for(post of store){
        if(post?.tags?.some(tg => taglist.includes(tg) )){
            contentdiv.empty()
            var searchitem = searchitemfn(post)

            resultdiv.append(searchitem);
        }
        else if(post?.sdg?.some(tg => sdglist.includes(tg) )){
            contentdiv.empty()
            var searchitem = searchitemfn(post)

            resultdiv.append(searchitem);
        }
    };
}

$(document).on('multiSelectInputToggle', (e) => {
    let { value, checked, name } = e.target;
    
    if(checked && name === 'tags') taglist.push(value)
    else if(checked && name === 'sdg') sdglist.push(value)
    else if(!checked && name === 'sdg' && sdglist.includes(value)) sdglist.splice(sdglist.indexOf(value), 1)
    else if(taglist.includes(value)) taglist.splice(taglist.indexOf(value), 1)
  
    filterresult()

});

$(document).on('filterSearchChipRemoval', (e) => {
    let textContent = e.target.getAttribute('option-name');
    sdglist.includes(textContent) && sdglist.splice(sdglist.indexOf(textContent), 1)
    taglist.includes(textContent) && taglist.splice(taglist.indexOf(textContent), 1)
    filterresult()
});

$(document).on('filterSearchClear', (e) => {
    sdglist = [];
    taglist =  [];
    resultdiv.empty()
    $("#content").html(contentCopy);
});

//GET ELEMTENTS WITH ID TAGS AND SDG
$('.tag-chip').on('click', e =>{
    let textContent = e.target.getAttribute('text-value');
    taglist = [ textContent ]
    sdglist = []
    contentdiv.empty()
    filterresult()
} )

$('.sdg-chip').on('click', e =>{
    let textContent = e.target.getAttribute('text-value');
    sdglist = [textContent]
    taglist = []
    contentdiv.empty()
    filterresult()
} )

})