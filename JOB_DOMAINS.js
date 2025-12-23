export const JOB_DOMAINS = [
    {
        id: 1,
        title: "Data Science & Data Analytics",
        description: "Data Science and Analytics is the backbone of modern strategic decision-making. This domain involves the scientific process of extracting actionable insights from raw data using statistical methods, advanced algorithms, and machine learning models. Professionals in this field help organizations solve complex problems, predict future market trends, optimize operations, and personalize customer experiences. It spans the entire data lifecycle—from collection and cleaning to analysis, visualization, and the deployment of predictive models.",
        skills: ["Python", "SQL", "Statistics", "Machine Learning", "Data Visualization", "Excel", "R", "Big Data", "Deep Learning"],
        relatedDomainIds: [3, 5],
        roles: [
            {
                title: "Data Analyst",
                description: "As a Data Analyst, you act as the bridge between raw data and business strategy. Your primary responsibility is to clean, process, and analyze datasets to identify trends and patterns. You will create reports and dashboards using tools like Excel, Power BI, or Tableau to help stakeholders understand performance metrics and make informed decisions.",
                skills: ["Excel", "SQL", "Tableau", "Critical Thinking", "Data Cleaning"]
            },
            {
                title: "MIS Executive / MIS Analyst",
                description: "Management Information Systems (MIS) Executives focus on the operational side of data. You will be responsible for maintaining accurate databases, generating daily/weekly/monthly reports for management, and ensuring data integrity across the organization. This role is crucial for tracking KPIs and operational efficiency.",
                skills: ["Excel", "VBA", "Reporting", "Database Management", "Communication"]
            },
            {
                title: "Data Quality Analyst",
                description: "Data Quality Analysts are the guardians of data integrity. You will audit data systems to identify errors, inconsistencies, and duplicates. Your work ensures that the data used for analysis and operations is accurate, reliable, and compliant with governance standards.",
                skills: ["SQL", "Data Profiling", "Attention to Detail", "Quality Assurance"]
            },
            {
                title: "Data Migration Specialist",
                description: "This role involves the complex process of transferring data between computer storage systems or computing environments. You will plan, test, and execute data migration strategies to ensure no data is lost or corrupted during system upgrades or cloud transitions.",
                skills: ["ETL Tools", "SQL", "Scripting", "System Architecture"]
            },
            {
                title: "SQL Developer",
                description: "SQL Developers specialize in designing, developing, and maintaining database systems using Structured Query Language. You will write complex queries, stored procedures, and triggers to support application development and reporting needs, ensuring database performance and security.",
                skills: ["SQL Server", "MySQL", "Database Design", "Query Optimization"]
            },
            {
                title: "Database Administrator (DBA)",
                description: "DBAs are responsible for the installation, configuration, upgrade, administration, monitoring, and maintenance of databases. You ensure that data is secure, available, and recoverable in case of system failure, playing a critical role in business continuity.",
                skills: ["Oracle/SQL Server", "Backup/Recovery", "Performance Tuning", "Security"]
            },
            {
                title: "Data Engineer",
                description: "Data Engineers build the infrastructure that allows data to be analyzed. You will design and maintain robust data pipelines (ETL) that collect and transform raw data from various sources into a usable format for Data Scientists and Analysts.",
                skills: ["Python", "Spark", "Hadoop", "AWS/Azure", "ETL Pipelines"]
            },
            {
                title: "BI Analyst",
                description: "Business Intelligence Analysts use data to figure out market and business trends to increase profits and efficiency. You will focus on analyzing competitors and market data to provide strategic recommendations and creating comprehensive visual presentations.",
                skills: ["Power BI", "Tableau", "SQL", "Business Strategy"]
            },
            {
                title: "Tableau Developer",
                description: "A specialized role focused on creating interactive and impactful data visualizations using Tableau. You will translate complex data sets into intuitive graphs, charts, and dashboards that allow non-technical users to explore data easily.",
                skills: ["Tableau", "Data Viz", "SQL", "Storytelling"]
            },
            {
                title: "Power BI Developer",
                description: "Similar to a Tableau Developer but focused on the Microsoft ecosystem. You will use Power BI to transform data into rich visuals and organize them into informative reports and dashboards for enterprise use.",
                skills: ["Power BI", "DAX", "Data Modeling", "Azure"]
            },
            {
                title: "Qlikview/Qliksense Developer",
                description: "You will develop Business Discovery and Business Intelligence solutions using the Qlik platform. This involves data modeling, front-end design, and scripting to create associative data models that help users find connections in their data.",
                skills: ["QlikView", "QlikSense", "Data Modeling", "Set Analysis"]
            },
            {
                title: "ETL Developer",
                description: "ETL (Extract, Transform, Load) Developers focus specifically on the data integration process. You will design systems to extract data from source systems, transform it into a consistent format, and load it into a data warehouse.",
                skills: ["Informatica", "Talend", "SQL", "Data Integration"]
            },
            {
                title: "Data Warehouse Developer",
                description: "You will architect and manage centralized data repositories (Data Warehouses) that store historical data for analytical reporting. You ensure the warehouse is optimized for query performance and scalability.",
                skills: ["Data Warehousing", "Snowflake", "Redshift", "Star Schema"]
            },
            {
                title: "Cloud Data Engineer",
                description: "A modern evolution of the Data Engineer role, focusing on cloud-native technologies. You will build and manage big data infrastructure on platforms like AWS, Azure, or GCP using services like Glue, Data Factory, and Lambda.",
                skills: ["AWS Glue", "Azure Data Factory", "Python", "Cloud Security"]
            },
            {
                title: "Big Data Engineer",
                description: "You will deal with massive datasets that traditional databases cannot handle. You will use technologies like Hadoop, Spark, and Kafka to process, analyze, and store petabytes of data in real-time or batch modes.",
                skills: ["Hadoop", "Spark", "Kafka", "NoSQL", "Distributed Systems"]
            },
            {
                title: "ERP Data Analyst",
                description: "This role involves analyzing data specifically within Enterprise Resource Planning (ERP) systems like SAP or Oracle. You ensure master data accuracy and create reports to support supply chain, finance, and HR functions.",
                skills: ["SAP/Oracle ERP", "Data Analysis", "Reporting", "Business Process"]
            },
            {
                title: "Python Trainer",
                description: "You will share your expertise by teaching Python programming to students or corporate employees. This requires deep knowledge of the language and the ability to explain complex concepts simply.",
                skills: ["Python", "Teaching", "Communication", "Curriculum Design"]
            },
            {
                title: "Python Developer",
                description: "Python Developers write the server-side logic for web applications, data processing scripts, and automation tools. You will build scalable back-end components and integrate them with front-end applications.",
                skills: ["Python", "Django/Flask", "API Development", "Debugging"]
            },
            {
                title: "AI Developer",
                description: "You will build Artificial Intelligence functionality into software applications. This could involve creating chatbots, recommendation engines, or intelligent search features using AI libraries and APIs.",
                skills: ["Python", "TensorFlow", "NLP", "API Integration"]
            },
            {
                title: "AI & ML Intern",
                description: "An entry-level position where you will learn to build and train machine learning models under the guidance of senior engineers. You will assist in data preparation, model testing, and research.",
                skills: ["Python", "Math", "Basic ML Algorithms", "Learning Agility"]
            },
            {
                title: "Java AI Intern",
                description: "A specialized internship focusing on using Java for AI development. While Python is common, Java is widely used in enterprise AI systems for its performance and security.",
                skills: ["Java", "AI Libraries", "Object Oriented Programming"]
            },
            {
                title: "AI & ML Engineer",
                description: "You will design and deploy sophisticated machine learning models and AI systems. Your work involves selecting appropriate algorithms, training models on large datasets, and optimizing them for production environments.",
                skills: ["Deep Learning", "Python", "Cloud AI Services", "Mathematics"]
            },
            {
                title: "AI Engineer",
                description: "AI Engineers focus on embedding AI models into practical applications. You bridge the gap between data science and software engineering, ensuring AI solutions are scalable, reliable, and integrated into user workflows.",
                skills: ["Python", "API Integration", "Model Deployment", "Software Engineering"]
            },
            {
                title: "Data Scientist",
                description: "Data Scientists are analytical experts who utilize their skills in both technology and social science to find trends and manage data. You will use industry knowledge, contextual understanding, and skepticism of existing assumptions to uncover solutions to business challenges.",
                skills: ["Python/R", "Statistics", "Machine Learning", "Big Data", "Hypothesis Testing"]
            },
            {
                title: "Data Science Associate / AI AWS",
                description: "A role focusing on applying data science principles specifically within the Amazon Web Services ecosystem. You will use AWS SageMaker and other cloud tools to build and deploy models.",
                skills: ["AWS SageMaker", "Python", "Cloud Basics", "ML Ops"]
            },
            {
                title: "Machine Learning Engineer",
                description: "You research, build, and design self-running artificial intelligence software to automate predictive models. You create the algorithms that allow machines to learn from data without explicit programming.",
                skills: ["TensorFlow", "PyTorch", "ML Ops", "Algorithm Design"]
            },
            {
                title: "AI Data Specialist",
                description: "This role focuses on the fuel for AI: data. You will curate, label, and annotate large datasets to train AI models, ensuring high-quality input for high-quality output.",
                skills: ["Data Labeling", "Quality Assurance", "Domain Knowledge", "Attention to Detail"]
            }
        ]
    },
    {
        id: 2,
        title: "Cyber Security",
        description: "Cyber Security is the practice of defending computers, servers, mobile devices, electronic systems, networks, and data from malicious attacks. In an increasingly digital world, this domain is critical for maintaining the integrity, confidentiality, and availability of information. Professionals in this field work on network security, application security, information security, and operational security to prevent data breaches and cyber threats.",
        skills: ["Network Security", "Linux", "Ethical Hacking", "Firewalls", "Compliance", "SIEM", "Cryptography"],
        relatedDomainIds: [3, 7],
        roles: [
            {
                title: "RC Intern",
                description: "Risk and Compliance Interns assist in identifying potential risks to the organization's information systems. You will help with documentation, audits, and ensuring that security policies are being followed.",
                skills: ["Basic Security", "Documentation", "Policy Understanding"]
            },
            {
                title: "VAPT Engineer",
                description: "Vulnerability Assessment and Penetration Testing (VAPT) Engineers act as 'ethical hackers'. You will simulate cyberattacks on your organization's systems to identify weaknesses before malicious hackers can exploit them.",
                skills: ["Burp Suite", "Metasploit", "Networking", "Scripting"]
            },
            {
                title: "Cybersecurity Training",
                description: "You will be responsible for educating employees about security best practices. Human error is a major security vulnerability, and your training sessions help prevent phishing and social engineering attacks.",
                skills: ["Communication", "Security Fundamentals", "Presentation"]
            },
            {
                title: "Cybersecurity Consultant",
                description: "Consultants advise organizations on how to best protect their systems. You will assess security postures, recommend improvements, and help implement robust security architectures tailored to business needs.",
                skills: ["Risk Assessment", "Compliance", "Security Architecture", "Problem Solving"]
            },
            {
                title: "GRC Analyst",
                description: "Governance, Risk, and Compliance (GRC) Analysts ensure the organization adheres to regulatory frameworks (like GDPR, HIPAA, ISO). You manage risk logs and ensure legal and internal compliance.",
                skills: ["ISO 27001", "Risk Management", "Auditing", "Legal Compliance"]
            },
            {
                title: "Associate Consultant – GRC",
                description: "An early-career role in GRC, supporting senior consultants in audit preparation, risk assessment documentation, and compliance tracking.",
                skills: ["Documentation", "Audit Support", "Analytical Skills"]
            },
            {
                title: "IT Security Analyst",
                description: "You are the first line of defense, monitoring computer networks for security issues. You investigate security breaches, install security measures, and operate software to protect systems and information infrastructure.",
                skills: ["SIEM", "Incident Response", "Firewalls", "Monitoring"]
            },
            {
                title: "Surveillance Executive",
                description: "Focused on physical or digital surveillance, you monitor security feeds and system logs to detect unauthorized access or suspicious behavior in real-time.",
                skills: ["Monitoring Tools", "Attention to Detail", "Reporting"]
            },
            {
                title: "Cybersecurity Executive",
                description: "A management role overseeing the security initiatives within a company. You plan and carry out security measures to protect the organization's computer networks and systems.",
                skills: ["Security Management", "Strategy", "Leadership"]
            },
            {
                title: "Cybersecurity – VAPT / Digital Forensic",
                description: "A dual role involving both penetration testing and digital forensics. You not only prevent attacks but also investigate cybercrimes to determine how a breach occurred and preserve evidence.",
                skills: ["Forensics Tools", "VAPT", "Investigation", "Reverse Engineering"]
            },
            {
                title: "L2 Network & Security Engineer",
                description: "A mid-level technical role handling escalated network security issues. You configure complex firewalls, VPNs, and handle security incidents that L1 support cannot resolve.",
                skills: ["Routing/Switching", "Firewall Configuration", "Troubleshooting", "Cisco/Juniper"]
            },
            {
                title: "Linux Administrator",
                description: "While an admin role, this is critical for security as most secure servers run on Linux. You manage user permissions, patch vulnerabilities, and harden the OS against attacks.",
                skills: ["Linux", "Scripting", "Server Hardening", "User Management"]
            },
            {
                title: "Cloud Engineer",
                description: "In the context of security, you focus on securing cloud infrastructure. You configure Identity and Access Management (IAM), secure cloud storage, and monitor cloud environments for threats.",
                skills: ["AWS/Azure Security", "IAM", "Cloud Architecture", "Compliance"]
            }
        ]
    },
    {
        id: 3,
        title: "Cloud Computing",
        description: "Cloud Computing is the delivery of computing services—including servers, storage, databases, networking, software, analytics, and intelligence—over the Internet ('the cloud'). This domain allows faster innovation, flexible resources, and economies of scale. Professionals here design, deploy, and manage applications on platforms like AWS, Microsoft Azure, and Google Cloud, moving businesses away from physical on-premise hardware.",
        skills: ["AWS", "Azure", "GCP", "Linux", "Networking", "DevOps", "Virtualization", "Containerization"],
        relatedDomainIds: [2, 7, 5],
        roles: [
            {
                title: "AWS Engineer",
                description: "You design, deploy, and maintain cloud solutions specifically on Amazon Web Services. You will work with core services like EC2, S3, and RDS to build scalable and secure infrastructure.",
                skills: ["EC2", "S3", "VPC", "IAM", "CloudFormation"]
            },
            {
                title: "Azure Engineer",
                description: "You focus on the Microsoft Azure platform, managing virtual machines, active directory, and cloud networking. This role is highly sought after by enterprises using the Microsoft ecosystem.",
                skills: ["Azure VM", "Active Directory", "Azure DevOps", "PowerShell"]
            },
            {
                title: "GCP Engineer",
                description: "Specializing in the Google Cloud Platform, you leverage Google's advanced data and containerization capabilities (like Kubernetes) to build modern cloud applications.",
                skills: ["Compute Engine", "Kubernetes", "BigQuery", "Google Cloud SDK"]
            },
            {
                title: "Cloud Administrator",
                description: "You manage the day-to-day operations of cloud infrastructure. Your tasks include monitoring system health, patching software, managing user access, and ensuring resource optimization.",
                skills: ["System Admin", "Monitoring", "Patching", "Troubleshooting"]
            },
            {
                title: "Cloud Support Associate",
                description: "The entry point for cloud careers. You provide technical assistance to cloud customers, troubleshooting connectivity, access, and configuration issues.",
                skills: ["Troubleshooting", "Customer Service", "Cloud Basics", "Networking"]
            },
            {
                title: "Cloud Operations Engineer",
                description: "Focused on reliability, you ensure cloud services are always up and running. You set up monitoring alerts, handle incident response, and automate operational tasks.",
                skills: ["Monitoring", "Incident Management", "Scripting", "Linux"]
            },
            {
                title: "Cloud DevOps Engineer",
                description: "A hybrid role combining development and operations. You build CI/CD pipelines to automate software deployment, ensuring code moves from development to production quickly and safely.",
                skills: ["CI/CD", "Docker", "Kubernetes", "Jenkins", "Terraform"]
            },
            {
                title: "Cloud Security Analyst",
                description: "You specialize in protecting cloud environments. You configure firewalls, manage encryption keys, and ensure the cloud infrastructure complies with security standards.",
                skills: ["Cloud Security", "Compliance", "Identity Management", "Encryption"]
            },
            {
                title: "Systems Administrator (Cloud)",
                description: "Similar to a traditional SysAdmin but focused on cloud VMs. You manage the operating systems (Linux/Windows) running inside the cloud.",
                skills: ["Linux/Windows Admin", "Scripting", "Server Management"]
            },
            {
                title: "Cloud Migration Specialist",
                description: "You help companies move their legacy on-premise applications and data to the cloud. This involves planning, testing, and executing complex migration strategies.",
                skills: ["Migration Tools", "Architecture", "Database Migration", "Project Management"]
            },
            {
                title: "Cloud Solutions Engineer",
                description: "A role often involving pre-sales or consulting. You listen to customer requirements and design technical cloud solutions that solve their business problems.",
                skills: ["Solution Architecture", "Pre-sales", "Communication", "Technical Design"]
            },
            {
                title: "Cloud Architect",
                description: "A senior role responsible for the high-level design of complex cloud environments. You make strategic decisions about which cloud services to use to meet reliability, scalability, and cost goals.",
                skills: ["System Design", "Multi-cloud", "Enterprise Architecture", "Strategic Planning"]
            }
        ]
    },
    {
        id: 4,
        title: "Software Testing",
        description: "Software Testing is the process of evaluating and verifying that a software product or application does what it is supposed to do. It ensures that software is bug-free, performs well under load, and is secure. Testers play a crucial role in the development lifecycle, preventing costly errors and ensuring a high-quality user experience.",
        skills: ["Manual Testing", "Automation", "Java/Python", "Selenium", "API Testing", "JIRA", "Performance Testing"],
        relatedDomainIds: [5, 6],
        roles: [
            {
                title: "Manual Tester",
                description: "You execute test cases manually without using automation tools. You play the role of the end-user, exploring the application to find bugs in features and user interface.",
                skills: ["Test Planning", "Bug Reporting", "JIRA", "Attention to Detail"]
            },
            {
                title: "Automation Tester",
                description: "You write scripts to automatically run tests. This is essential for regression testing, where you need to check if new code has broken existing functionality.",
                skills: ["Selenium", "Java/Python", "Scripting", "Test Frameworks"]
            },
            {
                title: "QA Analyst",
                description: "Quality Assurance Analysts focus on the process. You analyze requirements to prevent defects before they happen and ensure the development process follows quality standards.",
                skills: ["Process Improvement", "Documentation", "Requirement Analysis"]
            },
            {
                title: "QA Engineer",
                description: "You engineer quality into the software. You work closely with developers to integrate testing into the CI/CD pipeline, ensuring immediate feedback on code quality.",
                skills: ["CI/CD", "Test Automation", "Agile Methodologies"]
            },
            {
                title: "Test Engineer",
                description: "A technical role designing and implementing tests. You might verify specific technical requirements, algorithms, or system integrations.",
                skills: ["Technical Testing", "Debugging", "System Knowledge"]
            },
            {
                title: "Selenium Tester",
                description: "A specialist in Selenium, the most popular tool for web automation. You build robust test frameworks to automate web browser interactions.",
                skills: ["Selenium WebDriver", "Java", "TestNG/JUnit"]
            },
            {
                title: "API Tester",
                description: "You test the invisible layer of software—the API. You send requests to the server and verify the responses, ensuring the backend logic works correctly.",
                skills: ["Postman", "REST Assured", "JSON", "HTTP Status Codes"]
            },
            {
                title: "Mobile App Tester",
                description: "Focused on iOS and Android apps. You test functionality across different devices, screen sizes, and operating system versions.",
                skills: ["Appium", "Mobile Devices", "Android Studio/Xcode"]
            },
            {
                title: "Performance Tester",
                description: "You test how a system behaves under heavy load. You simulate thousands of users to ensure the website doesn't crash during traffic spikes.",
                skills: ["JMeter", "LoadRunner", "Performance Tuning"]
            },
            {
                title: "Software Test Lead",
                description: "You lead a team of testers, assigning tasks, creating test strategies, and reporting quality metrics to management.",
                skills: ["Team Management", "Strategy", "Reporting", "Leadership"]
            },
            {
                title: "UAT Tester",
                description: "User Acceptance Testing involves testing the software with actual end-users to ensure it meets real-world business needs before going live.",
                skills: ["Business Knowledge", "Communication", "User Empathy"]
            },
            {
                title: "Test Automation Engineer",
                description: "You build the 'robots' that test the software. You design and maintain complex automated test frameworks that run thousands of tests daily.",
                skills: ["Coding", "Framework Design", "DevOps Integration"]
            }
        ]
    },
    {
        id: 5,
        title: "Full Stack Development",
        description: "Full Stack Development is the art of building complete web applications. A Full Stack Developer can work on both the 'front end' (what the user sees) and the 'back end' (the server, application logic, and database). This versatility makes them highly valuable assets in any tech team, capable of handling a project from concept to finished product.",
        skills: ["HTML/CSS", "JavaScript", "React/Angular", "Node.js/Python", "Databases", "API", "Version Control"],
        relatedDomainIds: [6, 3],
        roles: [
            {
                title: "Full Stack Developer",
                description: "You handle the entire web development stack. You can design a database, write the server API, and build the user interface that consumes that API.",
                skills: ["Frontend", "Backend", "Database", "System Architecture"]
            },
            {
                title: "Frontend Developer",
                description: "You focus on the client-side of the application. You create responsive, interactive, and beautiful user interfaces using modern JavaScript frameworks.",
                skills: ["React", "HTML/CSS", "JavaScript", "Responsive Design"]
            },
            {
                title: "Backend Developer",
                description: "You build the engine under the hood. You manage servers, databases, and application logic, ensuring data is processed securely and efficiently.",
                skills: ["Node.js", "Python", "SQL/NoSQL", "API Design"]
            },
            {
                title: "Web Developer",
                description: "A broad term for building websites. You might work on content management systems, static sites, or simple web applications.",
                skills: ["HTML", "CSS", "JS", "CMS (WordPress)"]
            },
            {
                title: "Java Full Stack Developer",
                description: "You use Java (often Spring Boot) for the backend—common in large enterprises—paired with a modern JavaScript frontend like React or Angular.",
                skills: ["Java", "Spring Boot", "React/Angular", "Hibernate"]
            },
            {
                title: "Python Full Stack Developer",
                description: "You use Python frameworks like Django or Flask for the backend, known for their speed and readability, alongside a frontend framework.",
                skills: ["Python", "Django", "JavaScript", "ORM"]
            },
            {
                title: ".Net Full Stack Developer",
                description: "You work within the Microsoft ecosystem, using C# and .NET Core for robust, enterprise-grade backend development.",
                skills: ["C#", ".NET", "SQL Server", "Entity Framework"]
            },
            {
                title: "MEAN Stack Developer",
                description: "You specialize in the MongoDB, Express, Angular, and Node.js stack. This is a pure JavaScript stack used for building dynamic, single-page applications.",
                skills: ["Angular", "Node.js", "MongoDB", "Express.js"]
            },
            {
                title: "UI Developer",
                description: "You bridge the gap between design and development. You translate Figma or Adobe XD designs into pixel-perfect code.",
                skills: ["HTML", "CSS", "JavaScript", "Animation Libraries"]
            },
            {
                title: "API Developer",
                description: "You specialize in creating the interfaces that allow different software systems to talk to each other. You design RESTful or GraphQL APIs.",
                skills: ["REST", "GraphQL", "Backend Logic", "Security"]
            }
        ]
    },
    {
        id: 6,
        title: "MERN Stack Development",
        description: "MERN is a specific, highly popular Full Stack variation consisting of MongoDB (Database), Express.js (Backend Framework), React (Frontend Library), and Node.js (Runtime Environment). It is widely used for building modern, high-performance web applications. Mastery of this stack allows developers to use a single language (JavaScript) across the entire application, streamlining development.",
        skills: ["MongoDB", "Express.js", "React", "Node.js", "JavaScript", "Redux", "REST API"],
        relatedDomainIds: [5],
        roles: [
            {
                title: "MernStack Developer",
                description: "You are a master of the JavaScript ecosystem. You build end-to-end applications using MongoDB, Express, React, and Node.js.",
                skills: ["MongoDB", "Express", "React", "Node", "Full Stack Architecture"]
            },
            {
                title: "React Developer",
                description: "You specialize in React.js, the world's most popular frontend library. You build dynamic, component-based user interfaces that update in real-time.",
                skills: ["React", "Redux", "Hooks", "Context API"]
            },
            {
                title: "Node.js Developer",
                description: "You specialize in the backend using Node.js. You build fast, scalable network applications and APIs that can handle many concurrent connections.",
                skills: ["Node.js", "Express", "API", "Asynchronous Programming"]
            },
            {
                title: "Express.js Developer",
                description: "You focus on Express, the standard server framework for Node.js. You handle routing, middleware, and HTTP requests.",
                skills: ["Backend Routing", "Middleware", "API Structure"]
            },
            {
                title: "MongoDB Developer",
                description: "You specialize in NoSQL database design using MongoDB. You design flexible schemas for storing complex data structures.",
                skills: ["NoSQL", "Database Design", "Aggregation Pipeline"]
            },
            {
                title: "Frontend Engineer (React)",
                description: "An engineering-focused role where you architecture complex React applications, focusing on performance, state management, and reusability.",
                skills: ["React", "Performance Optimization", "Testing", "Architecture"]
            },
            {
                title: "Backend Engineer (Node)",
                description: "An engineering role focused on building robust microservices and distributed systems using Node.js.",
                skills: ["Microservices", "Scalability", "System Design", "Message Queues"]
            }
        ]
    },
    {
        id: 7,
        title: "Networking",
        description: "Networking is the practice of transporting and exchanging data between nodes over a shared medium. It involves the design, implementation, and management of the hardware and software that allow computers to communicate. Networking professionals ensure that the internet and internal company networks are fast, secure, and reliable.",
        skills: ["CCNA", "Routing", "Switching", "Hardware", "Troubleshooting", "TCP/IP", "VPN"],
        relatedDomainIds: [2, 3],
        roles: [
            {
                title: "Network Engineer",
                description: "You plan and construct network infrastructures (LANs, WANs). You install routers, switches, and other hardware to create functional networks.",
                skills: ["Routing", "Switching", "Firewalls", "Network Design"]
            },
            {
                title: "NOC Engineer",
                description: "Network Operations Center (NOC) Engineers monitor the health of networks 24/7. You respond to alarms and troubleshoot outages to ensure maximum uptime.",
                skills: ["Monitoring Tools", "Troubleshooting", "Incident Response"]
            },
            {
                title: "Network Administrator",
                description: "You handle the daily maintenance of networks. You manage user accounts, assign permissions, and ensure the network is running smoothly.",
                skills: ["Configuration", "Maintenance", "User Management"]
            },
            {
                title: "System Administrator",
                description: "You manage the servers (Windows/Linux) that run on the network. You ensure servers are patched, backed up, and configured correctly.",
                skills: ["Windows/Linux Server", "Active Directory", "Backup"]
            },
            {
                title: "Desktop Support Engineer",
                description: "You provide on-site support to employees, fixing hardware issues with laptops, desktops, and printers, as well as software problems.",
                skills: ["Hardware", "Windows OS", "Customer Service", "Troubleshooting"]
            },
            {
                title: "IT Support Engineer",
                description: "A general support role solving a wide range of technical issues for the organization, from network connectivity to software glitches.",
                skills: ["Troubleshooting", "Helpdesk", "Broad Technical Knowledge"]
            },
            {
                title: "Technical Support Engineer",
                description: "You provide support for specific products or services, often helping external customers resolve technical difficulties.",
                skills: ["Product Knowledge", "Communication", "Problem Solving"]
            },
            {
                title: "Routing & Switching Engineer",
                description: "A specialized network role focusing on the core traffic directors of the internet: routers and switches. You configure complex routing protocols.",
                skills: ["Cisco", "Juniper", "OSPF/BGP", "VLANs"]
            },
            {
                title: "Network Security Engineer",
                description: "You sit at the intersection of networking and security. You configure firewalls and VPNs to ensure that network traffic is secure from intruders.",
                skills: ["Firewalls", "VPN", "Security Policies", "IPS/IDS"]
            },
            {
                title: "L1/L2 Support Engineer",
                description: "Support is often tiered. L1 handles basic issues, while L2 handles more complex problems that require deeper technical knowledge.",
                skills: ["Ticketing Systems", "Troubleshooting", "Escalation Management"]
            }
        ]
    },
    {
        id: 8,
        title: "Digital Marketing",
        description: "Digital Marketing connects brands with customers using the internet and other forms of digital communication. This includes email, social media, and web-based advertising, as well as text and multimedia messages. It's a dynamic field where creativity meets analytics to drive business growth.",
        skills: ["SEO", "Social Media", "Google Analytics", "Content Creation", "PPC", "Email Marketing", "Copywriting"],
        relatedDomainIds: [15],
        roles: [
            {
                title: "Digital Marketing Executive",
                description: "You execute the digital marketing strategy. You might manage social media channels, run email campaigns, and track basic performance metrics.",
                skills: ["Social Media", "SEO Basics", "Email Marketing", "Coordination"]
            },
            {
                title: "SEO Executive",
                description: "Search Engine Optimization Executives work to improve a website's visibility on Google. You research keywords and optimize content to rank higher in search results.",
                skills: ["Keyword Research", "On-page SEO", "Link Building", "Analytics"]
            },
            {
                title: "Social Media Manager",
                description: "You are the voice of the brand online. You create content calendars, engage with followers, and manage the company's reputation across platforms like LinkedIn, Twitter, and Instagram.",
                skills: ["Content Strategy", "Community Management", "Analytics", "Creativity"]
            },
            {
                title: "Google Ads Specialist",
                description: "You manage paid search campaigns. You bid on keywords and write ad copy to ensure the company gets the best ROI for its advertising budget.",
                skills: ["PPC", "Keyword Bidding", "Ad Copy", "Conversion Tracking"]
            },
            {
                title: "PPC Specialist",
                description: "Pay-Per-Click Specialists focus on all paid advertising, including Google Ads, Facebook Ads, and LinkedIn Ads, optimizing campaigns for conversions.",
                skills: ["Data Analysis", "Campaign Management", "A/B Testing"]
            },
            {
                title: "Content Marketer",
                description: "You create valuable, relevant content (blogs, whitepapers, videos) to attract and retain a clearly defined audience and drive profitable customer action.",
                skills: ["Copywriting", "Blogging", "Strategy", "Storytelling"]
            },
            {
                title: "Email Marketing Executive",
                description: "You manage the company's email list. You design newsletters and automated email sequences to nurture leads and retain customers.",
                skills: ["Email Tools (Mailchimp)", "Copywriting", "Segmentation", "HTML"]
            },
            {
                title: "SEM Analyst",
                description: "Search Engine Marketing Analysts focus on the data. You analyze the performance of paid and organic search campaigns to recommend improvements.",
                skills: ["Analytics", "Excel", "Reporting", "Data Interpretation"]
            },
            {
                title: "Social Media Strategist",
                description: "A higher-level role that plans long-term social media campaigns aligned with business goals, rather than just day-to-day posting.",
                skills: ["Branding", "Planning", "Trend Analysis", "Leadership"]
            },
            {
                title: "Performance Marketer",
                description: "You are laser-focused on results. Your goal is to drive specific user actions (leads, sales) and you optimize campaigns strictly based on ROI and acquisition costs.",
                skills: ["ROI Focus", "Ad Optimization", "Data Driven", "Funnel Optimization"]
            }
        ]
    },
    {
        id: 9,
        title: "Accounts & Finance",
        description: "Accounts & Finance is the lifeblood of any business. This domain involves recording, summarizing, and reporting financial transactions to oversee the financial health of an organization. Professionals here ensure regulatory compliance, manage cash flow, and provide the data needed for strategic planning.",
        skills: ["Accounting", "Tally", "Excel", "GST", "Taxation", "Financial Reporting", "Auditing"],
        relatedDomainIds: [11, 10],
        roles: [
            {
                title: "Accounts Executive",
                description: "You handle the day-to-day financial record keeping. You record sales, purchases, receipts, and payments, ensuring the books are always balanced.",
                skills: ["Bookkeeping", "Tally", "Excel", "Data Entry"]
            },
            {
                title: "Accountant",
                description: "You prepare financial statements like balance sheets and income statements. You ensure all financial records comply with laws and regulations.",
                skills: ["Accounting Principles", "Taxation", "Compliance", "Analysis"]
            },
            {
                title: "GST Executive",
                description: "A specialist role focused on Goods and Services Tax compliance. You calculate tax liabilities and file monthly/quarterly GST returns.",
                skills: ["GST Filing", "Tax Laws", "Compliance", "Documentation"]
            },
            {
                title: "Tally Executive",
                description: "You specialize in using Tally ERP, the most popular accounting software in India. You manage inventory, payroll, and accounting within the software.",
                skills: ["Tally Prime", "Data Entry", "Inventory Management"]
            },
            {
                title: "Finance Executive",
                description: "You assist in financial planning. You help track budgets, manage cash flow, and prepare financial reports for management review.",
                skills: ["Financial Analysis", "Budgeting", "Forecasting"]
            },
            {
                title: "Financial Analyst",
                description: "You analyze financial data to help the company make decisions. You might analyze costs, pricing, or investment results to recommend actions.",
                skills: ["Financial Modeling", "Excel", "Forecasting", "Strategic Thinking"]
            },
            {
                title: "Accounts Assistant",
                description: "An entry-level support role. You help the accounting team with administrative tasks like filing, data entry, and processing invoices.",
                skills: ["Data Entry", "Clerical Skills", "Organization"]
            },
            {
                title: "Audit Executive",
                description: "You examine financial records to ensure they are accurate and compliant. You might work on internal audits or assist external auditors.",
                skills: ["Auditing Standards", "Attention to Detail", "Risk Assessment"]
            },
            {
                title: "Payroll Executive",
                description: "You are responsible for ensuring employees get paid on time. You calculate salaries, deduct taxes (TDS), and manage provident fund contributions.",
                skills: ["Payroll Software", "Labor Laws", "Calculation"]
            },
            {
                title: "MIS Executive (Finance)",
                description: "You create financial reports for management. You consolidate data from different departments to present a clear picture of the company's financial status.",
                skills: ["Advanced Excel", "Reporting", "Data Visualization"]
            },
            {
                title: "Accounts Payable/Receivable Specialist",
                description: "You focus on cash flow. You ensure the company pays its bills on time (Payable) and collects money owed by customers (Receivable).",
                skills: ["Invoicing", "Cash Flow", "Communication", "Reconciliation"]
            }
        ]
    },
    {
        id: 10,
        title: "SAP",
        description: "SAP (Systems, Applications, and Products) is the world's leading Enterprise Resource Planning (ERP) software. It centralizes data management for large corporations. SAP professionals customize, implement, and support this complex software to help businesses run their Finance, HR, Supply Chain, and Sales operations efficiently.",
        skills: ["SAP ERP", "Business Process", "Configuration", "ABAP", "Functional Modules", "Implementation", "Support"],
        relatedDomainIds: [9, 1],
        roles: [
            {
                title: "SAP MM Consultant",
                description: "You specialize in the Materials Management module. You configure the system to handle procurement, inventory management, and material valuation processes.",
                skills: ["Procurement", "Inventory", "SAP MM Config", "Supply Chain"]
            },
            {
                title: "SAP SD Consultant",
                description: "You specialize in Sales and Distribution. You configure the system to manage customer orders, shipping, billing, and pricing.",
                skills: ["Sales Process", "Pricing", "SAP SD Config", "Order Management"]
            },
            {
                title: "SAP FI Consultant",
                description: "You specialize in Financial Accounting. You ensure the SAP system correctly manages the General Ledger, Accounts Payable, and Accounts Receivable.",
                skills: ["General Ledger", "AP/AR", "SAP FI Config", "Financial Reporting"]
            },
            {
                title: "SAP CO Consultant",
                description: "You specialize in Controlling. You configure the system for internal cost accounting, helping the company track costs and profitability.",
                skills: ["Cost Center", "Profitability Analysis", "Internal Reporting"]
            },
            {
                title: "SAP ABAP Developer",
                description: "You are a programmer for SAP. You use the ABAP language to write custom reports, interfaces, and forms that the standard SAP software doesn't provide.",
                skills: ["ABAP", "Coding", "Debugging", "SAP Architecture"]
            },
            {
                title: "SAP HR Consultant",
                description: "You specialize in Human Capital Management. You configure the system for personnel administration, organizational management, and payroll.",
                skills: ["Personnel Admin", "Payroll", "SAP HCM", "Time Management"]
            },
            {
                title: "SAP PP Consultant",
                description: "You specialize in Production Planning. You help manufacturing companies plan their production schedules and manage bills of materials.",
                skills: ["Manufacturing", "Planning", "SAP PP Config", "Capacity Planning"]
            },
            {
                title: "SAP End User",
                description: "You are not a consultant but a user. You use SAP software in your daily job to enter data, check status, or run reports (e.g., an Accountant using SAP).",
                skills: ["Data Entry", "SAP Transactions", "Business Process"]
            },
            {
                title: "SAP Support Executive",
                description: "You provide first-level support to SAP users. You unlock accounts, solve basic errors, and escalate complex issues to consultants.",
                skills: ["Troubleshooting", "Ticket Handling", "Communication"]
            },
            {
                title: "SAP Basis Administrator",
                description: "You are the system administrator for SAP. You ensure the SAP servers and databases are running, secure, and performing well.",
                skills: ["System Admin", "Database", "Security", "Installation"]
            },
            {
                title: "SAP Technical Consultant",
                description: "A broad technical role. You might work on integrations between SAP and non-SAP systems or handle technical upgrades.",
                skills: ["Integration", "Architecture", "Technical Problem Solving"]
            }
        ]
    },
    {
        id: 11,
        title: "Finance Analyst",
        description: "Financial Analysis involves examining financial data to assess a company's performance and make recommendations about how it can improve. Unlike general accounting, which looks back at what happened, financial analysis looks forward to predict what will happen. It is critical for investment banking, corporate finance, and equity research.",
        skills: ["Financial Modeling", "Valuation", "Excel", "Market Research", "Risk Analysis", "Forecasting", "Presentation"],
        relatedDomainIds: [9],
        roles: [
            {
                title: "Financial Analyst",
                description: "You analyze financial data to spot trends and forecast future financial results. You provide the insights that guide investment and budgeting decisions.",
                skills: ["Financial Modeling", "Excel", "Trend Analysis"]
            },
            {
                title: "Investment Analyst",
                description: "You work for investment firms or banks. You research companies and industries to recommend whether to buy, sell, or hold specific investments.",
                skills: ["Market Analysis", "Valuation", "Research", "Due Diligence"]
            },
            {
                title: "Risk Analyst",
                description: "You identify and analyze areas of potential risk to the company's assets or earning capacity, such as market volatility or credit default.",
                skills: ["Risk Management", "Statistics", "Modeling", "Critical Thinking"]
            },
            {
                title: "Business Analyst (Finance)",
                description: "You bridge the gap between IT and the finance department. You understand financial processes and help implement technology solutions to improve them.",
                skills: ["Requirements Gathering", "Process Mapping", "Finance Knowledge"]
            },
            {
                title: "Equity Research Analyst",
                description: "You focus specifically on the stock market. You produce detailed reports on companies and assign ratings (Buy/Sell) for investors.",
                skills: ["Stock Market", "Report Writing", "Financial Statement Analysis"]
            },
            {
                title: "Credit Analyst",
                description: "You evaluate the creditworthiness of individuals or companies applying for loans. You analyze their financial history to determine the risk of lending to them.",
                skills: ["Credit Scoring", "Financial Statement Analysis", "Risk Assessment"]
            },
            {
                title: "Treasury Analyst",
                description: "You manage an organization's cash and bank relationships. You ensure the company has enough cash to operate and invest excess cash wisely.",
                skills: ["Cash Management", "Banking Relations", "Liquidity Planning"]
            },
            {
                title: "Portfolio Analyst",
                description: "You assist Portfolio Managers in overseeing a collection of investments. You track performance and help rebalance the portfolio.",
                skills: ["Asset Allocation", "Performance Tracking", "Investment Theory"]
            },
            {
                title: "Corporate Finance Executive",
                description: "You work within a company to help manage its capital. This involves decisions about funding, mergers and acquisitions, and long-term financial strategy.",
                skills: ["Capital Budgeting", "M&A Basics", "Strategic Planning"]
            }
        ]
    },
    {
        id: 12,
        title: "AutoCAD",
        description: "AutoCAD (Computer-Aided Design) is the industry standard software used by architects, engineers, and construction professionals to create precise 2D and 3D drawings. This domain replaces manual drafting with automated processes, allowing for greater accuracy, speed, and ease of modification in design projects.",
        skills: ["AutoCAD", "Drafting", "2D/3D Modeling", "Technical Drawing", "Geometry", "Layout Design"],
        relatedDomainIds: [13, 14],
        roles: [
            {
                title: "AutoCAD Draftsman",
                description: "You convert the ideas of engineers and architects into technical drawings. You create detailed plans that are used for manufacturing or construction.",
                skills: ["Drafting", "AutoCAD", "Attention to Detail"]
            },
            {
                title: "CAD Designer",
                description: "Unlike a draftsman who documents, a designer often helps create the design itself. You use CAD tools to solve design problems and model solutions.",
                skills: ["Design Principles", "3D Modeling", "Creativity"]
            },
            {
                title: "2D/3D Draftsman",
                description: "You specialize in creating both flat 2D layouts (like floor plans) and complex 3D models that help visualize the final product.",
                skills: ["Visualization", "Spatial Skills", "Modeling"]
            },
            {
                title: "Architectural Drafter",
                description: "You specialize in buildings. You create architectural drawings including floor plans, elevations, and sections based on the architect's specifications.",
                skills: ["Architecture Basics", "Building Codes", "Construction Documents"]
            },
            {
                title: "CAD Technician",
                description: "A technical support role. You manage CAD files, ensure standards are followed, and may troubleshoot software issues for the design team.",
                skills: ["Troubleshooting", "File Management", "Standards Compliance"]
            }
        ]
    },
    {
        id: 13,
        title: "Civil CAD",
        description: "Civil CAD focuses on the design, drafting, and modeling of civil engineering projects. This includes infrastructure like roads, bridges, tunnels, water systems, and buildings. Professionals in this domain use specialized software to create accurate representations of physical environments and structures.",
        skills: ["AutoCAD Civil 3D", "Revit", "Structural Analysis", "Construction Knowledge", "Surveying"],
        relatedDomainIds: [12],
        roles: [
            {
                title: "Civil CAD Designer",
                description: "You design infrastructure projects. You might design a new highway interchange or a drainage system using Civil 3D software.",
                skills: ["Road Design", "Land Development", "Civil 3D"]
            },
            {
                title: "Structural Drafter",
                description: "You focus on the 'bones' of a building. You create drawings for steel, concrete, and timber structures to ensure they can stand up to loads.",
                skills: ["Steel Detailing", "Concrete", "Structural Basics"]
            },
            {
                title: "Civil Engineer (CAD)",
                description: "A role for engineers who primarily use CAD software. You combine engineering calculations with design work to deliver project plans.",
                skills: ["Engineering Principles", "Project Management", "Design Analysis"]
            },
            {
                title: "Revit Modeler",
                description: "You specialize in Building Information Modeling (BIM) using Revit. You create intelligent 3D models that contain data about the building materials and systems.",
                skills: ["BIM", "Revit Structure", "3D Coordination"]
            },
            {
                title: "Construction CAD Technician",
                description: "You work closely with construction teams. You create shop drawings and as-built drawings that reflect exactly how the project is being built on site.",
                skills: ["Site Planning", "Blueprints", "Construction Methods"]
            }
        ]
    },
    {
        id: 14,
        title: "Mechanical CAD",
        description: "Mechanical CAD involves the use of computer technology for the design of mechanical systems. It is essential in industries like automotive, aerospace, and consumer electronics. Professionals create 3D models and 2D manufacturing drawings for parts and assemblies, allowing for simulation and testing before physical prototyping.",
        skills: ["SolidWorks", "CATIA", "Ansys", "Product Design", "Materials Science", "GD&T"],
        relatedDomainIds: [12],
        roles: [
            {
                title: "Mechanical CAD Designer",
                description: "You design mechanical parts and assemblies. You ensure that parts fit together and move correctly within a machine.",
                skills: ["Mechanism Design", "Assembly", "Tolerance Analysis"]
            },
            {
                title: "Mechanical Draftsman",
                description: "You create the manufacturing drawings. You define dimensions, tolerances, and materials so that a machinist can build the part.",
                skills: ["GD&T", "Manufacturing Processes", "Detailing"]
            },
            {
                title: "Solidworks Designer",
                description: "You are a specialist in SolidWorks, a very popular mechanical design tool. You use it for modeling, simulation, and rendering.",
                skills: ["3D Modeling", "Simulation", "SolidWorks Certification"]
            },
            {
                title: "Mechanical Design Engineer",
                description: "You apply engineering principles to design. You calculate stress, heat transfer, and dynamics to ensure the design performs safely.",
                skills: ["Engineering Analysis", "Prototyping", "FEA"]
            },
            {
                title: "CAD Technician (Mechanical)",
                description: "You support the engineering team by maintaining the library of parts, converting files, and updating legacy drawings.",
                skills: ["Documentation", "PDM (Product Data Management)", "Standards"]
            }
        ]
    },
    {
        id: 15,
        title: "Graphic Design & Animation",
        description: "This domain merges creativity with technology to communicate ideas visually. Graphic Designers create static visuals for branding and marketing, while Animators bring visuals to life through motion. This field is vital for advertising, entertainment, web design, and digital media.",
        skills: ["Photoshop", "Illustrator", "After Effects", "Creativity", "UI Design", "Premiere Pro", "Storyboarding"],
        relatedDomainIds: [8],
        roles: [
            {
                title: "Graphic Designer",
                description: "You combine art and technology to communicate ideas. You use typography, layout, and color to create visual compositions for brochures, logos, and ads.",
                skills: ["Typography", "Layout", "Color Theory", "Branding"]
            },
            {
                title: "Animator",
                description: "You create the illusion of motion. You might work on 2D cartoons, 3D movies, or motion graphics for explainer videos.",
                skills: ["Animation Principles", "Storyboarding", "Character Design"]
            },
            {
                title: "UI/UX Designer",
                description: "You design digital products. UI (User Interface) focuses on how it looks, while UX (User Experience) focuses on how it works and feels for the user.",
                skills: ["Figma", "User Research", "Prototyping", "Wireframing"]
            },
            {
                title: "Motion Graphics Artist",
                description: "You specialize in animated graphic design. You bring logos, text, and info-graphics to life, often for commercials or video intros.",
                skills: ["After Effects", "Cinema 4D", "Timing"]
            },
            {
                title: "Video Editor",
                description: "You tell stories by assembling video footage. You cut shots, correct color, and mix sound to create a cohesive final video.",
                skills: ["Premiere Pro", "Storytelling", "Color Correction", "Audio Mixing"]
            },
            {
                title: "Creative Designer",
                description: "A broader role often found in ad agencies. You come up with the high-level visual concepts for marketing campaigns.",
                skills: ["Branding", "Concept Art", "Creative Strategy"]
            },
            {
                title: "3D Artist",
                description: "You create three-dimensional models and environments. This is used in video games, movies, and product visualization.",
                skills: ["Blender", "Maya", "Texturing", "Lighting"]
            },
            {
                title: "Visual Designer",
                description: "You focus on the aesthetics of a product or brand across different platforms, ensuring a consistent look and feel.",
                skills: ["Visual Style", "Iconography", "Brand consistency"]
            },
            {
                title: "Illustrator",
                description: "You create original artwork. Unlike designers who often arrange elements, illustrators draw or paint new images from scratch.",
                skills: ["Digital Painting", "Drawing", "Wacom Tablet"]
            }
        ]
    }
];