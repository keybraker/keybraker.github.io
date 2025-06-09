import { ShowcaseListings } from "@/components/showcaseListings";
import { ShowcaseType } from "@/types/showcase";

const projects: ShowcaseType[] = [
  {
    start: new Date("2023-08-01"),
    end: null,
    title:
      '<a href="https://github.com/keybraker/skroutz-sponsored-flagger" rel="noopener noreferrer" target="_blank" class="hover:underline">reSkroutzed</a>',
    info: 'A must-have enhancer for the website <a href="https://skroutz.gr" rel="noopener noreferrer" target="_blank" class="hover:underline">skroutz.gr</a>.',
    position: "(TypeScript, Wepback)",
    description: [
      "Created and deployed an extension to both Chrome's and Firefox's store.",
      "Used the latest technologies to make deployments fast and of the highest quality.",
      "Open source.",
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
          <td class="pr-1 pb-1 pt-2 text-start">
            <a
              href="https://addons.mozilla.org/en-US/firefox/addon/reskroutzed"
              class="border-2 border-gray-300 dark:border-gray-600 px-2 py-1 text-sm bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-800 rounded" rel="noopener noreferrer" target="_blank"
            >
                Get for Firefox
            </a>
          </td>
          <td class="pr-1 pb-1 pt-2 text-start">
            <a
              href="https://chrome.google.com/webstore/detail/reskroutzed/amglnkndjeoojnjjeepeheobhneeogcl"
              class="border-2 border-gray-300 dark:border-gray-600 px-2 py-1 text-sm bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-800 rounded" rel="noopener noreferrer" target="_blank"
            >
                Get for Chrome
            </a>
          </td>
        </tr>
      </table>`,
    ],
  },
  {
    start: new Date("2020-02-01"),
    end: null,
    title:
      '<a href="https://github.com/The-Portal-Bot/Portal" rel="noopener noreferrer" target="_blank" class="hover:underline">portal (discord bot)</a>',
    info: "A fully functional Discord bot.",
    position: "(TypeScript, MongoDB, Mongoose)",
    description: [
      `<a href="https://portal-bot.xyz/" rel="noopener noreferrer" target="_blank" class="hover:underline font-semibold">Documentation</a>`,
      "Open source.",
    ],
  },
  {
    start: new Date("2023-09-01"),
    end: new Date("2024-02-01"),
    title:
      '<a href="https://medwork.gr" rel="noopener noreferrer" target="_blank" class="hover:underline">medwork.gr</a>',
    info: "Created the website for Medwork a CRO situated in Athens, Greece.",
    position: "(NextJS, Tailwind)",
  },
  {
    start: new Date("2024-03-01"),
    end: new Date("2024-04-01"),
    title:
      '<a href="https://sinemas.gr" rel="noopener noreferrer" target="_blank" class="hover:underline">sinemas.gr</a>',
    info: "A focused cinema website where you can see all movies in Heraklion.",
    position: "(NextJS, Tailwind)",
    description: [
      `<a href="https://github.com/sinemas/sinemas-info-adapters" rel="noopener noreferrer" target="_blank" class="hover:underline font-semibold">ΣΙΝΕμας Community Adapters</a>, are available for everyone add their own city to the site.`,
      "Closed source.",
    ],
  },
];

export default function ProjectsPage() {
  return (
    <div>
      <ShowcaseListings showcases={projects} />
    </div>
  );
}
