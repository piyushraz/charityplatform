"use client";

import { createContext, useContext, useState } from "react";

export interface Charity {
  name: string;
  mission: string;
  id: number;
  img: string;
  financial: Financial[];
  messages: Message[];
}

export interface Financial {
  date: string;
  id: number;
  // the following 4 add up to 100%
  cause: number;
  admin: number;
  fundraising: number;
  fullReport: string;
  // example: Q2 2023 Report
  name: string;
  total: number;
  summary: string;
  goals: string;
}

interface Message {
  date: string;
  text: string;
  direction: "in" | "out";
}

const reportDefault = `In this quarter, we made groundbreaking advancements in water filtration technology, bringing transformative change to communities in dire need of clean water. Significant strides were achieved in enhancing filtration methods, which played a crucial role in reducing waterborne diseases and elevating public health standards. The implementation of innovative technologies, in collaboration with local partners, facilitated the distribution of advanced filtration units, ensuring both immediate and long-term benefits for communities. This initiative resulted in a remarkable 30% increase in access to purified water, exemplifying the effectiveness of these new techniques. Our dedication to innovation and community engagement not only improved current water purification standards but also set a new benchmark for future water-related projects globally, demonstrating a commitment to ongoing progress and sustainable impact.`;

interface AppContextType {
  charities: Charity[];
  watched: number[];
  removeWatched: (id: number) => void;
  addWatched: (id: number) => void;
  addMessageToCharity: (id: number, message: Message) => void;
}

