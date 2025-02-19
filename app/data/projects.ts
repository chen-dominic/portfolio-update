import techstack from "./tech";
import paths from "./paths";
import { faDev } from "@fortawesome/free-brands-svg-icons";
import { faYoutube, faChrome } from "@fortawesome/free-brands-svg-icons";

const languages = techstack.languages;
const frameworksLbraries = techstack.frameworksLbraries;
const other = techstack.other;

const projects = {
    coding: [
        {
            title: "Rotify",
            subtitle: "Transforms traditional learning materials into dynamic, multi-sensory experiences",
            techUsed:   [languages.javascript,frameworksLbraries.nextjs,frameworksLbraries.tailwind,frameworksLbraries.expressjs],
            github: "https://github.com/chen-dominic/Rotify",
            links: [
                {
                    icon: faDev,
                    url: "https://devpost.com/software/rotify-jn7hul?ref_content=user-portfolio&ref_feature=in_progress",
                },
                {
                    icon: faYoutube,
                    url: "https://www.youtube.com/watch?v=PjXUOong-DI",
                },
            ],
            thumbnail: "https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/003/259/201/datas/gallery.jpg",
        },
        {
            title: "EcoDex",
            subtitle: "A gamified platform that helps users understand and manage waste more effectively",
            techUsed:   [languages.javascript,languages.python,frameworksLbraries.nextjs,
                        frameworksLbraries.tailwind,frameworksLbraries.flask,
                        {name: "MongoDB", url: "https://www.mongodb.com/", iconClass: "devicon-mongodb-plain"}],
            github: "https://github.com/chen-dominic/EcoDex",
            links: [
                {
                    icon: faDev,
                    url: "https://devpost.com/software/ecodex-76vnu2?ref_content=my-projects-tab&ref_feature=my_projects",
                },
                {
                    icon: faYoutube,
                    url: "https://www.youtube.com/watch?v=7_p6hZmhYNA4",
                }
            ],
            thumbnail: paths.ecodex,
        },
        {
            title: "Memory Lane",
            subtitle: "A web application that allows users to walk down a lane full of past memories",
            techUsed:   [languages.typescript,frameworksLbraries.react,frameworksLbraries.expressjs,other.axios],
            github: "https://github.com/jarell-santella/memorylane",
            links: [
                {
                    icon: faDev,
                    url: "https://devpost.com/software/memorylane-25vzlq",
                },
                {
                    icon: faYoutube,
                    url: "https://www.youtube.com/watch?v=AgtgF8Z4h54",
                }
            ],
            thumbnail: "https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/739/116/datas/gallery.jpg",
        },
        {
            title: "TMUCSA",
            subtitle: "The official website of TMUCSA, a social club that promotes student wellbeing through various activities at TMU.",
            techUsed:   [languages.javascript,frameworksLbraries.nextjs,frameworksLbraries.tailwind,other.firebase],
            github: "https://github.com/TMUCSA/tmucsa-website",
            links: [
                {
                    icon: faChrome,
                    url: "https://tmucsa.netlify.app/",
                }
            ],
            thumbnail: "https://ugc.production.linktr.ee/yjpSKwHnRiS6IjbAAtQE_PWLar811KGIJVxM2?io=true&size=avatar-v3_0",
        },
        
        // {
        //     title: "",
        //     subtitle: "",
        //     techUsed:   [],
        //     github: "",
        //     links: [
        //         {
        //             icon: "",
        //             url: "",
        //         }
        //     ],
        //     thumbnail: "a",
        // },
    ],
    artwork: [
        {

        },
    ]
}

export default projects;