import { ShowcaseListings } from "@/components/showcaseListings";
import { createLinkDiv } from "@/functions/linkCreator";
import { ShowcaseType } from "@/types/showcase";

const projects: ShowcaseType[] = [
  {
    start: new Date("2023-08-01"),
    end: null,
    title:
      '<a href="https://github.com/keybraker/skroutz-sponsored-flagger" rel="noopener noreferrer" target="_blank" class="hover:underline">reSkroutzed</a>',
    titleDescription: "(web extension, open source)",
    info: 'A must-have enhancer for the website <a href="https://skroutz.gr" rel="noopener noreferrer" target="_blank" class="hover:underline">skroutz.gr</a>.',
    position: '',
    technologies: [createLinkDiv(
      "https://www.typescriptlang.org/",
      "TypeScript"
    ),
    createLinkDiv("https://webpack.js.org/", "Wepback")],
    description: [
      "Created and deployed an extension to both Chrome's and Firefox's store.",
      "Used the latest technologies to make deployments fast and of the highest quality.",
      `<table class="w-full border-collapse mt-2 mb-4">
        <tr>
          <td class="pr-1 pb-1 text-start"><img src="https://img.shields.io/amo/users/reskroutzed" alt="Firefox Add-on Users"/></td>
          <td class="pr-1 pb-1 text-start"><img src="https://img.shields.io/chrome-web-store/users/amglnkndjeoojnjjeepeheobhneeogcl" alt="Chrome Web Store Users"/></td>
        </tr>
        <tr>
          <td class="pr-1 pb-1 text-start"><img src="https://img.shields.io/amo/v/reskroutzed" alt="Firefox Version"/></td>
          <td class="pr-1 pb-1 text-start"><img src="https://img.shields.io/chrome-web-store/v/amglnkndjeoojnjjeepeheobhneeogcl" alt="Chrome Web Store Version"/></td>
        </tr>
        <tr>
          <td class="pr-1 pb-1 text-start"><img src="https://img.shields.io/amo/stars/reskroutzed" alt="Firefox Rating"/></td>
          <td class="pr-1 pb-1 text-start"><img src="https://img.shields.io/chrome-web-store/rating/amglnkndjeoojnjjeepeheobhneeogcl" alt="Chrome Rating"/></td>
        </tr>
        <tr>
          <td class="pr-1 pb-1 pt-4 text-start">
            <a
              href="https://addons.mozilla.org/en-US/firefox/addon/reskroutzed"
              class="border-2 border-gray-300 dark:border-gray-600 px-2 py-1 text-sm bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-800 rounded-full" rel="noopener noreferrer" target="_blank"
            >
                Get for Firefox
            </a>
          </td>
          <td class="pr-1 pb-1 pt-4 text-start">
            <a
              href="https://chrome.google.com/webstore/detail/reskroutzed/amglnkndjeoojnjjeepeheobhneeogcl"
              class="border-2 border-gray-300 dark:border-gray-600 px-2 py-1 text-sm bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-800 rounded-full" rel="noopener noreferrer" target="_blank"
            >
                Get for Chrome
            </a>
          </td>
        </tr>
      </table>`,
    ],
  },
  {
    start: new Date("2024-03-16"),
    end: null,
    title: createLinkDiv("https://sinemas.gr", "sinemas.gr"),
    info: "A focused cinema website where you can see all movies in Heraklion.",
    position: '',
    technologies: [createLinkDiv("https://nextjs.org/", "Next.js"),
    createLinkDiv(
      "https://tailwindcss.com",
      "Tailwind"
    )],
    description: [
      `${createLinkDiv(
        "https://github.com/sinemas/sinemas-info-adapters",
        "ΣΙΝΕμας Community Adapters",
        "hover:underline font-semibold"
      )}, are available for everyone add their own city to the site.`,
    ],
  },
  {
    start: new Date("2020-02-01"),
    end: new Date("2023-05-01"),
    title: createLinkDiv(
      "https://github.com/The-Portal-Bot/Portal",
      "portal"
    ),
    titleDescription: "(discord bot, open source)",
    info: "A fully functional Discord bot.",
    position: '',
    technologies: [createLinkDiv(
      "https://www.typescriptlang.org/",
      "TypeScript"
    ),
    createLinkDiv("https://www.mongodb.com/", "MongoDB")],
    // description: [
    //   createLinkDiv(
    //     "https://portal-bot.xyz/",
    //     "Documentation",
    //     "hover:underline font-semibold"
    //   ),
    // ],
  },
  {
    start: new Date("2023-09-01"),
    end: new Date("2024-02-01"),
    title: createLinkDiv("https://medwork.gr", "medwork.gr"),
    info: "Created the website for Medwork a CRO situated in Athens, Greece.",
    position: '',
    technologies: [createLinkDiv("https://nextjs.org/", "Next.js"),
    createLinkDiv(
      "https://tailwindcss.com",
      "Tailwind"
    )],
  },
];

export default function ProjectsPage() {
  return (
    <ShowcaseListings showcases={projects} />
  );
}
