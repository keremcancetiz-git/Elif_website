import React from 'react';
import { Microscope, Network, BarChart3 } from 'lucide-react';

export const BRAND_NAME = "Elif Özyaşar";
export const BRAND_PURPOSE = "UX Researcher & Service Designer — Designing for and with people.";

export const VALUE_PROPS = [
  { 
    title: "User Research", 
    desc: "Through interviews, diary studies, and observation, I look for the behaviours that reveal what people actually need.",
    icon: <Microscope className="w-6 h-6 text-accent" />
  },
  { 
    title: "Systems Thinking", 
    desc: "I map how people, services, and interactions connect behind the scenes to lead to better design decisions.",
    icon: <Network className="w-6 h-6 text-accent" />
  },
  { 
    title: "Data-Enabled Design", 
    desc: "I use real data to inform and validate decisions, keeping the design process grounded in reality.",
    icon: <BarChart3 className="w-6 h-6 text-accent" />
  }
];

export const PROJECTS = [
  {
    id: 'riseup',
    title: "RiseUp",
    subtitle: "A morning routine system for the smart home, designed through research and family insights.",
    image: "/assets/images/projects/riseup/usertest1.jpg",
    tags: ["UX Research", "Diary Studies", "Data-Enabled Design"],
    role: "Lead UX Researcher & System Designer",
    date: "02/2025 – 06/2025",
    overview: "Current smart technologies help people control their devices, but what people actually want is control over their lives. RiseUp explores what that really means, through data-enabled design and careful user testing with real families.",
    goal: "To explore how to design a system that embraces the dynamic nature of domestic life and creates truly personalized user experiences.",
    outcomes: [
      "Helped users manage mornings efficiently and encouraged new habits.",
      "Positive impact on morning planning through behavioral insights.",
      "Demonstrated potential of behavior-aware support in families.",
      "Inclusive, adaptive design that evolves alongside user needs."
    ],
    methods: ["Diary Studies", "Thematic Analysis", "Scenario-Based User Testing", "Wizard of Oz", "Data-Enabled Design"],
    tools: ["Figma", "DataFoundry", "OOCSI", "Arduino"],
    logicSummary: "RiseUp sits at the intersection of real human and system behaviour. The data gathered from users directly shaped the design.",
    logicMap: "/assets/images/projects/riseup/Group 31.png",
    journey: [
      { title: "Scenarios & Personas", desc: "Explored how personalised smart home solutions could impact a fictional family in 2040, identifying morning routines as a key area for intervention.", imgs: ["/assets/images/projects/riseup/Group 5.png", "/assets/images/projects/riseup/image.png"] },
      { title: "System Scoping", desc: "Mapped data flows and built low-fidelity prototypes to study how data could work in practice to serve users during routine conflicts.", imgs: ["/assets/images/projects/riseup/Frame 35.png", "/assets/images/projects/riseup/Frame 34.png"] },
      { title: "Exploratory User Test", desc: "Conducted tests where participants experienced routine disruptions with and without RiseUp to observe collaborative decision-making.", imgs: ["/assets/images/projects/riseup/ut1.jpg", "/assets/images/projects/riseup/ut3.jpg"] },
      { title: "Design Iteration", desc: "Redesigned data flows to provide more meaningful insights, moving away from simple alerts to reflective UI suggestions.", imgs: ["/assets/images/projects/riseup/image 46.png", "/assets/images/projects/riseup/Frame 43.png"] },
      { title: "Diary Studies", desc: "Collected daily routine data via Telegram (DataFoundry) to understand real family dynamics before introducing the system.", imgs: ["/assets/images/projects/riseup/Frame 46.png", "/assets/images/projects/riseup/image 30.png"] },
      { title: "Data-Enabled Design", desc: "Visualised participant routines for in-depth interviews, surfacing details users hadn't noticed, which shaped the final reflective features.", imgs: ["/assets/images/projects/riseup/Frame 55.png", "/assets/images/projects/riseup/Frame 56.png"] },
      { title: "In-Situ Validation", desc: "Participants used an interactive digital prototype that visualised their routines and balanced current and desired behaviours.", imgs: ["/assets/images/projects/riseup/Frame 51.png", "/assets/images/projects/riseup/Frame 86.png"] },
      { title: "Final Prototype", desc: "Scoped a machine learning algorithm to meet high expectations for personalisation and patterns across the household.", imgs: ["/assets/images/projects/riseup/interface2.jpg", "/assets/images/projects/riseup/theconcept.jpg"] }
    ]
  },
  {
    id: 'bathbobber',
    title: "Bathbobber",
    subtitle: "Designing the interaction system of a smart ice bath tracker, from research to prototype.",
    image: "/assets/images/projects/bathbobber/cover.jpg",
    tags: ["Interaction", "UI Design", "User Research", "Documentation"],
    role: "UX & Interaction Designer",
    date: "09/2024 – 02/2025",
    overview: "BathBobber is a smart ice bath timer and thermometer that aims to make tracking cold exposure sessions more accessible. I developed the interaction system, focusing on what data would be communicated and how.",
    goal: "Designing an intuitive and clear interaction system within significant technical and physical constraints (extreme cold exposure).",
    outcomes: [
      "Three rounds of iterative testing directly reshaped the interaction design.",
      "Delivered two final prototypes and a complete UI flow analysis.",
      "Validating physical grip and single-hand operability."
    ],
    methods: ["Persona Mapping", "Auto-Ethnography", "Usability Testing", "FMEA Risk Analysis"],
    tools: ["Figma", "Arduino IDE", "Solidworks", "Adobe CC"],
    logicSummary: "Interface decisions, even small ones, had a much bigger impact on the user experience, shifting how users approached the whole activity.",
    logicMap: "/assets/images/optimized/UIMAP_1600.jpg",
    journey: [
      { title: "Desk Research & Auto-Ethnography", desc: "Deepened understanding of cold exposure through literature reviews and personal ice baths to empathize with the user experience.", imgs: ["/assets/images/projects/bathbobber/me.jpg", "/assets/images/projects/bathbobber/icebath.jpeg"] },
      { title: "Requirements Documentation", desc: "Created a List of Requirements across function, ergonomics, and standards, including user experience and aesthetics.", imgs: ["/assets/images/projects/bathbobber/Group 11.png"] },
      { title: "Usability Testing", desc: "Multiple rounds of testing with prototypes in simulated ice bath environments to uncover hidden pain points and behaviors.", imgs: ["/assets/images/projects/bathbobber/image16.jpeg", "/assets/images/projects/bathbobber/IMAGE 18.png"] },
      { title: "UI Flow Exploration", desc: "Mapped all possible use cases to determine necessary information communication using journey mapping techniques.", imgs: ["/assets/images/optimized/image69_1600.jpg", "/assets/images/optimized/UI_flow1_1600.jpg"] },
      { title: "Risk Analysis", desc: "Conducted FMEA analysis to identify and address potential risks affecting users and business viability.", imgs: ["/assets/images/projects/bathbobber/image 61.png"] },
      { title: "UI Flow Testing", desc: "Iteratively tested UI screens to deliver a final flow analysis with documented recommendations for future development.", imgs: ["/assets/images/projects/bathbobber/usertest.jpg", "/assets/images/optimized/UIMAP_1600.jpg"] },
      { title: "Final Prototype", desc: "Delivered functional and aesthetic prototypes to the client, exploring ergonomics and usability requirements.", imgs: ["/assets/images/projects/bathbobber/cover.jpg", "/assets/images/projects/bathbobber/optimized/asthetic.jpg"] }
    ]
  },
  {
    id: 'sharespot',
    title: "ShareSpot",
    subtitle: "From research to launch: designing an IoT tool-sharing service for low-income residents.",
    image: "/assets/images/hero.jpg",
    tags: ["Service Design", "IoT", "Public Sector", "Social Design"],
    role: "Researcher / UX Designer",
    date: "09/2022 – 03/2023",
    overview: "ShareSpot is an IoT locker system that lets residents borrow and lend tools for a small fee. We took the concept from scratch to a market launch plan for Eindhoven Municipality.",
    goal: "To understand the target group and their nuances without assumptions, creating access where there was none.",
    outcomes: [
      "Conducted and analysed citizen interviews across age groups.",
      "Developed a working prototype with a locker system and app.",
      "Created a full market launch plan including pricing and revenue models.",
      "Proposed an AI-assisted tool recommendation feature based on unmet user needs."
    ],
    methods: ["Citizen Interviews", "Service Blueprinting", "Customer Journey Mapping", "Business Model Canvas"],
    tools: ["Figma", "Fusion 360", "Miro", "Business Model Canvas"],
    logicSummary: "The research shaped how the system was structured, but the harder design challenge was making sure the ecosystem worked for all stakeholders.",
    logicMap: "/assets/images/projects/sharespot/Frame 18.png",
    journey: [
      { title: "Concept Development", desc: "Defined the core service: smart lockers paired with a mobile app. Designed the full UI flow for item upload and verification.", imgs: ["/assets/images/projects/sharespot/ui.jpg", "/assets/images/projects/sharespot/ui flow.png"] },
      { title: "Citizen Research", desc: "Interviewed students and older residents to validate the concept, revealing key divides in tool access and digital literacy.", imgs: ["/assets/images/projects/sharespot/research1.png", "/assets/images/projects/sharespot/research2.png"] },
      { title: "Requirements & Pricing", desc: "Used Westendorp's pricing approach to find an accessible range (0.5 to 2 euros) and documented ergonomic and UX requirements.", imgs: ["/assets/images/projects/sharespot/chart1.png", "/assets/images/projects/sharespot/chart2.png"] },
      { title: "Prototype & Demo", desc: "Built a physical locker prototype with a keypad and connected app experience to demonstrate the lending/borrowing loop.", imgs: ["/assets/images/hero.jpg", "/assets/images/projects/sharespot/prototype.jpg"] },
      { title: "Market Launch", desc: "Developed communication strategies tailored for different age groups and a first-year revenue model.", imgs: ["/assets/images/projects/sharespot/communicationplan.png", "/assets/images/projects/sharespot/code.png"] },
      { title: "Independent Extensions", desc: "Analyzed existing gaps, identifying that people lacked the knowledge to use tools, not just the tools themselves.", imgs: ["/assets/images/projects/sharespot/Frame 2.png", "/assets/images/projects/sharespot/Group 4.png"] },
      { title: "Value Proposition Blueprint", desc: "Proposed an AI-powered filtering tool and chatbot to provide task-specific guidance through video tutorials.", imgs: ["/assets/images/projects/sharespot/Group 3.png", "/assets/images/projects/sharespot/Frame 4.png"] },
      { title: "MVP Testing", desc: "Surveyed students on the AI feature; while initially hesitant, 70% were likely to use it after seeing a demonstration.", imgs: ["/assets/images/projects/sharespot/sharey1.png", "/assets/images/optimized/sharespot_mvp_1600.jpg"] }
    ]
  }
];