const AppContext = createContext<undefined | AppContextType>(undefined);

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [watched, setWatched] = useState([1, 2]);

  function removeWatched(id: number) {
    setWatched(watched.filter((w) => w !== id));
  }

  function addWatched(id: number) {
    setWatched([...watched, id]);
  }

  function addMessageToCharity(id: number, message: Message) {
    const charity = charities.find((c) => c.id === id);

    if (!charity) return;

    charity.messages.push(message);
  }

  const charities: Charity[] = [
    {
      name: "WildLife Sanctuaries",
      img: "/wildlife1.png",
      id: 1,
      mission: "Helping preserve species in danger of extinction",
      financial: [
        {
          id: 14,
          date: "2023-02-01",
          cause: 80,
          admin: 12,
          fundraising: 8,
          name: "Q1 2023 Report",
          total: 100,
          summary:
            "Upgraded our amphibian habitat network, providing better living spaces for a variety of animals.",
          goals:
            "Provide care for 10000 animals displaced by modern human-centered developments",
          fullReport: reportDefault,
        },
        {
          id: 19,
          date: "2023-05-01",
          cause: 40,
          admin: 30,
          fundraising: 30,
          name: "Q2 2023 Report",
          total: 100,
          summary:
            "Upgraded the state of our polar bear facilities, expanding their recreational areas.",
          goals:
            "Partner with local food suppliers to provide our animals with nutritious meals.",
          fullReport: reportDefault,
        },
        {
          id: 20,
          date: "2023-08-01",
          cause: 60,
          admin: 10,
          fundraising: 30,
          name: "Q3 2023 Report",
          total: 100,
          summary: "Launched animal preservation initiatives",
          goals:
            "Putting in a petition to congress to stop hotel developments into the Aspen Parkland forests",
          fullReport: reportDefault,
        },
      ],
      messages: [
        {
          date: "2023-03-05",
          text: "Volunteers needed for our fundraiser post at the Love4Animals event",
          direction: "out",
        },
        {
          date: "2023-04-15",
          text: "How can I volunteer to help out with the feeding of animals?",
          direction: "in",
        },
        {
          date: "2023-06-22",
          text: "Check out our new roadmap for 2024!",
          direction: "out",
        },
        {
          date: "2023-07-30",
          text: "Can I organize a local fundraiser for this cause in my community?",
          direction: "in",
        },
        {
          date: "2023-09-10",
          text: "Join our webinar to learn more about our financials for this past quarter!",
          direction: "out",
        },
      ],
    },
    {
      name: "Ocean Life Rescue",
      img: "/wildlife2.png",
      id: 2,
      mission: "Preserving marine life and their habitats",
      financial: [
        {
          id: 21,
          date: "2023-02-01",
          cause: 50,
          admin: 12,
          fundraising: 20,
          name: "Q1 2023 Report",
          total: 100,
          summary:
            "Initiated a project to clean up plastic waste from the ocean.",
          goals: "Clean up 5000 tons of plastic waste from the ocean",
          fullReport: reportDefault,
        },
        {
          id: 22,
          date: "2023-05-01",
          cause: 82,
          admin: 10,
          fundraising: 8,
          name: "Q2 2023 Report",
          total: 100,
          summary:
            "Partnered with local communities for beach clean-up drives.",
          goals: "Expand our operations to 5 more coastal cities",
          fullReport: reportDefault,
        },
        {
          id: 23,
          date: "2023-08-01",
          cause: 85,
          admin: 9,
          fundraising: 6,
          name: "Q3 2023 Report",
          total: 100,
          summary: "Launched a campaign to protect coral reefs.",
          goals: "Educate 10000 people about the importance of coral reefs",
          fullReport: reportDefault,
        },
      ],
      messages: [
        {
          date: "2023-03-05",
          text: "Join our beach cleanup event this weekend!",
          direction: "out",
        },
        {
          date: "2023-04-15",
          text: "How can I contribute to the beach clean-up drives?",
          direction: "in",
        },
        {
          date: "2023-06-22",
          text: "Check out our new initiatives for the end of 2023!",
          direction: "out",
        },
      ],
    },
    {
      name: "Birds of the Sky",
      img: "/wildlife3.png",
      id: 3,
      mission: "Protecting bird species and their habitats",
      financial: [
        {
          id: 24,
          date: "2023-02-01",
          cause: 80,
          admin: 12,
          fundraising: 8,
          name: "Q1 2023 Report",
          total: 100,
          summary: "Launched a campaign to protect migratory birds.",
          goals: "Establish 5 new bird sanctuaries",
          fullReport: reportDefault,
        },
        {
          id: 25,
          date: "2023-05-01",
          cause: 90,
          admin: 10,
          fundraising: 0,
          name: "Q2 2023 Report",
          total: 100,
          summary: "Organized bird watching events to raise awareness.",
          goals: "Increase our volunteer base by 20%",
          fullReport: reportDefault,
        },
        {
          id: 26,
          date: "2023-08-01",
          cause: 85,
          admin: 9,
          fundraising: 6,
          name: "Q3 2023 Report",
          total: 100,
          summary: "Initiated a project to build birdhouses in urban areas.",
          goals: "Build 1000 birdhouses in 5 major cities",
          fullReport: reportDefault,
        },
      ],
      messages: [
        {
          date: "2023-03-05",
          text: "Help us build birdhouses in your backyard!",
          direction: "out",
        },
        {
          date: "2023-04-15",
          text: "I would like to volunteer for the birdhouse project. How can I join?",
          direction: "in",
        },
        {
          date: "2023-06-22",
          text: "Join our webinar to learn more about our financials for this past quarter!",
          direction: "out",
        },
      ],
    },
    {
      name: "Forest Guardians",
      img: "/wildlife4.png",
      id: 4,
      mission: "Preserving forests and their biodiversity",
      financial: [
        {
          id: 27,
          date: "2023-02-01",
          cause: 80,
          admin: 12,
          fundraising: 8,
          name: "Q1 2023 Report",
          total: 100,
          summary: "Planted 10,000 new trees in deforested areas.",
          goals: "Plant 50,000 more trees by the end of the year",
          fullReport: reportDefault,
        },
        {
          id: 28,
          date: "2023-05-01",
          cause: 50,
          admin: 0,
          fundraising: 50,
          name: "Q2 2023 Report",
          total: 100,
          summary: "Started a campaign to protect endangered forest species.",
          goals: "Increase our membership by 30%",
          fullReport: reportDefault,
        },
        {
          id: 29,
          date: "2023-08-01",
          cause: 85,
          admin: 9,
          fundraising: 6,
          name: "Q3 2023 Report",
          total: 100,
          summary: "Launched an initiative to promote sustainable forestry.",
          goals: "Educate 5000 people about sustainable forestry",
          fullReport: reportDefault,
        },
      ],
      messages: [
        {
          date: "2023-03-05",
          text: "Join our tree planting event this Earth Day!",
          direction: "out",
        },
        {
          date: "2023-04-15",
          text: "I would like to donate to your organization. How can I do that?",
          direction: "in",
        },
        {
          date: "2023-06-22",
          text: "Join us this next Thursday for our annual donor appreciation dinner. Reserve your tickets now by getting into contact with on of our representatives!",
          direction: "out",
        },
      ],
    },
    {
      name: "Urban Wildlife Care",
      img: "/nature.jpg",
      id: 14,
      mission: "Caring for wildlife in urban environments",
      financial: [
        {
          id: 30,
          date: "2023-02-01",
          cause: 80,
          admin: 12,
          fundraising: 8,
          name: "Q1 2023 Report",
          total: 100,
          summary:
            "Rescued and rehabilitated 500 injured city-dwelling animals.",
          goals: "Set up 3 new urban wildlife rescue centers",
          fullReport: reportDefault,
        },
        {
          id: 31,
          date: "2023-05-01",
          cause: 82,
          admin: 10,
          fundraising: 8,
          name: "Q2 2023 Report",
          total: 100,
          summary: "Launched a campaign to create green spaces in cities.",
          goals: "Create 10 new green spaces in urban areas",
          fullReport: reportDefault,
        },
        {
          id: 32,
          date: "2023-08-01",
          cause: 100,
          admin: 9,
          fundraising: 6,
          name: "Q3 2023 Report",
          total: 100,
          summary: "Initiated a project to build birdhouses in urban areas.",
          goals: "Build 1000 birdhouses in 5 major cities",
          fullReport: reportDefault,
        },
      ],
      messages: [
        {
          date: "2023-03-05",
          text: "Learn how to help wildlife in your city at our upcoming webinar!",
          direction: "out",
        },
        {
          date: "2023-04-15",
          text: "I found an injured bird in my backyard. What should I do?",
          direction: "in",
        },
        {
          date: "2023-06-22",
          text: "Join our webinar to learn more about our financials for this past quarter!",
          direction: "out",
        },
      ],
    },
  ];

  return (
    <AppContext.Provider
      value={{
        watched,
        addWatched,
        removeWatched,
        charities,
        addMessageToCharity,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};

export { AppContext, AppProvider, useAppContext };
